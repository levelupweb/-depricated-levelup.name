import React from 'react';
import { getPostComments, addComment } from '../actions/comment.js'
import cookies from 'js-cookie'
import { connect } from 'react-redux'
import TimeAgo from 'timeago-react';
import Avatar from 'react-avatar'
import Link from 'next/link'


// clever component
class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.token = cookies.get('x-access-token')
	   this.currentUser = this.props.user.profile;
		this.state = {
			comments: []
		}
	}

	componentWillMount() {
		this.getComments(this.props.postID)
	}

	componentWillReceiveProps(nextProps) {
		this.getComments(nextProps.postID)
	}

	getComments(id) {
		getPostComments(id).then((res) => {
			if(res.data.length > 0) {
				this.setState({
					comments: res.data
				})
			}
		})
	}

	render() {
		if(this.state.comments.length > 0) {
			var comments = this.state.comments.map((item, i) => {
				return (<Comment comment={item} key={i} />)
			})
			return (
				<div className="ui comments">
				   <div className="comments">
				   	{comments}
				   </div>
				   {(this.currentUser) && 
					   <ReplyForm
					   	user={this.currentUser}
					   	postID={this.props.postID} 
					   	isRevealed={this.props.isRevealed} 
					   />
					}
				   <style jsx>{`
						.ui.comments {
							margin:10px 0px;
							margin-top:15px;
			          	padding-top:15px;
			          	border-top:1px solid #eee;
						}
				   `}</style>
				</div>
			)
		} else {
			if(this.currentUser) {
				return (
					<ReplyForm 
						user={this.currentUser}
						isRevealed={this.props.isRevealed} 
						postID={this.props.postID} 
					/>
				)
			} else {
				return null
			}
		}
	}
}

class ReplyForm extends React.Component {

	constructor(props) {
		super(props);
		this.token = cookies.get('x-access-token')
		this.defaultState = {
			isRevealed: false,
			comment: {
				commentContent: '',
				commentAuthor: null,
				commentPost: null
			}
		}
		this.state = this.defaultState
	}

	componentWillMount() {
		this.settingUp(this.props.user._id, this.props.postID)
	}

	componentWillReceiveProps(nextProps) {
		this.settingUp(nextProps.user._id, nextProps.postID)
	}

	settingUp(userID, postID) {
		this.setState({
			comment: {
				...this.state.comment,
				commentAuthor: userID,
				commentPost: postID
			}
		})
	}

	submitComment(token, comment) {
		addComment(token, comment).then((res) => {
			if(res.data.success) {
				this.flushForm()
				console.log(res.data)
			} else {
				console.log(res.data)
			}
		})
	}

	flushForm() {
		this.setState({
			comment: {
				...this.state.comment,
				commentContent: ''
			}
		})
	}

	render() {
		var user = this.props.user
		if(this.props.isRevealed) {
			return (
				<form className="ui reply form">
			     	<div className="field">
			     		<div className="user">
				      	<Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
		                  <Avatar color={`#46978c`} round={true} size={32} src={user.userImage} name={user.userName} />
		               </a></Link>
		            </div>
		            <div className="textarea">
				      	<textarea 
				      		onChange={(e) => {this.setState({comment: {...this.state.comment, commentContent: e.target.value}})}}
				      		placeholder="Оставьте ваш комментарий" 
				      		ref={(e) => {this.textarea = e}}>
				      	</textarea>
				      	<div 
					    		onClick={() => {this.submitComment(this.token, this.state.comment)}}
					    		className="ui button primary small circular">
					      	Отправить
					    	</div>
				      </div>
			      	
			    	</div>
			    	<style jsx>{`
						.form textarea {
							border:0px;
							height:40px;
							background:#fafafa;
						}
						.reply {
							margin-top:30px;
						}
						.form .field {
							display:flex;
						}
						.form .field .textarea {
							position:relative;
							width:100%;
						}
						.form .field .user {
							margin-right:15px;
						}
						.form .field .button {
							position:absolute;
							left:0px;
							bottom:0px;
							margin:10px;
						}
			    	`}</style>
			   </form>
			)
		} else {
			return null
		}
	}
}

class Comment extends React.Component {
  constructor(props) {
    super(props);
    comment: null
  }

  componentWillMount() {
  	this.setState({
  		comment: this.props.comment
  	})
  }

  render() {
  	var comment = this.state.comment;
  	var user = comment.commentAuthor;
  	if (comment) {
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
		        	<span className="date"><TimeAgo datetime={comment.commentDate} locale='ru' /></span>
		      </div>
		      <div className="text">
		        	{comment.commentContent}
		      </div>
		      <div className="actions">
		        	<a className="reply">Ответить</a>
		      </div>
		    </div>
		  </div>
	    );
	 } else {
	 	return null
	 }
  }
}


export default connect((store) => store)(Comments)