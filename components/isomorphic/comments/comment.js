// Important
import React from 'react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'

// Actions
import { updateComment } from '../../../actions/comment.js'

// Components
import TimeAgo from 'timeago-react';
import Avatar from 'react-avatar'
import Link from 'next/link'

class Comment extends React.Component {
  	constructor(props) {
	   super(props);
	   this.currentUser = this.props.currentUser;
	   this.token = cookies.get('x-access-token');
	   this.state = {
	   	comment: { ...this.props.comment },
	   	isEditing: false
	   }
  	}

  	removeComment(id) {
  		removeComment(this.token, id).then((res) => {
  			if(res.data.success) {
  				$('.comment-' + id).hide(500);
  			} else {
  				console.log(res.data)
  			}
  		})
  	}

  	editComment(comment) {
  		this.setState({
  			isEditing: true
  		})
  	}

  	cancelEditing() {
  		this.setState({
  			isEditing: false,
  			comment: this.props.comment
  		})
  	}

  	handleChange(value) {
  		this.setState({
  			comment: {
  				...this.state.comment,
  				commentContent: value
  			}
  		})
  	}

  	saveComment(comment) {
  		updateComment(this.token, comment).then((res) => {
  			if(res.data.success) {
  				this.setState({
  					isEditing: false
  				})
  			} else {
  				console.log(res.data)
  			}
  		})
  	}

  render() {
  	var comment = this.state.comment;
  	var user = comment.commentAuthor;
  	if (comment) {
  		if(!this.state.isEditing) {
		    return (
		      <div className={`comment comment-${comment._id}`}>
			      <span className="avatar">
				     	<Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
		               <Avatar color={`#46978c`} round={true} size={32} src={user.userImage} name={user.userName} />
		            </a></Link>
			    	</span>
			    	<div className="content">
			      	<a className="author">{user.userName}</a>
			      <div className="metadata">
			        	<span className="date"><TimeAgo datetime={comment.commentDate} locale='ru' /></span>
			      </div>
			      <div className="text">
			        	{comment.commentContent}
			      </div>
			      <div className="actions">
			        	{user._id == this.currentUser._id &&
			        		<span>
				        		<a onClick={() => {this.props.onRemove(this.token, comment._id, this.props.num)}}>Удалить</a>
				        		<a onClick={() => {this.editComment(comment)}}>Редактировать</a>
			        		</span>
			        	}
			      </div>
			    </div>
			  </div>
		    );
		 } else {
		 	return (
		 		<div className={`comment comment-${comment._id}`}>
			      <span className="avatar">
				     	<Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
		               <Avatar color={`#46978c`} round={true} size={32} src={user.userImage} name={user.userName} />
		            </a></Link>
			    	</span>
			    	<div className="content">
			      	<a className="author">{user.userName}</a>
			      <div className="metadata">
			        	<span className="date"><TimeAgo datetime={comment.commentDate} locale='ru' /></span>
			      </div>
			      <div className="text">
						<textarea 
							onInput={(e) => {this.handleChange(e.target.value)}}
							defaultValue={comment.commentContent} 
							cols="2">
						</textarea>
			      </div>
			      <div className="actions">
			        	{user._id == this.currentUser._id && 
			        		<span>
				        		<a className="reply" onClick={() => {this.saveComment(this.state.comment)}}>Сохранить</a>
					        	<a className="reply" onClick={() => {this.cancelEditing()}}>Отменить</a>
					      </span>
			        	}
			      </div>
			    </div>
			    <style jsx>{`
						textarea {
							border:0px;
							height:40px;
							min-height:40px;
							border-bottom:1px solid #eee;
							border-radius:0px;
							padding:0px;
							width:100%;
							outline:none;
						}
			    `}</style>
			  </div>
		 	)
		 }
	 } else {
	 	return null
	 }
  }
}


function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Comment)