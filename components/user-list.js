import React from 'react';
import Avatar from 'react-avatar'
import { getUserById } from '../actions/user.js'
import Link from 'next/link'

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
 	var users = this.props.users.map((user, i) => {
 		return <User id={user} key={i} />
 	})
 	if(this.props.users.length > 0) {
	    return (
	      <div className="ui user-list-items">
	      	{users}
	      </div>
	      )
	  } else {
	  	return (
	  		<div className="no-content">
	          <p>Список пуст</p>
	        </div>
	  	)
	  }
  }
}


class User extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: null
		}
	}

	componentWillMount() {
		getUserById(this.props.id).then((res) => {
			this.setState({
				user: res.data
			})
		})
	}

	render() {
		var user = this.state.user
		if(user) {
			return (
				<div className="item">
					<Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
		                <Avatar color={`#46978c`} round={true} size={32} src={user.userImage} name={user.userName} />
		            </a></Link>
		            <div className="content">
						<h4 className="ui header">
							<Link href={{ pathname: 'user', query: { slug: user.slug }}}>
								<a>{user.userName}</a>
							</Link>
							<div className="sub header">{user.userDescription}</div>
						</h4>
					</div>
					<div className="updates">
						+1
					</div>
					<style jsx>{`
						.item {
							margin-top:10px
						}

						.item:first-child {
							margin-top:0px;
						}

						.item .content {
							margin-left:10px;
						}
					`}</style>
				</div>
			) 
		} else {
			return (<div></div>)
		}
	}
}
