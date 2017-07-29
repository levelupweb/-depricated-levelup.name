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
	  this.token = cookies.get('x-access-token');
	  this.state = {
	   	comment: { ...this.props.comment },
	   	isEditing: false
	  }
  }

  removeComment(id) {
  	removeComment(this.token, id).then((response) => {
  		if(response.data.success) {
  			$('.comment-' + id).hide(500);
  		} else {
  			console.log(response.data)
  		}
  	})
  }

  editComment(comment) {
		this.setState({
			isEditing: true
		})
  }

  cancelEditing() {
  	const { comment } = this.props;
		this.setState({
			isEditing: false,
			comment
		})
  }

  handleChange(value) {
  	const { comment } = this.state;
		this.setState({
			comment: {
				...comment,
				content: value
			}
		})
  }

  saveComment(comment) {
		updateComment(this.token, comment).then((response) => {
			if(response.data.success) {
				this.setState({
					isEditing: false
				})
			} else {
				console.log(response.data)
			}
		})
  }

  render() {
  	const { comment, isEditing } = this.state;
  	const { currentUser } = this.props;

  	if (comment) {
  		const { _id, content, updated } = comment
  		const user = comment.author
  		if(!isEditing) {
		    return (
		      <div className={`comment comment-${_id}`}>
			      <span className="avatar">
				     	<Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
	              <Avatar color={`#46978c`} round={true} size={32} src={user.image} name={user.fullName} />
	            </a></Link>
			    	</span>
			    	<div className="content">
			      	<a className="author">{user.fullName}</a>
			      <div className="metadata">
			        	<span className="date"><TimeAgo datetime={updated} locale='ru' /></span>
			      </div>
			      <div className="text">
			        	{content}
			      </div>
			      <div className="actions">
			        	{user._id == currentUser._id &&
			        		<span>
				        		<a onClick={() => {this.props.onRemove(this.token, _id)}}>Удалить</a>
				        		<a onClick={() => {this.editComment(comment)}}>Редактировать</a>
			        		</span>
			        	}
			      </div>
			    </div>
			  </div>
		    );
		 } else {
		 	return (
		 		<div className={`comment comment-${_id}`}>
			      <span className="avatar">
				     	<Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
	               <Avatar color={`#46978c`} round={true} size={32} src={user.image} name={user.fullName} />
	            </a></Link>
			    	</span>
			    	<div className="content">
			      	<a className="author">{user.fullName}</a>
			      <div className="metadata">
			        	<span className="date"><TimeAgo datetime={updated} locale='ru' /></span>
			      </div>
			      <div className="text">
						<textarea 
							onInput={(e) => {this.handleChange(e.target.value)}}
							defaultValue={content} 
							cols="2">
						</textarea>
			      </div>
			      <div className="actions">
		        	{user._id == currentUser._id && 
		        		<span>
			        		<a className="reply" onClick={() => {this.saveComment(comment)}}>Сохранить</a>
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