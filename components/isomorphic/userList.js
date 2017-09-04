// Important
import React from 'react';

// Actions
import { getUser, getUsers, getSubscriptions } from '../../actions/user.js'

// Components
import Avatar from 'react-avatar'
import Link from 'next/link'
import Loader from './loader.js'
import SubscribeButton from './subscribeButton.js'


class UserList extends React.Component {
  constructor(props) {
		super(props);
  } 

  renderUsers(users, size = 'list') {
    return users.map((user, i) => {
     	return <User size={size} user={user} key={i} />
   	})
  }

  render() {
  	const { users, size } = this.props;
  	if(users.length == 0) {
	   	return (
        <div className="no-content">
          <p><i className="fa fa-ellipsis-h"></i> Пользователи не найдены</p>
        </div>
      )
	   } else {
	   	return (
	      <div className="user-list">
	        {this.renderUsers(users, size)}
	        <style jsx>{`
						.user-list {
							width:100%;
						}
	        `}</style>
	      </div>
	    )
	  } 
  }
}


class User extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { size } = this.props;
		const user = this.props.user;
		if(user) {
			const { image, fullName, slug, description, updated, subscribers, _id } = user;
			if(size != 'block') {
				return (
					<div className="item">
						<Link href={{ pathname: 'user', query: { slug }}}><a>
              <Avatar color={`#46978c`} round={true} size={32} src={image} name={fullName} />
          	</a></Link>
			      <div className="content">
							<h4 className="ui header">
								<Link href={{ pathname: 'user', query: { slug }}}>
									<a>{fullName}</a>
								</Link>
								<div className="sub header">{description ? description : `Подписчиков: ${subscribers.length}`}</div>
							</h4>
						</div>
						<style jsx>{`
							.item {
								border-bottom:1px solid rgba(255,255,255,0.2);
								display:flex;
								align-items:center;
								flex-direction:row;
								margin:5px 0px;
								margin-bottom:10px;
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
				    	<Avatar color={`#46978c`} round={true} size={50} src={image} name={fullName} />
				  	</div>
				  	<div className="content">
		        	<div className="left">
		  		    	<Link href={{ pathname: 'user', query: { slug }}}>
		            	<a className="header">{fullName}</a> 
		          	</Link>
		          	<span className="subscribers">{subscribers.length} подписчик</span>
		  		    	<div className="description">
		  		      	{description}
		  		    	</div>
		        	</div>
		        	<div className="right">
		          	<div className="action">
			          	<SubscribeButton 
				          subscribeText="Подписаться" 
				          unsubscribeText="Отписаться"
				          entryType="user"
				          entryID={_id} 
				          additionalClasses="small" 
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
			          padding-bottom:8px;
								margin:0px!important;
								margin-bottom:8px!important;
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
			          font-size:13px;
			          font-weight:100;
			          color:#c0c0c0;
			          margin-left:10px;
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


export default UserList;