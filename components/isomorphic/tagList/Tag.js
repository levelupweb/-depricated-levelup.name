import React from 'react';
import SubscribeButton from '../subscribeButton.js';
import Avatar from 'react-avatar';
import TimeAgo from 'timeago-react'
import PropTypes from 'prop-types';
import Link from 'next/link'
import applyStyles from 'next-style-loader/applyStyles';
import tagStyles from './tagList.css';

import {
	TAG_SIZE_BLOCK,
	TAG_SIZE_LIST,
	TAG_SIZE_MENU,
  TAG_SIZE_GRID
} from './TagList.consts.js'

const Tag = ({ tag, size }) => {
	const { _id, slug, image, description, title, subscribers } = tag
	switch(size) {
		case TAG_SIZE_BLOCK: 
		return (<div className="tag block">
      <div className="info">
        <span><strong>{subscribers.length}</strong> подписчиков</span>
      </div>
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <Link href={{ pathname: 'search', query: { query: slug }}}>
          <a title={title} className="header">{title}</a>
        </Link>
        <div className="meta">
          <p>{description ? description : "У этого тега пока нет описания"}</p>
        </div>
      </div>
      <div className="action">
        <SubscribeButton 
          subscribeText="Подписаться" 
          unsubscribeText="Отписаться"
          entryType="tag"
          entryId={_id}
          additionalClasses="small"
        />
      </div>
    </div>)
    case TAG_SIZE_GRID: 
    return (<div className="eight wide column">
      <div className="tag block">
      <div className="info">
        <span><strong>{subscribers.length}</strong> подписчиков</span>
      </div>
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <Link href={{ pathname: 'search', query: { query: slug }}}>
          <a title={title} className="header">{title}</a>
        </Link>
        <div className="meta">
          <p>{description ? description : "У этого тега пока нет описания"}</p>
        </div>
      </div>
      <div className="action">
        <SubscribeButton 
          subscribeText="Подписаться" 
          unsubscribeText="Отписаться"
          entryType="tag"
          entryId={_id}
          additionalClasses="small"
        />
      </div>
      </div>
    </div>)
		case TAG_SIZE_MENU:
		return (<div className="tag menu">
      <Link href={{ pathname: 'search', query: { query: slug }}}>
        <a className="header">{title}</a>
      </Link>
    </div>)
		case TAG_SIZE_LIST:
		return (<div className="tag list">
      <Link href={{ pathname: 'search', query: { query: slug }}}>
        <a>{title}</a>
      </Link>
    </div>)
    default:
    return null
	}
}

Tag.propTypes = {
	size: PropTypes.string,
	tag: PropTypes.object.isRequired
}

Tag.defaultProps = {
	size: TAG_SIZE_LIST
}

export default applyStyles(tagStyles)(Tag)