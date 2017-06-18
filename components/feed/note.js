import React from 'react';
import User from '../user.js'
import { uploadImage } from '../../actions/app.js'
import { setLikeById, 
			removePostById } from '../../actions/post.js'
import { startPostEditing, 
			updatePostContent,
			updatePostImage, 
			updatePostLink, 
			updatePostVideo, 
			updatePost  } from '../../actions/editingPost.js'
import cookies from 'js-cookie'
import { connect } from 'react-redux'
import Blog from '../blog.js'
import TimeAgo from 'timeago-react';
import Link from 'next/link'
import getYouTubeId from '../../utils/getYouTube.js' 

class Note extends React.Component {
   constructor(props) {
	   super(props);
	   this.token = cookies.get('x-access-token')
	   this.currentUser = this.props.user.profile;
	   this.post = this.props.post;
	   this.dispatch = this.props.dispatch;
	   this.state = {
	    	isLiked: false,
	    	likeCounter: 0,
	    	isEditing: false,
	    	post: null
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
		if(this.post.postContent) {
			this.setState({
			 	post: this.post
			})
		}
   }

   componentDidMount() {
   	$('.ui.dropdown').dropdown({
	  		on: 'hover'
	  	})
   }

  	// добавить токен
   handleRemove(id) {
      var result = confirm('Вы действительно хотите удалить запись?');
      if (result) {
	      removePostById(id).then((res) => {
	      	if(res.data.success) {
	      		$('.post-' + id).hide(500);
	      	}
	      })
      }
   }

  	handleEditing(post) {
  		this.dispatch(startPostEditing({
  			postContent: post.postContent,
  			postImage: post.postImage,
  			postVideo: post.postVideo,
  			postLink: post.postLink
  		})).then(() => {
  			this.setState({
	  			isEditing: true
	  		})
  		})
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

  	uploadImage(e) {
	   var image = e.target.files[0];
	   uploadImage(this.token, image).then((res) => {
	   	this.dispatch(updatePostImage(res.path)).then(() => {
	   		this.setState({
	   			post: {
			         ...this.state.post,
			         postImage: res.path,
			      }
	   		})
	   	})
	   })
   }

  	handleSave(id, data, token) {
  		this.dispatch(updatePost(id, data, token)).then(() => {
  			this.setState({
  				isEditing: false,
  				post: {
  					...this.state.post,
  					...data
  				}
  			})
  		})
  	}

  	removeImage() {
  		this.dispatch(updatePostImage(null)).then(() =>{
  			this.setState({
  				post: {
  					...this.state.post,
  					postImage: null
  				}
  			})
  		})
  	}

  	removeVideo() {
  		this.dispatch(updatePostVideo(null)).then(() =>{
  			this.setState({
  				post: {
  					...this.state.post,
  					postVideo: null
  				}
  			})
  		})
  	}

  	onVideo(url) {
	   var id = getYouTubeId(url)
	  	this.props.dispatch(updatePostVideo(id)).then(() => {
	  		this.setState({
	  			post: {
  					...this.state.post,
  					postVideo: id
  				}
	  		})
	  	})
   }

  render() {
    var post = this.state.post;
		if (post) {
			var likes = this.state.likeCounter;
			return (
				<article className={`article note preview post-${post._id}`}>
					<div className="user">
						<div className="left">
							{(post.postAuthor.authorType == 'user') ?
					         <User id={post.postAuthor.authorID} /> : <Blog id={post.postAuthor.authorID} />
					      }
				      </div>
			         <div className="right">
			        	<div className="ui dropdown">
							<i className="fa fa-ellipsis-h" aria-hidden="true"></i>
							  <div className="menu">
							  	 <div className="item" onClick={() => {this.handleEditing(post)}}>Редактировать</div>
							  	 <div className="item">Пожаловаться</div>
							    <div className="item" onClick={() => {this.handleRemove(post._id)}}>Удалить</div>
							</div>
						</div>
			         </div>
				   </div>
			      <div className="image">
			        	<Image 
			        		url={post.postImage}
			        		dispatch={this.dispatch}
			        		editing={this.state.isEditing}
			        		onRemove={() => {this.removeImage()}}
			        	/>
			        	<Video 
			        		video={post.postVideo}
			        		dispatch={this.dispatch}
			        		editing={this.state.isEditing}
			        		onRemove={() => {this.removeVideo()}}
			        	/>
			      </div>
			      <div className="content">
			        	 <Content 
			        	 	text={post.postContent} 
			        	 	editing={this.state.isEditing}
			        	 	dispatch={this.dispatch}
			        	 />
			      </div>
			      <div className="link">
			      	<Url 
			      		link={post.postLink}
			      		dispatch={this.dispatch}
			      		editing={this.state.isEditing}
			      	/>
			      </div>
			      <div className="meta">
			        	<div className="left">
				        	<ActionBar 
				        		dispatch={this.dispatch}
				        		parentState={this.state}
				        		post={post}
				        		editing={this.state.isEditing}
				        		onCancel={() => {this.setState({isEditing: false})}}
				        		onLike={() => {this.handleLike(post._id, this.currentUser._id)}}
				        		onSave={() => {this.handleSave(post._id, this.props.editingPost, this.token)}}
				        		onUpload={(e) => {this.uploadImage(e)}}
				        		onVideo={(url) => {this.onVideo(url)}}
				        	/>
				      </div>
			         <div className="right">
			        		<span className="time">
			        			<TimeAgo datetime={post.updated} locale='ru' />
			        		</span>
		        		</div>
			      </div>
			      <style jsx>{`
			        	 .note {
			        	 	box-shadow: 0px 3px 18px 0px rgba(34, 36, 38, 0.1);
			        	 	padding:15px 19px;
			        	 	border-radius:4px;
			        	 	background:#fff;
			        	 }
			          .note .user,
			          .note .meta {
			          	display:flex;
			          	align-items:center;
			          	justify-content:space-between;
			          }
			          .note .user .dropdown i {
			          	color:#c0c0c0;
			          	font-size:16px;
			          	transition:0.2s all ease;
			          }
			          .note .user .dropdown i:hover {
			          	color:#000;
			          }
			          .note .user .dropdown .menu {
			          	left:auto!important;
			          	right:-15px!important;
			          }
			          .note .meta .time {
							color:#c0c0c0;
							font-size:13px;
			          }
			          .note p.primary {
			          	font-size:17px;
			          	color:#333;
			          }
			      `}</style>
		   	</article>
			)
		} else {
			return <Blank />
		}
  }
}

class Video extends React.Component {
   constructor(props) {
	   super(props);
	   this.state = {
	   	isEditing: false,
	   	link: null
	   }
   }

   componentWillMount() {
   	if(this.props.video) {
	   	this.setState({
	   		link: this.props.video,
	   		isEditing: this.props.editing
	   	})
	   }
   }

   componentWillReceiveProps(nextProps) {
   	this.setState({
   		link: nextProps.video,
   		isEditing: nextProps.editing
   	})
   }

   render() {
   	if(this.state.link) {
   		if(this.state.isEditing) {
   			return (
			      <div className="video">
			      	<iframe 
				      	width="100%" 
				      	height="315" 
				      	src={`https://www.youtube.com/embed/${this.state.link}`} 
				      	frameBorder="0" 
				      	allowFullScreen={true}>
				      </iframe>
				      <i onClick={() => {this.props.onRemove()}} 
				      	className="fa fa-close">
				      </i>
				      <style jsx>{`
							.video {
								position:relative;
							}
							.video i {
								position:absolute;
								right:0px;
								top:0px;
								padding:20px;
								opacity:0.5;
								font-size:17px;
								transition:0.2s all ease;
							}
							.video i:hover {
								opacity:1;
							}
				      `}</style>
			      </div>
			   )
   		} else {
   			return (
			      <iframe 
			      	width="100%" 
			      	height="315" 
			      	src={`https://www.youtube.com/embed/${this.state.link}`} 
			      	frameBorder="0" 
			      	allowFullScreen={true}>
			      </iframe>
			   )
   		}
   	} else {
   		return null
   	}
   }
}


class Url extends React.Component {
   constructor(props) {
	   super(props);
	   this.state = {
	   	isEditing: false,
	   	link: null
	   }
   }

   componentWillMount() {
   	if(this.props.link) {
	   	this.setState({
	   		link: this.props.link,
	   		isEditing: this.props.editing
	   	})
	   }
   }

   componentWillReceiveProps(nextProps) {
   	this.setState({
   		link: nextProps.link,
   		isEditing: nextProps.editing
   	})
   }

   saveLocally(e) {
   	var value = e.target.value;
   	this.props.dispatch(updatePostLink(value)).then(() => {
   		this.setState({
   			url: value
   		})
   	})
   }

   render() {
   	if(this.state.link) {
		  	if(this.state.isEditing) {
		  		return (
			  		<div className="link">
			        	<i className="fa fa-link"></i>
			        	<input 
			        		onChange={(e) => {this.saveLocally(e)}} 
			        		type="text" 
			        		defaultValue={this.state.link} 
			        	/>
			        	<style jsx>{`
							.link {
				          	margin-bottom:15px;
				          }
				         .link i {
				          	margin-right:15px;
				          	opacity:.4;
				         }
				         .link input {
				         	border:0px;
				         	font-size:15px;
				         	outline:none;
				         	padding:5px;
				         	width:300px;
				         }
			        	`}</style>
			      </div> 
			   )
		  	} else {
		  		return (
		  			<div className="link">
			        	<i className="fa fa-link"></i>
			        	<a href={this.state.link} target="_blank">{this.state.link}</a>
			        	<style jsx>{`
							.link {
				          	margin-bottom:15px;
				          }
				         .link i {
				          	margin-right:15px;
				          	opacity:.4;
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



class Content extends React.Component {
   constructor(props) {
	   super(props);
	   this.dispatch = this.props.dispatch;
	   this.state = {
	    	isEditing: false,
	    	text: ''
	   }
   }

   componentWillMount() {
	  	this.setState({
	  		isEditing: this.props.editing,
	  		text: this.props.text
	  	})
	   }

   componentWillReceiveProps(nextProps) {
	  	this.setState({
	  		isEditing: nextProps.editing,
	  		text: nextProps.text
	  	})
   }

   updateLocally(e) {
	  	var value = e.target.value;
	  	this.dispatch(updatePostContent(value)).then(() => {
	  		this.setState({
	  			text:value
	  		})
	  	})
   }

  	render() {
  		if(this.state.isEditing) {
  			return (
  				<div className="editor">
  					<textarea 
	  					onChange={(e) => {this.updateLocally(e)}} 
	  					cols="4" 
	  					defaultValue={this.state.text} 
	  					placeholder="Ваш текст..">
  					</textarea>
  					<style jsx>{`
						.editor textarea {
							width:100%;
							border:1px solid #eee;
							padding:14px;
							font-size:16px;
							outline:none;
							border-radius:4px;
						}
  					`}</style>
  				</div>
  			)
  		} else {
	  		return (
		    	<div>
			      <p className="primary">
			      	{this.state.text}
			      </p>
		      </div>
	   	);
  		}
   }
}

class Image extends React.Component {
   constructor(props) {
	   super(props);
	   this.dispatch = this.props.dispatch;
	   this.state = {
	    	isEditing: false,
	    	url: null
	   }
   }

   componentWillMount() {
	  	this.setState({
	  		isEditing: this.props.editing,
	  		url: this.props.url
	  	})
   }

   componentWillReceiveProps(nextProps) {
	  	this.setState({
	  		isEditing: nextProps.editing,
	  		url: nextProps.url
  		})
   }

   updateLocally(url) {
	  	this.dispatch(updatePostImage(url)).then(() => {
	  		this.setState({
	  			url: url
	  		})
	  	})
   }

  	render() {
  		if(this.state.url) {
	  		if(this.state.isEditing) {
	  			return (
	  				<div className="editor">
	  					<img src={this.state.url} width="100%" />
	  					<i className="fa fa-close" onClick={() => {this.props.onRemove()}}></i>
	  					<style jsx>{`
	  						.editor {
	  							position:relative;
	  						}
							.editor i {
								position:absolute;
								right:0px;
								top:0px;
								padding:20px;
								font-size:17px;
								color:#fff;
								opacity:0.5;
								transition:0.2s all ease;
								cursor:pointer;
							}
							.editor i:hover {
								opacity:1.0;
							}
	  					`}</style>
	  				</div>
	  			)
	  		} else {
		  		return (
			    	<div>
			      	<img src={this.state.url} width="100%" />
			      </div>
		   	);
	  		}
	  	} else {
	  		return null
	  	}
   }
}


class ActionBar extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = {
    	isEditing: false
    }
  }

  componentWillMount() {
  	this.setState({
  		isEditing: this.props.editing,
  		post: this.props.post,
  		...this.props.parentState
  	})
  }

   componentWillReceiveProps(nextProps) {
	  	this.setState({
	  		isEditing: nextProps.editing,
	  		post: nextProps.post,
	  		...nextProps.parentState
	  	})
   }



   createPopup() {
	  	this.video.addEventListener('keydown', (e) => {
	      if(e.keyCode == 13) {
	         e.preventDefault();
	         this.props.onVideo(e.target.value)
	      }
	   })
   }

  	render() {
  		var post = this.state.post;
  		if (post) {
		  	if (this.state.isEditing) {
		   	return (
			      <div>
		        		<span onClick={() => {this.props.onSave()}} className="ui button small circular primary">Сохранить</span>
		        		<span onClick={() => {this.props.onCancel()}} className="ui button small circular default">Отмена</span>
		      	   {(!this.state.post.postImage 
		      	   	&& !this.state.post.postVideo) 
		      	   	&&
			            <span>
				            <span 
					            onClick={() => {this.image.click()}} 
					            className="ui button icon circular small basic">
				            	<i className="fa fa-image"></i>
				            </span>
				         	<input 
			  						ref={(e) => {this.image = e}}
				  					type="file" 
				  					className="ui hidden" 
				  					onChange={(e) => {this.props.onUpload(e)}} 
			  					/>
		  					</span>
			         }
			         {(!this.state.post.postVideo 
			         	&& !this.state.post.postImage) 
			         	&&
			            <span>
				            <span
				            	onClick={(e) => {$('.video.button').popup({popup : $('.video.popup'), on: 'click'});this.createPopup()}} 
				            	className="ui button video icon circular small basic"
				            ><i className="fa fa-video-camera"></i></span>
				            <div className="popup video ui">
				               <input 
				                ref={(e) => {this.video = e}} 
				                type="text" 
				                placeholder="Ссылка на видео с YouTube" 
				               />
				            </div>
			            </span>
			         }
			         <style jsx>{`
							.popup input {
								border:0px;
								font-size:17px;
								padding:5px;
								outline:none;
								width:350px;
							}
			         `}</style>
			      </div>
		    	);
		   } else {
		   	return (
	        		<span 
	        		onClick={() => {this.props.onLike()}} 
	        		className={(this.state.isLiked) ? 
	        			`ui button circular small primary` : 
	        			`ui button circular small default`}
	        		>
		        		<i className={(this.state.isLiked) ? 
		        			`fa fa-heart icon` : 
		        			`fa fa-heart-o icon`}>
		        		</i> {this.state.likeCounter}
		        		<style jsx>{`
							.note .meta .button.default {
								background:#fafafa;
								transition:0.2s all ease;
				        	 }
				        	 .note .meta .button.default:hover {
				        	 	background:#eee;
				        	 }
		        		`}</style>
		        	</span>
		   	)
		   }
		} else {
			return null
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


connect((store) => store)(Content)

export default connect((store) => store)(Note)