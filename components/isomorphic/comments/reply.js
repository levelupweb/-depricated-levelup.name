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
		content: '',
		author: null,
		post: null
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
		const { postID, currentUser } = this.props 
		this.settingUp(currentUser._id, postID)
	}

	componentWillReceiveProps(nextProps) {
		const { postID, currentUser } = nextProps
		this.settingUp(currentUser._id, postID)
	}

	// Specific Methods
	settingUp(userID, postID) {
		const { comment } = this.state;
		this.setState({
			comment: {
				...comment,
				author: userID,
				post: postID
			}
		})
	}

	submitComment(token, comment) {
		createComment(token, comment).then((response) => {
			if(response.data.success) {
				this.props.onSubmit(response.data.comment)
			} else {
				console.log(response.data)
			}
		})
	}

	render() {
		const { comment } = this.state;
		const { currentUser, isRevealed } = this.props;
		const { image, fullName, slug } = currentUser;
		if (isRevealed) {
			return (
				<form className="ui reply form">
			     	<div className="field">
			     		<div className="user">
				      	<Link href={{ pathname: 'user', query: { slug }}}><a>
                  <Avatar color={`#46978c`} round={true} size={32} src={image} name={fullName} />
               	</a></Link>
		            </div>
		            <div className="textarea">
				      	<textarea 
				      		onChange={(e) => {this.setState({comment: {...comment, content: e.target.value}})}}
				      		placeholder="Оставьте ваш комментарий" 
				      		ref={(e) => {this.textarea = e}}>
				      	</textarea>
				      	<div 
					    		onClick={() => {this.submitComment(this.token, comment)}}
					    		className="ui button primary small circular">
					      	Отправить
					    	</div>
				      </div>
			      	
			    	</div>
			    	<style jsx>{`
			    		.reply {
							border-top:1px solid #eee;
							padding:20px 0;
			    		}
						.form textarea {
							border:0px;
							height:30px;
							background:#fff;
							padding:0px;
							min-height:30px;
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