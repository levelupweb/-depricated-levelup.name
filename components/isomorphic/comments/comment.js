// Important
import React from 'react';

// Components
import TimeAgo from 'timeago-react';
import Avatar from 'react-avatar'
import Link from 'next/link'

export default class Comment extends React.Component {
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
