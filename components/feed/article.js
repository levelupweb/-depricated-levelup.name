import React from 'react';
import Link from 'next/link'
import User from '../user'
import { getPostComments } from '../../actions/comment.js'
import Loader from '../loader.js'
import Note from './note.js'
import Blog from '../blog.js'
import cookies from 'js-cookie'
import { connect } from 'react-redux'
import { setLikeById } from '../../actions/post.js'

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.user.profile;
    this.state = {
      article: null
    }
  }

  componentWillMount() {
  	this.getInitialState(this.props.article)
  }

  componentWillReceiveProps(nextProps) {
    this.getInitialState(nextProps.article)
  }

  getInitialState(article) {
    this.setState({
      article: {
        ...article
      }
    })

    // Количество комментариев и лайков добавить в схему POST
    getPostComments(article._id).then((res) => {
      this.setState({
        ...this.state,
        comments: res.data
      })
    })
  }

  render() {
    var post = this.state.article;
    if (post) { 
      switch(post.postType) {
        case 'note':
        return <Note post={post} />
        default:
        return <Default currentUser={this.currentUser} post={post} />
      }
    } else {
      return (<Blank />)
    }
  }
}

class Default extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token')
    this.post = this.props.post;
    this.currentUser = this.props.currentUser
    this.state = {
      isLiked: false,
      likeCounter: 0
    }
  }

  componentWillMount() {
    if(this.currentUser) {
      if(this.post.postLikes.indexOf(this.currentUser._id) != -1) {
       this.setState({
         isLiked: true,
         likeCounter: this.post.postLikes.length
       })
     }
    }
  }

  handleLike(token, postID, userID) {
    setLikeById(token, postID).then((res) => {
      if(res.data.success) {
        this.setState({
          ...this.state.post,
          isLiked: !this.state.isLiked,
          likeCounter: res.data.counter
        })
      }
    })
  }

  render() {
    var post = this.post
    if (post) {
      var comments = post.postCommentsCount;
      var likes = this.state.likeCounter;
      return (
        <article className={`article preview grid-item w-100`}>
          {(post.postAuthor.authorType == 'user') ?
            <User id={post.postAuthor.authorID} /> : <Blog id={post.postAuthor.authorID} />
          }
          <div className="image">
            <img src={post.postImage} className="rounded ui image fluid" />
          </div>
          <div className="content">
            <Link href={{ pathname: 'post', query: { slug: post.slug }}}>
              <a><h1>{post.postTitle}</h1></a>
            </Link>
            <p className="primary">{(post.postDescription) ? post.postDescription : ''}</p>
          </div>
          <div className="meta">
            <span onClick={() => {this.handleLike(this.token, post._id, this.props.currentUser._id)}} className={(this.state.isLiked) ? `ui button circular primary` : `ui button circular`}>
              <i className={(this.state.isLiked) ? `fa fa-heart icon` : `fa fa-heart-o icon`}></i> {likes}
            </span>
            <span className="item">
              <i className="fa fa-comments-o"></i> {comments}
            </span>
            <Link href={{ pathname: 'post', query: { slug: post.slug }}}>
              <a className="item">Читать далее</a>
            </Link>
          </div>
          <style jsx>{`
            .article {
              margin-top:15px;
              box-shadow: 0px 3px 18px 0px rgba(34, 36, 38, 0.1);
              padding:15px 19px;
              border-radius:4px;
              background:#fff;
            }
            .article .user {
              margin:15px 0px;
            }
            .article .meta {
              margin-top:20px;
              width:100%;
            }
            .article .meta .button {
              margin-right:10px;
            }
          `}</style>
        </article>
      );
    } else {
      return <Blank />
    }
  }
}


export class Blank extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="user">
          <div className="image">
            <div className="blank avatar"></div>
          </div>
          <div className="content">
            <div className="blank string"></div>
            <div className="blank string"></div>
          </div>
        </div>
        <div className="image">
          <div className="blank image"></div>
        </div>
        <div className="content">
          <div className="blank header"></div>
          <div className="blank description"></div>
          <div className="blank description"></div>
          <div className="blank description"></div>
        </div>
        <style jsx>{`
          .user .content {
            margin-left:15px;
          }

          .user {
            display:flex;
            flex-direction:row;
          }

        `}</style>
      </div>
    );
  }
}


export default connect((store) => store)(Article)