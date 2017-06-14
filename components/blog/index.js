import React from 'react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'
import Link from 'next/link'
import { UI } from '../../utils/initscripts.js'
import Avatar from 'react-avatar'
import EditableInput from '../editableInput.js'
import { updateImage } from '../../actions/app.js'
import Header from '../header/index.js'
import SubscribeButton from '../subscribeButton.js'
import dateFormat from 'dateformat'
  
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

  componentDidMount() {
  	UI()
  	$('.button.info').popup({
  		popup: '.popup.statistic',
  		position   : 'bottom center',
  	})
  }

  updateImage(e) {
    var image = e.target.files[0];
    var blogID = this.state.blog._id;
    var entryType = 'blog';
    updateImage(this.token, entryType, blogID, image).then((res) => {
      this.setState({
        blog: {
          ...this.state.blog,
          blogImage: res.path
        }
      })
    })
  }

  render() {
  	var blog = this.state.blog;
  	if (blog) { 
	    return (
	      <div className="blog">
	      	<div className="header-wrapper">
	      		<Header />
		        <div className="main-content block">
		        	<div className="image" onClick={() => {this.imageUploader.click()}} data-inverted="" data-tooltip="Загрузить изображение" data-position="top center">
		      			<Avatar 
		      				color={`#57c1b3`} 
		      				round={true} 
		      				size={70} 
		      				src={blog.blogImage} 
		      				name={blog.blogTitle} 
		      			/>
		      			<input type="file" onChange={(e) => {this.updateImage(e)}} ref={(e) => {this.imageUploader = e}} className="ui hidden" />
		      		</div>
		      		<div className="title">
			      		<EditableInput 
			      			value={blog.blogTitle} 
			      			entryType="blog"
			      			entryID={blog._id}
			      			field="blogTitle"
			      			title="Название блога"
			      			size="large"
			      		/>
			      		<EditableInput 
			      			value={blog.blogDescription} 
			      			entryType="blog"
			      			entryID={blog._id}
			      			field="blogDescription"
			      			title="Описание блога"
			      			size="normal"
			      		/>
			      	</div>
		      		<div>
	      				<SubscribeButton 
		      				subscribeText="Подписаться" 
		      				unsubscribeText="Отписаться"
		      				entryType="blog"
		      				entryID={blog._id}
	      				/>
	      				<div href="#" className="info ui button circular icon basic">
		      				<i className="fa fa-info icon" aria-hidden="true"></i>
		      				<div className="ui popup statistic">
							  <div className="item">
							  	<div className="value">{dateFormat(blog.created, "dd.mm.yyyy")}</div>
							  	<div className="content">Блог зарегистрирован</div>
							  </div>
							  <div className="item">
							  	<div className="value">{blog.blogSubscribersCount}</div>
							  	<div className="content">Подписчика</div>
							  </div>
							  <div className="item">
							  	<div className="value">2547</div>
							  	<div className="content">Лайка</div>
							  </div>
							</div>
	      				</div>
	      			</div>
	      		</div>
	      	</div>

	      <style jsx>{`
	      .blog .menu a {
				margin-right:17px;
	      }
			.blog .header-wrapper {
				background: #ffffff; /* Old browsers */
				background: -moz-linear-gradient(-45deg, #ffffff 36%, #ffffff 44%, #ffffff 58%, #f3f3f3 100%); /* FF3.6-15 */
				background: -webkit-linear-gradient(-45deg, #ffffff 36%,#ffffff 44%,#ffffff 58%,#f3f3f3 100%); /* Chrome10-25,Safari5.1-6 */
				background: linear-gradient(135deg, #ffffff 36%,#ffffff 44%,#ffffff 58%,#f3f3f3 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f3f3f3',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
			}
			.blog .header-wrapper > .main-content {
				padding:70px 0px;
				padding-top:30px;
				display:flex;
				justify-content:center;
				align-items:center;
				flex-direction:column;
			}
			.blog .header-wrapper .main-content h2 {
				margin-top:10px;
				margin-bottom:0px;
			}
			.blog .header-wrapper .main-content .statistic {
				text-align:left
			}

			.blog .header-wrapper .main-content .statistic .item {
				text-align:left;
				margin-bottom:5px;
			}
			.blog .header-wrapper .main-content .statistic .item .value {
				font-weight:bold;
				display:inline-block;
				margin-right:10px;
			}
			.blog .header-wrapper .main-content .statistic .item .content {
				display:inline-block;
			}
			.blog .title {
				margin:10px 0px;
				text-align:center;
			}
	      `}</style>
	      </div>
	    );
	} else {
		return (<NoContent />)
	}
  }
}

var NoContent = (props) => {
	return (
		<div>Блог не найден</div>
	)
}

var Image = (props) => {
	var imageURL = props.imageURL;
	if(imageURL) {
		return (
			<img className="ui image circular" src={imageURL} />
		)
	} else {
		return (
			<div className="ui image circular no">
				<i className="fa fa-plus"></i>
				<style jsx>{`
					.image.no {
						background:#eee;
						width:60px;
						height:60px;
						display:flex;
						justify-content:center;
						align-items:center;
					}
				`}</style>
			</div>
		)
	}
}



export default connect((store) => store)(Blog)