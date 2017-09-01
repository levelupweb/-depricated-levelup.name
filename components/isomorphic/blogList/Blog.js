import React from 'react';
import SubscribeButton from '../subscribeButton.js';
import Avatar from 'react-avatar';
import TimeAgo from 'timeago-react'
import Link from 'next/link'

const Blog = ({ blog, size }) => {
	const { _id, slug, image, description, title, subscribers, created } = blog
	switch(size) {
		case 'block': 
		return (<div className="blog-item block">
		  <div className="image">
		    <Avatar color={`#46978c`} round={true} size={50} src={image} name={title} />
		  </div>
		  <div className="content">
        <div className="left">
  		    <Link href={{ pathname: 'blog', query: { slug }}}>
            <a className="header">{title}</a> 
          </Link>
          <span className="subscribers">1 подписчик</span>
  		    <div className="description">
  		      {description || <span>Создан: <TimeAgo datetime={created} locale='ru' /></span>}
  		    </div>
        </div>
        <div className="right">
          <div className="action">
	          <SubscribeButton 
		          subscribeText="Подписаться" 
		          unsubscribeText="Отписаться" 
		          additionalClasses="small" 
		          entryType="blog"
		          entryID={_id} 
		        />
	        </div>
        </div>
		  </div>
		</div>)
		default:
		return (<div className="blog-item">
			<Link href={{ pathname: 'blog', query: { slug }}}><a>
          <Avatar color={`#46978c`} round={true} size={32} src={image} name={title} />
      </a></Link>
      <div className="content">
				<h4 className="ui header">
					<Link href={{ pathname: 'blog', query: { slug }}}>
						<a>{title}</a>
					</Link>
					<div className="sub header">{(description) ? description : `Подписчиков: ${subscribers}`}</div>
				</h4>
			</div>
		</div>)
	}
}

export default Blog;