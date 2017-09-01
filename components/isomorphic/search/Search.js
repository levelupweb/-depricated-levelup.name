import React from 'react';
import BlogList from '../blogList/BlogList.js';
import PropTypes from 'prop-types';
import searchStyles from './search.css';
import applyStyles from 'next-style-loader/applyStyles';
import Link from 'next/link'
import Loader from '../loader.js'

const renderBlogList = (blogs = []) => {
	if(blogs.length > 0) {
		return <BlogList size="block" blogs={blogs} />
	}
}
 
const Search = ({ searchResults, isLoading, foundSomething, searchQuery, children }) => {
	if(searchQuery.length) {
		return (
			<div className="search">
				<div className="search-input">
					{children}
				</div>
				<div className="search-results blocks block-shadow">
					{!isLoading ? 
						<div>
							<div className="block-item">
								<h4 className="header ui">
									Результаты поиска
								</h4>
							</div>
							<div className="block-item">
								{foundSomething ? 
									renderBlogList(searchResults.blogs)
									: 
									<div>К сожалению, ничего не найдено</div>
								}
							</div>
							<div className="block-item">
				  			<Link href={{ pathname: 'search', query: { query: searchQuery }}}>
				  				<a className="item">
				  		  	Более точный поиск..
				  				</a>
				  			</Link>
			      	</div>
						</div>
						:
						<div className="results-isLoading">
							<Loader />
						</div>
					}
				</div>
			</div>
		)
	} else {
		return (
			<div className="search">
				<div className="search-input">
					{children}
				</div>
			</div>
		)
	}
}

Search.propTypes = {
	searchResults: PropTypes.object.isRequired,
	foundSomething: PropTypes.bool.isRequired,
	searchQuery: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired
}

Search.defaultProps = {
	searchResults: {
		blogs: [],
		tags: [],
		users: [],
		posts: []
	}, 
	foundSomething: false,
	isActive: false,
	isLoading: false,
	searchQuery: ''
}

export default applyStyles(searchStyles)(Search);