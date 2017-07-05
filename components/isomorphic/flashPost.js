// Important
import React from 'react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'

// Utils
import getYouTubeId from '../../utils/getYouTube.js' 
import findURL from '../../utils/findURL.js' 
import { UI } from '../../utils/initScripts.js'
import randomString from '../../utils/randomString.js'

// Actions
import { setFace, setUserFaces  } from '../../actions/user.js'
import { uploadImage } from '../../actions/app.js'
import { setPostField, 
         prepareNewPost, 
         postAdd,
         flushPost 
       } from '../../actions/post.js'

// Components
import Avatar from 'react-avatar'
import UserFaces from './userFaces.js'
import Link from 'next/link'
import User from './user.js'
import SwitchFace from './switchFace.js'

const defaultState = {
  isRevealed: false,
  isBlocked: false,
  isDisabled: false,
  placeholder: 'О чём бы вы хотели нам рассказать сегодня?',
}


class FlashPost extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.token = cookies.get('x-access-token');
    this.dispatch = this.props.dispatch;
    this.state = defaultState;
  }

  // React Lifecycle

  componentWillMount() {
    this.dispatch(prepareNewPost(this.currentUser, 'note'))
    .then(() => {
      this.dispatch(setUserFaces(this.currentUser))
      .then(() => {
        this.dispatch(setFace(this.props.userFaces.faces[this.props.userFaces.faces.length - 1]))
      })
    })
    
    if ( this.props.postState.post.postImage 
      || this.props.postState.post.postVideo 
      || this.props.postState.post.postContent 
      || this.props.postState.post.postLink
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
  }

  // Specific Methods

  publishPost(token) {
    this.dispatch(
      setPostField('postStatus', 'published')
    ).then(() => {
      this.dispatch(
        postAdd(token, this.props.postState.post)
      ).then((res) => {
        if(res.data.success) {
          this.props.onSubmit(res.data.post)
        } else {
          console.log('error: ', res.data)
        }
      })
    }).then(() => {
      this.dispatch(
        flushPost()
      )
    })
  }

  savePost(token, post) {
    this.props.dispatch(
      savePost(token, post)
    )
  }

  handleTyping(value) {
    if(value.length >= 140) {
      this.setState({ isBlocked: true })
      $('.ui.form').popup({
        popup: '.limit.popup',
        hoverable: true
      });
    } else {
      if(findURL(value).length == 0) {
        this.setState({ 
          isBlocked: false
        })
        this.handleChange('postContent', value)
      } else {
        this.handleChange('postLink', findURL(value)[0])
        this.handleChange('postContent', value)
      }
    }
  }

  handleImage(token, file) {
    uploadImage(token, file)
    .then((image) => {
      this.dispatch(
        setPostField('postImage', image.path)
      )
    })
  }

  setVideo(e, value) {
    if(e.which == 13) {
      var id = getYouTubeId(value)
      if (id) {
        this.handleChange('postVideo', id)
      }
    }
  }

  // Isomorphic Methods

  handleChange(field, value) {
    this.dispatch(
      setPostField(field, value)
    )
  }

  render() {
    var postState = this.props.postState;
    var post = this.props.postState.post;    
    if (this.currentUser.isLogged && post) {
      // Кнопка
      var button = (
        <span>
          {(!this.state.isBlocked) ? 
          <a onClick={() => {this.publishPost(this.token, post)}} className="medium circular ui button primary">
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
        <div>{(post.postImage) ? 
          <div className="uploaded-image">
            <img src={post.postImage} width="100%" />
            <i onClick={() => {this.handleChange('postImage', null)}} className="fa fa-close"></i>
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
        {post.postLink != null &&
          <div className="link">
            <i className="fa fa-link"></i>
            <span><a href={post.postLink}>{post.postLink}</a></span>
            <i className="fa fa-close" onClick={() => {this.handleChange('postLink', null)}}></i>
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
          {(post.postVideo) &&
            <div className="video">
              <iframe width="500" height="315" src={`https://www.youtube.com/embed/${post.postVideo}`} frameBorder="0" allowFullScreen={true}></iframe>
              <i className="fa fa-close" onClick={() => {this.handleChange('postVideo', null)}}></i>
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

      var symbols = 140 - post.postContent.length;

      return (
        <div className={(this.state.isRevealed) ? `revealed flashpost block-item` : `flashpost block-item`} onClick={() => {this.setState({isRevealed: true})}}>
    			<form className="ui form">
    				<div className="field">
    					<div className="image user">
                <SwitchFace 
                  size="tiny"
                  imageSize={40}
                />
    			    </div>
              <div className="note">
                <div>{image}</div>
                <div>{video}</div>
    			      <div className="textarea">
                  <textarea 
                    disabled={this.state.isDisabled} 
                    maxLength="140" ref={(e) => {this.textarea = e}} 
                    onChange={(e) => {this.handleTyping(e.target.value)}} 
                    rows="2" 
                    placeholder={this.state.placeholder} 
                  >{this.props.postState.post.postContent}</textarea>
    			        <div className="bar">
                    {button}
                    {(!post.postImage && !post.postVideo) &&
                      <span 
                        onClick={() => {this.image.click()}} 
                        className="ui button icon circular small basic">
                          <i className="fa fa-image"></i>
                      </span>
                    }
                    {(!post.postVideo && !post.postImage) &&
                      <span>
                        <span className="ui button video icon circular small basic">
                            <i className="fa fa-video-camera"></i>
                        </span>
                        <div className="popup video ui">
                          <input 
                            type="text" 
                            placeholder="Ссылка на видео с YouTube" 
                            onKeyDown={(e) => {this.setVideo(e, e.target.value)}}
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
                onChange={(e) => {this.handleImage(this.token, e.target.files[0])}} 
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
              margin-bottom:15px;
            }
            .flashpost .image {
              position: absolute;
              left:0px;
              top:50%;
              margin-top:-16px;
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
              padding-left:52px;
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
              padding:6px 17px;
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