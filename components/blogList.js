import React from 'react';
import Avatar from 'react-avatar'
import { getBlogs, getUserSubscriptions } from '../actions/blog.js'
import Link from 'next/link'
import Loader from './loader.js'
import SubscribeButton from './subscribeButton.js'

// 1 Level: accepting userlist data
// 2 Level: accepting userID and retriving userSubscriptions
// 3 Level: accepting nothing and retriving all users

export default class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      isLoaded: false
    }
  } 

	componentWillMount() {
		if(this.props.blogs === undefined) {
			if(this.props.subscriber) {
				getUserSubscriptions(this.props.subscriber).then((res) => {
					this.setState({
						blogs : res.data
					})
				})
			} else {
				getBlogs().then((res) => {
					this.setState({
						blogs: res.data
					})
				})
			}
		} else {
			this.setState({
				blogs: this.props.blogs
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
  	  if(this.state.blogs.length == 0) {
	      return (
	        <div className="no-content">
	          <p>Список пуст</p>
	        </div>
	      )
	   } else {
	   	return (
	       <div className="blog-list">
	         {this.state.blogs.map((item, i) => {
	           return <Blog size={this.props.size} blogData={item} key={i} />
	         })}
	         <style jsx>{`
					.blog-list {
						width:100%;
					}
	         `}</style>
	       </div>
	     )
	   }
   } else {
	   return (<Loader />)
    }
  }
}


class Blog extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var blog = this.props.blogData
		if (blog) {
			if(this.props.size != 'block') {
				return (
					<div className="item">
						<Link href={{ pathname: 'b;pg', query: { slug: blog.slug }}}><a>
			                <Avatar color={`#46978c`} round={true} size={32} src={blog.blogImage} name={blog.blogTitle} />
			            </a></Link>
			            <div className="content">
							<h4 className="ui header">
								<Link href={{ pathname: 'blog', query: { slug: blog.slug }}}>
									<a>{blog.blogTitle}</a>
								</Link>
								<div className="sub header">{(blog.blogDescription) ? blog.blogDescription : `Подписчиков: ${blog.blogSubscribersCount}`}</div>
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
					    <Avatar color={`#46978c`} round={true} size={50} src={blog.blogImage} name={blog.blogTitle} />
					  </div>
					  <div className="content">
			        <div className="left">
			  		    <Link href={{ pathname: 'blog', query: { slug: blog.slug }}}>
			            <a className="header">{blog.blogTitle}</a> 
			          </Link>
			          <span className="subscribers">1 подписчик</span>
			  		    <div className="description">
			  		      {blog.blogDescription}
			  		    </div>
			        </div>
			        <div className="right">
			          <div className="action">

			          <SubscribeButton 
				          subscribeText="Подписаться" 
				          unsubscribeText="Отписаться" 
				          additionalClasses="basic small" 
				          entryType="blog"
				          entryID={blog._id}
				          />
			        </div>
			        </div>
					  </div>

			      <style jsx>{`
			        .item {
			          display:flex;
			          align-items:center;
			          width:100%;
			          padding-bottom:8px;
			          border-bottom:1px solid #eee;
			          margin:8px 0px;
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
