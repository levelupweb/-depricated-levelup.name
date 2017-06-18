import React from 'react';
import { connect } from 'react-redux'
import Link from 'next/link'
import { makeSearch } from '../../actions/app.js'
import Avatar from 'react-avatar'
import TimeAgo from 'timeago-react';

class Header extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			results: {
				users: [],
				posts: [],
				tags : []
			}
		}
  }

  getSearch() {
	  	var results = $('.results')
	  	this.props.dispatch({type: 'SEARCH_SWITCH'})

	  	var dimmer = require('semantic-ui-dimmer');
	  	$('.after-header').dimmer({closable:false})
	  	.dimmer('toggle');  
  }

  handleTyping(e) {
		var query = e.target.value;
		makeSearch(query).then((res) => {
			this.setState({
				results: res.data
			})
		})
  }

  render() {
  	//console.log(this.state)
    return (
      <div className="header-wrapper">

  		{this.props.header.search ?
		    <div className="ui secondary menu block search">
		    	<div className="menu left">
		    		<div className="search-inner">
		    			<div className="search">
							<input onChange={(e) => {this.handleTyping(e)}} type="text" ref={input => input && input.focus()} className="search-input" placeholder="Что будем искать?" />
				    		<div className="results block">
					    		<UserList users={this.state.results.users} />
					    		<PostList posts={this.state.results.posts} />
					 		</div>
				    	</div>
		    			<a className="ui item" onClick={() => {this.getSearch(true)}}>
							<i className="fa fa-times"></i>
						</a>
				    </div>
			    </div>
		    </div>
			    :
			<div className="block menu primary">
				<div className="left">
					<Link href='/'><a className="item"><b>Лента</b></a></Link>
			      <Link href='/authors'><a className="item">Авторы</a></Link>
				   <Link href='/blogs'><a className="item">Блоги</a></Link>
				   <Link href='/adv'><a className="item">Рекламодателям</a></Link>
				</div>
				<div className="right">
				   	<a className="ui item" onClick={() => {this.getSearch(true)}}>
						<i className="fa fa-search"></i>
				   	</a>
				</div>
			</div>
			
			}	

			 <style jsx>{`
			 		.menu.primary {
						display:flex;
						justify-content:space-between;
						align-items:center;
						height:80px;
			 		}
			 		.menu.primary .item {
			 			margin-right:17px;
			 			font-size:16px;
			 			display:inline-block;
			 			color:#000;
			 			margin-top:5px;
			 		}
			 		.menu.primary .right .item {
			 			margin-right:0px;
			 		}
			 		.menu.primary .item:hover {
			 			color:#333;
			 		}
					.search {
						width:100%;
						position:relative;
					}
					.search .results {
						position:absolute;
						left:0px;
						top:100%;
						width:668px;
						background:transparent;
						z-index:9999;	
					}
					.header-wrapper {
						background: #fff;
						border-bottom:1px solid #eee;
					}

					.header-wrapper .search {
						background:#fafafa!important;
						padding:0px!important;
						padding-right:30px!important;
					}
					.header-wrapper .search-inner {
						display:flex;
						flex-direction:row;
						justify-content:center;
						width:100%;
					}
					.header-wrapper .search-input {
						background:none;
						border:0px;
						font-size:25px;
						outline:0px;
						padding:10px 40px;
						width:100%;
						height:85px;
					}
					.header-wrapper .secondary.menu {
						margin:0px!important;
						height:85px!important;
					}
					.header-wrapper .secondary.menu .item {
						font-size:16px;
					}

	    		`}</style>
		</div>
    );
  }
}

class UserList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{(this.props.users.length > 0) ? 
					<div>
						<h3 className="ui header inverted">Пользователи</h3>
						{ this.props.users.map((item, i) => {
							return (<User user={item} key={i} />)
						}) }
					</div>
					: <div></div> }
			</div>
		)
	}
}

class PostList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{(this.props.posts.length > 0) ? 
					<div>
						<h3 className="ui header inverted">Посты</h3>
						{ this.props.posts.map((item, i) => {
							return (<Post post={item} key={i} />)
						}) }
					</div>
					: <div></div> }
			</div>
		)
	}
}


class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	var user = this.props.user;
    return (
      <div className="user">
      	<div className="image">
      		<Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
            	<Avatar color={`#46978c`} round={true} size={90} src={user.userImage} name={user.userName} />
            </a></Link>
      	</div>
      	<div className="content">
      		<h5 className="ui header inverted">
      			{user.userName}
      			<div className="sub header">
      				{(user.userDescription) ? user.userDescription : `Подписчиков: ${user.userSubscribersCount}`}
      			</div>
      		</h5>
      	</div>
      	<style jsx>{`
      		.user {
      			display:flex;
      			flex-direction:column;
      			align-items:center;
      			justify-content:center;
      			margin-right:20px;
      			width:20%;
      		}
				.content {
					margin-top:10px;
					color:#fff!important;	
					text-align:center;
				}

				.image {
					margin:auto;
				}

				.content .sub.header {
					margin-top:10px;
				}
      	`}</style>
      </div>
    )
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	var post = this.props.post;
    return (
      <div className="post">
      	<div className="image">
      		<Link href={{ pathname: 'post', query: { slug: post.slug }}}><a>
            	<img className="ui rounded image" src={post.postImage} width="100%" />
            </a></Link>
      	</div>
      	<div className="content">
      		<h3 className="ui header inverted">
      			{post.postTitle}
      			<div className="sub header">
      				<TimeAgo datetime={post.updated} locale='ru' />
      			</div>
      		</h3>
      	</div>
      	<style jsx>{`
      		.post {
      			display:flex;
      			flex-direction:column;
      			align-items:center;
      			justify-content:center;
      			margin-right:20px;
      			width:33.3%;
      		}
				.content {
					margin-top:10px;
					color:#fff!important;	
					text-align:center;
				}

				.image {
					margin:auto;
				}

				.content .sub.header {
					margin-top:10px;
				}
      	`}</style>
      </div>
    )
  }
}


export default connect((state) => state)(Header)