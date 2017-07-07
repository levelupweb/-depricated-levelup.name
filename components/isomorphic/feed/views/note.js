// Important
import React from 'react';
import cookies from 'js-cookie'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'

// Actions
import { uploadImage } from '../../../../actions/app.js'
import { setLikeById, removePostById, postUpdate } from '../../../../actions/post.js'

// Utils 
import getYouTubeId from '../../../../utils/getYouTube.js' 
import findURL from '../../../../utils/findURL.js' 
import { UI } from '../../../../utils/initScripts.js'

// Components
import Comments from '../../comments/index.js'
import User from '../../user.js'
import Blog from '../../blog.js'
import TimeAgo from 'timeago-react';
import Link from 'next/link'
import Loader from '../../loader.js'

// Dynamics
var BlurImageLoader = dynamic(import('react-blur-image-loader'))

const defaultState = {
	isLiked: false,
 	likeCounter: 0,
 	isEditing: false,
 	post: null,
 	isCommentsRevealed: false
}

class Note extends React.Component {
   constructor(props) {
	   super(props);
	   this.token = cookies.get('x-access-token')
	   this.dispatch = this.props.dispatch;
	   this.state = defaultState;
   }

   // React Lifecycle
  	componentWillMount() {
	  	if(this.props.currentUser) {
		  	if(this.props.post.postLikes.indexOf(this.props.currentUser._id) != -1) {
		      this.setState({
			      isLiked: true
		      })
		   }
		}		
		this.setState({
			likeCounter: this.props.post.postLikes.length,
			post: this.props.post
		})
   }

   componentWillReceiveProps(nextProps) {
   	if(nextProps.currentUser) {
		  	if(nextProps.post.postLikes.indexOf(nextProps.currentUser._id) != -1) {
		      this.setState({
			      isLiked: true
		      })
		   }
		}		
		this.setState({
			likeCounter: nextProps.post.postLikes.length,
			post: nextProps.post
		})
   }

   componentDidMount() {
   	UI();
   	$('.ui.dropdown')
   	.dropdown();
   }

   // Specific Methods
   handleTyping(value) {
      if(findURL(value).length == 0) {
        this.changeField(value, 'postContent')
      } else {
        	this.changeField(findURL(value)[0], 'postLink').then(() => {
        		this.changeField(value, 'postContent')
        	})
      }
  	}

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

  	handleLike(postID, userID) {
    	setLikeById(this.token, postID).then((res) => {
      	if(res.data.success) {
	        	this.setState({
		       	...this.state.post,
		       	isLiked: !this.state.isLiked,
		       	likeCounter: res.data.counter
	        })
      	} else {
      		console.log(res.data)
      	}
    	})
  	}

  	handleImage(token, image) {
	   uploadImage(token, image).then((res) => {
	   	if(res.path && res.success) {
	   		this.changeField(res.path, 'postImage');
	   	}
	   })
   }

  	handleSave(token, id, data) {
  		postUpdate(token, id, data).then((res) => {
  			if(res.data.success) {
  				this.setState({
	  				isEditing: false
	  			})
  			}
  		})
  	}

  	handleVideo(url) {
	   var id = getYouTubeId(url)
	  	this.changeField(id, 'postVideo')
   }

   // Isomorphic Methods

   changeField(value, target) {
   	return new Promise((resolve) => {
   		this.setState({
	   		post: {
	   			...this.state.post,
	   			[target]: value
	   		}
	   	})
	   	resolve(true)
   	})
   }

   removeField(field) {
  		this.setState({
			post: {
				...this.state.post,
				[field]: null
			}
		})
  	}

