// Important
import React from 'react';
import cookies from 'js-cookie'
import { connect } from 'react-redux'

// Utils 
import { UI } from '../../../utils/initScripts.js'

// Components
import Avatar from 'react-avatar'
import SwitchFace from '../../isomorphic/switchFace.js'
import Link from 'next/link'

// Actions
import { setPostField, displayStatus, savePost, pushTag, pullTag } from '../../../actions/post.js'
import { updateImage } from '../../../actions/app.js'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token');
  }

  // Isomorphic Methods

  handleChange(field, value) {
    this.props.dispatch(
      setPostField(field, value)
    )
  }

  // Specific Methods

  savePost(token) {
    const { postState, dispatch } = this.props;
    dispatch(
      savePost(token, postState.post, 'Пост сохранён')
    )
  }

  publishPost(token) {
    const { postState, dispatch } = this.props; 
    dispatch(
      setPostField('status', 'published')
    ).then(() => {
      dispatch(
        savePost(token, this.props.postState.post, 'Пост опубликован')
      )
    })
  }

  render() {
    const { user, post, postState, dispatch } = this.props;
    const { author, slug, image, tags } = postState.post
    return (
      <div className="sidebar blocks">
   		  <div className="block-item switch">
          <SwitchFace 
            imageSize={55} 
            defaultFace={author.user ? author.user : author.blog} />
        </div>
        <div className="block-item">
          <h4 className="ui header">
            Меню
            <small>навигация</small>
          </h4>
          <div className="ui vertical text menu">
            <a className="item" onClick={() => {this.publishPost(this.token)}}>
              <i className="fa fa-plane" aria-hidden="true"></i> Опубликовать
            </a>
            <a className="item" onClick={() => {this.savePost(this.token)}}>
              <i className="fa fa-save" aria-hidden="true"></i> Сохранить
            </a>
            <Link href={{ pathname: 'post', query: { slug }}}><a className="item">
              <i className="fa fa-eye" aria-hidden="true"></i> Предпросмотр
            </a></Link>
          </div>
        </div>
        <div className="block-item">
          <Image 
            url={image}
            post={postState.post}
            dispatch={dispatch} />
        </div>
        <div className="block-item">
          <Tags 
            tags={tags}
            dispatch={dispatch} />
        </div>
       	<style jsx>{`
    			.sidebar {
            overflow-y:scroll;
            width:310px;
            height:100%;
            position: fixed!important;
            left:0px;
            top:68px;
            border-right:1px solid #eee;
            background:#fff;
            padding-bottom:60px;
          }
          .sidebar::-webkit-scrollbar {
            display:none;
          }
          .sidebar::-webkit-scrollbar-thumb {
            display:none;
          }
          .switch {
            padding-top:0px;
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

export class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      isRevealed: false,
      isBlocked: false
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
    if(this.props.tags.length <= 5) {
      this.props.dispatch(
        pushTag(tag)
      )
    } 
  }

  pullTag(tag) {
    this.props.dispatch(
      pullTag(tag)
    )
  }

  render() {
    const { isRevealed } = this.state;
    const { tags } = this.props;
    if(isRevealed) {
      return (
        <div>
          <h3 className="ui header">
            Теги 
            {tags.length == 0 ?
             <small>Список пуст</small> 
             :
             <small>Осталось {5 - tags.length}</small>
           }
          </h3>
          <div className="ui form">
            <div className="field">
              <input 
                ref={(e) => {this.input = e}}
                type="text" 
                onKeyPress={(e) => {this.handleTyping(e)}}
                placeholder="Введите тэг" 
                id="inputTag"
                disabled={(tags.length >= 5) ? true : false}
              />
            </div>
          </div>
          <div className="tags">
            {tags.map((item, i) => {
              return <span className="tag" key={i}>
                {item}
                <i onClick={() => {this.pullTag(item)}} className="fa fa-close"></i>
              </span>
            })}
          </div>
          <style jsx>{`
            .tags .tag i {
              cursor:pointer;
              opacity:0.2;
              margin-left:5px;
              transition:0.2s all ease;
            }
            .tags .tag i:hover {
              opacity:1;
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
              background:#fafafa;
              margin-top:5px;
              display:inline-block;
              width:auto!important;
              padding:3px 6px;
              font-size:13px;
              border-radius:5px;
            }
            .form .field input {
              border:0px;
              padding-left:0px;
              padding-right:0px;
              outline:none;
              border-bottom:1px solid #eee;
            }
          `}</style>
        </div>
      )
    } else {
      return (
        <div className="tags">
          <h4 className="ui header">
            Теги <small>добавьте до 5 тегов, чтобы люди могли найти ваш пост</small>
          </h4>
          <a onClick={() => {this.setState({isRevealed: true})}} className="large icon ui button default small">
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
    this.props.dispatch(updateImage(this.token, 'post', this.props.post._id, file))
    .then((image) => {
      this.props.dispatch(
        setPostField('image', image.path)
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
      setPostField('image', null)
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
          <h4 className="ui header">
            Изображение <small>добавьте изображение, чтобы получить больше внимания к посту</small>
          </h4>
          <a className="large icon ui button default small" onClick={() => {this.image.click()}}>
            <i className="fa fa-plus icon"></i>
          </a>
          <input ref={(e) => {this.image = e}} onChange={(e) => {this.handleImage(e.target.files[0])}} type="file" className="ui hidden" />
        </div>
      )
    }
  }
}



export default connect((state) => state)(Sidebar)