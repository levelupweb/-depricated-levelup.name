import React from 'react';

export default class Register extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      	<form className="ui form">
      	  <h2 className="ui header">
      	  	 Регистрация <small>моментальная</small>
      	  </h2>
          <p>У вас еще нет аккаунта? Регистрация на сайте нашего интернет-журнала вам определенно не помешает!</p>
          <p>Помимо звания членства в нашем сообществе, вы также получите возможность свободной публикации на многотысячную аудиторию пользователей нашей платформы</p>    		  
          <div className="field">
            <input type="text" name="first-name" placeholder="Полное Имя" />
          </div>
          <div className="field">
    		    <input type="text" name="first-name" placeholder="E-mail" />
    		  </div>

    		  <div className="field">
    		    <input type="password" name="last-name" placeholder="Пароль" />
    		  </div>
    		  <a className="ui button circular primary">Войти</a>
    		  <span className="registerButton"><a href="#">Регистрация</a></span>
          <style jsx>{`
            .form .registerButton {
              margin-left:10px;
            }
          `}</style>
    		</form>
    );
  }
}
