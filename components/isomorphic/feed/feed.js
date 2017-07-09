// Important
import config from '../../../app.config.js'
import { connect } from 'react-redux'
import Router from 'next/router'
import cookies from 'js-cookie'
import Loader from '../loader'
import Link from 'next/link'
import React from 'react'
import hash from 'object-hash'

// Actions
import { getPosts, fetchPosts, createPostsInstance } from '../../../actions/post.js'

// Components
import InfiniteScroll from 'redux-infinite-scroll';
import Item from './item.js'
import Blank from './views/blank.js'
import Note from './views/note.js'
import FlashPost from '../flashPost.js'

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token');
    this.dispatch = this.props.dispatch;
    this.state = {
      defaultSkip: 0,
      key: null
    }
  }

  // React Lifecycle
  componentWillMount() {
    const key = hash(this.props.options)
    if (key != this.state.key) {
      this.createInstance(this.props.options)
    }
  }

  componentWillReceiveProps(nextProps) {
    const key = hash(nextProps.options)
    if (key != this.state.key) {
      this.createInstance(nextProps.options)
    } 
  }

  createInstance(options) {
    const key = hash(options)
    if(!this.props.postsStorage[key]) {
      this.dispatch(
        createPostsInstance(
          key, 
          options
        )
      )
      this.loadMore(
        options,
        this.state.defaultSkip,
        key
      )
    }
    this.setState({
      key,
      options
    })
  }

  // Specific Methods
  loadMore(options, skip, key) {
    this.dispatch(
      fetchPosts(
        options, 
        skip,
        key
      )
    )
  }

  render() {
    var instance = this.props.postsStorage[this.state.key];
    if(instance) {
      var components = instance.posts.map((entry, i) => {
        return <Item article={entry} key={entry._id} />
      })
      return (
        <div className="grid">
          {this.props.flashPost && 
            <FlashPost onSubmit={(post) => {this.pushPost(post)}} />
          }
          <InfiniteScroll
            items={components}
            loadMore={() => {this.loadMore(this.state.options, instance.posts.length, this.state.key)}} 
            hasMore={!instance.isFull}
            threshold={10}
            elementIsScrollable={false}
          />
        </div>
      )
    } else {
      return null
    }
  }
}

function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser,
    postsStorage: state.postsStorage
  }
}

export default connect(mapStateToProps)(Feed)