// Important
import React from 'react';
import cookies from 'js-cookie'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Actions
import { removeComment, getPostComments } from '../../../actions/comment.js'

// Components
import TimeAgo from 'timeago-react';
import Avatar from 'react-avatar'
import ReplyForm from './reply.js'
import Link from 'next/link'
import Comment from './comment.js'

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.token = cookies.get('x-access-token')
		this.state = {
			comments: [],
			isHided: true
		}
	}

	componentWillMount() {
		if(this.state.comments.length == 0) {
			this.setComments()
		}
	}

	componentWillReceiveProps(nextProps) {
		if(this.state.comments.length == 0) {
			this.setComments()
		}
	}

	setComments() {
		this.setState({
			comments: this.props.comments.map((comment, i) => {
				return <Comment 
					onRemove={(token, id) => {this.removeComment(token, id)}} 
					comment={comment} 
					key={comment._id} />
			})
		})
	}

	pushComment(comment) {
		const { currentUser } = this.props;
		const { comments } = this.state;
		comment.author.user = this.props.currentUser;
		this.setState({
      comments: [...comments, <Comment 
      	onRemove={(token, id) => {this.removeComment(token, id)}} 
      	comment={comment} 
      	key={comment._id}  
      />]
	   })
	}

	removeComment(token, id) {
		const { comments } = this.state;
  	removeComment(token, id).then((response) => {
			if(response.data.success) {
				comments.map((item, i) => {
					if(item.key == id) {
						var array = comments.slice();
	    			array.splice(i, 1);
	    			this.setState({
			    		comments: array
			    	});
					}
				})
			} else {
				console.log(response.data)
			}
		})
	}

	render() {
		const { comments, isHided } = this.state;
		const { isSingle, currentUser, postID, isRevealed } = this.props;
 		if(comments.length > 0) {
			return (
				<div>
					{isSingle && <p>Всего комментариев: {comments.length}</p> }
					<div className="ui comments">
					   <div className="comments">
					   	{(comments.length > 3) &&
					   		<div>
						   		{isHided ? 
							   		<div 
							   			className="ui button fluid default small"
							   			onClick={() => {this.setState({isHided: false})}}>
							   			Загрузить комментарии ({comments.length - 3})
							   		</div>
							   		:
							   		<div 
							   			className="ui button fluid default small"
							   			onClick={() => {this.setState({isHided: true})}}>
							   			Скрыть комментарии
							   		</div>
							   	}
							   	<br />
					   		</div>
					   	}
					   	<ReactCSSTransitionGroup
				         	transitionName="fadeInOut"
				         	transitionEnterTimeout={500}
				         	transitionLeaveTimeout={300}>
				          	{comments.map((comment, i) => {
				          		if(isHided) {
					          		if(i >= comments.length - 3) {
					          			return comment
					          		}
					          	} else {
					          		return comment
					          	}
				          	})}
				         </ReactCSSTransitionGroup>
					   </div>
					   {currentUser && 
						   <ReplyForm
						   	postID={postID} 
						   	isRevealed={isRevealed} 
						   	onSubmit={(comment, user) => {this.pushComment(comment, user)}}
						   />
						}
					</div>
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
			if(currentUser) {
				return (
					<div>
						{isSingle &&
							<p>Будьте первым, кто оставит комментарий!</p>
						}
						<ReplyForm
							isRevealed={isRevealed} 
							postID={postID} 
							onSubmit={(comment) => {this.pushComment(comment)}}
						/>
						<style jsx>{`
							p {
								opacity:0.5;
								font-size:16px;
							}
						`}</style>
					</div>
				)
			} else {
				return null
			}
		}
	}
}

function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Comments)