// Important
import React from 'react';
import cookies from 'js-cookie'
import { connect } from 'react-redux'

// Utils 
import { UI } from '../../../utils/initScripts.js'

// Components
import Avatar from 'react-avatar'
import SwitchFace from '../../isomorphic/switchFace.js'

// Actions
import { setPostField, displayStatus, savePost, pushTag, pullTag } from '../../../actions/post.js'
import { updateImage } from '../../../actions/app.js'
import { setUserFaces, setFace } from '../../../actions/user.js'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token');
  }

  // React Lifecycle

  componentWillMount() {
    this.props.dispatch(setUserFaces(this.props.user))
    .then(() => {
      this.props.dispatch(setFace(this.props.userFaces.faces[0]))
    })
  }

  componentDidMount() {
    UI()
    $('.ui.dropdown')
    .dropdown();
  }

  // Isomorphic Methods

  handleChange(field, value) {
    this.props.dispatch(
      setPostField(field, value)
    )
  }

  // Specific Methods

  savePost(token) {
    this.props.dispatch(
      savePost(token, this.props.postState.post, 'Пост сохранён')
    )
  }

  publishPost(token) {
    this.props.dispatch(
      setPostField('postStatus', 'published')
    ).then(() => {
      this.props.dispatch(
        savePost(token, this.props.postState.post, 'Пост опубликован')
      )
    })
  }

  render() {
    var user = this.props.user;
    var post = this.props.post;
    var face = this.props.userFaces.current;
    var faces = this.props.userFaces.faces;
    return (
      <div className="sidebar block">
   		  <div className="profile block-vertical ui inverted dropdown ui">
          <SwitchFace
            imageSize={55}
          />
        </div>
        <div className="block-vertical">
          <div className="ui vertical labeled icon buttons fluid">
            <a onClick={() => {this.publishPost(this.token)}} className="small labeled icon fluid ui button black">
              <i className="fa fa-plane icon"></i>
              Опубликовать
            </a>
          </div>
          <div className="divider ui"></div>
          <div className="ui vertical labeled icon buttons fluid">
            <a onClick={() => {this.savePost(this.token)}} className="small labeled icon fluid ui button black">
              <i className="fa fa-save icon"></i>
              Сохранить
            </a>
            <a onClick={() => {this.savePost(this.token)}} className="small labeled icon fluid ui button black">
              <i className="fa fa-eye icon"></i>
              Предпросмотр
            </a>
          </div>
        </div>
        <div className="block-vertical">
          <Image 
            url={post.postImage}
            post={this.props.postState.post}
            dispatch={this.props.dispatch}
          />
        </div>
        <div className="block-vertical">
          <Tags 
            tags={this.props.postState.post.postTags}
            dispatch={this.props.dispatch}
          />
        </div>

     	<style jsx>{`
  			.sidebar {
  				background:#222;
  			}
        .sidebar .block-vertical {
          border-bottom:1px solid rgba(255,255,255,0.1)
        }
        .sidebar .profile {
          display:flex;
          justify-content:space-between;
          align-items:center;
        }
        .sidebar .profile .user {
          display:flex;
          align-items:center;
        }
        .sidebar .profile .user .content {
          margin-left:10px;
        }
        .sidebar .profile .user span {
          display:block;
        }
     	`}</style>
   	</div>
    );
  }
}

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      isRevealed: false
    }
  }

  componentWillMount() {
    if(this.props.tags.length > 0) {
      this.setState({
        isRevealed: true
      })
    } 
  }

  handleTyping(e) {
    if (e.which == 13) {
      this.pushTag(this.input.value);
      this.input.value = '';
    } else {
      this.setState({
        temp: e.target.value
      })
    }
  }


  pushTag(tag) {
    this.props.dispatch(
      pushTag(tag)
    )
  }

  pullTag(tag) {
    this.props.dispatch(
      pullTag(tag)
    )
  }

  render() {
    if(this.state.isRevealed) {
      return (
        <div>
          <h3 className="ui header inverted">
            Теги 
            {this.props.tags.length == 0 ?
             <small>Список пуст</small> 
             :
             <small>Осталось {5 - this.props.tags.length}</small>
           }
          </h3>
          <div className="ui form inverted">
            <div className="field">
              <input 
                ref={(e) => {this.input = e}}
                type="text" 
                onKeyPress={(e) => {this.handleTyping(e)}}
                placeholder="Введите тэг" 
                id="inputTag"
              />
            </div>
          </div>
          <div className="tags">
            {this.props.tags.map((item, i) => {
              return <span className="tag" key={i}>
                {item}
                <i onClick={() => {this.pullTag(item)}} className="fa fa-close"></i>
              </span>
            })}
          </div>
          <style jsx>{`
            .tags .tag i {
              color:#fff;
              margin-left:5px;
            }
            .tags h3 {
              display:block;
            }
            .tags .button {
              margin-bottom:5px;
            }
            .tags {
              display:flex;
              flex-wrap:wrap;
              margin-top:15px;
            }
            .tags .tag {
              margin-right:7px;
              color:#fff;
              font-size:14px;
              line-height:30px;
            }
            .form .field input {
              background:#333!important;
              color:#fff!important;
            }
          `}</style>
        </div>
      )
    } else {
      return (
        <div className="tags">
          <h3 className="ui header inverted">
            Теги <small>добавьте до 5 тегов, чтобы люди могли найти ваш пост</small>
          </h3>
          <a onClick={() => {this.setState({isRevealed: true})}} className="large icon ui button black small add">
            <i className="fa fa-plus icon"></i>
          </a>
        </div>
      )
    }
  }
}

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token');
  }

  handleImage(file) {
    updateImage(this.token, 'post', this.props.post._id, file)
    .then((image) => {
      this.props.dispatch(
        setPostField('postImage', image.path)
      )
    })
    .then(() => {
      this.props.dispatch(
        savePost(this.token, this.props.post)
      )
    })
  }

  removeImage() {
    this.props.dispatch(
      setPostField('postImage', null)
    )
  }

  render() {
    if(this.props.url) {
      return (
        <div className="image">
          <img src={this.props.url} className="ui image rounded" width="100%" />
          <span onClick={() => {this.removeImage()}}><i className="fa fa-close"></i></span>
          <style jsx>{`
            .image {
              position:relative;
            }
            .image span {
              position:absolute;
              width:100%;
              height:100%;
              display:flex;
              justify-content:center;
              align-items:center;
              text-align:center;
              margin:auto;
              opacity:0;
              transition:0.2s all ease;
              background:rgba(0,0,0,0.3);
              left:0px;
              top:0px;
              font-size:25px;
              color:#fff;
              z-index:10;
              cursor:pointer;
            }
            .image span:hover {
              opacity:1;
            }
          `}</style>
        </div>
      );
    } else {
      return (
        <div className="image">
          <h3 className="ui header inverted">
            Изображение <small>добавьте изображение, чтобы получить больше внимания к посту</small>
          </h3>
          <a className="large icon ui button black small" onClick={() => {this.image.click()}}>
            <i className="fa fa-plus icon"></i>
          </a>
          <input ref={(e) => {this.image = e}} onChange={(e) => {this.handleImage(e.target.files[0])}} type="file" className="ui hidden" />
        </div>
      )
    }
  }
}



export default connect((state) => state)(Sidebar)