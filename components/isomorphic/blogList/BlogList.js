import applyStyles from 'next-style-loader/applyStyles';
import blogListStyles from './blogList.css';
import React from 'react';
import Blog from './Blog.js';
import PropTypes from 'prop-types';

const renderBlogs = (blogs, size = "list") => 
	blogs.map((blog, i) => <Blog size={size} blog={blog} key={i} />)

const BlogList = ({ blogs, size }) => {
	if(blogs.length) {
		return (
			<div className="blog-list">
      	{renderBlogs(blogs, size)}
    	</div>
    )
	} else {
		return (
			<div className="no-content">
        <p><i className="fa fa-ellipsis-h"></i> Блоги не найдены</p>
      </div>
		)
	}
}

BlogList.defaultProps = {
	size: 'list'
}

BlogList.PropTypes = {
	blogs: PropTypes.array,
	size: PropTypes.string
}

export default applyStyles(blogListStyles)(BlogList);