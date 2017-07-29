// Important
import React from 'react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'

// Utils
import { UI } from '../../../../utils/initScripts.js'

// Actions
import { updateUser } from '../../../../actions/user'
import { handleSuccess, handleError, handleWarn } from '../../../../actions/app'
import { createSocial, removeSocial } from '../../../../actions/social'

// Components
import Avatar from 'react-avatar'
import Link from 'next/link'
import UserBar from './userbar'

class UserSingle extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;
    this.token = cookies.get('x-access-token');
  }

  componentWillMount() {
    if(this.props.user !== null) {
      this.setState({
        user: {
          ...this.props.user
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
    $('.dropdown').dropdown()
  }

  handleSave() {
    updateUser(this.token, this.state.user._id, this.state.user).then((res) => {
      this.dispatch(handleSuccess('Страница успешно обновлена', true))
    })
  }

  handleCreateSocial(token) {
    const social = {
      link: this.socialLink.value,
      owner: this.state.user._id,
      title: this.socialTitle.innerHTML
    }
    this.dispatch(createSocial(token, social))
  }

  handleRemoveSocial(token, id) {
    this.dispatch(removeSocial(token, id))
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
    if(this.props.user !== null) {
      var entry = this.state.user;
      return (
        <div className="blocks">
          <div className="block-item">
          <Link href={{ pathname: 'user', query: { slug: entry.slug }}}>
            <a className="ui button circular basic">
              <i className="fa fa-angle-left icon"></i>
              Назад
            </a>
          </Link>
          <div className="ui button circular basic primary saveButton" onClick={() => {this.handleSave()}}>
            <i className="fa fa-save icon"></i>
            Сохранить
          </div>
          <div className="ui divider"></div>
        	<div className="profile-feed feed">
            <div className="ui form" ref={(form) => {this.form = form}}>
              <div className="ui grid">
                <div className="ui eight wide column">
                  <h3 className="ui header">Основная информация</h3>
                  <p>Редактируйте основную информацию о вашем аккаунте</p>
                  <div className="field">
                    <label>Полное имя</label>
                    <input defaultValue={entry.fullName} type="text" name="fullName" placeholder="Полное имя пользователя" />
                  </div>
                  <div className="field">
                    <label>E-mail</label>
                    <input defaultValue={entry.email} type="text" name="email" placeholder="E-mail пользователя" />
                  </div>
                  <h3 className="ui header">Смена пароля</h3>
                  <p>Не уверены в безопасности своего аккаунта? Мы рекомендуем регулярно производить смену пароля</p>
                  <a className="ui button circular basic primary">Сменить пароль</a>
                </div>
                <div className="ui eight wide column">
                  <h3 className="ui header">Дополнительная информация</h3>
                  <p>Заполните свой профиль полностью, чтобы получить больше подписчиков</p>
                  <div className="field">
                    <label>Организация</label>
                    <input type="text" defaultValue={entry.company} name="company" placeholder="Компания, место работы" />
                  </div>
                  <div className="field">
                    <label>Должность</label>
                    <input type="text" defaultValue={entry.description} name="description" placeholder="Профессия, должность" />
                  </div>
                  <div className="field">
                    <label>Биография</label>
                    <textarea name="bio" placeholder="Биография, пару слов о себе" rows="2" defaultValue={entry.bio}></textarea>
                  </div>
                  <div className="ui divider"></div>
                  <div className="socials field">
                      <label>Социальные сети</label>
                      <p>Добавьте ссылки на ваши социальные сети, чтобы читатели могли вас найти</p>
                      <div className="items">
                        { entry.socials.map((item, i) => {
                          var slug = item.title.toLowerCase().split(/[ ,]+/).join(' ');
                          return (
                            <a onClick={() => {this.handleRemoveSocial(this.token, item._id)}} key={i} className={slug + ' ui circular button item animated fade'}  tabIndex="0">
                              <div className="ui visible content"><i className={'fa-' + slug + ' fa icon'}></i></div>
                              <div className="ui hidden content"><i className="fa fa-close icon"></i></div>
                            </a>
                        )})}
                      <div className="ui circular floating button basic addbutton" data-inverted="" data-tooltip="Добавить социальную сеть" data-position="top left"><i className="fa fa-plus"></i></div>
                      <div className="ui fluid popup top left transition hidden">
                        <div className="ui divided">
                            <div className="field">
                            <label>Добавление сети</label>
                              <div className="ui rounded floating icon button basic dropdown">
                                <span className="text" ref={(title) => {this.socialTitle = title}}>Сеть</span>
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
                              <input type="text" ref={(link) => {this.socialLink = link}} placeholder="Ссылка на профиль" />
                            </div>
                            <div className="field">
                              <span onClick={() => {this.handleCreateSocial(this.token)}} className="ui button rounded fluid basic">Добавить</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>            
          </div>
  		    </div>
          <style jsx>{`
            .saveButton {
              float:right;
            }
            .socials-form {
              padding:15px;
            }
            .socials .button.item:hover .hidden {
              display:block;
              opacity:1;
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
        </div>
      );
    } else {
      return (
        <div>Пользователь не найден</div>
      )
    }
  }
}

function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser 
  }
}

export default connect(mapStateToProps)(UserSingle)