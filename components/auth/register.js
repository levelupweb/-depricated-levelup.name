import React from 'react';
import { registerUser } from '../../actions/user'

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    this.bindChangeEvents()
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
      console.log(res);
    })
  }

  render() {
    return (
      	<form className="ui form register">
      	  <h2 className="ui header">
      	  	 Регистрация <small>моментальная</small>
      	  </h2>
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
    		  <a className="ui button circular primary" onClick={() => {this.handleSubmit()}}>Регистрация</a>
          <style jsx>{`
           
          `}</style>
    		</form>
    );
  }
}
