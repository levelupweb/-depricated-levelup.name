// Important
import React from 'react';
import cookies from 'js-cookie'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'

// Actions
import { uploadUnsignedImage } from '../../../../actions/app.js'
import { setLike, removePostById, updatePost } from '../../../../actions/post.js'

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
		var { currentUser, post } = this.props;
  	if(currentUser) {
	  	if(post.likes.indexOf(currentUser._id) != -1) {
	      this.setState({
		      isLiked: true
	      })
	   	}
		}		
		this.setState({
			likeCounter: post.likes.length,
			post
		})
  }

  componentWillReceiveProps(nextProps) {
   	var { currentUser, post } = nextProps;
	  	if(currentUser) {
		  	if(post.likes.indexOf(currentUser._id) != -1) {
		      this.setState({
			      isLiked: true
		      })
		   }
		}		
		this.setState({
			likeCounter: post.likes.length,
			post
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
      this.changeField(value, 'content')
    } else {
    	this.changeField(findURL(value)[0], 'link').then(() => {
    		this.changeField(value, 'content')
    	})
    }
  }

	handleLike(postID, userID) {
  	setLike(this.token, postID).then((res) => {
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
  	const { dispatch } = this.props;
	  dispatch(uploadUnsignedImage(token, image, (path) => {
	  	this.changeField(path, 'image');
	  }))
  }

	handleSave(token, id, post) {
		updatePost(token, id, post).then((res) => {
			if(res.data.success) {
				this.setState({
  				isEditing: false
  			})
			}
		})
	}

  handleVideo(url) {
	  this.changeField(
	  	getYouTubeId(url), 'video'
	  )
  }

  renderAuthor(author) {
  	const { blog, user } = author
  	return (user) ? 
  	<User user={user} /> : 
  	<Blog blog={blog} />		      
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
    const { currentUser } = this.props;
    const { post } = this.state
    const { isEditing, isLiked, likeCounter, isCommentsRevealed } = this.state 
		if (post) {
			const { image, author, _id, slug, content, link, video, comments, updated } = post;
			return (
				<article className={`article note`}>
					<div className="user"> 
						<div className="left">
							{this.renderAuthor(author)}
				    </div>
			      <div className="right">
				      <div className="ui dropdown">
								<i className="fa fa-ellipsis-h" aria-hidden="true"></i>
								<div className="menu">
							  	<div className="item" onClick={() => {this.setState({isEditing: true})}}>Редактировать</div>
							  	<div className="item" onClick={() => {console.log('*modal')}}>Пожаловаться</div>
							    <div className="item" onClick={() => {this.props.onRemove(_id)}}>Удалить</div>
								</div>
							</div>
			      </div>
				   	</div>
			      <div className="media">
		        	<Image 
		        		url={image}
		        		isEditing={isEditing}
		        		onRemove={(field) => {this.removeField(field)}} />
		        	<Video 
		        		id={video}
		        		isEditing={isEditing}
			        	onRemove={(field) => {this.removeField(field)}} />
			      </div>
			      <div className="content">
		        	<Content 
		        	 	text={content} 
		        	 	isEditing={isEditing}
		        	 	onChange={(value) => {this.handleTyping(value)}} />
			      </div>
			      <div className="link">
			      	<Url 
			      		link={link}
			      		isEditing={isEditing}
			      		onRemove={(field) => {this.removeField(field)}}
			      		onChange={(value, target) => {this.changeField(value, target)}} />
			      </div>
			      <div className="meta">
			        	<div className="left">
				        	<ActionBar 
				        		post={post}
				        		isLiked={isLiked}
				        		likeCounter={likeCounter}
				        		isEditing={isEditing}
				        		onCancel={() => {this.setState({isEditing: false, post: post})}}
				        		onLike={() => {this.handleLike(_id, currentUser._id)}}
				        		onSave={() => {this.handleSave(this.token, _id, post)}}
				        		onUpload={(file) => {this.handleImage(this.token, file)}}
				        		onVideo={(url) => {this.handleVideo(url)}}
				        		onComment={() => {this.setState({isCommentsRevealed: !isCommentsRevealed})}} />
				      </div>
			        <div className="right">
		        		<span className="time">
		        			<TimeAgo datetime={updated} locale='ru' />
		        		</span>
		        	</div>
			      </div>
			      <div className="comments">
			      	<Comments 
			      		comments={comments}
			      		postID={_id}
			      		isRevealed={isCommentsRevealed} />
			      </div>
			      <style jsx>{`
			      	article {
			      		margin-bottom:20px;
			      		padding-bottom:20px;
			      		border-bottom:1px solid #eee;
			      	}
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
								font-size:14px;
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
   	const { id, isEditing, onRemove } = this.props;
   	if(id) {
   		if(isEditing) {
   			return (
			      <div className="video">
			      	<iframe 
				      	width="100%" 
				      	height="315" 
				      	src={`https://www.youtube.com/embed/${id}`} 
				      	frameBorder="0" 
				      	allowFullScreen={true}>
				      </iframe>
				      <i onClick={() => {onRemove('video')}} 
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
			      	src={`https://www.youtube.com/embed/${id}`} 
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
   	const { link, isEditing, onRemove, onChange } = this.props
   	if(link) {
		  	if(isEditing) {
		  		return (
			  		<div className="link">
		        	<i className="fa fa-close" onClick={() => {onRemove('link')}}></i>
		        	<input 
		        		onChange={(e) => {onChange(e.target.value, 'link')}} 
		        		type="text" 
		        		defaultValue={link}  />
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
		        	<a href={link} target="_blank">{link}</a>
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
		const { isEditing, text, onChange } = this.props
		if(isEditing) {
			return (
				<div className="editor">
					<textarea 
  					onChange={(e) => {onChange(e.target.value)}} 
  					cols="4" 
  					defaultValue={text} 
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
		      	{text}
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
		const { url, isEditing, onRemove } = this.props
		if(url) {
  		if(isEditing) {
  			return (
  				<div className="editor">
  					<img src={url} width="100%" />
  					<i className="fa fa-close" onClick={() => {onRemove('image')}}></i>
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
		      	<img src={url} width="100%" />
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
  	const { post, isEditing, onSave, onCancel, onUpload, onLike, isLiked, likeCounter, onComment } = this.props
		if (post) {
			const { image, video } = post
	  	if (isEditing) {
	   	return (
	      <div>
      		<span onClick={() => {onSave(post)}} className="ui button small circular primary">Сохранить</span>
      		<span onClick={() => {onCancel()}} className="ui button small circular default">Отмена</span>
      	  {(!image 
      	   	&& !video) 
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
		  					onChange={(e) => {onUpload(e.target.files[0])}} 
	  					/>
  					</span>
	        }
	        {(!image 
	         	&& !video) &&
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
        	<a onClick={() => {onLike()}}
      			className="item">
        		<i className={(isLiked) ? 
        			`fa fa-heart icon` : 
        			`fa fa-heart-o icon`}>
        		</i> {likeCounter} Мне нравится
        	</a>
        	<a onClick={() => {onComment()}} 
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
