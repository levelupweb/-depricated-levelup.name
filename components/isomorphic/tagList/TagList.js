import applyStyles from 'next-style-loader/applyStyles';
import tagListStyles from './tagList.css';
import React from 'react';
import Tag from './Tag.js';
import PropTypes from 'prop-types';

import {
	TAG_SIZE_LIST
} from './TagList.consts.js'

const renderTags = (tags, size = TAG_SIZE_LIST) => 
	tags.map((tag, i) => <Tag size={size} tag={tag} key={i} />)

const TagList = ({ tags, size }) => {
	if(tags.length) {
		return (
			<div className="tag-list">
      	{renderTags(tags, size)}
    	</div>
    )
	} else {
		return (
			<div className="no-content">
        <p><i className="fa fa-ellipsis-h"></i> Тэги не найдены</p>
      </div>
		)
	}
}

TagList.defaultProps = {
	size: TAG_SIZE_LIST
}

TagList.PropTypes = {
	tags: PropTypes.array,
	size: PropTypes.string
}

export default applyStyles(tagListStyles)(TagList)