import React from 'react';
import Link from 'next/link'
import Router from 'next/router'
import User from '../user'
import Comments from '../comments.js'
import SubscribeButton from '../subscribeButton.js'
import cookies from 'js-cookie'
import { getUserById } from '../../actions/user.js'
import { setLikeById, getUsersWhoLikes } from '../../actions/post.js'
import declOfNum from '../../utils/declarationOfNum.js'
import Avatar from 'react-avatar'
import TimeAgo from 'timeago-react';
import { connect } from 'react-redux'
import TagsList from '../tagsList.js'

var InnerHTML = null


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token');
    this.currentUser = this.props.user.profile;
    this.state = {
      post: null,
      user: null,
      isLiked: false,
      isMounted: false
    }
  }

  handleLike(postID, userID) {
    setLikeById(this.token, postID).then((res) => {
      if(res.data.success) {
        this.setState({
          post: {
            ...this.state.post,
            liked: !this.state.post.liked
          }
        })

        this.pushUserWhoLikes(userID)
      }
    })
  }

  componentWillMount() {
    var data = this.props.app.pageData;
    var post = data.post
    if(data) {
      this.setState({
        post: {
          ...this.state.post,
          ...post
        }
      }, () => {
        if(post.postAuthor.authorType == 'user') {
          getUserById(post.postAuthor.authorID).then((res) => {
            this.setState({
              user: res.data
            })
          })
        }
      })
    }
  }

  componentDidMount() {
    InnerHTML = require('dangerously-set-inner-html')
    this.setState({
      isMounted:true
    })
  }

  stripHTML(html) {
    var strip = require('../../utils/stripHTML.js').strip;
    return strip(html)
  }


  render() {
    let usersWhoLikes;
    let user = this.state.user;
    let post = this.state.post;
    let tags = post.postTags.map((item, i) => {
      return (<a href="#" key={i}>{item}</a>)
    })
    if(post.postLikes.length > 0) {
      usersWhoLikes = post.postLikes.map((user, i) => {
        return (<div className="label">
          <Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
              <Avatar color={`#46978c`} round={true} size={32} src={user.userImage} name={user.userName} />
          </a></Link>
        </div>)
      })
    } else {
      usersWhoLikes = null
    }
    
    if(user && post) {
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
          <div id="articleContent" className="content block">
          {this.state.isMounted &&
            <InnerHTML html={post.postContent} />
          }
          </div>

          <div className="user block-horizontal">
            <User id={user._id} />
            <SubscribeButton 
              additionalClasses="small" 
              entryType="user"
              entryID={user._id} 
              subscribeText="Подписаться" 
              unsubscribeText="Отписаться" 
            />
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
                  <span>0</span>
                </a>
              </div>
              <div className="item block">
                <a href="#">
                  <i className="fa fa-comment-o"></i>                 
                  <span>1</span>
                </a>
              </div>
            </div>
          </div>
          <div className="ui divider"></div>
          <div className="ui feed block-horizontal">
            <div className="event">
              {usersWhoLikes}
              <div className="content">
                <div className="date">
                   {(post.postLikes.length > 0) ?
                    <span>Этот пост {declOfNum(post.postLikes.length, ['лайкнул','лайкнули','лайкнуло'])} {post.postLikes.length} {declOfNum(post.postLikes.length, ['человек','человека','человек'])}</span>
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
            <Comments 
              postID={post._id}
              isRevealed={true}
            />
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
              align-items:center;
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
    } else {
      return null
    }
  }
}

export default connect((store) => store)(Post)