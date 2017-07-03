// Important
import React from 'react';
import cookies from 'js-cookie'
import { connect } from 'react-redux'

// Actions
import { addComment } from '../../../actions/comment.js'

// Components
import Link from 'next/link'
import Avatar from 'react-avatar'

const defaultState = {
	comment: {
		commentContent: '',
		commentAuthor: null,
		commentPost: null
	}
}

export default class ReplyForm extends React.Component {
	constructor(props) {
		super(props);
		this.token = cookies.get('x-access-token')
		this.state = defaultState
	}

	componentWillMount() {
		this.settingUp(this.props.user._id, this.props.postID)
	}

	componentWillReceiveProps(nextProps) {
		this.settingUp(nextProps.user._id, nextProps.postID)
	}

	settingUp(userID, postID) {
		this.setState({
			comment: {
				...this.state.comment,
				commentAuthor: userID,
				commentPost: postID
			}
		})
	}

	submitComment(token, comment) {
		addComment(token, comment).then((res) => {
			if(res.data.success) {
				this.flushForm()
				this.props.onSubmit(res.data.comment)
				console.log(res.data)
			} else {
				console.log(res.data)
			}
		})
	}

	flushForm() {
		this.setState({
			comment: {
				...this.state.comment,
				commentContent: ''
			}
		})
	}

	render() {
		var user = this.props.user
		if (this.props.isRevealed) {
			return (
				<form className="ui reply form">
			     	<div className="field">
			     		<div className="user">
				      	<Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
		                  <Avatar color={`#46978c`} round={true} size={32} src={user.userImage} name={user.userName} />
		               </a></Link>
		            </div>
		            <div className="textarea">
				      	<textarea 
				      		onChange={(e) => {this.setState({comment: {...this.state.comment, commentContent: e.target.value}})}}
				      		placeholder="Оставьте ваш комментарий" 
				      		ref={(e) => {this.textarea = e}}>
				      	</textarea>
				      	<div 
					    		onClick={() => {this.submitComment(this.token, this.state.comment)}}
					    		className="ui button primary small circular">
					      	Отправить
					    	</div>
				      </div>
			      	
			    	</div>
			    	<style jsx>{`
			    		.reply {
							border-top:1px solid #eee;
							padding-top:20px;
			    		}
						.form textarea {
							border:0px;
							height:30px;
							background:#fff;
							padding:0px;
							min-height:30px;
						}
						.reply {
							margin-top:15px;
						}
						.form .field {
							display:flex;
						}
						.form .field .textarea {
							position:relative;
							width:100%;
							padding-top:7px;
						}
						.form .field .user {
							margin-right:15px;
						}
						.form .field .button {
							position:absolute;
							right:0px;
							top:0px;
						}
			    	`}</style>
			   </form>
			)
		} else {
			return null
		}
	}
}