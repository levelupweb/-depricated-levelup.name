import React from 'react';
import Link from 'next/link'
import Avatar from 'react-avatar'
import { getPostCommentsByPostId, postComment } from '../../actions/comment.js'
import { getUserById } from '../../actions/user.js'
import TimeAgo from 'timeago-react';
import { connect} from 'react-redux'
import User from '../user'
import cookies from 'js-cookie'

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	active: true,
    	comments: null,
    	components: null,
    	commentForm: null
    }
    this.token = cookies.get('x-access-token')
    this.currentUser = this.props.user.profile
  }

  componentWillMount() {
  	var components = [];
  	getPostCommentsByPostId(this.props.postId).then((res) => {
  		this.setState({
  			comments: res.data
  		})
  	}).then(() => {
  		this.state.comments.map((item) => {
  			components.push(<Comment data={item} />)
  		})
  	}).then(() => {
  		this.setState({
  			components: components
  		})
  	})
  }

  handleReply() {
	window.scrollTo(0, document.body.scrollHeight);
  }

  handleSubmit() {
  	var comment = this.state.commentForm;
  	var token = this.token;
  	var data = {
  		commentContent: comment,
  		commentAuthor: this.currentUser._id,
  		commentPost: this.props.postId
  	}
  	postComment(token, data).then((res) => {
  		console.log(res.data)
  	})
  }

  handleTyping() {
  	var input = this.commentForm;
  	this.setState({
  		commentForm: input.value
  	})
  }


  render() {
  	var currentUser = this.props.user.profile;
  	if(this.state.active) {
	    return (
	      <div className="comments">
	      	<h3 className="ui header">
	      		Комментарии пользователей
	      		<div className="sub header">1 комментария</div>
	      	</h3>
	      	<div className="ui comments" ref={(container) => {this.container = container}}>
	      	  <form id="replyForm" ref={(reply) => {this.replyForm = reply}} className="ui reply form hidden">
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
			  <div className="comments">
			    {this.state.components}
			  </div>
			  <div className="ui divider"></div>
			</div>
			{(currentUser) ? 
			  	<div ref={(floating) => {this.floating = floating}} className="floating">
			  		<div className="left">
			  			<div className="form">
			  				<User id={currentUser._id} size="dropdown" />
			  				<textarea onClick={() => {this.handleReply()}} onChange={() => {this.handleTyping()}} ref={(commentForm) => {this.commentForm = commentForm}} placeholder="Ваш комментарий.."></textarea>
			  			</div>
			  		</div>
			  		<div className="right">
			  			<a href="#" onClick={() => {this.handleSubmit()}} className="ui circular button primary basic">Отправить</a>
			  		</div>
			  	</div>
			  	: 
			  	<div><Link href="/auth">Авторизируйтесь, чтобы оставить комментарий</Link></div>
			  }

			<style jsx>{`
				.comments .floating {
					display:flex;
					justify-content:space-between;
					align-items:flex-start;
					transition:0.2s all ease;
				}

				.comments .floating.active {
					bottom:0px;
				}

				.comments. .floating .user {
					margin:0px;
				}

				.comments .floating textarea {
					border:0px;
					background:transparent;
					width:100%;
					height:30px;
					outline:none;	
					margin:0px 20px; 
					resize: none;
					transition:0.2s all ease;
				}
				.comments .floating textarea:focus {
					height:100px;
				}
				.comments .floating .left {
					width:100%;
				}
				.comments .floating .form {
					display:flex;
					justify-content:flex-start;
					align-items:flex-start;
					width:100%;
				}

				.comments .expand {
					display:none;
				}

				.comments.preview .expand {
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
					margin-bottom:0px;
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

			`}</style>
	      </div>
	    )
	} else {
		return (
			<div className="expander">
				<button onClick={() => {this.handleLoad()}}>
					Загрузить 26 комментариев
				</button>
				<style jsx>{`
					.expander {
						text-align:center;
						width:100%;
					}

					.expander button {
						border:1px solid #eee;
						padding:20px;
						text-align:center;
						width:100%;
						background:transparent;
					}
				`}</style>
			</div>
		)
	}
  }
}

export default connect((store) => store)(Comments)


class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	comment: null,
    	user: null
    }
  }

  async componentWillMount() {
  	await this.setState({
  		comment: this.props.data
  	})

  	await getUserById(this.state.comment.commentAuthor).then((res) => {
  		this.setState({
  			user: res.data
  		})
  	})
  }

  render() {
  	var user = this.state.user;
  	var comment = this.state.comment;
  	if(user && comment) { 
	    return (
	      <div className="comment">
	        <a className="avatar">
	          <Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
	            <Avatar color={`#46978c`} round={true} size={32} src={user.userImage} name={user.userName} />
	          </a></Link>
		    </a>
		    <div className="content">
		      <a className="author">{user.userName}</a>
		      <div className="metadata">
		        <div className="date"><TimeAgo datetime={comment.commentDate} locale='ru' /></div>
		      </div>
		      <div className="text">
		        {comment.commentContent}
		      </div>
		      <div className="actions">
		        <a href="#" className="reply">Ответить</a>
		        <a href="#" className="hide"><i className="fa fa-heart-o"></i> Мне нравится</a>
		      </div>
		    </div>
		    {/* <div className="comments">
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
		    </div> */}
	      </div>
	    );
	} else {
		return (<div></div>)
	}
  }
}
