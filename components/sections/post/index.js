// Important 
import React from 'react';
import Router from 'next/router'
import cookies from 'js-cookie'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'

// Actions
import { getUser } from '../../../actions/user.js'
import { setLike, getUsersWhoLikes, getRandomAdv } from '../../../actions/post.js'
import { getBlog } from '../../../actions/blog.js'

// Utils
import declOfNum from '../../../utils/declarationOfNum.js'

// Components
import TagsList from '../../isomorphic/tagsList.js'
import TimeAgo from 'timeago-react';
import User from '../../isomorphic/user'
import Blog from '../../isomorphic/blog'
import Comments from '../../isomorphic/comments/index.js'
import SubscribeButton from '../../isomorphic/subscribeButton.js'
import Link from 'next/link'
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share'


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token');
    this.state = {
      isLiked: false,
      adv: {},
      isMounted: false
    }
  }

  componentWillMount() {
    const { defaultPost } = this.props;
    if(defaultPost) {
      this.setState({
        post: defaultPost
      })
    }
    getRandomAdv(defaultPost._id).then((response) => {
      this.setState({
        adv: response.data
      })
    })
  }

  componentDidMount() {
    this.setState({
      isMounted:true
    })
  }

  renderAuthor(author) {
    const { blog, user } = author
    return (user) ? 
    <User user={user} /> : 
    <Blog blog={blog} />          
  }

  render() {
    const { post, adv } = this.state;
    const { currentUser } = this.props;
    if (post) {
      const { image, description, title, _id, tags, comments, likes, author, content } = post
      return (
        <div className="wrapper">
          <div className="adv">
            <div className="ui card">
              <div className="image">
                <img src={adv.image} alt={adv.title} width="100%" className="ui image rounded" />
              </div>
              <div className="content">
                <a className="header" href={adv.link} target="_blank">{adv.title}</a>
                <div className="meta">
                  <span>Спонсор данной статьи</span>
                </div>
                <div className="description">
                  {adv.description}
                </div>
              </div>
              <div className="extra content">
                <a href={adv.link} target="_blank">{adv.displayLink}</a>
              </div>
            </div>
          </div>
          <article className="article single blocks">
            <div className="user block-item">
              {this.renderAuthor(author)}
            </div>
            {image && 
            	<div className="image block-item">
                <img src={image} width="100%" />
              </div>
            }
            <div className="title block-item">
              <h1 className="ui header">
                {title}
              </h1>
              <p className="primary">
                {description}
              </p>
              <div className="tags">
                {tags.map((query, i) => {
                  return <Link key={i} href={{ pathname: 'search', query: { query }}}><a className="ui label">
                    {query}
                  </a></Link>
                })}
              </div>
            </div>
            <div className="ui divider dot"></div>
            <div className="content block-item" 
              dangerouslySetInnerHTML={{__html: content}}>
            </div>
            <div className="block-border-bottom">
              <div className="ui divider dot"></div>
            </div>
            <div className="user block-item">
              {this.renderAuthor(author)}
              <SubscribeButton 
                additionalClasses="small" 
                entryType={author.user ? 'user' : 'blog'}
                entryID={author.user ? author.user._id : author.blog._id} 
                subscribeText="Подписаться" 
                unsubscribeText="Отписаться" 
              />
            </div>
            <div className="comments-wrapper block-item">
              <Comments 
                comments={comments}
                postID={post._id}
                isRevealed={true}
                isSingle={true} />
            </div>
            <div className="related block-item">
              <p className="primary">
                Возможно вам это будет интересно
              </p>
            </div>
            <Actions 
              likeCount={likes.length}
              commentCount={comments.length}
              isLiked={post.liked}
              currentUser={currentUser}
              post={post} />
          </article>
          <style jsx>{`
            .wrapper {
              background:#fff;
              border-right:1px solid #eee;
            }
            .wrapper .adv {
              position:fixed;
              left:998px;
              top:100px;
            }
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
        </div>
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
    setLike(this.token, postID).then((res) => {
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
              title={this.props.post.title}
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
              title={this.props.post.title}
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
              title={this.props.post.title}
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