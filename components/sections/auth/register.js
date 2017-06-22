import React from 'react';
import { registerUser } from '../../../actions/user'
import { UI } from '../../../utils/initScripts.js'

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      step: 0
    }
  }

  componentDidMount() {
    this.bindChangeEvents()
    UI()

    $('select.dropdown')
      .dropdown()
    ;
  }

  bindChangeEvents() {
    let self = this;
    let inputs = document.querySelectorAll('.register input');
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

  handleSubmit() {
    var user = this.state.user;
    registerUser(user).then((res) => {
      console.log(res.data)
      if(res.data.success) {
        $('.register.form .dimmer').dimmer('show')
      }
    })
  }

  next() {
    this.setState({
      step: this.state.step + 1
    })
  }

  back() {
    this.setState({
      step: this.state.step - 1
    })
  }

  render() {
    console.log(this.state)
    return (
      	<form className="ui form register">
      	  <h2 className="ui header">
      	  	 Регистрация <small>моментальная</small>
      	  </h2>
          <div className={(this.state.step == 0) ? `step first active` : `step first`}>
            <p>У вас еще нет аккаунта? Регистрация на сайте нашего интернет-журнала вам определенно не помешает!</p>
            <p>Помимо звания членства в нашем сообществе, вы также получите возможность свободной публикации на многотысячную аудиторию пользователей нашей платформы</p>         
            <div className="field">
              <input type="text" name="userName" placeholder="Полное Имя" />
            </div>
            <div className="field">
      		    <input type="text" name="userEmail" placeholder="E-mail" />
      		  </div>
      		  <div className="field">
      		    <input type="password" name="userPassword" placeholder="Пароль" />
      		  </div>
          </div>
          <div className={(this.state.step == 1) ? `step second active` : `step second`}>
            <p>Введите логин, который вы будете использовать при входе и основную информацию о себе</p>
            <div className="field">
              <input type="text" name="slug" placeholder="Логин" />
            </div>
            <div className="field">
              <input type="text" name="userDescription" placeholder="Профессия, должность" />
            </div>
            <div className="field">
              <div className="ui selection dropdown">
                  <input type="hidden" name="userGender" />
                  <i className="dropdown icon"></i>
                  <div className="default text">Пол</div>
                  <div className="menu">
                      <div className="item" data-value="male">Мужской</div>
                      <div className="item" data-value="female">Женский</div>
                  </div>
              </div>
          </div>
          </div>
          
          <div className="actions">
            {(this.state.step != 0) ?
              <a className="ui button circular basic" onClick={() => {this.back()}}>Назад</a> : ``
            }
            {(this.state.step == 0) ?
      		    <a className="ui button circular primary" onClick={() => {this.next()}}>Далее</a>
              : 
              <a className="ui button circular primary" onClick={() => {this.handleSubmit()}}>Готово</a>
            }
          </div>

          <div className="ui dimmer">
            <div className="content">
              <div className="center">
                <h2 className="ui inverted icon header">
                  Готово!
                </h2>
                <p>Авторизуйтесь под своим именем в форме слева</p>
              </div>
            </div>
          </div>
          <style jsx>{`
            .step {
              display:none
            }
            .step.active {
              display:block;
            }
            .actions {
              margin-top:10px;
            }
            .selection {
              border-radius: 27px!important;
              background: #eee!important;
              border: 0px!important;
            }
            .selection.active {
              border-radius:5px!important;
            }
            .selection .menu {
              border:0px!important;
            }
            .dimmer {
              padding:30px;
            }
          `}</style>
    		</form>
    );
  }
}
