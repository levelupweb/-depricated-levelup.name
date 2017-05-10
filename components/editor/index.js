import React from 'react';
import { Avatar } from '../user.js'
import config from '../../app.config'
import 'isomorphic-fetch'


export default class Editor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: '893nf821fnk',
        postThumbnail: null,
        postTitle: '',
        postTags: '',
      }
    }
  }

  componentDidMount() {
    // Подготовка разметки
    var Quill = require('quill')
    var options = {
      debug: 'info',
      modules: {
        toolbar: '#toolbar'
      },
      placeholder: 'Compose an epic...'
    };
    var editor = new Quill('#editor', options);
  	this.settingTextareaHeight();
    this.postTitle.focus();
  }

  handleThumbnail() {
    if(!this.state.post.postThumbnail) { 
      this.uploader.click();
    } else {
      this.handleDeleteThumbnail()
    }
  }

  settingTextareaHeight() {
  	var clientHeight = document.body.clientHeight;
  	var headerHeight = this.headerwrapper.clientHeight;
  	this.textarea.style.height = clientHeight - headerHeight - 112 + 'px';
  }

  handleTyping(e) {
    var value = e.target.value
  	var link = value.replace(/\s/g, '-').toLowerCase()
  	this.link.innerHTML = link;
    this.setState({
      ...this.state,
      post: { 
        ...this.state.post,
        postTitle: value 
      }
    })
  }

  handleSave() {
    
  }

  parseForm() {
    //this.editor.querySelector('input')
  }

  async handleUpload(e, id) {
    var image = e.target.files[0];
    var formData = new FormData();
    var url = config.API + 'post/upload';
    await formData.append('postThumbnail', image);
    await formData.append('postId', id)
    if (image) {
       await fetch(url, {
        method:'POST',
        body: formData
      }).then(async (res) => {
        var result = await res.json()
        await this.setThumbnail(result.filename);
      })
    }
  }

  setThumbnail(filename) {
    var url = config.storage + 'posts/' + this.state.post.id + '/' + filename;
    this.setState({
      post: { postThumbnail: url }
    })
  }

  componentDidUpdate() {
    //this.handleStatus('Черновик сохранён')
  }

  handleStatus(status) {
    this.status.innerHTML = status;
    setTimeout(() => {
      this.status.innerHTML = '';
    }, 3000)
  }

  getBackground() {
    if(this.state.post.postThumbnail) {
      return (<img src={this.state.post.postThumbnail} className="header-background-img" />)
    }
  }

  handleDeleteThumbnail() {
    this.setState({
      post: {
        postThumbnail: null
      }
    })
  }

  handleFirstSave() {
    if(this.state.post.postTitle != '' && this.state.post.postThumbnail != null) {
      this.handleStatus('Черновик сохранён')
    }
  }

  render() {
    return (
      <div className="editor" ref={(editor) => {this.editor = editor}}>
      	<div className="header-wrapper" ref={(headerwrapper) => {this.headerwrapper = headerwrapper}}>
          <div className="header" ref={(header) => {this.header = header}}>
            <div className="header-background"><img src={this.state.post.postThumbnail} className="header-background-img" /></div>
            <div className="header-content block">
    	      	<div className="title">
    	      		<Avatar size="small" />
    	      		<h3 className="ui header">
    	      			<input defaultValue={this.state.post.postTitle} name="postTitle" ref={(postTitle) => {this.postTitle = postTitle}} onChange={(e) => {this.handleTyping(e)}} type="text" placeholder="Ваш заголовок" />
    	      			<span className="sub header">http://levelup.name/<span ref={(link) => {this.link = link}}>ссылка</span></span>
    	      		</h3>
    	      	</div>
    	      	<div className="action">
                <span className="status" ref={(status) => {this.status = status}}></span>
                <button className="ui primary basic button circular large" onClick={() => {this.handleSave()}}>
                  Опубликовать
                </button>
    	      	</div>
            </div>
            <div className="thumbnail" onClick={() => {this.handleThumbnail()}} ref={(thumbnail) => {this.thumbnail = thumbnail}}>
              <input onChange={(e) => {this.handleUpload(e, this.state.post.id)}} ref={(uploader) => {this.uploader = uploader}} type="file" name="postThumbnail" />
              <span>{(this.state.post.postThumbnail == null) ? <span>Загрузить изображение</span> : <span onClick={() => {this.handleDeleteThumbnail()}}>Удалить изображение</span>}</span>
            </div>
        	</div>
        </div>
        <div className="content">
          <div className="block block-shadow floating">
            <div className="tags">
              <input defaultValue={this.state.post.postTags} name="postTags" type="text" placeholder="Вводите теги через запятую" />
            </div>
          </div>
        	<div className="block">
            <div id="toolbar">
              <select className="ql-size">
                <option value="small"></option>
                <option defaultValue></option>
                <option value="large"></option>
                <option value="huge"></option>
              </select>
              <button className="ql-bold"></button>
              <button className="ql-script" value="sub"></button>
              <button className="ql-script" value="super"></button>
            </div>
      			<textarea id="editor" onFocus={() => {this.handleFirstSave()}} placeholder="Ваш текст здесь.." ref={(textarea) => {this.textarea = textarea}}></textarea>
      			<div className="panel">
        			<div className="ui vertical menu">
        			  <div className="ui left pointing dropdown link item">
        			    <i className="fa fa-header"></i>
        			    <div className="menu">
        			      <div className="item">Заголовок 1</div>
        			      <div className="item">Заголовок 2</div>
        			      <div className="item">Заголовок 3</div>
        			      <div className="item">Заголовок 4</div>
        			    </div>
        			  </div>
        				<a className="item"><i className="fa fa-bold"></i></a>
        				<a className="item"><i className="fa fa-italic"></i></a>
        				<a className="item"><i className="fa fa-underline"></i></a>
        				<a className="item"><i className="fa fa-list"></i></a>
        				<a className="item"><i className="fa fa-list-ol"></i></a>
        				<a className="item"><i className="fa fa-chain"></i></a>
        				<a className="item"><i className="fa fa-save"></i></a>
        			</div>
      			</div>
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
    			}

      		.editor .thumbnail {
            position:absolute;
            left:0px;
            bottom:0px;
      			height:100px;
      			width:100%;
            z-index:10;
      			display:flex;
      			justify-content:center;
      			align-items:center;
      			background:rgba(0,0,0,0.05);
      			cursor:pointer;
      			transition:0.2s all ease;
      		}

          .editor .thumbnail > span {
            border-bottom:1px solid rgba(0,0,0,0.1);
            padding-bottom:4px;
          }

      		.editor .thumbnail:hover {
      			background:rgba(0,0,0,0.1);
      		}

      		.editor .thumbnail input[type="file"] {
      			display:none;
      			opacity:0;
      			visibility:hidden;
      		}

    			.editor .content {
    				position:relative;
    			}

      		.editor .content input {
      			width:100%;
      			background:none;
      			border:0px;
      			padding:5px 0px;
      			font-size:15px;
      		}

      		.editor .content input:focus,
      		.editor .content textarea:focus {
      			outline:0px;
      		}

      		.editor .content textarea {
      			width:100%;
            padding-right:200px;
      			background:none;
      			border:0px;
      			font-size:16px;
      			min-height:50vh;
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

      	`}</style>
      </div>
    );
  }
}