   render() {
    	var post = this.state.post;
		if (post) {
			return (
				<article className={`article block-item note preview post-${post._id}`}>
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
								  	 <div className="item" onClick={() => {this.setState({isEditing: true})}}>Редактировать</div>
								  	 <div className="item" onClick={() => {console.log('*modal')}}>Пожаловаться</div>
								    <div className="item" onClick={() => {this.handleRemove(post._id)}}>Удалить</div>
								</div>
							</div>
			         </div>
				   </div>
			      <div className="media">
			        	<Image 
			        		url={post.postImage}
			        		isEditing={this.state.isEditing}
			        		onRemove={(field) => {this.removeField(field)}}
			        	/>
			        	<Video 
			        		id={post.postVideo}
			        		isEditing={this.state.isEditing}
			        		onRemove={(field) => {this.removeField(field)}}
			        	/>
			      </div>
			      <div className="content">
			        	 <Content 
			        	 	text={post.postContent} 
			        	 	isEditing={this.state.isEditing}
			        	 	onChange={(value) => {this.handleTyping(value)}}
			        	 />
			      </div>
			      <div className="link">
			      	<Url 
			      		link={post.postLink}
			      		isEditing={this.state.isEditing}
			      		onRemove={(field) => {this.removeField(field)}}
			      		onChange={(value, target) => {this.changeField(value, target)}}
			      	/>
			      </div>
			      <div className="meta">
			        	<div className="left">
				        	<ActionBar 
				        		post={post}
				        		isLiked={this.state.isLiked}
				        		likeCounter={this.state.likeCounter}
				        		isEditing={this.state.isEditing}
				        		onCancel={() => {this.setState({isEditing: false, post: this.props.post})}}
				        		onLike={() => {this.handleLike(post._id, this.props.currentUser._id)}}
				        		onSave={() => {this.handleSave(this.token, post._id, this.state.post)}}
				        		onUpload={(file) => {this.handleImage(this.token, file)}}
				        		onVideo={(url) => {this.handleVideo(url)}}
				        		onComment={() => {this.setState({isCommentsRevealed: !this.state.isCommentsRevealed})}}
				        	/>
				      </div>
			         <div className="right">
			        		<span className="time">
			        			<TimeAgo datetime={post.updated} locale='ru' />
			        		</span>
		        		</div>
			      </div>
			      <div className="comments">
			      	<Comments 
			      		comments={post.postComments}
			      		postID={post._id}
			      		isRevealed={this.state.isCommentsRevealed}
			      	/>
			      </div>
			      <style jsx>{`
			         .note .user,
			         .note .meta {
			          	display:flex;
			          	align-items:center;
			          	justify-content:space-between;
			         }
			         .note .meta {
			          	margin-top:15px;
			          	padding-top:15px;
			          	border-top:1px solid #eee;
			         }
			         .note .media {
			         	margin-top:10px;
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
			         .note .content {
			          	word-wrap: break-word;
							overflow-wrap: break-word;
							margin:15px 0px;
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
   }

   render() {
   	if(this.props.id) {
   		if(this.props.isEditing) {
   			return (
			      <div className="video">
			      	<iframe 
				      	width="100%" 
				      	height="315" 
				      	src={`https://www.youtube.com/embed/${this.props.id}`} 
				      	frameBorder="0" 
				      	allowFullScreen={true}>
				      </iframe>
				      <i onClick={() => {this.props.onRemove('postVideo')}} 
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
			      	src={`https://www.youtube.com/embed/${this.props.id}`} 
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
   }

   render() {
   	if(this.props.link) {
		  	if(this.props.isEditing) {
		  		return (
			  		<div className="link">
			        	<i className="fa fa-close" onClick={() => {this.props.onRemove('postLink')}}></i>
			        	<input 
			        		onChange={(e) => {this.props.onChange(e.target.value, 'postLink')}} 
			        		type="text" 
			        		defaultValue={this.props.link} 
			        	/>
			        	
			        	<style jsx>{`
							.link {
				          	margin-bottom:15px;
				          }
				         .link i.fa-close {
				         	cursoir:pointer;
				         	margin-right:15px;
				          	opacity:.4;
				         }
				         .link input {
				         	border:0px;
				         	font-size:15px;
				         	outline:none;
				         	padding:5px;
				         	width:80%;
				         }
			        	`}</style>
			      </div> 
			   )
		  	} else {
		  		return (
		  			<div className="link" data-inverted="" 
			        		data-tooltip="Прикрепленная ссылка" 
			        		data-position="bottom left">
			        	<i className="fa fa-link"></i>
			        	<a href={this.props.link} target="_blank">{this.props.link}</a>
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
   }

  	render() {
  		if(this.props.isEditing) {
  			return (
  				<div className="editor">
  					<textarea 
	  					onChange={(e) => {this.props.onChange(e.target.value)}} 
	  					cols="4" 
	  					defaultValue={this.props.text} 
	  					placeholder="Ваш текст.."
	  					maxLength="140">
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
		    	<div className="text">
			      <p className="primary">
			      	{this.props.text}
			      </p>
		      </div>
	   	);
  		}
   }
}

class Image extends React.Component {
   constructor(props) {
	   super(props);
   }

  	render() {
  		if(this.props.url) {
	  		if(this.props.isEditing) {
	  			return (
	  				<div className="editor">
	  					<BlurImageLoader src={this.props.url}
		               fullCover={true}
		               maxBlurLevel={10}
		               transitionTime={400}
		               loader={<Loader />}
		            />
	  					<i className="fa fa-close" onClick={() => {this.props.onRemove('postImage')}}></i>
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
								color:#000;
								opacity:0.5;
								transition:0.2s all ease;
								cursor:pointer;
								z-index:999;
							}
							.editor i:hover {
								opacity:1.0;
							}
	  					`}</style>
	  				</div>
	  			)
	  		} else {
		  		return (
			    	<div className="image">
			      	<BlurImageLoader src={this.props.url}
		               fullCover={true}
		               maxBlurLevel={10}
		               transitionTime={400}
		               loader={<Loader />}
		            />
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
   }

   componentDidMount() {
   	UI()
   }

   onVideo(e, value) {
      if(e.keyCode == 13) {
         e.preventDefault();
         this.props.onVideo(value)
      }
   }

  	render() {
  		var post = this.props.post;
  		if (post) {
		  	if (this.props.isEditing) {
		   	return (
			      <div>
		        		<span onClick={() => {this.props.onSave(post)}} className="ui button small circular primary">Сохранить</span>
		        		<span onClick={() => {this.props.onCancel()}} className="ui button small circular default">Отмена</span>
		      	   {(!post.postImage 
		      	   	&& !post.postVideo) 
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
				  					onChange={(e) => {this.props.onUpload(e.target.files[0])}} 
			  					/>
		  					</span>
			         }
			         {(!post.postVideo 
			         	&& !post.postImage) &&
			            <span>
				            <span 
				            	onClick={() => {$('.ui.video.button').popup({popup: '.ui.video.popup', on: 'click'})}} 
				            	className="ui button video icon circular small basic">
				            	<i className="fa fa-video-camera"></i>
				            </span>
				            <div className="popup video ui">
				               <input 
				                onKeyDown={(e) => {this.onVideo(e, e.target.value)}}
				                type="text" 
				                placeholder="Ссылка на видео с YouTube" />
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
		   		<span>
			        	<a onClick={() => {this.props.onLike()}}
		        			className="item">
			        		<i className={(this.props.isLiked) ? 
			        			`fa fa-heart icon` : 
			        			`fa fa-heart-o icon`}>
			        		</i> {this.props.likeCounter} Мне нравится
			        	</a>
			        	<a onClick={() => {this.props.onComment()}} 
		        			className="item">
			        		<i className="fa fa-comment-o icon"></i> Оставить комментарий
			        	</a>
			        	<style jsx>{`
							.note .meta .button.default {
								background:#fafafa;
								transition:0.2s all ease;
				        	 }
				        	 .note .meta .button.default:hover {
				        	 	background:#eee;
				        	 }
				        	 .item {
				        	 	cursor:pointer;
				        	 	font-size:15px;
				        	 	margin-right:15px;
				        	 }
				        	 .item:last-child {
				        	 	margin-right:0px;
				        	 }
				        	 .fa-heart {
				        	 	color:#57c1b3!important;
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



var Blank = () => {
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

function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Note)
