// Important 
import React from 'react';
import Router from 'next/router'
import cookies from 'js-cookie'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'

// Actions
import { getUserById } from '../../../actions/user.js'
import { setLikeById, getUsersWhoLikes } from '../../../actions/post.js'
import { getBlogById } from '../../../actions/blog.js'

// Utils
import declOfNum from '../../../utils/declarationOfNum.js'

// Components
import TagsList from '../../isomorphic/tagsList.js'
import Avatar from 'react-avatar'
import TimeAgo from 'timeago-react';
import User from '../../isomorphic/user'
import Blog from '../../isomorphic/blog'
import Comments from '../../isomorphic/comments/index.js'
import SubscribeButton from '../../isomorphic/subscribeButton.js'
import Link from 'next/link'
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share'

// Dynamics
var BlurImageLoader = dynamic(import('react-blur-image-loader'))


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token');
    this.currentUser = this.props.currentUser;
    this.state = {
      post: null,
      user: null,
      blog: null,
      isLiked: false,
      isMounted: false
    }
  }

  componentWillMount() {
    if (this.props.defaultPost) {
      this.setState({
        post: this.props.defaultPost
      }, () => {
        if(this.props.defaultPost.postAuthor.authorType == 'user') {
          getUserById(this.props.defaultPost.postAuthor.authorID).then((res) => {
            this.setState({
              user: res.data
            })
          })
        } else {
          getBlogById(this.props.defaultPost.postAuthor.authorID).then((res) => {
            this.setState({
              blog: res.data
            })
          })
        }
      })
    }
  }

  componentDidMount() {
    this.setState({
      isMounted:true
    })
  }

  render() {
    var user = this.state.user;
    var post = this.state.post;
    var blog = this.state.blog;
    if(post && (user || blog)) {
      return (
        <article className="article single">
          <div className="user block">
            {user ? <User id={user._id} /> : <Blog id={blog._id} /> }
          </div>
        	<div className="image block-horizontal">
              <BlurImageLoader src={post.postImage}
                preview={"http://localhost:3001/storage/tiny.jpg"} 
                fullCover={true}
                maxBlurLevel={10}
                transitionTime={400}
              />
          </div>
          <div className="title block">
            <h1 className="ui header">
              {post.postTitle}
            </h1>
            <p className="primary">
              {post.postDescription}
            </p>
            <div className="tags">
              {post.postTags.map((item, i) => {
                return <Link key={i} href={{ pathname: 'search', query: { query: item }}}><a className="ui label">
                  {item}
                </a></Link>
              })}
            </div>
          </div>
          <div className="ui divider dot"></div>
          <div className="content block-horizontal" 
            dangerouslySetInnerHTML={{__html: post.postContent}}>
          </div>
          <div className="block-border-bottom">
            <div className="ui divider dot"></div>
          </div>
          <div className="user block block-border-bottom">
            {user ? <User id={user._id} /> : <Blog id={blog._id} /> }
            <SubscribeButton 
              additionalClasses="small" 
              entryType="user"
              entryID={user ? user._id : blog._id} 
              subscribeText="Подписаться" 
              unsubscribeText="Отписаться" 
            />
          </div>
          <div className="comments-wrapper block block-border-bottom">
            <Comments 
              postID={post._id}
              isRevealed={true}
              isSingle={true}
            />
          </div>
          <div className="related block">
            <p className="primary">
              Возможно вам это будет интересно
            </p>
          </div>

          <Actions 
            likeCount={post.postLikes.length}
            commentCount={post.postCommentsCount}
            isLiked={post.liked}
            currentUser={this.currentUser}
            post={post}
          />
          <style jsx>{`
            .article {
              margin:0px!important;
              border:0px!important;
              position:relative;
            }
            .article .user {
              display:flex;
              align-items:center;
              justify-content:space-between;
            }
            .article .image {
              margin:0px;
              position:relative;
            }
            .article .title h1 {
              font-weight:bold;
              margin-top:7px;
              padding-bottom:0px;
              border-bottom:0px;
              margin-bottom:7px!important
            }
            .article .title .tags a {
              margin-right:10px;
            }
            .article .title. p.primary {
              font-size:25px;
            }
            .article .content p,
            .article .content {
              font-size:18px;
              line-height:25px;
            }
            .article .share .tags {
              margin-top:10px;
            }
            .article .share .actions {
              display:flex;
              align-items:center;
            }
            .article .bar {
              display:flex;
              align-items:center;
              justify-content:space-between;
            }            
          `}</style>
        </article>
      );
    } else {
      return <div></div>
    }
  }
}

