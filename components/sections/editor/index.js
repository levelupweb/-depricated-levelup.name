// Important
import React from 'react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'
import router from 'next/router'

// Actions
import { 
  setPostField, 
  prepareNewPost, 
  createPost,
  displayStatus,
  setPost } from '../../../actions/post.js'

// Utils 
import randomString from '../../../utils/randomString.js'
import createSlug from '../../../utils/createSlug.js'

// Components 
import Sidebar from './sidebar.js'
import Textarea from './textarea.js'

class Editor extends React.Component {
  constructor(props) {
   	super(props);
   	this.dispatch = this.props.dispatch;
   	this.token = cookies.get('x-access-token');
   	this.currentUser = this.props.currentUser;
  }

  // React Lifecycle

  componentWillMount() {
   	if(this.props.defaultPost._id) {
   		this.dispatch(setPost(this.props.defaultPost))
   	} else {
   		this.dispatch(prepareNewPost(this.currentUser, 'post'))
      .then(() => {
        this.dispatch(createPost(this.token, this.props.postState.post)).then((id) => {
          router.replace('/editor?id=' + id, 
            '/editor?id=' + id, 
            { shallow: true })
        })
      })
   	}
  }

  // Isomorphic Methods

  getField(field) {
   	return this.props.postState.post[field]
  }

  handleChange(field, value) {
   	this.dispatch(
   		setPostField(field, value)
   	)
  }

   // Specific Methods

  handleSlug(value) {
   	this.dispatch(
   		setPostField('slug', createSlug(value.slice(0, 35)))
   	) 
    this.dispatch(
      setPostField('postTitle', value)
    )
  }

  render() {
    console.log(this.props.postState.post.slug)
    var postState = this.props.postState;
	  return (
      <div className="module-wrapper">
         <Sidebar 
         	user={this.props.currentUser}
         	post={this.props.postState.post}
         />
         <div className="main">
          	<div className="inner block">
          		<div className="header block-vertical block-border-bottom">
             		<Header
             			onChange={(field, value) => {
             				this.handleSlug(value);
             			}}
                  value={this.props.postState.post.postTitle}
                  status={postState.status}
             		/>
             	</div>
             	<div className="description block-vertical block-border-bottom">
             		<Description 
             			onChange={(value) => {
             				this.handleChange('postDescription', value)
             			}}
                  value={this.props.postState.post.postDescription}
             		/>
          		</div>
            		<div className="textarea block-vertical">
            			<Textarea 
            				value={this.getField('postContent')}
            				onChange={(value) => {
            					this.handleChange('postContent', value)
            				}}
            			/>
            		</div>
          	</div>
        	</div>
        	<style jsx>{`
    				.description {
    					padding-top:20px!important;
    				}
        	`}</style>
      </div>
	  );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
      	<div className="title"> 
        		<input 
        			onInput={(e) => {this.props.onChange('postTitle', e.target.value)}} 
        			type="text" 
        			placeholder="Заголовок вашего поста" 
              value={this.props.value || ''}
        		/>
      	</div>
      	<div className="status">
      		{this.props.status &&
            <span>{this.props.status}</span>
          }
      	</div>
      	<style jsx>{`
				.header {
					display:flex;
					justify-content:space-between;
					align-items:center;
				}
				.header .title {
					width:100%;
				}
				.header .title input {
					font-size:20px;
					border:0px;
					width:100%;
					outline:0px;
				}
        .header .status {
          color:#c0c0c0;
          white-space:nowrap;
          animation:pulse 1s infinite;
        } 
        @keyframes pulse {
          0% {
            opacity:0.5;
          }
          50% {
            opacity:1;
          }
          100% {
            opacity:0.5;
          }
        }
      	`}</style>
      </div>
    );
  }
}

class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="description">
	      <textarea 
	      	maxLength="140" 
	      	onInput={(e) => {this.props.onChange(e.target.value)}} 
	      	placeholder="Описание к вашему посту"
          value={this.props.value || ''}
        ></textarea>
	      <style jsx>{`
				.description textarea {
					width:100%;
					font-size:17px;
					border:0px;
					outline:0px;
					height:120px;
					overflow:hidden;
				}
	      `}</style>
	   </div>
    );
  }
}


function mapStateToProps(state) {
  return { 
    postState: state.postState,
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps)(Editor)

