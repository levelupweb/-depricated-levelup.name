import React from 'react';
import Link from 'next/link'
import Router from 'next/router'
import User from '../user'
import Comments from './comments'
import SubscribeButton from '../subscribeButton.js'
import cookies from 'js-cookie'
import { getUserById } from '../../actions/user.js'
import { setLikeById, getUsersWhoLikes } from '../../actions/post.js'
import declOfNum from '../../utils/declarationOfNum.js'
import Avatar from 'react-avatar'
import TimeAgo from 'timeago-react';
import { connect } from 'react-redux'

Router.onRouteChangeStart = (url) => {
  window.onscroll = null;
  clearInterval(window.startInterval);
}

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: null,
      user: null,
      usersWhoLikes: []
    }

    this.token = cookies.get('x-access-token');
    this.currentUser = this.props.user.profile;
  }

  handleLike(postID, userID) {
    setLikeById(this.token, postID).then(async (res) => {
      if(res.data.success) {
        await this.setState({
          post: {
            ...this.state.post,
            liked: !this.state.post.liked
          }
        })

        await this.pushUserWhoLikes(userID)
      }
    })
  }

  async componentWillMount() {
    if(this.props.app.pageData) {
      await this.setState({
        post: {
          ...this.state.post,
          ...this.props.app.pageData.post
        }
      })

      await getUsersWhoLikes(this.state.post._id)
      .then((res) => {
        this.setState({
          usersWhoLikes: res.data
        })
      })
    } else {

    }
  }


  componentDidMount() {
    // Сделать PostDescription полноценным полем 
    this.content.innerHTML = this.state.post.postContent;
    getUserById(this.state.post.postAuthor).then((res) => {
      this.setState({
        ...this.state,
        user: res.data
      })
    }).then(() => {
      if(this.state.post.postLikes.indexOf(this.props.user.profile._id) != -1) {
        this.setState({
          ...this.state,
          post: {
            ...this.state.post,
            liked: true
          }
        })
      }
    })
  }

  stripHTML(html) {
    var strip = require('../../utils/stripHTML.js').strip;
    return strip(html)
  }


  handleSubscription(id) {
    subscribeToUser(this.token, id).then((res) => {
      console.log(res)
    })
  }

  pushUserWhoLikes(userID) {
    getUserById(userID)
    .then((res) => {
      this.setState({
        usersWhoLikes: this.state.usersWhoLikes.push(res.data)
      })
    })
  }

  render() {
    let user = this.state.user || '';
    let post = this.state.post;
    let tags = post.postTags.map((item, i) => {
      return (<a href="#">{item}</a>)
    })
    let usersWhoLikes = () => {
      if(post.postLikes.length > 0) {
        post.postLikes.map((item, i) => {
          return (<div className="label"><User id={item} key={i} /></div>)
        })
      } else {
        return (<div></div>)
      }
    }
    return (
      <article className="article single">
        <div className="block">
          <div className="ui feed userbar">
            <div className="event">
              <div className="label">
                <Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
                  <Avatar color={`#46978c`} round={true} size={40} src={user.userImage} name={user.userName} />
                </a></Link>
              </div>
              <div className="content">
                <div className="date">
                  <TimeAgo datetime={post.updated} locale='ru' />
                </div>
                <div className="summary">
                  Этот пост опубликовал
                  <Link href={{ pathname: 'user', query: { slug: user.slug }}}><a> 
                    {user.userName}
                  </a></Link>
                  в личном блоге
                </div>
              </div>
            </div>
          </div>
        </div>
      	<div className="image">
          <img src={post.postImage} width="100%" />
          <div className="bar block">
            <div className="tags ui inverted">
              {tags}
            </div>
            <h1 className="ui header inverted">
              {post.postTitle}
            </h1>
          </div>
        </div>
        <div className="content block" ref={(content) => {this.content = content}}>
        </div>

        <div className="user block">
          <Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
              <Avatar color={`#57c1b3`} round={true} size={32} src={user.userImage} name={user.userName} />
          </a></Link>
          <SubscribeButton id={post.postAuthor} />
        </div>

        <div className="floating block-shadow">
          <div className="actions">
            <div className="item block">
              <span onClick={() => {this.handleLike(this.state.post._id, this.currentUser._id)}} className={(this.state.post.liked) ? `checked` : ``}>
                  <i className={(this.state.post.liked) ? `fa fa-heart` : `fa fa-heart-o`}></i>
                  <span>{post.postLikes.length}</span>
              </span>
            </div>
            <div className="item block">
              <a href="#">
                <i className="fa fa-send-o"></i>
                <span>64</span>
              </a>
            </div>
            <div className="item block">
              <a href="#">
                <i className="fa fa-comment-o"></i>                 
                <span>2</span>
              </a>
            </div>
          </div>
        </div>
        <div className="ui divider"></div>
        <div className="ui feed block-horizontal">
          <div className="event">
            {this.state.usersWhoLikes.map((item, i) => {
              return (<div className="label"><User size="dropdown" userData={item} key={i} /></div>)
            })}
            <div className="content">
              <div className="date">
                 {(this.state.usersWhoLikes.length > 0) ?
                  <span>Этот пост {declOfNum(this.state.usersWhoLikes.length, ['лайкнул','лайкнули','лайкнуло'])} {this.state.usersWhoLikes.length} {declOfNum(this.state.usersWhoLikes.length, ['человек','человека','человек'])}</span>
                 :
                  <span>Этот пост пока никто не лайкал</span>
                }
              </div>
            </div>
            <div className="like">
              <span className="button primary basic ui circular" onClick={() => {this.handleLike(this.state.post._id, this.currentUser._id)}}><i className={(this.state.post.liked) ? `fa fa-heart` : `fa fa-heart-o`}></i> Мне нравится</span>
            </div>
          </div>       
        </div>

        <div className="comments-wrapper block-horizontal">
          <Comments postId={post._id} />
        </div>

        <style jsx>{`
          .ui.feed .like {
            float:right;
          }
          .ui.feed .like .button {
            font-size:14px;
          }
          .ui.feed > .event > .content .date {
            margin:0px;
          }
          .userbar.ui.feed .content {
            margin-top:0px;
          }
          .ui.feed .event .content {
            font-size:14px!important;
          }
          .ui.feed .event .content .summary {
            line-height: 0.9;
          }
          .ui.feed .event .content .summary a {
            margin-left:5px;
            margin-right:5px;
          }
          .article {
            margin-bottom:0px!important;
            border-bottom:0px;
          }
          .article .image {
            margin:0px;
            position:relative;
          }
          .article .image .bar {
            position:absolute;
            left:0px;
            bottom:0px;
            background:rgba(0,0,0,0.4);
            width:100%;
          }
          .article .image .button {
            position:absolute;
            bottom:-8px;
            left:30px;
          }
          .article .user {
            display:flex;
            flex-direction:row;
            margin:20px 0px;
            align-items:flex-start;
          }
          .article .bar h1 {
            margin:0px!important;
            font-weight:bold;
            border-bottom:0px;
            padding-bottom:0px;
          }
          .article .bar h1 .sub {
            margin-top:10px;
          }
          .article .content p,
          .article .content {
            font-size:17px;
            line-height:25px;
          }
          .article .floating {
            position:fixed;
            left:978px;
            bottom:0px;
            z-index:9999;
            background:#fff;
          }
          .article .floating .actions {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
          }
          .article .floating .actions .item {
            color:#46978c;
            opacity:0.6;
            transition:0.2s all ease;
            padding:15px 20px;
            border-bottom:1px solid rgba(0,0,0,0.1)
          }
          .article .floating .actions .item:last-child {
            margin-bottom:0px;
          }
          .article .floating .actions .item span {
            font-size:16px;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
          }
          .article .floating .actions .item span {
            color:#46978c;
          }
          .article .floating .actions .item i {
            margin-bottom:5px;
            color:#46978c;
            font-size:18px;
          }
          .article .floating .actions .item:hover {
            opacity:1.0;
            background:#fff;
            cursor:pointer;
          }
          
        `}</style>
      </article>
    );
  }
}

export default connect((store) => store)(Post)