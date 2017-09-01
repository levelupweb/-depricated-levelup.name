import React from 'react';
import SubscribeButton from '../subscribeButton.js';
import Avatar from 'react-avatar';
import TimeAgo from 'timeago-react'
import config from '../../../app.config.js'
import Link from 'next/link'

const User = ({ user, size }) => {
	const { _id, slug, image, description, fullName, subscribers, updated } = user
	switch(size) {
		case 'block': 
		return (<div className="user-item block">
		  <div className="image">
		    <Avatar color="#46978c" round={true} size={50} src={image ? config.static + image : null}  name={fullName} />
		  </div>
		  <div className="content">
        <div className="left">
  		    <Link href={{ pathname: 'user', query: { slug }}}>
            <a className="header">{fullName}</a> 
          </Link>
          <span className="subscribers">{subscribers.length} подп.</span>
  		    <div className="description">
  		      {description || <span>Зарегистрирован: <TimeAgo datetime={updated} locale='ru' /></span>}
  		    </div>
        </div>
        <div className="right">
          <div className="action">
	          <SubscribeButton 
		          subscribeText="Подписаться" 
		          unsubscribeText="Отписаться" 
		          additionalClasses="small" 
		          entryType="user"
		          entryID={_id} 
		        />
	        </div>
        </div>
		  </div>
		</div>)
		default:
		return (<div className="user-item">
			<Link href={{ pathname: 'user', query: { slug }}}><a>
        <Avatar color="#46978c" round={true} size={32} src={image ? config.static + image : null} name={fullName} />
      </a></Link>
      <div className="content">
				<h4 className="ui header">
					<Link href={{ pathname: 'user', query: { slug }}}>
						<a>{fullName}</a>
					</Link>
					<div className="sub header">{(description) ? description : `Подписчиков: ${subscribers}`}</div>
				</h4>
			</div>
		</div>)
	}
}

export default User;