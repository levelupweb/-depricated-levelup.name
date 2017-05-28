import React from 'react';
import Link from 'next/link'
import User from '../user'
import { getPostCommentsByPostId } from '../../actions/comment.js'

export default class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  	this.setState({
  		...this.props.data
  	})

    getPostCommentsByPostId(this.props.data._id).then((res) => {
      this.setState({
        ...this.state,
        comments: res.data
      })
    })
  }

  componentDidMount() {
  	var description = this.stripHTML(this.state.postContent.substring(0, 200))
  	this.setState({
  		postDescription: description
  	})
  }

  componentWillReceiveProps(nextProps) {
    var description = this.stripHTML(nextProps.data.postContent.substring(0, 200))
    this.setState({
      ...nextProps.data,
      postDescription: description
    })
  }

  stripHTML(html) {
  	var strip = require('../../utils/stripHTML.js').strip;
  	return strip(html)
  }

  render() {
  	var post = this.state;
    if(post.comments) { 
      var comments = post.comments.length;
    } else {
      var comments = ``;
    }
    var likes = post.postLikes.length
  	var description = post.postContent.substring(0, 200);

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
    			<p className="primary">{post.postDescription}</p>
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
  }
}
