// Important
import React from 'react';
import cookies from 'js-cookie'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'

// Actions
import { setLike } from '../../../../actions/post.js'

// Components
import User from '../../user.js'
import Blog from '../../blog.js'
import TimeAgo from 'timeago-react';
import Link from 'next/link'
import Loader from '../../loader.js'


class Default extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token')
    this.state = {
      isLiked: false,
      likeCounter: 0
    }
  }

  // React LifeCycle
  componentWillMount() {
    var { currentUser, post } = this.props
    if(currentUser) {
      if(post.likes.indexOf(currentUser._id) != -1) {
        this.setState({
          isLiked: true,
          likeCounter: post.likes.length
        })
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    var { currentUser, post } = nextProps
    if(currentUser) {
      if(post.likes.indexOf(currentUser._id) != -1) {
        this.setState({
          isLiked: true,
          likeCounter: post.likes.length
        })
      }
    }
  }

  // Specific Methods
  handleLike(token, postID, userID) {
    setLike(token, postID).then((res) => {
      if(res.data.success) {
        this.setState({
          ...this.state.post,
          isLiked: !this.state.isLiked,
          likeCounter: res.data.counter
        })
      }
    })
  }

  renderAuthor(author) {
    const { blog, user } = author
    return (user) ? 
    <User user={user} /> : 
    <Blog blog={blog} />          
  }

  render() {
    var { currentUser, post } = this.props;
    var { title, image, author, _id, description, slug, updated, likes, comments } = post;
    if (this.props.post) {
      return (
        <article className={`article preview grid-item w-100`}>
          <div className="user">
            <div className="left">
              {this.renderAuthor(author)}
            </div>
            <div className="right">
              <div className="ui dropdown">
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                <div className="menu">
                  <Link href={{ pathname: 'editor', query: { id: _id }}}>
                    <div className="item">Редактировать</div>
                  </Link>
                  <div className="item" onClick={() => {console.log('*modal')}}>Пожаловаться</div>
                </div>
              </div>
            </div>
          </div>
          {image &&
            <div className="image">
              <img src={image} width="100%" />
            </div>
          }
          <div className="content">
            <Link href={{ pathname: 'post', query: { slug }}}>
              <a className="header"><h2>{title}</h2></a>
            </Link>
            <p className="primary">{(description) && description}</p>
          </div>
          <div className="meta">
            <div className="left">
              <span onClick={() => {this.handleLike(this.token, _id, currentUser._id)}}
                  className="item">
                  <i className={(this.state.isLiked) ? 
                    `fa fa-heart icon` : 
                    `fa fa-heart-o icon`}>
                  </i> {this.state.likeCounter} Мне нравится
              </span>
              <Link href={{ pathname: 'post', query: { slug }}}>
                <a className="item">
                  <i className="fa fa-comment-o icon"></i> {comments.length} Комментариев
                </a>
              </Link>
              <Link href={{ pathname: 'post', query: { slug }}}>
                <a className="item">
                  <i className="fa fa-comment-o icon"></i> Читать далее
                </a>
              </Link>
            </div>
            <div className="right">
              <span className="time">
                <TimeAgo datetime={updated} locale='ru' />
              </span>
            </div>
          </div>
          <style jsx>{`
            article {
              margin-bottom:20px;
              padding-bottom:10px;
              border-bottom:1px solid #eee;
            }
            .article .user {
              margin-top:0px;
              display:flex;
              align-items:center;
              justify-content:space-between;
            }
            .article .image {
              margin-top:15px;
            }
            .article .meta {
              margin-top:20px;
              margin-bottom:10px;
              width:100%;
              display:flex;
              align-items:center;
              justify-content:space-between;
            }
            .article .content .header h2 {
              margin:10px 0px;
            }
            .article .meta .item {
              cursor:pointer;
            }
            .article .meta .button {
              margin-right:10px;
            }
            .article .meta .time {
              color:#c0c0c0;
            }
            .article .meta .fa.fa-heart {
              color:#57c1b3;
            }
            .article .user .dropdown i {
              color:#c0c0c0;
              font-size:16px;
              transition:0.2s all ease;
            }
            .article .user .dropdown i:hover {
              color:#000;
            }
            .article .user .dropdown .menu {
              left:auto!important;
              right:-15px!important;
            }
          `}</style>
        </article>
      );
    } else {
      return <Blank />
    }
  }
}

function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Default)
