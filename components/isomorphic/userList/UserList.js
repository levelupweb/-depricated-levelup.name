import applyStyles from 'next-style-loader/applyStyles';
import userListStyles from './userList.css';
import React from 'react';
import User from './User.js';
import PropTypes from 'prop-types';

const renderUsers = (users, size = "list") => 
	users.map((user, i) => <User size={size} user={user} key={i} />)

const userList = ({ users, size }) => {
	if(users.length) {
		return (
			<div className="user-list">
      	{renderUsers(users, size)}
    	</div>
    )
	} else {
		return (
			<div className="no-content">
        <p><i className="fa fa-ellipsis-h"></i> Пользователи не найдены</p>
      </div>
		)
	}
}

userList.defaultProps = {
	size: 'list'
}

userList.PropTypes = {
	users: PropTypes.array,
	size: PropTypes.string
}

export default applyStyles(userListStyles)(userList);