import React from 'react';
import User from '../user.js'
import { setLikeById } from '../../actions/post.js'
import cookies from 'js-cookie'
import { connect } from 'react-redux'
import Blog from '../blog.js'

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token')
    this.currentUser = this.props.user.profile;
    this.post = this.props.post;
    this.state = {
    	isLiked: false,
    	likeCounter: 0
    }
  }

  componentWillMount() {
  	if(this.currentUser) {
	  	if(this.post.postLikes.indexOf(this.currentUser._id) != -1) {
	     this.setState({
		      isLiked: true,
		      likeCounter: this.post.postLikes.length
	     })
	   }
	}
  }

  	handleLike(postID, userID) {
    	setLikeById(this.token, postID).then((res) => {
      	if(res.data.success) {
	        	this.setState({
		       	...this.state.post,
		       	isLiked: !this.state.isLiked,
		       	likeCounter: res.data.counter
	        })
      	}
    	})
  	}

  render() {
    var post = this.post;
		if (post) {
			var likes = this.state.likeCounter;
			return (
				<article className={`article note preview grid-item w-100`}>
					{(post.postAuthor.authorType == 'user') ?
			            <User id={post.postAuthor.authorID} /> : <Blog id={post.postAuthor.authorID} />
			          }
		        <div className="image">
		        	{(post.postImage) && <img src={post.postImage} width="100%" className="ui image rounded" /> }
		        	{(post.postVideo) && <iframe width="100%" height="315" src={post.postVideo} frameBorder="0" allowFullScreen={true}></iframe> }
		        </div>
		        <div className="content">
		          <p className="primary">{post.postContent}</p>
		        </div>
		        <div className="link">
		        	{(post.postLink) && 
			        	<div><i className="fa fa-link"></i>
			        	<a href={post.postLink} target="_blank">{post.postLink}</a></div>
		        	}
		        </div>
		        <div className="meta">
		        	<span onClick={() => {this.handleLike(post._id, this.currentUser._id)}} className={(this.state.isLiked) ? `ui button circular small primary` : `ui button circular small`}>
		        		<i className={(this.state.isLiked) ? `fa fa-heart icon` : `fa fa-heart-o icon`}></i> {likes}
		        	</span>
		        </div>
		        <style jsx>{`
		          .note p.primary {
		          	font-size:17px;
		          	color:#333;
		          }
		          .note .link {
		          	padding:15px;
		          	border:1px solid #eee;
		          	border-radius:5px;
		          	margin-bottom:15px;
		          }
		          .note .link i {
		          	margin-right:15px;
		          	opacity:.4;
		          }
		        `}</style>
		      </article>
			)
		} else {
			return <Blank />
		}
  }
}


var Blank = (props) => {
	return (
		<div>
	        <div className="user">
	          <div className="image">
	            <div className="blank avatar"></div>
	          </div>
	          <div className="content">
	            <div className="blank string"></div>
	            <div className="blank string"></div>
	          </div>
	        </div>
	        <div className="content">
	          <div className="blank header"></div>
	          <div className="blank description"></div>
	          <div className="blank description"></div>
	        </div>
	        <style jsx>{`
	          .user .content {
	            margin-left:15px;
	          }
	          .user {
	            display:flex;
	            flex-direction:row;
	          }
	        `}</style>
	      </div>
	)
}

export default connect((store) => store)(Note)