import React from 'react';
import UserBar from './userbar'
import { connect } from 'react-redux'
import Avatar from 'react-avatar'
import Link from 'next/link'
import { updateUserById } from '../../actions/user'

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
        userBio: null
      }
    }
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
                </div>
              </div>
            <br />
            <div className="button ui primary" onClick={() => {this.handleSave()}}>Сохранить</div>
            <Link href={{ pathname: 'user', query: { slug: entry.slug }}}>
              <a className="button ui">Назад</a>
            </Link>
          </div>
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

export default connect(state => state.usersingle)(UserSingle)