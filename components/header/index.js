import React from 'react';
import { connect } from 'react-redux'
import Link from 'next/link'
import { makeSearch } from '../../actions/app.js'
import Avatar from 'react-avatar'
import UserList from '../userList.js'
import PostList from '../postList.js'
import BlogList from '../blogList.js'

class Header extends React.Component {
   constructor(props) {
		super(props);
		this.state = {
			results: {
				query: null,
				users: [],
				posts: [],
				blogs: [],
				isRevealed: false
			}
		}
   }

   getSearch() {
	  	var results = $('.results')
	  	this.setState({ isRevealed: !this.state.isRevealed })
	  	var dimmer = require('semantic-ui-dimmer');
	  	$('.after-header').dimmer({ closable:false })
	  	.dimmer('toggle');  
   }

   handleTyping(e) {
		var query = e.target.value;
		this.setState({
			query: e.target.value
		})
		if(query.length > 0) {
			makeSearch(query).then((res) => {
				this.setState({
					results: res.data
				})
			})
		}
   }

   render() {
   	var results = this.state.results;
    	return (
      <div className="header-wrapper">
  		{this.state.isRevealed ?
		   <div className="ui secondary menu search">
		    	<div className="menu left">
		    		<div className="search-inner">
		    			<div className="search">
							<input onChange={(e) => {this.handleTyping(e)}} type="text" ref={input => input && input.focus()} className="search-input" placeholder="Что будем искать?" />
				    		<div className="results block">
					    		{results.posts.length > 0 &&
									<div className="block-vertical">
							    		<h3 className="ui header">Посты</h3>
										<div className="grid">
											<PostList size="block" posts={results.posts} />
										</div>
									</div>
								}
								{results.users.length > 0 &&
									<div className="block-vertical">
							    		<h3 className="ui header">Пользователи</h3>
										<div className="grid">
											<UserList size="block" users={results.users} />
										</div>
									</div>
								}
								{results.blogs.length > 0 &&
									<div className="block-vertical">
							    		<h3 className="ui header">Блоги</h3>
										<div className="grid">
											<BlogList size="block" blogs={results.blogs} />
										</div>
									</div>
								}
								{(results.blogs.length > 0
								 || results.posts.length > 0
								 || results.users.length > 0) &&
									<div className="results-all block-vertical">
										<Link href={{ pathname: 'search', query: { query: this.state.query }}}>
											<a>Все результаты</a>
										</Link>
									</div>
								}
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
				   <Link href='/'><a className="item ui button default small"><b>Лента</b></a></Link>
			      <Link href='/authors'><a className="item ui button default small">Авторы</a></Link>
				   <Link href='/blogs'><a className="item ui button default small">Блоги</a></Link>
				   <Link href='/tags'><a className="item ui button default small">Темы</a></Link>
				   <Link href='/adv'><a className="item ui button default small">Реклама</a></Link>
				</div>
				<div className="right">
			   	<a className="ui item button default small" onClick={() => {this.getSearch(true)}}>
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
		 			margin-right:8px;
		 			font-size:13px;
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
				.block-vertical {
					background:#fff;
					padding:23px 30px;
					border-bottom:1px solid #eee;
				}
				.results-all {
					width:100%;
					text-align:center;
					padding:20px;

				}
	 	`}</style>
		</div>
    );
  }
}



export default connect((state) => state)(Header)