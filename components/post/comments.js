import React from 'react';

export default class Comments extends React.Component {

  constructor(props) {
    super(props);
  }

  handleReply(e) {
  	e.preventDefault();
  	const form = document.getElementById('replyForm');

  	form.classList.toggle('hidden');
  }

  handleExpand(e) {
  	e.preventDefault();
  	const container = document.getElementById('commentsContainer');
  	const button = e.target;

  	container.classList.remove('preview')
  	button.classList.add('hidden')
  }

  render() {
    return (
      <div className="comments block">
	      <div className="title">
	      	<h3 className="ui header">
	      		<span className="ui label primary">
	      			<i className="fa fa-comment-o"></i>23
	      		</span> Комментарии 
	      	</h3>
		    <a href="#" className="ui button primary" onClick={(e) => {this.handleReply(e)}}>Комментировать</a>
	      </div>

      	<div className="ui divider"></div>

      	<div className="ui comments preview" id="commentsContainer">
      	  <a className="ui button" id="expandComments" onClick={(e) => {this.handleExpand(e)}}>Раскрыть комментарии</a>
      	  <form id="replyForm" className="ui reply form hidden">
		    <div className="field">
			    <textarea cols="2" placeholder="Ваш комментарий здесь.."></textarea>
		    </div>
		    <div className="ui labeled submit icon button primary">
		      <i className="fa fa-send icon"></i> Ответить
		    </div>
		    <div className="profile">
		    	<a href="#"><img className="circular inline image ui mini " src="../static/img/avatar.png" /> Иван К.</a>
		    </div>
		  </form>
		  <div className="comment">
		    <a className="avatar">
		      <img src="../../static/img/avatar.png" />
		    </a>
		    <div className="content">
		      <a className="author">Коряковцев Иван</a>
		      <div className="metadata">
		        <div className="date">2 дня назад</div>
		      </div>
		      <div className="text">
		        Эй, это просто офигительная статья. Продолжай еще писать на эту тему!
		      </div>
		      <div className="actions">
		        <a href="#" className="reply">Ответить</a>
		        <a href="#" className="hide"><i className="fa fa-heart-o"></i> Мне нравится</a>
		      </div>
		    </div>
		    <div className="comments">
		      <div className="comment">
		        <a className="avatar">
			      <img src="../../static/img/avatar.png" />
			    </a>
			    <div className="content">
			      <a className="author">Коряковцев Иван</a>
			      <div className="metadata">
			        <div className="date">2 дня назад</div>
			      </div>
			      <div className="text">
			        Поддерживаю
			      </div>
			      <div className="actions">
			        <a href="#" className="reply">Ответить</a>
			        <a href="#" className="hide"><i className="fa fa-heart-o"></i> Мне нравится</a>
			      </div>
			    </div>
		      </div>
		      <div className="comment">
		        <a className="avatar">
			      <img src="../../static/img/avatar.png" />
			    </a>
			    <div className="content">
			      <a className="author">Коряковцев Иван</a>
			      <div className="metadata">
			        <div className="date">2 дня назад</div>
			      </div>
			      <div className="text">
			        Лол, ты серьезно!?
			      </div>
			      <div className="actions">
			        <a href="#" className="reply">Ответить</a>
			        <a href="#" className="hide"><i className="fa fa-heart-o"></i> Мне нравится</a>
			      </div>
			    </div>
		      </div>
		      <div className="comment">
		        <a className="avatar">
			      <img src="../../static/img/avatar.png" />
			    </a>
			    <div className="content">
			      <a className="author">Коряковцев Иван</a>
			      <div className="metadata">
			        <div className="date">2 дня назад</div>
			      </div>
			      <div className="text">
			        Лол, ты серьезно!?
			      </div>
			      <div className="actions">
			        <a href="#" className="reply">Ответить</a>
			        <a href="#" className="hide"><i className="fa fa-heart-o"></i> Мне нравится</a>
			      </div>
			    </div>
		      </div>
		    </div>
		  </div>
		</div>

		<style jsx>{`

			.comments.preview {
				background:#fff;
				position:relative;
				max-height:300px;
				overflow:hidden;
			}

			.comments #expandComments {
				display:none;
			}

			.comments.preview #expandComments {
				position:absolute;
				left:0px;
				right:0px;
				bottom:0px;
				z-index:1000;
				background:transparent;
				display:block
			}

			.comment .content {
				margin-bottom:10px;
			}
			.comments h3.header {
				margin-top:0px;
			}

			.comments .title {
				display:flex;
				justify-content:space-between;
				align-items:center;
			}

			.comments .text {
				font-size:15px!important;
			}
	
			.comments .reply {
				margin-bottom:20px;
			}

			.comments .reply .profile {
				display:inline-block;
				padding-left:15px;
			}

			.comments.preview:before {
				position:absolute;
				left:0px;
				bottom:0px;
				right:0px;
				height:150px;
				z-index:999;
				content: '';
				/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&0+0,1+100 */
				background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
				background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
				background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
			}
		`}</style>
      </div>
    );
  }
}
