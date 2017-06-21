import React from 'react';
import User from './user.js'
import { connect } from 'react-redux'
import Link from 'next/link'
import { postAdd } from '../actions/post.js'
import cookies from 'js-cookie'
import { UI } from '../utils/initscripts.js'
import { uploadImage } from '../actions/app.js'
import { getUserFaces } from '../actions/user.js'
import { changePostFace, 
         savePostLocally, 
         setPostAuthor, 
         setPostFaces, 
         setPost, 
         flushPost } from '../actions/post.js'
import findURL from '../utils/findURL.js' 
import getYouTubeId from '../utils/getYouTube.js' 
import Avatar from 'react-avatar'
import UserFaces from './userFaces.js'

const defaultState = {
  isRevealed: false,
  isBlocked: false,
  isDisabled: false,
  placeholder: 'О чём бы вы хотели нам рассказать сегодня?',
  post: {
    postImage: null,
    postVideo: null,
    postLink: null,
    postContent: '',
    postType: 'note',
  }
}


class FlashPost extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.user.profile;
    this.token = cookies.get('x-access-token');
    this.dispatch = this.props.dispatch;
    this.state = defaultState;
  }

  componentWillMount() {
    var postState = this.props.postState;
    var post = postState.post;

    if(this.currentUser) { 
      this.dispatch(changePostFace('user', this.currentUser))
      if(postState.faces == null) {
        getUserFaces(this.currentUser._id).then((res) => {
          this.dispatch(setPostFaces(res.data))
        })
      }
      if(post.postAuthor.authorID != null) {
        this.setState({
          post
        })
      }
    } 

    if(  post.postImage 
      || post.postVideo 
      || post.postContent 
      || post.postLink
    ) {
      this.setState({
        isRevealed: true
      })
    }
  }

  componentDidMount() {
    UI()
    $('.ui.dropdown').dropdown();
    $('.video.button').popup({
      popup : $('.video.popup'), 
      on: 'click'
    })
    $('.video.popup input').on('keydown', (e) => {
      if(e.keyCode == 13) {
        e.preventDefault();
        this.setVideo(e.target.value)
      }
    })
  }

  componentWillUnmount() {
    this.dispatch(
      savePostLocally(this.state.post)
    );
  }

  makePost() {
    this.dispatch(savePostLocally(this.state.post))
    .then(() => {
      postAdd(this.token, this.props.postState.post)
      .then((res) => {
        if(res.data.success) {
          flushPost();
          this.setState({
            post: defaultState.post,
            isRevealed: false
          })
        } 
      })
    });
  }

  handleTyping(e) {
    var value = e.target.value
    if(value.length >= 140) {
      this.setState({ isBlocked: true })
      $('.ui.form').popup({
        popup: '.limit.popup',
        hoverable: true
      });
    } else {
      if(findURL(value).length == 0) {
        this.setState({ 
          isBlocked: false,
          post: {
            ...this.state.post,
            postContent: value
          }
        })
      } else {
        this.setState({
          post: {
            ...this.state.post,
            postLink: findURL(value)[0],
            postContent: value
          }
        })
      }
    }
  }

  uploadImage(e) {
    var image = e.target.files[0];
    uploadImage(this.token, image).then((res) => {
      this.setState({
        placeholder: 'Добавьте подпись к загруженному изображению',
        post: {
          ...this.state.post,
          postImage: res.path,
        }
      })
    })
  }

  handleImage(e) {
    this.setState({
      isDisabled:true
    })
  }

  setVideo(value) {
    var id = getYouTubeId(value)
    if (id) {
      this.setState({
        placeholder: 'Подпись к видеоролику',
        post: {
          ...this.state.post,
          postVideo: id
        }
      })
    } else {
      this.setState({
        errors: this.state.errors.concat(
          ['Некорретная ссылка']
        ),
      })
    }
  }

  deleteImage() {
    this.setState({
      placeholder: 'О чем бы вы хотели сейчас рассказать?',
      post: {
        ...this.state.post,
        postImage: null
      }
    })
  }

  deleteVideo() {
    this.setState({
      placeholder: 'О чем бы вы хотели сейчас рассказать?',
      post: {
        ...this.state.post,
        postVideo: null
      }
    })
  }

  deleteLink() {
    this.setState({
      placeholder: 'О чем бы вы хотели сейчас рассказать?',
      post: {
        ...this.state.post,
        postLink: null
      }
    })
  }

  setType(type, item) {
    this.props.dispatch(
      changePostFace(type, item)
    );
  }


  render() {
    var postState = this.props.postState;
    var post = this.state.post;    
    var user = this.currentUser;
    if (this.props.user.profile && post) {
      // Кнопка
      var button = (
        <span>
          {(!this.state.isBlocked) ? 
          <a onClick={() => {this.makePost()}} className="medium circular ui button primary">
            Опубликовать
          </a>
           : 
          <Link href="/editor">
            <a className="medium circular ui button primary">
              Перейти в редактор
            </a>
          </Link>
          }
        </span>
      )

      // Изображение
      var image = (
        <div>{(this.state.post.postImage) ? 
          <div className="uploaded-image">
            <img src={this.state.post.postImage} width="100%" />
            <i onClick={() => {this.deleteImage()}} className="fa fa-close"></i>
          </div>
          :
          <div></div>
        }
        <style jsx>{`
          .uploaded-image img {
            border-radius:5px;
          }
          .uploaded-image {
            margin:15px 0px;
            position:relative;
            width:70%;
          }
          .uploaded-image i {
            position:absolute;
            right:0px;
            top:0px;
            padding:15px;
            color:#fff;
            opacity:0.5;
            transition:0.2s all ease;
          }
          .uploaded-image i:hover {
            opacity:1;
          }
        `}</style>
        </div>)

      // Ссылка
      var link = (<div>
        {this.state.post.postLink != null &&
          <div className="link">
            <i className="fa fa-link"></i>
            <span><a href={this.state.post.postLink}>{this.state.post.postLink}</a></span>
            <i className="fa fa-close" onClick={() => {this.deleteLink()}}></i>
          </div>
        }
        <style jsx>{`
          .link {
            border-radius:5px;
            padding:15px;
            border:1px solid #eee;
            position:relative;
            margin-top:15px;
          }
          .link .fa-link {
            opacity:0.3;
            margin-right:20px;
          }
          .link .fa-close {
            position:absolute;
            right:0px;
            padding:10px 20px;
            top:8px;
            opacity:0.3;
            transition:0.2s all ease;
          }
          .link .fa-close:hover {
            opacity:1.0;
          }
        `}</style>
      </div>)

      var video = (
        <div>
          {(this.state.post.postVideo) &&
            <div className="video">
              <iframe width="500" height="315" src={`https://www.youtube.com/embed/${this.state.post.postVideo}`} frameBorder="0" allowFullScreen={true}></iframe>
              <i className="fa fa-close" onClick={() => {this.deleteVideo()}}></i>
              <style jsx>{`
                .video {
                  position:relative;
                  width:550px;
                }
                .video i {
                  position:absolute;
                  right:0px;
                  top:0px;
                  padding:15px;
                  cursor:pointer;
                  opacity:.5;
                  transition:.2s all ease;
                }
                .video i:hover {
                  opacity:1;
                }
              `}</style>
            </div>
          }
        </div>
      )

      var symbols = 140 - this.state.post.postContent.length;

      return (
        <div className={(this.state.isRevealed) ? `revealed flashpost` : `flashpost`} onClick={() => {this.setState({isRevealed: true})}}>
    			<form className="ui form">
    				<div className="field">
    					<div className="image user">
                <div className="ui inline dropdown right face">                  
                  <Avatar 
                    color={`#46978c`} 
                    round={true} 
                    size={32} 
                    src={(postState.postFace.faceImage) ? postState.postFace.faceImage : user.userImage} 
                    name={postState.postFace.faceTitle} 
                  />
                  {(this.state.isRevealed) && <i className="fa fa-angle-down icon"></i> }
                  <div className="menu left">
                    <div className="item" onClick={() => {this.setType('user', user)}}>
                      <Avatar color={`#46978c`} round={true} size={20} src={user.userImage} name={user.userName} />
                      <span>{user.userName}</span>
                    </div>
                    {(postState.faces) &&
                      postState.faces.map((item, i) => {
                        return (
                          <div onClick={() => {this.setType('blog', item)}} className="item" key={i}>
                            <Avatar color={`#46978c`} round={true} size={20} src={item.blogImage} name={item.blogTitle} />
                            <span>{item.blogTitle}</span>
                          </div>
                        )})
                      }
                  </div>
                </div>
    			    </div>
              <div className="note">
                <div>{image}</div>
                <div>{video}</div>
    			      <div className="textarea">
                  <textarea 
                    disabled={this.state.isDisabled} 
                    maxLength="140" ref={(e) => {this.textarea = e}} 
                    onChange={(e) => {this.handleTyping(e)}} 
                    defaultValue={postState.post.postContent} 
                    rows="2" 
                    placeholder={this.state.placeholder} 
                  />
    			        <div className="bar">
                    {button}
                    {(!this.state.post.postImage && !this.state.post.postVideo) &&
                      <span onClick={() => {this.image.click()}} className="ui button icon circular small basic"><i className="fa fa-image"></i></span>
                    }
                    {(!this.state.post.postVideo && !this.state.post.postImage) &&
                      <span>
                        <span onClick={() => {$('.video.button').popup({popup : $('.video.popup'), on: 'click'})}} className="ui button video icon circular small basic"><i className="fa fa-video-camera"></i></span>
                        <div className="popup video ui">
                          <input 
                            ref={(e) => {this.video = e}} 
                            type="text" 
                            placeholder="Ссылка на видео с YouTube" 
                          />
                        </div>
                      </span>
                    }
                    <div className="ui limit popup">
                      <p>Максимальная длина короткого поста равна 140 символам. 
                      Возможно вы хотите опубликовать публикацию?</p>
                    </div>
                    <div className="symbols">{symbols}</div>
                 </div>
                </div>
                <div>{link}</div>
              </div>
              <input 
                onChange={(e) => {this.uploadImage(e)}} 
                type="file" 
                className="ui hidden" 
                ref={(e) => {this.image = e}} 
              />
    		  	</div>
    			</form>
          <style jsx>{`
            .dropdown .menu .item span {
              margin-left:5px;
            }
            .note {
              padding:15px 0px;
            }
            .textarea {
              position:relative;
            }
            .flashpost {
              background:#fff;
              border-bottom:1px solid rgba(0,0,0,0.07);
              box-shadow:0px 11px 20px 0px rgba(0, 0, 0, 0.03)
            }
            .flashpost .image {
              position: absolute;
              left:0px;
              top:50%;
              margin-top:-20px;
              display:flex;
              justify-content:center;
              align-items:center;
            }
            .flashpost textarea {
              background:transparent;
              border:0px;
              padding:10px 18px;
              height:36px;
              font-size:16px;
              overflow:hidden;
              padding-left:48px;
              transition: 0.2s all ease;
              resize: none;
            }
            .flashpost .field {
              position: relative;
            } 
            .flashpost .bar {
              position: absolute;
              opacity:0;
              bottom:-100%;
              left:-999px;
              width:100%;
            }
            .flashpost .bar .popup {
              width:360px;
            }
            .flashpost .bar .popup input {
              border:0px!important;
              background:transparent!important;
              border-radius:0px!important;
              font-size:18px;
              width:360px;
            }
            .flashpost .bar .symbols {
              position:absolute;
              right:0px;
              bottom:10px;
              font-size:16px;
              opacity:0.6;
            }
            .flashpost.revealed .bar {
              top:auto;
              left:0px;
              bottom:0px;
              opacity:1.0;
            }
            .flashpost.revealed textarea {
              height:150px;
              padding-left:0px!important;
              padding-right:70px;
            }
            .flashpost.revealed .user {
              right: 0px;
              left: auto;
              opacity: 1;
              top: 0px;
              margin-top: 20px;
              z-index:999;
            }
            .flashpost {
              padding:6px 30px;
            }
            .flashpost textarea:focus {
              background:transparent;
            }
            .flashpost .dropdown {
              display:flex;
              align-items:center;
            }
            .flashpost .dropdown i {
              margin-left:10px;
            }
            .flashpost .dropdown .menu .item {
              display:flex;
              align-items:center;
            }

          `}</style>
    		</div>
      );
    } else {
      return (<div></div>)
    }
  }
}


export default connect((store) => store)(FlashPost)