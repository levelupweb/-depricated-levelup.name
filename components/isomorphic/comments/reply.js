// Important
import React from 'react';
import cookies from 'js-cookie'
import { connect } from 'react-redux'

// Actions
import { createComment } from '../../../actions/comment.js'

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

class ReplyForm extends React.Component {
	constructor(props) {
		super(props);
		this.token = cookies.get('x-access-token')
		this.state = defaultState
	}

	// React lifecycle
	componentWillMount() {
		this.settingUp(this.props.currentUser._id, this.props.postID)
	}

	componentWillReceiveProps(nextProps) {
		this.settingUp(nextProps.currentUser._id, nextProps.postID)
	}

	// Specific Methods
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
		createComment(token, comment).then((res) => {
			if(res.data.success) {
				this.props.onSubmit(res.data.comment)
			} else {
				console.log(res.data)
			}
		})
	}

	render() {
		var user = this.props.currentUser
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
					    		onClick={() => {this.submitComment(this.token, this.state.comment, this.props.currentUser)}}
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

function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(ReplyForm)