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
	   this.currentUser = this.currentUser;
		this.state = {
			comments: []
		}
	}

	componentWillMount() {
		this.getComments(this.props.postID)
	}

	componentWillReceiveProps(nextProps) {
		this.getComments(nextProps.postID)
	}

	getComments(id) {
		getPostComments(id).then((res) => {
			if(res.data.length > 0) {
				this.setState({
					comments: res.data
				})
			}
		})
	}

	render() {
		if(this.state.comments.length > 0) {
			var comments = this.state.comments.map((item, i) => {
				return (<Comment comment={item} key={i} />)
			})
			return (
				<div className="ui comments">
				   <div className="comments">
				   	{comments}
				   </div>
				   {(this.currentUser) && 
					   <ReplyForm
					   	user={this.currentUser}
					   	postID={this.props.postID} 
					   	isRevealed={this.props.isRevealed} 
					   />
					}
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
					<ReplyForm 
						user={this.currentUser}
						isRevealed={this.props.isRevealed} 
						postID={this.props.postID} 
					/>
				)
			} else {
				return null
			}
		}
	}
}

export default connect((store) => store)(Comments)