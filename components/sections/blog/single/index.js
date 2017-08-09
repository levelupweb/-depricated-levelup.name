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
  }

  componentDidMount() {
  	UI()
  	$('.button.info').popup({
  		popup: '.popup.statistic',
  		position   : 'bottom center',
  	})
  }

  // Specific Methods
  updateImage(e) {
  	var image = e.target.files[0];
    this.props.dispatch(updateImage(this.token, 'blog', this.state.blog._id, image)).then((response) => {
      this.setState({
      	blog: {
      		...this.state.blog,
      		image: response.path
      	}
      })
    })
  }

  render() {
  	console.log(this.props)
  	const { blog } = this.props
  	if (blog) { 
      const { _id, image, title, description, subscribers, created, owner, posts } = blog;
	    return (
	      <div className="blog blocks">
	      	<div className="header-wrapper block-item">
		         <div className="main-content">
		        	<div className="image" onClick={() => {this.imageUploader.click()}} data-inverted="" data-tooltip="Загрузить изображение" data-position="top center">
		      			<Avatar 
		      				color={`#57c1b3`} 
		      				round={true} 
		      				size={70} 
		      				src={image} 
		      				name={title}  />
		      			<input 
		      				type="file" 
		      				onChange={(e) => {this.updateImage(e)}} ref={(e) => {this.imageUploader = e}} 
		      				className="ui hidden" />
		      		</div>
		      		<div className="title">
			      		<EditableInput 
			      			value={title} 
			      			entryType="blog"
			      			entry={blog}
			      			field="title"
			      			title="Название блога"
			      			size="large" />
			      		<EditableInput 
			      			value={description} 
			      			entryType="blog"
			      			entry={blog}
			      			field="description"
			      			title="Описание блога"
			      			size="normal" />
			      	</div>
		      		<div>
	      				<SubscribeButton 
		      				subscribeText="Подписаться" 
		      				unsubscribeText="Отписаться"
		      				entryType="blog"
		      				entryID={_id} />
	      				<div href="#" className="info ui button circular icon basic">
		      				<i className="fa fa-info icon" aria-hidden="true"></i>
		      				<div className="ui popup statistic">
							  <div className="item">
							  	<div className="value">{dateFormat(created, "dd.mm.yyyy")}</div>
							  	<div className="content">Блог зарегистрирован</div>
							  </div>
							  <div className="item">
							  	<div className="value">{subscribers}</div>
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
            <Feed defaultPosts={posts} flashPost={true} options={{ 
			        blogID: _id,
			        blogOwner: owner._id, 
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



function mapStateToProps(state) {
  return {
		app: state.app,
		blog: state.app.pageData.blog,
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps)(Blog)