// Important
import React from 'react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'
import router from 'next/router'
import config from '../../../app.config.js'

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
      			<div className="blocks">
      				<div className="block-item full">
	      				<div className="promo inverted">
	      					<img className="ui image rounded" src={config.frontend + 'background-white.png'} width="100%" />
	      					<div className="content">
	      						<h2>Будь частью чего-то бо́льшего</h2>
	      						<p>Зарегиструйся и получи возможность делиться с миром своими публикациями, постами и прочим контентом</p>
	      						<a href="#" className="button ui basic">Узнать больше</a>
	      					</div>
	      				</div>
	      			</div>
	      			<div className="block-item">
      					<h4 className="ui header">
								Меню
								<small>навигация</small>
							</h4>
							<div className="ui vertical text menu">
								<Link href="/authors"><a className="item">
							   	<i className="fa fa-user-o" aria-hidden="true"></i> Искать авторов
							  	</a></Link>
							  	<Link href="/blogs"><a className="item">
							    	<i className="fa fa-bookmark-o" aria-hidden="true"></i> Искать блоги
							  	</a></Link>
							  	<Link href="/tags"><a className="item">
							    	<i className="fa fa-bolt" aria-hidden="true"></i> Искать темы
							  	</a></Link>
							</div>
	      			</div>
      				<div className="block-item">
      					<h4 className="ui header">
								Вопросы?
								<small>у нас есть ответ!</small>
							</h4>
							<div className="ui vertical text menu">
								<a className="item">
							   	О проекте
							  	</a>
							  	<a className="item">
							    	Регистрация
							  	</a>
							  	<a className="item">
							    	Рекламодателям
							  	</a>
							</div>
	      			</div>
      				<div className="block-item">
		      			<h4 className="ui header">
								Темы <small>популярные</small>
							</h4>
							<TagsList size="menu" />
						</div>
		      	</div>
		      </div>
      		: // Если залогинен пользователь 
      		<div>
	      		<div className="blocks">
	      			<div className="block-item">
      					<h4 className="ui header">
								Меню
								<small>навигация</small>
							</h4>
							<div className="ui vertical text menu">
								<Link href="/authors"><a className="item">
							   	<i className="fa fa-user-o" aria-hidden="true"></i> Искать авторов
							  	</a></Link>
							  	<Link href="/blogs"><a className="item">
							    	<i className="fa fa-bookmark-o" aria-hidden="true"></i> Искать блоги
							  	</a></Link>
							  	<Link href="/tags"><a className="item">
							    	<i className="fa fa-bolt" aria-hidden="true"></i> Искать темы
							  	</a></Link>
							</div>
	      			</div>
	      			<div className="block-item">
							<div className="ui vertical text menu">
							  <a className="item">
							    Как писать статьи
							  </a>
							  <a className="item">
							    Как разместить рекламу
							  </a>
							  <a className="item">
							    Что тут надо делать?
							  </a>
							</div>
	      			</div>
	      			<div className="block-item full">
	      				<div className="promo">
	      					<img className="ui image rounded" src={config.frontend + 'background-orange.png'} width="100%" />
	      					<div className="content">
	      						<h2>Исследуй!</h2>
	      						<p>Начни искать интересное для себя. Подпишись на тематические блоги и интересных авторов</p>
	      						<a href="#" className="button ui basic default inverted">Начать</a>
	      					</div>
	      				</div>
	      			</div>
						<div className="block-item">
							<div className="block-section">
								<h4 className="ui header">
									Авторы
									<small>, на которые вы подписаны</small>
								</h4>
								<UserList subscriber={this.currentUser._id} />
							</div>
							
							<div className="block-section">
								<h4 className="ui header">
									Блоги
									<small>, на которые вы подписаны</small>
								</h4>
								<BlogList subscriber={this.currentUser._id} />
							</div>
							
							<div className="block-section">
								<h4 className="ui header">
									Темы
									<small>, на которые вы подписаны</small>
								</h4>
								<TagsList size="menu" subscriber={this.currentUser._id} />
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
					background:#fff;
					padding-bottom:60px;
				}
				.sidebar .block {
					padding:15px;
				}
				.sidebar .promo {
					border-radius:4px;
					position: relative;
				}
				.sidebar .promo .content {
					position: absolute;
					left:0px;
					top:0px;
					width:100%;
					height:100%;
					display:flex;
					justify-content:center;
					align-items:center;
					flex-direction:column;
					text-align:center;
					padding:15px;
				}
				.sidebar .promo .content > * {
					color:#fff;
				}
				.sidebar .promo.inverted .content > * {
					color:#333;
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
				.sidebar .block-section {
					position:relative;
				}
		    `}</style>  
		</div>
    );
  }
}

export default connect((store) => store)(Sidebar)