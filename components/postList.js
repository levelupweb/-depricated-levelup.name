import React from 'react';
import Avatar from 'react-avatar'
import getPosts from '../utils/getPosts.js'
import Link from 'next/link'
import Loader from './loader.js'
import SubscribeButton from './subscribeButton.js'
import TimeAgo from 'timeago-react';

// 1 Level: accepting userlist data
// 2 Level: accepting userID and retriving userSubscriptions
// 3 Level: accepting nothing and retriving all users

export default class PostList extends React.Component {
   constructor(props) {
		super(props);
		this.state = {
			posts: [],
			isLoaded: false
		}
   } 

	componentWillMount() {
		if(this.props.posts === undefined) {
			if(this.props.subscriber) {
				getUserSubscriptions(this.props.subscriber).then((res) => {
					this.setState({
						posts : res.data,
						isLoaded: true
					})
				})
			} else {
				getPosts(1).then((res) => {
					this.setState({
						posts: res.data,
						isLoaded: true
					})
				})
			}
		} else {
			this.setState({
				posts: this.props.posts,
				isLoaded: true
			})
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.posts) {
			this.setState({
				posts: nextProps.posts
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
	  	  if(this.state.posts.length == 0) {
		      return (
		        <div className="no-content">
		          <p>Список пуст</p>
		        </div>
		      )
		   } else {
		   	return (
		       <div className="post-list">
		         {this.state.posts.map((item, i) => {
		           return <Post size={this.props.size} post={item} key={i} />
		         })}
		         <style jsx>{`
						.post-list {
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

class Post extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var post = this.props.post
		if (post) {
			if(this.props.size != 'block') {
				return (
					<div className="item">
						<Link href={{ pathname: 'post', query: { slug: post.slug }}}><a>
			                <Avatar color={`#46978c`} round={true} size={32} src={post.postImage} name={post.postTitle} />
			            </a></Link>
			            <div className="content">
							<h4 className="ui header">
								<Link href={{ pathname: 'post', query: { slug: post.slug }}}>
									<a>{post.postTitle}</a>
								</Link>
								<div className="sub header">{(post.postDescription) ? post.postDescription : `Подписчиков: ${post.postSubscribersCount}`}</div>
							</h4>
						</div>
						<div className="updates">+1</div>
						<style jsx>{`
							.item {
								margin:10px 0px;
								border-bottom:1px solid rgba(255,255,255,0.2);
								display:flex;
								align-items:center;
								flex-direction:row;
								padding:7px 0px;
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
					    <Avatar color={`#46978c`} round={true} size={50} src={post.postImage} name={post.postTitle} />
					  </div>
					  <div className="content">
				        <div className="left">
				  		    <Link href={{ pathname: 'post', query: { slug: post.slug }}}>
				            <a className="header">{post.postTitle}</a> 
				          </Link>
				  		    <div className="description">
				  		      <TimeAgo datetime={post.updated} locale='ru' />
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
