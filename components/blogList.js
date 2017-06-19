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

	componentWillReceiveProps(nextProps) {
		if(nextProps.blogs) {
			this.setState({
				blogs: nextProps.blogs
			})
		}
	}

   componentDidMount() {
	  	this.setState({
	  		isLoaded: true
	  	})
   }

  render() {
  	console.log(this.state)
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
						<Link href={{ pathname: 'blog', query: { slug: blog.slug }}}><a>
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
								border-bottom:1px solid rgba(255,255,255,0.2);
								display:flex;
								align-items:center;
								flex-direction:row;

								overflow:hidden;
								max-width:100%;
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
			          border-bottom:1px solid #eee;
			          padding:0px!important;
						 margin:0px!important;
						 margin-bottom:8px!important;
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
