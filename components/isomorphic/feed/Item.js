// Important
import React from 'react';
import cookies from 'js-cookie'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Components
import Note from './views/Note.js'
import Default from './views/Default.js'
import Blank from './views/Blank.js'

const Item = ({ currentUser, post, onRemove }) => {
  switch(post.type) {
    case 'note':
    return <Note post={post} onRemove={postId => {onRemove(PostId)}} />
    default:
    return <Default post={post} onRemove={postId => {onRemove(PostId)}} />
  }
}

Item.propTypes = {
  post: PropTypes.object.isRequired,
  onRemove: PropTypes.func
}

function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Item)