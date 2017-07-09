// Important
import React from 'react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'

// Utils
import { UI } from '../../../../utils/initScripts.js'

// Actions
import { updateImage } from '../../../../actions/app.js'

// Components
import SubscribeButton from '../../../isomorphic/subscribeButton.js'
import dateFormat from 'dateformat'
import FlashPost from '../../../isomorphic/flashPost.js'
import Feed from '../../../isomorphic/feed/feed.js'
import Avatar from 'react-avatar'
import EditableInput from '../../../isomorphic/editableInput.js'
import Link from 'next/link'

  
class Blog extends React.Component {
   constructor(props) {
    	super(props);
    	this.token = cookies.get('x-access-token');
    	this.currentUser = this.props.currentUser;
    	this.state = {
    		blog: null
    	}
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
	      <div className="blog blocks">
	      	<div className="header-wrapper block-item">
		         <div className="main-content">
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
	      	<div className="feed block-item">
            	<Feed 
                  flashPost={true}
                  options={{ 
                     blogID: blog._id, 
                     status: ['published'] 
                  }} />
	      	</div>

	      <style jsx>{`
	      .blog .menu a {
				margin-right:17px;
	      }
			.blog .header-wrapper > .main-content {
				padding:70px 0px;
				padding-top:60px;
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