class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token');
    this.currentUser = this.props.currentUser;
    this.post = this.props.post
    this.state = {
      isMounted: false,
      likeCount: 0,
      isLiked: false,
      commentCount: 0,
    }
  }

  // React Lifecycle
  componentWillMount() {
    this.setState({
      likeCount: this.props.likeCount,
      isLiked: this.props.isLiked,
      commentCount: this.props.commentCount
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      likeCount: nextProps.likeCount,
      isLiked: nextProps.isLiked,
      commentCount: nextProps.commentCount
    })
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    })
  }

  // Specific Methods
  handleLike(postID, userID) {
    setLikeById(this.token, postID).then((res) => {
      if(res.data.success) {
        this.setState({
          isLiked: !this.state.isLiked,
          likeCount: res.data.counter
        })
      } else {
        console.log(res.data)
      }
    })
  }

  render() {
    if(this.state.isMounted) {
      // Share
      const { FacebookShareButton, GooglePlusShareButton, TwitterShareButton, TelegramShareButton,
        VKShareButton } = ShareButtons;
      const { FacebookShareCount, GooglePlusShareCount, VKShareCount } = ShareCounts;
      return (
        <div className="flying">
          <div className="menu">
            <div className="item" onClick={() => {this.handleLike(this.props.post._id, this.props.currentUser._id)}}>
              <i className="fa fa-heart-o"></i>
              <span className={(this.state.likeCount > 0) && 'ui teal label'}>{this.state.likeCount}</span>
            </div>
            <FacebookShareButton 
              title={this.props.post.postTitle}
              description={this.props.post.postDescription}
              picture={this.props.post.postImage}
              url={window.location.href}>
                <div className="item">
                  <i className="fa fa-facebook"></i>
                  <span><FacebookShareCount url={window.location.href}>
                    {shareCount => (<div className={(shareCount > 0) && 'ui teal label'}>{shareCount}</div>)}
                  </FacebookShareCount></span>
                </div>
            </FacebookShareButton>
            <GooglePlusShareButton 
              url={window.location.href}>
                <div className="item">
                  <i className="fa fa-google-plus"></i>
                  <span><GooglePlusShareCount url={window.location.href}>
                    {shareCount => (<div className={(shareCount > 0) && 'ui teal label'}>{shareCount}</div>)}
                  </GooglePlusShareCount></span>
                </div>
            </GooglePlusShareButton>
            <VKShareButton 
              title={this.props.post.postTitle}
              description={this.props.post.postDescription}
              image={this.props.post.postImage}
              url={window.location.href}>
                <div className="item">
                  <i className="fa fa-vk"></i>
                  <span><VKShareCount url={window.location.href}>
                    {shareCount => (<div className={(shareCount > 0) && 'ui teal label'}>{shareCount}</div>)}
                  </VKShareCount></span>
                </div>
            </VKShareButton>
            <TwitterShareButton 
              title={this.props.post.postTitle}
              url={window.location.href}>
                <div className="item">
                  <i className="fa fa-twitter"></i>
                </div>
            </TwitterShareButton>
          </div>
          <style jsx>{`
            .flying {
              position: fixed;
              left: 920px;
              top: 0px;
              margin-left: -230px;
              z-index: 9999;
              height: 70px;
              display: flex;
              align-items: center;
            }
            .flying .menu {
              display:flex;
              flex-direction:row;
              justify-content:center;
            }
            .flying .menu .item {
              position:relative;
              cursor:pointer;
              border-radius:100%;
              display:flex;
              align-items:center;
              justify-content:center;
              flex-direction:row;
              transitions:0.2s all ease;
              margin-right:26px;
              height:26px;
            }
            .flying .menu .item i {
              color:#57c1b3;
              font-size:14px;
              transitions:0.2s all ease;
            }
            .flying .menu .item:hover {
              border-color:#57c1b3;
            }
            .flying .menu .item span {
              color:#57c1b3;
              margin-left:10px;
            }
          `}</style>
        </div>
      );
    } else {
      return null
    }
  }
}




export default connect((store) => store)(Post)