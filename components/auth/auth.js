import React from 'react';
import {connect} from 'react-redux'
import {auth} from '../../actions/user'
import Router from 'next/router'
import cookie from 'js-cookie'
import axios from 'axios'
import config from '../../app.config.js'

class Auth extends React.Component {

  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      formID: 'loginForm',
      formElement: null,
      secondsToRelocate: 3
    }
  }

  componentDidMount() {
    this.bindEvents();
    this.setState({
      formElement: document.getElementById(this.state.formID)
    })
  }

  bindEvents() {
    var button = document.querySelector('.loginButton');
    var _this = this;
    button.addEventListener('click', () => {
      _this.handleAuth();
    })
  }

  handleAuth() {
    const user = this.formToObject();
    axios({
      url: config.API + 'user/auth',
      method: 'POST',
      data: {
        slug: user.userLogin, 
        userPassword: user.userPassword
      }
    })
    .then((result) => {
      var response = result.data;
      console.log(response)
      if(response.success) {
        this.handleSuccess(response);
      } else {
        this.handleError(response);
      }
    })
  }

  handleError(response) {
    this.setState({
      error: response
    })
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.state.secondsToRelocate > 0) {
        this.setState({
          secondsToRelocate: this.state.secondsToRelocate - 1
        })
      } else {
        this.handleRelocate()
      }
    }, 900)
  }

  handleRelocate(timer) {
    clearInterval(this.interval)
    Router.push('/', '/', { shallow: true })
  }

  formToObject() {
    let elements = this.state.formElement.elements;
    let user = {};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        user[item.name] = item.value;
    }
    return user
  }

  handleSuccess(response) {
    $('.form .dimmer').dimmer('show')
    cookie.set('x-access-token', response.user.token, { expires: 7, path: '' });
    console.log(this.props);
    console.log(response.user)
    this.props.dispatch({type: 'LOGIN_SUCCESS', payload: response.user});
    this.startTimer()
  }

  hasError() {
    if (this.props.error) {
      return true
    }
  }

  getError() {
    return this.props.error
  }

  componentDidUpdate(prevProps, prevState) {
    if(!this.hasError()) {
      this.state.formElement.reset();
    }

  }

  componentWillUnmount() {
    clearInterval(window.relocateTimer)
  }


  render() { 
    let error = (this.hasError()) ? this.getError() : null;
    return (
        <form className="ui form" id="loginForm">

          {this.hasError() ? 
            <div className="ui negative message">
            <div className="header">
              {error.title}
            </div>
            <p>{error.message}</p>
          </div>
          : null }

          <h2 className="ui header">
             Вход <small>авторизация</small>
          </h2>
          <p>Авторизуйтесь под своим именем используя ваш логин и пароль</p>
          <div className="field">
            <input type="text" name="userLogin" placeholder="E-mail или логин" />
          </div>
          <div className="field">
            <input type="password" name="userPassword" placeholder="Пароль" />
          </div>
          <a className="ui button circular loginButton primary">Войти</a>
          <span className="registerButton"><a href="#">Регистрация</a></span>

          <div className="ui dimmer">
            <div className="content">
              <div className="center">
                <h2 className="ui inverted icon header">
                  Добро пожаловать!
                </h2>
                <p>Через {this.state.secondsToRelocate} секунд вы будете перенаправлены</p>
              </div>
            </div>
          </div>


          <style jsx>{`
            .form .registerButton {
              margin-left:10px;
            }
            .dimmer {
               padding:20px;
            }
          `}</style>

        </form>
    );
  }
}

export default connect((store) => store.user)(Auth)