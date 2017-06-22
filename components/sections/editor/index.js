// Important
import React from 'react';
import { connect } from 'react-redux'
import config from '../../../app.config.js' // Избавиться
import axios from 'axios' // Избавиться
import router from 'next/router'
import cookies from 'js-cookie'

// Actions
import { changePostFace,  
         setPostAuthor, 
         setPostFaces,
         savePostLocally,
         postAdd,
         postUpdate } from '../../../actions/post.js'
import { getUserFaces, getUserById } from '../../../actions/user.js'
import { updateImage } from '../../../actions/app.js'

// Utils
import UI from '../../../utils/initScripts.js'
import randomString from '../../../utils/randomString.js'

// Components
import Textarea from './textarea.js'
import Avatar from 'react-avatar'


class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.token = cookies.get('x-access-token');
    this.dispatch = this.props.dispatch;
    this.state = {
      post: {
        storage: null,
        slug: '',
        postImage: null,
        postDescription: '',
        postTitle: '',
        postTags: [],
        postContent: '',
        postLikes: [],
        postFavorites: [],
        postType: 'post'
      },
      tempTag: '',
      isCustomSlug: false
    } 
  }

  componentWillMount() {
    this.getPost();
    if(this.currentUser) { 
      if(this.props.postState.faces == null) {
        getUserFaces(this.currentUser._id).then((res) => {
          this.dispatch(setPostFaces(res.data))
        })
      }
    } 
  }

  componentDidMount() {
    // Подготовка разметки
    this.settingTextareaHeight();
    this.postTitle.focus();
    UI();

    $('.tags .add').popup({
      popup : $('.tags .popup'),
      on    : 'click'
    })

    if(!this.state.post.storage) {
      this.createStorage()
      .then(() => {
        this.dispatch(savePostLocally(this.state.post))
      })
      .then(() => {
        this.dispatch(changePostFace('user', this.currentUser))
        this.setState({
          post: {
            ...this.state.post,
            postAuthor: {
              authorID: this.currentUser._id,
              authorType: 'user'
            }
          }
        })
      })
    }
  }

  getPost() {
    if(this.props.post) { 
      this.setState({
        post: this.props.post
      })
    } else {
      if(this.props.postState) {
        this.setState({
          post: {
            ...this.state.post,
            ...this.props.postState.post
          }
        })
      }
    }
  }

  createStorage() {
    return this.updateState(
      'storage', randomString(10)
    )
  }

  hasPost() {
    if (this.props.data.post) {
      return true
    } else {
      return false
    }
  }

  handleThumbnail() {
    if(!this.state.post.postImage) { 
      this.uploader.click();
    } else {
      this.handleDeleteThumbnail()
    }
  }

  settingTextareaHeight() {
  	var clientHeight = document.body.clientHeight;
  	var headerHeight = this.headerwrapper.clientHeight;
  	document.querySelector('.quill').style.height = 
      clientHeight - headerHeight + 'px';
  }

  handleTyping(e) {
    var value = e.target.value
    if(!this.state.isCustomSlug) {
    	var link = value.replace(/\s/g, '-').toLowerCase()
    	this.link.value = link;
      this.updateState('postTitle', value).then(() => {
        this.updateState('slug', link)
      })
    } else {
      this.updateState('postTitle', value)
    }
  }

  handleSave() {
    if(this.state.post._id == undefined) {
      this.dispatch(savePostLocally(this.state.post))
      .then(() => {
        postAdd(this.token, this.props.postState.post)
        .then((res) => {
          if(res.data.success) {
            this.handleStatus('Пост опубликован!')
            this.handleRedirect()
            this.getPostFromServer()
          }
        })
      });
    } else {
      this.dispatch(savePostLocally(this.state.post))
      .then(() => {
        postUpdate(this.token, this.props.postState.post._id, this.props.postState.post)
        .then((res) => {
          if(res.data.success) {
            this.handleStatus('Сохранено!')
            this.getPostFromServer()
          }
        })
      });
    }
  }

  getPostFromServer() {
    axios.get(config.API + 'post/entries/' + this.state.post.slug).then((res) => {
      this.updateState(res.data);
    })
  }

  handleRedirect() {
    return new Promise((resolve, reject) => {
      const href = '/editor?slug=' + this.state.post.slug
      const as = href
      router.replace(href, as, { shallow: true })
      resolve()
    })
  }

  async handleUpload(e) {
    var image = e.target.files[0];
    var formData = new FormData();
    var url = config.API + 'post/upload';
    await formData.append('postThumbnail', image);
    await formData.append('storage', this.state.post.storage)
    if (image) {
       await fetch(url, {
        method: 'POST',
        body: formData
      }).then(async (res) => {
        var result = await res.json()
        await this.setThumbnail(result.filename);
      })
    }
  }

  setThumbnail(filename) {
    var url = config.storage + 'posts/' + this.state.post.storage + '/' + filename;
    this.updateState('postImage', url)
    this.handleSave()
  }

  handleStatus(status) {
    this.status.innerHTML = status;
    setTimeout(() => {
      this.status.innerHTML = '';
    }, 3000)
  }

  handleDeleteThumbnail() {
    this.updateState('postImage', null)
  }

  handleEditorChange() {
    return () => {
      var area = document.querySelector('.ql-editor');
      this.updateState('postContent', area.innerHTML)
    }
  }

  handleTagAdd(tag) {
    this.setState({
      post: {
        ...this.state.post,
        postTags: this.state.post.postTags.concat(tag)
      }
    })

    this.tagInput.value = '';
    this.tagInput.focus()
  }

  updateState(key, value) {
    return new Promise((resolve, reject) => {
      if(typeof key === 'object') {
        this.setState({
          ...this.state,
          post: { 
            ...this.state.post,
            ...key
          }
        })
      } else {
        this.setState({
          ...this.state,
          post: { 
            ...this.state.post,
            [key]: value
          }
        })
      }
      resolve(true)
    })
  }

  setType(type, item) {
    this.props.dispatch(
      changePostFace(type, item)
    );
  }


  render() {
    var post = this.state.post;
    var user = this.currentUser;
    var postState = this.props.postState;
    var tags = this.state.post.postTags.map((item, i) => {
      return (<div className="ui button basic circular" key={i}>{item}</div>)
    })
    return (
      <div className="editor" ref={(editor) => {this.editor = editor}}>
      	<div className="header-wrapper" ref={(headerwrapper) => {this.headerwrapper = headerwrapper}}>
          <div className="header" ref={(header) => {this.header = header}}>
            <div className="header-background"><img src={post.postImage} className="header-background-img" /></div>
            <div className="header-content block">
    	      	<div className="title">
                <div className="image user">
                  <div className="ui inline dropdown right face">                  
                    {/* <Avatar 
                      color={`#46978c`} 
                      round={true} 
                      size={32} 
                      src={(postState.postFace.faceImage) ? postState.postFace.faceImage : user.userImage} 
                      name={postState.postFace.faceTitle} 
                    /> 
                    <i className="fa fa-angle-down icon"></i>
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
                        */}
                  </div>
                </div>
    	      	
                <h3 className="ui header">
    	      			<input defaultValue={post.postTitle} name="postTitle" ref={(postTitle) => {this.postTitle = postTitle}} onChange={(e) => {this.handleTyping(e)}} type="text" placeholder="Ваш заголовок" />
    	      			<span className="sub header">http://levelup.name/<input onClick={() => {this.setState({isCustomSlug: true})}} onChange={(e) => {this.handleTyping(e)}} type="text" defaultValue={post.slug} ref={(link) => {this.link = link}} /></span>
    	      		</h3>
    	      	</div>
    	      	<div className="action">
                <span className="status" ref={(status) => {this.status = status}}></span>
                <button className="ui primary basic button circular large" onClick={() => {this.handleSave()}}>
                  {(!this.state.post._id) ? `Опубликовать` : `Сохранить`}
                </button>
    	      	</div>
            </div>
            <div className="thumbnail" onClick={() => {this.handleThumbnail()}} ref={(thumbnail) => {this.thumbnail = thumbnail}}>
              <input onChange={(e) => {this.handleUpload(e)}} ref={(uploader) => {this.uploader = uploader}} type="file" name="postThumbnail" />
              <span>{(post.postImage == null) ? <span>Загрузить изображение</span> : <span onClick={() => {this.handleDeleteThumbnail()}}>Удалить изображение</span>}</span>
            </div>
          </div>
          <div className="tags block">
            <div>{tags}</div>
            <div onClick={() => {this.tagInput.focus()}} className="visible icon ui button basic circular add"><i className="fa fa-plus"></i></div>
            <div className="ui popup top left transition">
              <div className="form large ui">
                <div className="field">
                  <input ref={(input) => {this.tagInput = input}} type="text" onChange={(e) => {this.setState({tempTag: e.target.value})}} placeholder="Тэг" />
                </div>
                <div className="field">
                  <div className="ui button" onClick={() => {this.handleTagAdd(this.state.tempTag)}}>Добавить</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
        	<div className="block">
            <Editor value={post.postContent} onChange={this.handleEditorChange()} />
        	</div>
        </div>

      	<style jsx>{`
      		.editor .header .title > * {
    				vertical-align:middle;
          }

    			.editor .header-wrapper .header-content,
    			.editor .header-wrapper .header-content .title {
    				display:flex;
    				flex-direction:row;
    				justify-content:space-between;
    				align-items:center;
    			}

          .editor .header-wrapper > .header {
            position:relative;
            overflow:hidden;
            height:181px;
          }

          .editor .header-content {
            position:relative;
            left:0px;
            top:0px;
            z-index:10;
            background: rgba(255,255,255,0.6);
          }

          .editor .header-content .action button {
            opacity:.9;
          }

          .editor .header-content .action .status {
            margin-right:20px;
            color:#c0c0c0;
          }

          .header-background-img {
            width:100%;
            opacity:0.2;
          }

          .editor .header-background {
            position:absolute;
            left:0px;
            top:0px;
            width:100%;
            overflow:hidden;
          }

          .editor .floating {
            position:absolute;
            left:0px;
            top:100%;
            width:100%;
            background:#fff;
          }

      		.editor .header .title > .header {
      			padding-left:15px;
      		}

      		.editor .header .title > .header > span {
      			display:block;
      			margin-top:3px!important;
      		}

    			.editor .header .title > .header input {
    				border:0px;
    				background:none;
    				outline:0px;
            width:100%;
            display:inline-block;
    			}

          .editor .header .title .sub.header input {
            width:200px;
          }

      		.editor .thumbnail {
            position:absolute;
            left:0px;
            bottom:0px;
      			height:100px;
      			width:100%;
            z-index:0;
      			display:flex;
      			justify-content:center;
      			align-items:center;
      			background:rgba(0,0,0,0.03);
            border-bottom:1px solid #eee;
            color:#c0c0c0;
      			cursor:pointer;
      			transition:0.2s all ease;
      		}

          .editor .thumbnail > span {
            border-bottom:1px solid rgba(0,0,0,0.1);
            padding-bottom:4px;
          }


      		.editor .thumbnail input[type="file"] {
      			display:none;
      			opacity:0;
      			visibility:hidden;
      		}

    			.editor .content {
    				position:relative;
    			}

          .editor .tags {
            border-bottom: 1px solid rgba(0,0,0,0.1);
            position:relative;
            display:flex;
            flex-direction:row;
          }

          .editor .tags input {
            border:0px;
            padding:0px;
            font-size:24px;
          }

      		.editor .tags input:focus,
      		.editor .content textarea:focus {
      			outline:0px;
      		}

      		.editor .content .quill {
      			width:100%;
            padding-right:200px;
      			background:none;
      			border:0px;
      			font-size:16px;
      			min-height:50vh;
            border:0px;
      		}

      		.editor .content .panel {
      			position:absolute;
      			right:20px;
      			top:20px;
      			background:#fafafa;
      		}

      		.editor .content .panel .item {
				    font-size:17px;
      		}

      		.editor .panel .vertical.menu {
      			width:4em;
      			border: 0px;
      		}

          .editor .title .ui.header {
            margin:0px
          }

          .editor .header .dropdown {
            display:flex;
            align-items:center;
          }
          .editor .header .dropdown i {
            margin-left:10px;
          }
          .editor .header .dropdown .menu .item {
            editor:flex;
            align-items:center;
          }
      	`}</style>
      </div>
    );
  }
}


export default connect((state) => state)(Editor)
