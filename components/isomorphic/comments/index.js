// Important
import React from 'react';
import cookies from 'js-cookie'
import { connect } from 'react-redux'

// Actions
import { getPostComments } from '../../../actions/comment.js'

// Components
import TimeAgo from 'timeago-react';
import Avatar from 'react-avatar'
import ReplyForm from './reply.js'
import Link from 'next/link'
import Comment from './comment.js'


// clever component
class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.token = cookies.get('x-access-token')
	   this.currentUser = this.props.currentUser;
		this.state = {
			comments: [],
			isFull: false
		}
	}

	componentWillMount() {
		this.getComments()
	}

	componentWillReceiveProps(nextProps) {
		this.getComments()
	}

	getComments() {
		this.setState({
			comments: this.props.comments.map((comment, i) => {
				if(!this.props.isSingle) {
					if(i >= this.props.comments.length - 3) {
						return <Comment comment={comment} key={comment._id} />
					} 
				} else {
					return <Comment comment={comment} key={comment._id} />
				}
			}),
			isFull: false
		})
	}

	loadMore() {
		this.setState({
			comments: this.props.comments.map((comment, i) => {
				return <Comment comment={comment} key={comment._id} />
			}), 
			isFull: true
		})
	}

	pushComment(comment, user) {
		var comm = {
			...comment,
			commentAuthor: user
		}
		this.setState({
	      comments: [<Comment comment={comm} key={comm._id}  />, ...this.state.comments]
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
						   		{!this.state.isFull ? 
							   		<div 
							   			className="ui button fluid default small"
							   			onClick={() => {this.loadMore()}}>
							   			Загрузить комментарии ({this.props.comments.length})
							   		</div>
							   		:
							   		<div 
							   			className="ui button fluid default small"
							   			onClick={() => {this.getComments()}}>
							   			Скрыть комментарии
							   		</div>
							   	}
					   		</div>
					   	}
					   	{this.state.comments}
					   </div>
					   {(this.currentUser) && 
						   <ReplyForm
						   	user={this.currentUser}
						   	postID={this.props.postID} 
						   	isRevealed={this.props.isRevealed} 
						   	onSubmit={(comment) => {this.pushComment(comment, this.currentUser)}}
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
			if(this.currentUser) {
				return (
					<div>
						{this.props.isSingle &&
							<p>Будьте первым, кто оставит комментарий!</p>
						}
						<ReplyForm 
							user={this.currentUser}
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