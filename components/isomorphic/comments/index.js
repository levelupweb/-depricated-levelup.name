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
		var comm = { ...comment }
		comm.commentAuthor = this.props.currentUser;
		this.setState({
	      comments: [...this.state.comments, <Comment 
	      	onRemove={(token, id) => {this.removeComment(token, id)}} 
	      	comment={comm} 
	      	key={comm._id}  
	      />]
	   })
	}

	removeComment(token, id) {
    	removeComment(token, id).then((res) => {
  			if(res.data.success) {
  				this.state.comments.map((item, i) => {
  					if(item.key == id) {
  						var array = this.state.comments.slice();
		    			array.splice(i, 1);
		    			this.setState({
				    		comments: array
				    	});
  					}
  				})
  			} else {
  				console.log(res.data)
  			}
  		})
  	}

	render() {
		if(this.state.comments.length > 0) {
			return (
				<div>
					{this.props.isSingle &&
						<p>Всего комментариев: {this.state.comments.length}</p>
					}
					<div className="ui comments">
					   <div className="comments">
					   	{(this.state.comments.length > 3) &&
					   		<div>
						   		{this.state.isHided ? 
							   		<div 
							   			className="ui button fluid default small"
							   			onClick={() => {this.setState({isHided: false})}}>
							   			Загрузить комментарии ({this.state.comments.length - 3})
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
				          	{this.state.comments.map((comment, i) => {
				          		if(this.state.isHided) {
					          		if(i >= this.state.comments.length - 3) {
					          			return comment
					          		}
					          	} else {
					          		return comment
					          	}
				          	})}
				         </ReactCSSTransitionGroup>
					   </div>
					   {(this.props.currentUser) && 
						   <ReplyForm
						   	postID={this.props.postID} 
						   	isRevealed={this.props.isRevealed} 
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
			if(this.props.currentUser) {
				return (
					<div>
						{this.props.isSingle &&
							<p>Будьте первым, кто оставит комментарий!</p>
						}
						<ReplyForm
							isRevealed={this.props.isRevealed} 
							postID={this.props.postID} 
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