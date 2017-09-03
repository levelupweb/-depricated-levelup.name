// Important
import config from '../../../app.config.js'
import { connect } from 'react-redux'
import Router from 'next/router'
import PropTypes from 'prop-types'
import cookies from 'js-cookie'
import Loader from '../loader'
import Link from 'next/link'
import React from 'react'
import hash from 'object-hash'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Actions
import { 
  getPosts, 
  fetchPosts, 
  createPostsInstance, 
  pushPost, 
  removePost 
} from '../../../actions/post.js'

// Components
import InfiniteScroll from 'redux-infinite-scroll';
import Item from './Item.js'
import Blank from './views/Blank.js'
import FlashPost from '../flashPost.js'

const renderPosts = (token, key, posts, onRemove) =>
  posts.map(post =>
    <Item post={post} key={post._id} onRemove={postId => {
      onRemove(token, key, postId)
    }} />
  )


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

  displayPosts(posts, options, skip, isFull) {
    const { key } = this.state;
    const { currentUserId, postsStorage } = this.props;
    const instance = postsStorage[key];
    if(posts) {
      if(posts.length) {
        return (<InfiniteScroll
          children={posts}
          loadMore={() => {this.loadMore(key, options, skip)}} 
          hasMore={!isFull}
          threshold={10}
          elementIsScrollable={false} />)
      } else {
        if(this.isOwner(currentUserId, options)) {
          return <div className="no-content">
            Вы пока ничего не опубликовали. Опубликуйте свой первый пост.
            <style jsx>{`
              .no-content {
              }
            `}</style>
          </div>
        } else {
          return <div className="no-content">
            К сожалению, здесь пока нет ни одного поста
            <style jsx>{`
              .no-content {
                text-align:center;
              }
            `}</style>
          </div>
        }
      }
    } else {
      return <Loader />
    }
  }

  render() {
    const { 
      postsStorage,
      currentUserId, 
      currentUser, 
      options, 
      postState, 
      flashPost, 
      defaultPosts, 
      initialPosts 
    } = this.props;
    const { key } = this.state;
    const instance = postsStorage[key];
    if(instance) {
      const { isFull, posts } = instance;
      return (
        <div className="grid">
          {(flashPost && this.isOwner(currentUserId, options)) && 
            <FlashPost 
              onSubmit={key => {
                this.pushItem(this.token, key, postState.post)
              }}
              hashKey={key} />
          }
          {this.displayPosts(
            renderPosts(this.token, key, posts, this.removeItem), 
            options, 
            posts.length, 
            isFull
          )}
        </div>
      )
    } else {
      return <div>
        {renderPosts(this.token, key, initialPosts, this.removeItem)}
      </div>
    }
  }
}

Feed.defaultProps = {
  flashPost: false,
  options: {
    perPage: 5,
    status: ['published']
  }
}

Feed.propTypes = {
  flashPost: PropTypes.bool,
  options: PropTypes.object
}

function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser,
    currentUserId: state.currentUser._id,
    postsStorage: state.postsStorage,
    postState: state.postState,
    initialPosts: state.app.pageData.initialPosts
  }
}

export default connect(mapStateToProps)(Feed)