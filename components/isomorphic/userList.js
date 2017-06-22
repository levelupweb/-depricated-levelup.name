// Important
import React from 'react';

// Actions
import { getUserById, getUserSubscriptions, getAllUsers } from '../../actions/user.js'

// Components
import Avatar from 'react-avatar'
import Link from 'next/link'
import Loader from './loader.js'
import SubscribeButton from './subscribeButton.js'


export default class UserList extends React.Component {
   constructor(props) {
		super(props);
		this.state = {
			users: [],
			isLoaded: false
		}
   } 

	componentWillMount() {
		if(this.props.users === undefined) {
			if(this.props.subscriber) {
				getUserSubscriptions(this.props.subscriber).then((res) => {
					this.setState({
						users : res.data
					})
				})
			} else {
				getAllUsers().then((res) => {
					this.setState({
						users: res.data
					})
				})
			}
		} else {
			this.setState({
				users: this.props.users
			})
		}
	}

	componentWillReceiveProps(nextProps) {
	   if(nextProps.users) {
	      this.setState({
	        	users: nextProps.users
	      })
	   }
	}

   componentDidMount() {
		this.setState({
			isLoaded: true
		})
   }

   render() {
	   if(this.state.isLoaded) {
	  	   if(this.state.users.length == 0) {
		      return (
		        <div className="no-content">
		          <p>Список пуст</p>
		        </div>
		      )
		   } else {
		   	return (
		       <div className="user-list">
		         {this.state.users.map((item, i) => {
		           return <User size={this.props.size} userData={item} key={i} />
		         })}
		         <style jsx>{`
						.user-list {
							width:100%;
						}
		         `}</style>
		       </div>
		     )
		   }
	   } else {
		   return <Loader />
	   }
   }
}


class User extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var user = this.props.userData
		if(user) {
			if(this.props.size != 'block') {
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
								<div className="sub header">{(user.userDescription) ? user.userDescription : `Подписчиков: ${user.userSubscribersCount}`}</div>
							</h4>
						</div>
						<div className="updates">
							+1
						</div>
						<style jsx>{`
							.item {
								margin:10px 0px;
								border-bottom:1px solid rgba(255,255,255,0.2);
								display:flex;
								align-items:center;
								flex-direction:row;
								padding:7px 0px;
							}
							.item:last-child {
								border-bottom:0px;
							}
							.item:first-child {
								margin-top:0px;
							}
							.item .content {
								margin-left:10px;
							}
							.item .content .sub.header {
								font-size:13px;
								margin-top:2px;
								opacity:0.7;
							}
						`}</style>
					</div>
				) 
			} else {
				return (
					<div className="item">
					  <div className="image">
					    <Avatar color={`#46978c`} round={true} size={50} src={user.userImage} name={user.userName} />
					  </div>
					  <div className="content">
			        <div className="left">
			  		    <Link href={{ pathname: 'user', query: { slug: user.slug }}}>
			            <a className="header">{user.userName}</a> 
			          </Link>
			          <span className="subscribers">1 подписчик</span>
			  		    <div className="description">
			  		      {user.userBio}
			  		    </div>
			        </div>
			        <div className="right">
			          <div className="action">
			          <SubscribeButton 
				          subscribeText="Подписаться" 
				          unsubscribeText="Отписаться"
				          entryType="user"
				          entryID={user._id} 
				          additionalClasses="basic small" 
			          />
			        </div>
			        </div>
					  </div>

			      <style jsx>{`
			        .item {
			          display:flex;
			          align-items:center;
			          width:100%;
			          border-bottom:1px solid #eee;
			          padding:0px!important;
			          margin:0px!important;
			          margin-bottom:8px!important;
			          padding-bottom:8px!important;
			        }
			        .item:last-child {
			        	border-bottom:0px;
			        	padding-bottom:0px!important;
			        }
			        .item .content {
			          display:flex;
			          justify-content:space-between;
			          width:100%;
			          margin-left:15px;
			        }
			        .item .content .header {
			          font-weight:bold;
			        }
			        .item .content .subscribers {
			          font-size:15px;
			          font-weight:100;
			          color:#c0c0c0;
			          margin-left:10px;
			        }
			      `}</style>
					</div>
				)
			}
		} else {
			return (<div></div>)
		}
	}
}
