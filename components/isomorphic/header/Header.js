// Important
import React from 'react';
import { connect } from 'react-redux'
import config from '../../../app.config.js'
import Search from '../search/Search.js';
import headerStyles from './header.css';
import applyStyles from 'next-style-loader/applyStyles';

// Actions
import { makeSearch } from '../../../models/app.js'

// Components
import Auth from '../authentication/index.js'
import Link from 'next/link'
import User from '../user.js'
import Avatar from 'react-avatar'
import UserList from '../userList.js'
import PostList from '../postList.js'
import BlogList from '../blogList/BlogList.js'

const performSearch = query => 
	makeSearch(query).then(response => 
		Promise.resolve(response.data.total ? response.data : false)
	)

class Header extends React.Component {
  constructor(props) {
		super(props);
		this.state = { 
			search: {
				searchQuery: '',
				isLoading: false,
				foundSomething: false,
				searchResults: {}
			}
		}
  }

  handleSearch(query) {
  	const { search } = this.state;
  	const { isLoading, isActive } = search;

  	this.setState({
  		search: { ...search,
				isLoading: true,
				searchQuery: query
  		}
  	}, () => {
  		performSearch(query).then(searchResults => {
				if(searchResults) {
					this.setState({
						search: { ...this.state.search,
							isLoading: false,
							foundSomething: true,
							searchResults
						}
					})
				} else {
					this.setState({
						search: { ...this.state.search,
							isLoading: false,
							foundSomething: false
						}
					})
				}
  		})
  	})
  }

  renderUser(currentUser) {
  	if(currentUser.isLogged) {
  		return (
  			<Link href='/me'><a>
          <Avatar color="#46978c" round={true} size={37} 
          	src={currentUser.image} 
          	name={currentUser.fullName}  />
        </a></Link>
  		)
  	} else {
  		return (
  			<Auth><div className="ui button basic circular">
					Войти
				</div></Auth>
			)
  	}
  }

  render() {
   	const { 
   		currentUser 
   	} = this.props;
   	const { 
   		isActive, 
   		isLoading, 
   		searchResults, 
   		foundSomething, 
   		searchQuery 
   	} = this.state.search;
  	return (
	    <div className="header-wrapper">
				<div className="header">
		   		<div className="menu">
		 				<div className="item">
		 					{this.renderUser(currentUser)}
		 				</div>
		 				<Link href="/">
		 					<a className="item ui button primary circular">
		    			Лента
							</a>
			  		</Link>
				  	{currentUser.isLogged && 
				  		<span>
					  		<Link href="/editor">
					  			<a className="item ui button basic circular icon">
						    		<i className="fa fa-pencil"></i>
									</a>
								</Link>
						  	<Link href="/editor">
						  		<a className="item ui button basic circular icon">
					    			<i className="fa fa-video-camera"></i>
									</a>
								</Link>
								<a className="item ui button basic circular icon">
						    	<i className="fa fa-bell-o"></i>
								</a>
							</span>
						}
						<div className="item">
					    <Search 
					    	searchResults={searchResults}
								isLoading={isLoading}
								foundSomething={foundSomething}
								searchQuery={searchQuery}
							>
					    	<input onInput={(e) => {this.handleSearch(e.target.value)}} type="text" placeholder="Поиск по авторам, блогам, темам.." />
					    </Search>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}


export default connect(mapStateToProps)(applyStyles(headerStyles)(Header))