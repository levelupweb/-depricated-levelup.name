import React from 'react';
import Link from 'next/link'
import User from '../user'

export default class ListArticle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	var post = this.props.data;
    return (
      <article className={`article preview list grid-item ${this.props.classNames}`}>
      	<div className="ui grid">
      		<div className="four wide column">
      			<div className="image">
					<img src={post.image} className="rounded ui image fluid" />
				</div>
      		</div>
  			<div className="twelve wide column">
  				<div className="content">
	 				<User size="small" />
	 				<div className="meta">
						<a className="item"><i className="fa fa-comment-o"></i> {post.meta.comments}</a>
					    <a className="item"><i className="fa fa-heart-o"></i> {post.meta.likes}</a>
					</div>
	 				<Link href={{ pathname: 'post', query: { id: '1' }}}>
						<a><h1>{post.title}</h1></a>
					</Link>
					<p className="primary">{post.description}</p>
				</div>
				
  			</div>
      	</div>
		
		<style jsx>{`
			.article.list {
				margin-right:20px;
			}

			.article.list h1 {
				font-size:19px;
			}

			.article.list p.primary {
				font-size:16px;
			}

			.article.list .image img {
				margin:0px;
			}

			.article.list .meta {
				display:inline-block;
				margin-left:15px;
			}

			.article.list .meta .item,
			.article.list .meta .item .fa {
				font-size:14px;
			}
		`}</style>
	</article>
    );
  }
}
