import React from 'react';
import Link from 'next/link'
import User from '../user'
import { getPostCommentsByPostId } from '../../actions/comment.js'
import Loader from '../loader.js'

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null
    }
  }

  componentWillMount() {
  	this.setState({
  		article: {
        ...this.props.article
      }
  	})

    // Количество комментариев и лайков добавить в схему POST
    getPostCommentsByPostId(this.props.article._id).then((res) => {
      this.setState({
        ...this.state,
        comments: res.data
      })
    })
  }

  componentDidMount() {
    if(this.state.article.postContent) { 
    	var description = this.stripHTML(this.state.article.postContent.substring(0, 200))
    	this.setState({
        article : {
          ...this.state.article,
    		  postDescription: description
        }
    	})
    }
  }

  componentWillReceiveProps(nextProps) {
    var description = this.stripHTML(nextProps.article.postContent.substring(0, 200))
    this.setState({
      article: {
        ...nextProps.article,
        postDescription: description
      }
    })
  }

  stripHTML(html) {
  	var strip = require('../../utils/stripHTML.js').strip;
  	return strip(html)
  }

  render() {
    if(this.state.article) { 
      var post = this.state.article;
      if(post.comments) { 
        var comments = post.comments.length;
      } else {
        var comments = ``;
      }
      var likes = post.postLikes.length
      return (
        <article className={`article preview grid-item w-100`}>
      		<User id={post.postAuthor} />
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
      			<Link href={{ pathname: 'post', query: { slug: post.slug }}}>
              <a className="item">Читать далее</a>
            </Link>
      			<a className="item"><i className="fa fa-comment-o"></i> {comments}</a>
      		    <a className="item"><i className="fa fa-heart-o"></i> {likes}</a>
      		</div>

      		<style jsx>{`
      			.article.preview .meta {
      				margin-top:20px;
      			}
      		`}</style>
      	</article>
      );
    } else {
      return (<div></div>)
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
