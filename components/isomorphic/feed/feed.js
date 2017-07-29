// Important
import config from '../../../app.config.js'
import { connect } from 'react-redux'
import Router from 'next/router'
import cookies from 'js-cookie'
import Loader from '../loader'
import Link from 'next/link'
import React from 'react'
import hash from 'object-hash'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Actions
import { getPosts, fetchPosts, createPostsInstance, pushPost, removePost } from '../../../actions/post.js'

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
      isMounted: false,
      key: null
    }
  }

  // React Lifecycle
  componentWillMount() {
    const { options, initialPosts, defaultPosts } = this.props;
    const key = hash(options)
    if (key != this.state.key) {
      this.createInstance(options, initialPosts, defaultPosts)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { options, initialPosts, defaultPosts } = nextProps;
    const key = hash(options)
    if (key != this.state.key) {
      this.createInstance(options, initialPosts, defaultPosts)
    } 
  }

  createInstance(options, initialPosts = [], defaultPosts = []) {
    const key = hash(options);
    if(!this.props.postsStorage[key]) {
      this.dispatch(createPostsInstance(
        key, 
        options,
        [...initialPosts, ...defaultPosts]
      ))
    }
    this.setState({
      key,
      options
    })
  }

  // Specific Methods
  loadMore(options, skip, key) {
    this.dispatch(fetchPosts(...arguments))
  }

  pushItem(token, key, post) {
    this.dispatch(pushPost(...arguments))
  }

  removeItem(token, key, id) {
    this.dispatch(removePost(...arguments))
  }

  isOwner(currentUserID, options) {
    const { userID, blogOwner } = options;
    if(userID) {
      return currentUserID == userID
    } else if(blogOwner) {
      return currentUserID == blogOwner
    } else {
      return true
    }
  }

  renderPosts(posts) {
    if(posts) {
      return posts.map((post, i) => {
        return <Item 
          post={post} 
          key={post._id} 
          onRemove={(postID) => {this.removeItem(this.token, this.state.key, postID)}} />
      })
    }
  }

  displayPosts(posts, options, skip, isFull) {
    const { key } = this.state;
    const instance = this.props.postsStorage[key]
    if(posts) {
      if(posts.length) {
        return (<InfiniteScroll
          children={posts}
          loadMore={() => {this.loadMore(key, options, skip)}} 
          hasMore={!isFull}
          threshold={10}
          elementIsScrollable={false} />)
      } else {
        return <div className="no-content">
          <div className="divider ui dot"></div>
        </div>
      }
    } else {
      return <Loader />
    }
  }

  render() {
    const { postsStorage, currentUser, options, postState, flashPost, defaultPosts, initialPosts } = this.props;
    const instance = postsStorage[this.state.key];
    if(instance) {
      const { isFull, posts } = instance;
      return (
        <div className="grid">
          {(flashPost && this.isOwner(currentUser._id, options)) && 
            <FlashPost 
              onSubmit={(key) => {this.pushItem(this.token, key, postState.post)}}
              hashKey={this.state.key} />
          }
          {this.displayPosts(this.renderPosts(posts), options, posts.length, isFull)}
        </div>
      )
    } else {
      return <div>{this.renderPosts(this.props.initialPosts)}</div>
    }
  }
}

function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser,
    postsStorage: state.postsStorage,
    postState: state.postState,
    initialPosts: state.app.pageData.initialPosts
  }
}

export default connect(mapStateToProps)(Feed)