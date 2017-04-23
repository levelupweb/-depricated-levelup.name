import React from 'react';
import Link from 'next/link'
import UserList from './user-list'
import TagsList from './tags-list'
import {connect} from 'react-redux'
import User from './user'
import Cookies from 'js-cookie'
import Router from 'next/router'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	auth: false,
    	subscriptions: {
    		users: [
    			{name: 'Алексей Ашанов', description: 'Программист', updates: 1, id: 0},
    			{name: 'Иван Коряковцев', description: 'Веб-разработчик', updates: 0, id: 1},
    			{name: 'Алексей Навальный', description: 'Политик, юрист', updates: 1, id: 2},
    			{name: 'Стив Джобс', description: 'Предприниматель', updates: 0, id: 3},
    			{name: 'Анна Ахматова', description: 'Писательница', updates: 0, id: 4}
    		],

    		blogs: [
    			{name: 'Spark', description: 'Веб-сайт', image: '../static/img/sidebar/subscriptions/spark.png', updates: 1, id: 0},
    			{name: 'Wylsacom', image: '../static/img/sidebar/subscriptions/apple.png', description: 'Блоггер', updates: 0, id: 1},
    			{name: 'Habrahabr', image: '../static/img/sidebar/subscriptions/habr.png', description: 'Веб-сайт', updates: 1, id: 2}
    		],

    		tags: [
    			{title: 'природа', id: 1},
    			{title: 'программирование', id: 2},
    			{title: 'seo', id: 3},
    			{title: 'машинное обучение', id: 4},
    			{title: 'игры', id: 5},
    			{title: 'javascript', id: 6},
    			{title: 'arduino', id: 7},
    			{title: 'веб-разработка', id: 8},
    		],

    		popular: [
    			{title: 'живопись', id: 1},
    			{title: 'программирование', id: 2},
    			{title: 'игры', id: 3},
    			{title: 'музыка', id: 4},
    			{title: 'социальные сети', id: 5},
    			{title: 'личная эффективность', id: 6},
    			{title: 'технологии', id: 7},
    			{title: 'веб-разработка', id: 8},
    		]
    	}
    }
  }

  componentDidMount() {
  	this.setFooter()
  }

  componentWillMount() {
  	this.isLogged()
  }

  handleLogout() {
  	Cookies.remove('user', { path: '' });
  	Router.replace('/', '/', {})
  }


  setFooter() {
  	var footer = document.getElementById('footer');
  	var footerHeight = footer.scrollHeight;
  	var windowHeight = window.innerHeight;
  	var sidebar = document.getElementsByClassName('sidebar')[0];
  	sidebar.style.paddingBottom = footerHeight + 10 + 'px';
  	footer.style.top = 100 + '%'
  	footer.style.marginTop =  (this.state.auth) ? (footerHeight/2 + 'px') : (-footerHeight + 'px')
  }

  userBarSwitch() {
  	var transition = require('semantic-ui-transition');
  	var dimmer = require('semantic-ui-dimmer');
  	$('.sidebar').dimmer('add content', $('.sidebar .menu.vertical')).dimmer('show');
  }

  isLogged() {
  	if(this.props.user.auth || Cookies.get('user') ) {
  		this.setState({
  			auth: true
  		})
  	} 
  }

  componentDidUpdate(prevProps, prevState) {
  	this.setFooter()
  }

  render() {
    return (
      <div className="sidebar">

      	{!this.state.auth ? 
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
		      			<TagsList tags={this.state.subscriptions.popular} />
		      		</div>
      			</div>
      		</div>
      		: 
      		<div>
	      		<div className="profile block">
		      		<User />
		      		<div className="button userbar">
			      		<div onClick={() => {this.userBarSwitch()}} className="ui icon top left pointing button">
						  <i className="fa fa-angle-down"></i>
						</div>
					</div>

				    <div className="ui secondary vertical menu block-shadow">
				      <div className="block profile">
						  <a className="item"><i className="fa fa-user"></i> Мой профиль</a>
						  <a className="item"><i className="fa fa-pencil"></i> Написать пост</a>
						  <a className="item"><i className="fa fa-cog"></i> Редактировать</a>
						  <a className="item"><i className="fa fa-flash"></i> Статистика</a>
						  <div className="ui divider"></div>
						  <a onClick={() => {this.handleLogout()}} className="item"><i className="fa fa-sign-out"></i> Выход</a>
					  </div>
					</div>
		      	</div>

		      	<div className="block">
		      		<Link href="/editor" prefetch><button className="large fluid circular ui button primary">
					  Написать пост
					</button></Link>
		      	</div>

		      	<div className="block sidebar-block" id="subscriptions">
		      		<div className="title">
			      		<h3 className="ui header">
							Подписки <small>исследовать</small>
						</h3>
		      		</div>
		      		<div className="block-content">
		      			<UserList users={this.state.subscriptions.users} />
		      			<div className="ui section divider"></div>
		      			<UserList users={this.state.subscriptions.blogs} />
		      		</div>
		      	</div>

		      	<div className="block sidebar-block" id="tags">
		      		<div className="title">
			      		<h3 className="ui header">
							Темы <small>исследовать</small>
						</h3>
		      		</div>
		      		<div className="block-content">
		      			<TagsList tags={this.state.subscriptions.tags} />
		      		</div>
		      	</div>
	      	</div>
      	}

      	<div className="block footer" id="footer">
      		<div className="block-content">
      			<div className="ui dropdown switcher">
				  
				  <div className="text"><b>Levelup.name <i className="fa fa-angle-down"></i></b></div>
				  <div className="menu">
				    <div className="item">Levelupmusic</div>
				    <div className="item">Levelupworlds</div>
				    <div className="item">Levelupplace</div>
				  </div>
				</div>
      			<div className="menu">
      				<a href="#">помощь</a>
      				<a href="#">карьера</a>
      				<a href="#">блог</a>
      				<a href="#">публичность</a>
      				<a href="#">о проекте</a>
      			</div>
      		</div>
      	</div>
		  <style jsx>{`
	
				.sidebar {
					position:relative;
					overflow-y:scroll;
				}

				.footer {
					background:#f5f5f5;
					position:absolute;
					left:0px;
				}

		  		.footer .menu {
					display:flex;
					flex-wrap:wrap;
					flex-direction:row;
		  		}

		  		.footer .switcher .menu {
					display:none;
					bottom:100%!important;
					margin-bottom:10px;
					top:auto!important;
		  		}

		  		.footer .menu a {
		  			display:inline-block;
					margin-right:10px;
					margin-bottom:5px;
					color:#000;
		  		}

		  		.footer .switcher {
		  			margin-bottom:5px;
		  			color:#000;
		  			display:block;
		  		}

		  		.profile  {
		  			position:relative;
		  			text-align:left;
		  		}

		  		.profile.simple {
		  			 height:85px;
		  			 display:flex;
		  			 justify-content:center;
		  			 align-items:center;
		  			 background:#f5f5f5;
		  		}

		  		.profile.simple a {
					font-size:15px;
					font-weight:bold;
					color:#000;
		  		}

		  		.profile .menu .profile .content .description {
		  			color:#c0c0c0!important;
		  		}

		  		.profile .secondary.menu {
					text-align:left;
		  		}
				
				.profile .button {
					position: absolute;
					right:0px;
					top:0px;
					bottom:0px;
					display:flex;
					justify-content:center;
					align-items:center;
					padding:10px;
					margin-right:18px;
					cursor:pointer;
					transition:0.2s all ease;
					background:none!important;
					height:auto;
				}

				.button:focus {
					background:#c0c0c0!important;
				}

		    `}</style>  
		</div>
    );
  }
}

export default connect((store) => store)(Sidebar)