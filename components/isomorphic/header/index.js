// Important
import React from 'react';
import { connect } from 'react-redux'
import config from '../../../app.config.js'

// Actions
import { makeSearch } from '../../../actions/app.js'

// Components
import Link from 'next/link'
import User from '../user.js'
import Avatar from 'react-avatar'
import UserList from '../userList.js'
import PostList from '../postList.js'
import BlogList from '../blogList.js'

class Header extends React.Component {
   constructor(props) {
		super(props);
		this.currentUser = this.props.currentUser;
   }

   render() {
    	return (
      <div className="wrapper">
			<div className="header">
	   		<div className="menu">
   				<div className="item">
   					{this.currentUser.isLogged ?
   						<User id={this.currentUser._id} size="dropdown" imageSize={36} />
   							:
   						<Link href="/auth"><a className="ui button primary circular basic">
						    	Войти
						  	</a></Link>
   					}
   				</div>
   				<Link href="/"><a className="item ui button primary circular">
				    	Лента
				  	</a></Link>
				  	{this.currentUser.isLogged && 
				  		<span>
					  		<Link href="/editor"><a className="item ui button basic circular icon">
						    	<i className="fa fa-pencil"></i>
							</a></Link>
						  	<Link href="/editor"><a className="item ui button basic circular icon">
						    	<i className="fa fa-video-camera"></i>
							</a></Link>
							<a className="item ui button basic circular icon">
						    	<i className="fa fa-bell-o"></i>
							</a>
						</span>
					}
					<div className="item">
				    	<Search />
					</div>
				</div>
			</div>
			<style jsx>{`
			 	.wrapper {
					position:fixed;
					left:0px;
					top:0px;
					width:100%;
					background:#fff;
					z-index:999;
					box-shadow:0px 1px 2px 0 rgba(34, 36, 38, 0.15);
					border-bottom:1px solid #eee;
					padding: 10px 20px;
					min-height:65px;
					display:flex;
					flex-direction:row;
					align-items:center;
			 	}
			 	.header .menu {
			 		display:flex;
			 		flex-direction:row;
			 		align-items:center;
			 		width:1000px;
			 	}
			 	.header .menu .item {
			 		margin-right:10px;
			 		font-weight:100;
			 	}
			 	.header .menu .item.basic {
			 		box-shadow:none!important;
			 	}
			 
		 	`}</style>
		</div>
    );
  }
}

const defaultSearch = {
	query: null,
	results: {
		users: [],
		posts: [],
		blogs: [],
	}
}

class Search extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = defaultSearch
  	}


  	handleQuery(query) {
		this.setState({
			query
		}, () => {
			if(query.length > 0) {
				makeSearch(query).then((res) => {
					this.setState({
						results: res.data
					})
				})
			} else {
				this.setState(defaultSearch)
			}
		})
   }

  	render() {
  		var results = this.state.results;
    	return (
	      <div className="wrapper">
	      	<input className="search" onChange={(e) => {this.handleQuery(e.target.value)}} type="text" placeholder="Поиск по авторам, блогам, темам.." />
		    	{(results.blogs.length > 0 ||
		      results.users.length > 0 ||
		      results.posts.length > 0) &&
			      <div className="results block-shadow blocks ui">
				      <div className="block-item block-vertical">
				      	<h4 className="ui header">
				      		Результаты поиска <small>по вашему запросу</small>
				      	</h4>
				      </div>
			      	{results.posts.length > 0 && 
			      		<div className="block-item">
			      			<h4 className="ui header">
					      		Посты <small>публикации</small>
					      	</h4>
			      			<PostList posts={results.posts} />
			      		</div>
			      	}
			      	{results.blogs.length > 0 && 
			      		<div className="block-item">
			      			<h4 className="ui header">
					      		Блоги <small>свободные блоги</small>
					      	</h4>
			      			<BlogList blogs={results.blogs} />
			      		</div>
			      	}
			      	{results.users.length > 0 && 
			      		<div className="block-item">
			      			<h4 className="ui header">
					      		Пользователи <small>авторы публикаций</small>
					      	</h4>
			      			<UserList users={results.users} />
			      		</div>
			      	}
			      	<div className="block-item">
				      	<div className="ui vertical text menu">
							  	<Link href={{ pathname: 'search', query: { query: this.state.query }}}>
							  		<a className="item">
							    	Все результаты
							  		</a>
							  	</Link>
							</div>
				      </div>
			      </div>
		      }
	      	
	      	<style jsx>{`
	      		.wrapper {
	      			position:relative;
	      			width:500px;
	      		}
					.wrapper .search {
						width:500px;
						border:0px;
						background:transparent;
						outline:0px;
				 	}
				 	.wrapper .results {
				 		position:absolute;
				 		left:-10px;
				 		top:100%;
				 		margin-top:10px;
				 		background:#fff;
				 		border-radius:4px;
				 		width:100%;
				 	}
				 	.wrapper .results .menu .item {
				 		margin:0px;
				 		padding:0px;
				 	}
	      	`}</style>
	      </div>
    	);
  	}
}




export default connect((state) => state)(Header)