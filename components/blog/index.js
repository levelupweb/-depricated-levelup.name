import React from 'react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'
import Link from 'next/link'

class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	blog: null
    }

    this.token = cookies.get('x-access-token');
    this.currentUser = this.props.user.profile;
  }

  componentWillMount() {
  	this.setState({
  		blog: this.props.app.pageData.blog
  	})
  }

  render() {
  	var blog = this.state.blog
    return (
      <div className="blog">
      	<div className="header">
      		<div className="menu block">
				<a onClick={() => {window.history.back()}}><strong>Назад</strong></a>
				<Link href={{ pathname: 'settings', query: { slug: blog.slug }}}><a href="#">Настройки</a></Link>
	        </div>
	        <div className="content block">
	        	<div className="image" data-inverted="" data-tooltip="Загрузить изображение" data-position="top center">
	      		{(blog.blogImage) ? 
	      			<img className="ui image circular" src={blog.blogImage} />
	      			:
	      			<div className="ui image circular no"><i className="fa fa-plus"></i></div>
	      		}
	      		</div>
	      		<h2>{blog.blogTitle}</h2>
	      		<p className="description">{(blog.blogDescription) ? blog.blogDescription : <div className="add">Добавьте описание</div>}</p>
      			<a href="#" className="ui button black circular">Подписаться</a>
      		</div>
      	</div>

      <style jsx>{`
      	.blog .menu a {
			margin-right:17px;
      	}
		.blog .header {
			background: #ffffff; /* Old browsers */
			background: -moz-linear-gradient(-45deg, #ffffff 36%, #ffffff 44%, #ffffff 58%, #f3f3f3 100%); /* FF3.6-15 */
			background: -webkit-linear-gradient(-45deg, #ffffff 36%,#ffffff 44%,#ffffff 58%,#f3f3f3 100%); /* Chrome10-25,Safari5.1-6 */
			background: linear-gradient(135deg, #ffffff 36%,#ffffff 44%,#ffffff 58%,#f3f3f3 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f3f3f3',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
		}
		.blog .content {
			padding:70px 0px;
			padding-top:30px;
			display:flex;
			justify-content:center;
			align-items:center;
			flex-direction:column;
		}
		.blog .content .image {
			width:60px;
			height:60px;
			display:flex;
			justify-content:center;
			align-items:center;
		}
		.blog .content .image.no {
			background:#eee;
		}
		.blog .content .image.no i {
			opacity:0.1;
			transition:0.2s all ease;
		}
		.blog .content .image.no:hover i {
			opacity:1;
		}
		.blog .content h2 {
			margin-top:10px;
			margin-bottom:0px;
		}
		.blog .content .description {
			color:#c0c0c0;
			margin-top:0px;
			font-size:16px;
		}
      `}</style>
      </div>
    );
  }
}


export default connect((store) => store)(Blog)