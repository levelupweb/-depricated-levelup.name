// Important
import React from 'react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'
import router from 'next/router'

// Utils 
import { UI } from '../../../utils/initScripts.js'
import AuthService from '../../../utils/AuthService.js'

// Actions
import { getLogout, getUserField } from '../../../actions/user.js'

// Components
import Link from 'next/link'
import UserList from '../userList'
import TagsList from '../tagsList'
import BlogList from '../blogList'
import Loader from '../loader.js'
import User from '../user.js'

class Sidebar extends React.Component {
   constructor(props) {
    	super(props);
    	this.dispatch = this.props.dispatch;
    	this.currentUser = this.props.currentUser
    	this.service = new AuthService(this.props.dispatch)
   }

   render() {
    	return (
      <div className="sidebar">
      	{!this.currentUser.isLogged ? 
      		<div>
      			<div className="block profile simple">
      				<Link href="/auth"><a><i className="fa fa-lock"></i> Авторизация</a></Link>
      			</div>
      			<div className="block sidebar-block">
	      			<div className="title">
	      				<h3 className="ui header">
							Темы <small>популярные</small>
						</h3>
					</div>
					<div className="block-content">
		      			<TagsList />
		      		</div>
      			</div>
      		</div>
      		: // Если залогинен пользователь 
      		<div>
	      		<div className="block">
						<div>
							<div className="block-section">
								<h4 className="ui header">Авторы</h4>
								<UserList subscriber={this.currentUser._id} />
							</div>
							
							<div className="block-section">
								<h4 className="ui header">Блоги</h4>
								<BlogList subscriber={this.currentUser._id} />
							</div>
							
							<div className="block-section">
								<h4 className="ui header">Темы</h4>
								<TagsList subscriber={this.currentUser._id} />
							</div>
						</div>
						{/* <div className="footer">
							<div className="ui dropdown switcher">
							  <div className="text"><b>Levelup.name <i className="fa fa-angle-down"></i></b></div>
							  <div className="menu">
							   <a href="#" className="item">Levelupmusic</a>
							   <a href="#" className="item">Levelupworlds</a>
							   <a href="#" className="item">Levelupplace</a>							   
							  </div>
							</div>
							<div className="divider ui"></div>
							<p>Свободная платформа для блогеров и их читателей. Все права защищены</p>
							<div className="divider ui"></div>
							<div className="tag-list">
								<a href="#" className="tag">помощь</a>
				   			<a href="#" className="tag">карьера</a>
			   				<a href="#" className="tag">блог</a>
			   				<a href="#" className="tag">публичность</a>
			   				<a href="#" className="tag">о проекте</a>
			   			</div>
						</div> */}
						
		      	</div>
		    </div>
      	}
		  	<style jsx>{`
				.sidebar {
					overflow-y:scroll;
					width:310px;
					height:100%;
					position: fixed!important;
					left:0px;
					top:68px;
					border-right:1px solid #eee;
				}
				.sidebar::-webkit-scrollbar {
					display:none;
				}
				.sidebar::-webkit-scrollbar-thumb {
					display:none;
				}
				.sidebar .blocks {
					padding-bottom:70px;
				}
		    `}</style>  
		</div>
    );
  }
}

export default connect((store) => store)(Sidebar)