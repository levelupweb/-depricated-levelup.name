import React from 'react';
import { Avatar } from '../user.js'

export default class Editor extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  	this.bindListeners();
  	this.settingTextareaHeight();
  }

  bindListeners() {
  	var _this = this;
  	var thumbnail = document.querySelector('.thumbnail');
  	var form = document.getElementById('thumbnailUploader')
  	thumbnail.addEventListener('click', () => {
  		form.click();
  	})

  	var input = document.getElementById('postTitle');
  	input.focus()
  	input.addEventListener('keyup', () => {
  		_this.handleType(input.value)
  	})
  }


  settingTextareaHeight() {
  	var header = document.querySelector('.editor > .header');
  	var thumbnail = document.querySelector('.editor > .thumbnail');
  	var clientHeight = document.body.clientHeight;
  	var headerHeight = header.clientHeight + thumbnail.clientHeight;
  	var form = document.querySelector('.content textarea');
  	form.style.height = clientHeight - headerHeight - 62 + 'px';
  }

  handleType(val) {
  	var postLink = document.getElementById('postLink');
  	var link = val.replace(/\s/g, '-').toLowerCase()
  	postLink.innerHTML = link;
  }



  render() {
    return (
      <div className="editor">
      	<div className="header block">
	      	<div className="title">
	      		<Avatar size="small" />
	      		<h3 className="ui header">
	      			<input id="postTitle" type="text" placeholder="Ваш заголовок" />
	      			<span className="sub header">http://levelup.name/<span id="postLink">ссылка</span></span>
	      		</h3>
	      	</div>
	      	<div className="action">
	      		<button className="large fluid circular ui button primary">
				  Написать пост
				</button>
	      	</div>
      	</div>
      	<div className="thumbnail">
      		<input type="file" id="thumbnailUploader" />
      		Загрузить изображение
      	</div>
      	<div className="content block">
			<textarea placeholder="Ваш текст здесь.."></textarea>
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

      	<style jsx>{`
      		.editor .header .title > * {
				vertical-align:middle;
      		}

			.editor > .header,
			.editor > .header .title {
				display:flex;
				flex-direction:row;
				justify-content:space-between;
				align-items:center;
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
			}
      		.editor .action {
      		}

      		.editor .thumbnail {
      			height:100px;
      			width:100%;
      			display:flex;
      			justify-content:center;
      			align-items:center;
      			background:#fafafa;
      			cursor:pointer;
      			transition:0.2s all ease;
      		}

      		.editor .thumbnail:hover {
      			background:#eee;
      		}

      		#thumbnailUploader {
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
      			border-bottom:1px solid rgba(0,0,0,0.2);
      			padding:10px 0px;
      			font-size:20px;
      		}

      		.editor .content input:focus,
      		.editor .content textarea:focus {
      			outline:0px;
      		}

      		.editor .content textarea {
      			width:100%;
      			background:none;
      			border:0px;
      			font-size:16px;
      			min-height:50vh;
      		}

      		.editor .content .panel {
      			position:absolute;
      			left:100%;
      			top:0px;
      			background:#fafafa;
      		}


      		.editor .content .panel .item {
				font-size:17px;
      		}

      		.editor .panel .vertical.menu {
      			width:4em;
      			border-left: 0px;
    			border-radius: 0px 3px 3px 0px;
      		}

      	`}</style>
      </div>
    );
  }
}
