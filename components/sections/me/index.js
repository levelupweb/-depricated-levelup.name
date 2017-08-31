import React from 'react';
import cookies from 'js-cookie'
import { connect } from 'react-redux'

// actions
import { getUserByToken, getUserPosts, getUserSubscriptions, getUserCampaigns } from '../../../actions/user.js'


// utils
import { UI } from '../../../utils/initScripts.js'

// components
import Avatar from 'react-avatar'
import PostList from '../../isomorphic/postList.js'
import BlogList from '../../isomorphic/blogList.js'
import UserList from '../../isomorphic/userList.js'
import TagsList from '../../isomorphic/tagsList.js'
import Card from '../../isomorphic/feed/views/card.js'
import Link from 'next/link'
import UserBar from '../user/single/userbar.js'
import Menu from './menu.js'
import TimeAgo from 'timeago-react';
import CreateCampaign from '../../isomorphic/campaign/create.js'
import Campaigns from '../../isomorphic/campaign/campaigns.js'

class Me extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token');
    this.state = {
    	user: null,
    	posts: [],
      campaigns: [],
      subscriptions: null
    }
  }

  componentWillMount() {
  	getUserByToken(this.token).then((response) => {
  		this.setState({
  			user: response.data
  		})
  	})
  	.then(() => {
  		getUserPosts(this.state.user._id, 3, 0).then((response) => {
  			this.setState({
  				posts: response.data
  			})
  		})
  	})
    .then(() => {
      getUserSubscriptions(this.state.user._id, 10, 0).then((response) => {
        this.setState({
          subscriptions: response.data
        })
      })
    })
    .then(() => {
      getUserCampaigns(this.state.user._id, 5, 0).then((response) => {
        this.setState({
          campaigns: response.data
        })
      })
    })
    .then(() => {
      getSubscriptions(this.state.user._id).then((response) => {
        this.setState({ subscriptions: response.data })
      })
    })
  }

  componentDidMount() {
    UI()
    $('.progress.ui').progress({
      value: 3,
      total: 6,
      text: {
        active  : 'Заполнено {value} из {total} полей',
        success : 'Профиль успешно заполнен!'
      }
    });
  }

  renderPosts(posts) {
  	return posts.map((post, i) => {
  		return <Card post={post} key={i} />
  	})
  }

  render() {
  	const { posts, user, subscriptions } = this.state
    if(user && posts && subscriptions) {
      const { users, blogs } = subscriptions
      const { image, fullName, slug, gender, description, bio, updated } = user;
      return (
        <div className="module-wrapper">
          <Menu />
        	<div className="inner blocks">
        		<div className="block-item">
              <div className="block-section">
                <UserBar user={user} statistics={true} blog={true} />
              </div>
              <div className="block-section">
                <div className="ui four column grid">
                  <div className="column">
                    <div className="ui card">
                      <div className="content">
                        <div className="header">Новобранец</div>
                        <div className="meta">2 дня назад</div>
                        <div className="description">
                          <p>Зарегистрируйтесь на сайте и впервые авторизуйтесь</p>
                        </div>
                      </div>
                      <div className="extra content">
                        <i className="fa fa-check icon"></i> Выполнено
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui card">
                      <div className="content">
                        <div className="header">Блогер</div>
                        <div className="meta">2 дня назад</div>
                        <div className="description">
                          <p>Напишите свой первый пост в личной ленте</p>
                        </div>
                      </div>
                      <div className="extra content">
                        <i className="fa fa-check icon"></i> Выполнено
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui card">
                      <div className="content">
                        <div className="header">Комментатор</div>
                        <div className="meta">2 дня назад</div>
                        <div className="description">
                          <p>Напишите свой первый комментарий к посту</p>
                        </div>
                      </div>
                      <div className="extra content">
                        <i className="fa fa-check icon"></i> Выполнено
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui card">
                      <div className="content">
                        <div className="header">Подписчик</div>
                        <div className="meta">1 день назад</div>
                        <div className="description">
                          <p>Подпишитесь на 5 авторов и следите за их публикациями</p>
                        </div>
                      </div>
                      <div className="extra content">
                        <i className="fa fa-check icon"></i> Выполнено
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              {/* <div className="block-section">
                <Link href='/settings'><a className="ui button default fluid">Редактировать профиль</a></Link>
              </div> */}
        			<div className="block-section">
  							<h3 className="ui header">
  		            Посты
  		            <small>ваши последние публикации</small>
  		          </h3>
  		         	<div className="ui three column grid">
                  {this.renderPosts(posts)}
                </div>
  						</div>
  						<div className="block-section">
  							<h3 className="ui header">
  		            Подписки
  		            <small>управление вашими подписками</small>
  		          </h3>
                <div className="ui grid two columns">
                  <div className="column">
                    <h4 className="ui header">
                      Блоги
                    </h4>
                    {(blogs.length > 0) ?
                      <BlogList blogs={blogs} /> 
                      : // Если подписки с блогами пусты
                      <div className="no-content">
                        <p><i className="fa fa-ellipsis-h"></i> Ваш список подписок на блоги пока пуст. <Link href={{ pathname: 'explore'}}><a>Подпишитесь</a></Link> на интересные вам страницы и читайте только интересное вам!</p>
                      </div>
                    }
                  </div>
                  <div className="column">
                    <h4 className="ui header">
                      Авторы
                    </h4>
                    {(users.length > 0) ?
                      <UserList users={users} /> 
                      : // Если подписки с авторами пусты
                      <div className="no-content">
                        <p><i className="fa fa-ellipsis-h"></i> Ваш список подписок на авторов пока пуст. <Link href={{ pathname: 'explore'}}><a>Подпишитесь</a></Link> на интересных вам людей и читайте только интересное вам!</p>
                      </div>
                    }
                  </div>
                </div>
  						</div>
              <div className="block-section">
                <h3 className="ui header">
                  Панель рекламодателя
                  <small>управляйте вашими рекламными кампаниями</small>
                </h3>
                <Campaigns campaigns={this.state.campaigns} />
                <CreateCampaign><div className="ui button basic circular">
                  Создать
                </div></CreateCampaign>
              </div>
  	        </div>
        	</div>
        	<style jsx>{`
            .module-wrapper {
              position:relative;
            }
            .menu.floating {
              left:998px;
              margin-left:30px;
              top:90px;
              position:fixed;
              z-index:999;
            }
            .menu .item {
              text-align:left;
            }
            .posts-more {
              margin-top:15px;
            }
            .information {
              display:flex;
              flex-direction:row;
            }
            .information .content {
              margin-left:15px;
              padding-left:15px;
            }
            .information .content .item {
              margin-bottom:8px;
              width:100%;
            }
            .information .content .item span {
              font-weight:bold;
            }
            .information .content .item span.title {
              color:#c0c0c0;
              margin-right:10px;
              font-weight:100;
            }
            .statistics {
              justify-content:center;
            }
            .statistics .statistic {
              margin-bottom:0px;
            }
        	`}</style>
        </div>
      );
    } else {
      return null
    }
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}


export default connect(mapStateToProps)(Me)