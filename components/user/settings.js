import React from 'react';
import UserBar from './userbar'
import { connect } from 'react-redux'
import { UI } from '../../utils/initscripts.js'
import Avatar from 'react-avatar'
import Link from 'next/link'
import { updateUserById, addSocialToUser } from '../../actions/user'
import cookies from 'js-cookie'

class UserSingle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        slug: null, 
        userDescription: null,
        userName: null,
        userEmail: null,
        userGender: null,
        userRole: null,
        userImage: null,
        userPassword: null,
        userCompany: null,
        userDescription: null,
        userSocials: [
          {title: 'vk', link: 'http://vk.com/vanya2h'},
          {title: 'twitter', link: 'http://twitter.com/vanya2h'}
        ],
        userBio: null
      }
    }
    this.token = cookies.get('x-access-token');
    this.currentUser = this.props.user.profile;
  }

  componentWillMount() {
    if(this.props.data.user !== null) {
      this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          ...this.props.data.user
        }
      })
    }
  }

  componentDidMount() {
    this.bindChangeEvent();
    UI()
    $('.socials .addbutton').popup({
       popup : $('.socials .popup'),
       on    : 'click'
    })
  }

  handleNewSocial() {
    var newSocial = { title: this.newSocialTitle.innerHTML, link: this.newSocialLink.value }
    addSocialToUser(this.token, this.currentUser._id, newSocial).then((res) => {
      console.log(res.data)
    }) 
  }

  handleSave() {
    updateUserById(this.state.user._id, this.state.user).then((res) => {
      // handle success
    })
  }

  bindChangeEvent() {
    let self = this;
    let inputs = document.querySelectorAll('.form input, .form textarea');
    inputs.forEach((input) => {
      input.addEventListener('change', (e) => {
        let property = e.target.name;
        let value = e.target.value;
        self.setState({
          ...self.state,
          user: {
            ...self.state.user,
            [property]: value
          }
        })
      });
    })
  }

  render() {
    if(this.props.data.user !== null) {
      var entry = this.state.user;
      return (
        <div>
          <UserBar data={this.props.data} />
          <div className="ui divider"></div>
        	<div className="profile-feed feed">
            <div className="ui form" ref={(form) => {this.form = form}}>
              <div className="ui grid">
                <div className="ui eight wide column">
                  <h3 className="ui header">
                    <div className="content">
                      Основная информация
                    </div>
                  </h3>
                  <div className="field">
                    <label>Полное имя</label>
                    <input defaultValue={entry.userName} type="text" name="userName" placeholder="Полное имя пользователя" />
                  </div>
                  <div className="field">
                    <label>E-mail</label>
                    <input defaultValue={entry.userEmail} type="text" name="userEmail" placeholder="E-mail пользователя" />
                  </div>
                  <h3 className="ui header">
                    <div className="content">
                      Смена пароля
                    </div>
                  </h3>
                  <div className="field">
                    <input type="password" name="userPassword" placeholder="Введите новый пароль" />
                  </div>
                  <div className="field">
                    <input type="password" name="userPasswordSecond" placeholder="Новый пароль ещё раз" />
                  </div>
                </div>
                <div className="ui eight wide column">
                  <h3 className="ui header">
                    <div className="content">
                      Дополнительная информация
                    </div>
                  </h3>
                  <div className="field">
                    <label>Организация</label>
                    <input type="text" defaultValue={entry.userCompany} name="userCompany" placeholder="Компания, место работы" />
                  </div>
                  <div className="field">
                    <label>Должность</label>
                    <input type="text" defaultValue={entry.userDescription} name="userDescription" placeholder="Профессия, должность" />
                  </div>
                  <div className="field">
                    <label>Биография</label>
                    <textarea name="userBio" placeholder="Биография, пару слов о себе" rows="2" defaultValue={entry.userBio}></textarea>
                  </div>
                  <div className="socials field">
                    <label>Социальные сети</label>
                      <div className="items">
                        { entry.userSocials.map((item, i) => {
                          var slug = item.title.toLowerCase().split(/[ ,]+/).join(' ');
                          return (<div key={i} className={slug + ' ui circular icon button item'}>
                                  <i className={'fa-' + slug + ' fa icon'}></i>
                                </div>)
                        })}
                      
                      <div className="ui circular floating icon button basic addbutton"><i className="fa fa-plus"></i></div>
                      <div className="ui fluid popup top left transition hidden">
                        <div className="ui divided">
                            <div className="field">
                            <label>Добавление сети</label>
                              <div className="ui rounded floating icon button basic dropdown">
                                <span className="text" ref={(title) => {this.newSocialTitle = title}}>Сеть</span>
                                <div className="menu">
                                  <div className="search">
                                    <input type="text" placeholder="Поиск..." />
                                  </div>
                                  <div className="divider"></div>
                                  <div className="header">Выберите сеть</div>
                                  <div className="scrolling menu">
                                    <div className="item">Vk</div>
                                    <div className="item">Github</div>
                                    <div className="item">Facebook</div>
                                    <div className="item">Twitter</div>
                                    <div className="item">Google Plus</div>
                                    <div className="item">LinkedIn</div>
                                    <div className="item">YouTube</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="field">
                              <input type="text" ref={(link) => {this.newSocialLink = link}} placeholder="Ссылка на профиль" />
                            </div>
                            <div className="field">
                              <span onClick={() => {this.handleNewSocial()}} className="ui button rounded fluid basic">Добавить</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            <br />
            <div className="button ui primary" onClick={() => {this.handleSave()}}>Сохранить</div>
            <Link href={{ pathname: 'user', query: { slug: entry.slug }}}>
              <a className="button ui">Назад</a>
            </Link>
          </div>
  		    </div>
          <style jsx>{`
            .socials-form {
              padding:15px;
            }

            .socials .items .item {
              margin-bottom:5px;
            }
      
            .socials .divided {
              display:flex;
              flex-direction:column;
            }

            .socials .divided input,
            .socials .divided .button {
              width:100%;
            }

            .socials .dropdown .menu {
              min-width:200px;
              margin-top:20px;
            }

            .socials .dropdown .menu input {
              margin:15px;
              display:block;
              width:185px;
            }
          `}</style>
        </div>
      );
    } else {
      return (
        <div>Пользователь не найден</div>
      )
    }
  }
}

export default connect(state => state)(UserSingle)