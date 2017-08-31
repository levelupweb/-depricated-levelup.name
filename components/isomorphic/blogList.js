// Important
import React from 'react';

// Actions
import { getBlogs } from '../../actions/blog.js'
import { getSubscriptions } from '../../actions/user.js'

// Components
import Avatar from 'react-avatar'
import Link from 'next/link'
import Loader from './loader.js'
import SubscribeButton from './subscribeButton.js'

export default class BlogList extends React.Component {
  constructor(props) {
    super(props);
  } 

  renderBlogs(blogs, size = "list") {
  	return blogs.map((blog, i) => {
      return <Blog size={size} blog={blog} key={i} />
    })
  }

  render() {
  	const { blogs, size } = this.props;
  	if(blogs.length == 0) {
	   	return (
        <div className="no-content">
          <p><i className="fa fa-ellipsis-h"></i> Блоги не найдены</p>
        </div>
      )
	   } else {
	   	return (
	      <div className="user-list">
	        {this.renderBlogs(blogs, size)}
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

class Blog extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { blog, size } = this.props
		if (blog) {
			const { _id, slug, image, description, title, subscribers } = blog
			if(size != 'block') {
				return (
					<div className="item">
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
						<style jsx>{`
							.item {
								border-bottom:1px solid rgba(255,255,255,0.2);
								display:flex;
								align-items:center;
								flex-direction:row;
								overflow:hidden;
								max-width:100%;
								margin-bottom:10px;
							}
							.item:last-child {
								margin-bottom:0
							}
							.item .header .sub {
								white-space:nowrap;
								max-width:100%;
								overflow:hidden;
								position:relative;
							}
							.item:before {
								background: -moz-linear-gradient(left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%); /* FF3.6-15 */
								background: -webkit-linear-gradient(left, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Chrome10-25,Safari5.1-6 */
								background: linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
								filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=1 ); /* IE6-9 */
								position:absolute;
								left:0px;
								width:100%;
								top:0px;
								height:100%;
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
					    <Avatar color={`#46978c`} round={true} size={50} src={image} name={title} />
					  </div>
					  <div className="content">
			        <div className="left">
			  		    <Link href={{ pathname: 'blog', query: { slug }}}>
			            <a className="header">{title}</a> 
			          </Link>
			          <span className="subscribers">1 подписчик</span>
			  		    <div className="description">
			  		      {description}
			  		    </div>
			        </div>
			        <div className="right">
			          <div className="action">
				          <SubscribeButton 
					          subscribeText="Подписаться" 
					          unsubscribeText="Отписаться" 
					          additionalClasses="small" 
					          entryType="blog"
					          entryID={_id} />
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

function Blogs(props) {
	return (
		<div>
			{props.children}
		</div>
	)
}

function NoContent() {
	return (
		<div className="no-content">
      <p>
      	<i className="fa fa-ellipsis-h"></i> Ваш список подписок на блоги пока пуст. <Link href={{ pathname: 'explore'}}><a>Подпишитесь</a></Link> на интересные вам блоги и читайте только интересное вам!
      </p>
    </div>
   )
}