import React from 'react';
import Link from 'next/link'
import User from '../user'

export default class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	var post = this.props.data;
    return (
      <article className={`article preview grid-item w-${post.size} ${this.props.classNames}`}>
		<User />
		<div className="image">
			<img src={post.image} className="rounded ui image fluid" />
		</div>
		<div className="content">
			<Link href={{ pathname: 'post', query: { id: '1' }}}>
				<a><h1>{post.title}</h1></a>
			</Link>
			<p className="primary">{post.description}</p>
		</div>

		<div className="meta">
			<a className="item" href="#">Читать далее</a>
			<a className="item"><i className="fa fa-comment-o"></i> {post.meta.comments}</a>
		    <a className="item"><i className="fa fa-heart-o"></i> {post.meta.likes}</a>
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
