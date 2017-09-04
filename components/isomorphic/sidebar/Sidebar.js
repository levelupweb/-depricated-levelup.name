// Important
import React from 'react';
import { connect } from 'react-redux'
import config from '../../../app.config.js'
import applyStyles from 'next-style-loader/applyStyles';
import sidebarStyles from './sidebar.css';

// Actions
import { getLogout, getSubscriptions } from '../../../actions/user.js';

// Components
import Link from 'next/link';
import UserList from '../userList/UserList.js';
import TagList from '../tagList/TagList.js';
import BlogList from '../blogList/BlogList.js';
import Loader from '../loader.js';

const performSubscriptionsRequest = userId =>
	getSubscriptions(userId).then(response => 
		Promise.resolve(response.data)
	).catch(err => console.error(err))


class Sidebar extends React.Component {
  constructor(props) {
  	super(props);
  	this.dispatch = this.props.dispatch;
  	this.state = { subscriptions: null, isLoaded: false }
  }

  componentWillMount() {
  	const { currentUserId, currentUser } = this.props;
  	if(currentUser.isLogged) {
			performSubscriptionsRequest(currentUserId).then(subscriptions => {
  			this.setState({ subscriptions, isLoaded: true })
  		})
  	} else {
			this.setState({ isLoaded: true })
  	}
  }

  componentWillReceiveProps(nextProps) {
  	this.setState({
  		isLoaded: false
  	}, () => {
			const { currentUserId, currentUser } = nextProps;
  		if(currentUser.isLogged) {
				performSubscriptionsRequest(currentUserId).then(subscriptions => {
  				this.setState({ subscriptions, isLoaded: true })
  			})
  		} else {
				this.setState({ isLoaded: true })
  		}
  	})
  }

  render() {
  	const { currentUser, currentUserId } = this.props;
  	const { subscriptions, isLoaded } = this.state;
		if(isLoaded) {
			if(!currentUser.isLogged) {
				return (
					<div className="sidebar">
	    			<div className="blocks">
	    				<div className="block-item full">
	      				<div className="promo blacked">
	      					<img className="ui image rounded" src={config.static + '/img/background-white.png'} width="100%" />
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
									<a className="item">О проекте</a>
								  <a className="item">Регистрация</a>
							  	<a className="item">Рекламодателям</a>
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
				)
			} else {
				const { users, blogs, tags } = subscriptions
				return (
					<div className="sidebar">
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
								  <a className="item">Как писать статьи</a>
								  <a className="item">Как разместить рекламу</a>
								  <a className="item">Что тут надо делать?</a>
								</div>
	      			</div>
	      			<div className="block-item full">
	      				<div className="promo">
	      					<img className="ui image rounded" src={config.static + '/img/background-orange.png'} width="100%" />
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
									{(users.length > 0) ?
										<UserList users={users} /> 
										: // Если подписки с авторами пусты
										<div className="no-content">
	          					<p><i className="fa fa-ellipsis-h"></i> Ваш список подписок на авторов пока пуст. <Link href={{ pathname: 'explore'}}><a>Подпишитесь</a></Link> на интересных вам людей и читайте только интересное вам!</p>
	        					</div>
									}
								</div>
							
								<div className="block-section">
									<h4 className="ui header">
										Блоги
										<small>, на которые вы подписаны</small>
									</h4>
									{(blogs.length > 0) ?
										<BlogList blogs={blogs} /> 
										: // Если подписки с блогами пусты
										<div className="no-content">
	          					<p><i className="fa fa-ellipsis-h"></i> Ваш список подписок на блоги пока пуст. <Link href={{ pathname: 'explore'}}><a>Подпишитесь</a></Link> на интересные вам страницы и читайте только интересное вам!</p>
	        					</div>
									}
								</div>
								<div className="block-section">
									<h4 className="ui header">
										Темы
										<small>, на которые вы подписаны</small>
									</h4>
									{(tags.length > 0) ?
										<TagList tags={tags} /> 
										: // Если подписки с темами пусты
										<div className="no-content">
	          					<p><i className="fa fa-ellipsis-h"></i> Ваш список подписок на темы пока пуст. <Link href={{ pathname: 'explore'}}><a>Подпишитесь</a></Link> на интересное вам и читайте только актуальное для вас!</p>
	        					</div>
									}
								</div>
							</div>
						</div>
					</div>
				)
			}
		} else {
			return (
				<div className="sidebar">
					<div className="blocks">
						<div className="block-item">
							<Loader />
							<p className="no-content" style={{textAlign: 'center'}}>
								Загрузка данных
							</p>
						</div>
					</div>
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
  return { 
  	currentUser: state.currentUser,
  	currentUserId: state.currentUser._id
  }
}


export default connect(mapStateToProps)(applyStyles(sidebarStyles)(Sidebar))