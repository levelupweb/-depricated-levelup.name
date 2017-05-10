import React from 'react';
import { UI } from '../../utils/initscripts.js'
import axios from 'axios'
import Link from 'next/link'
import serializeForm from '../../utils/serializeForm'
import config from '../../app.config'
import Loader from '../loader'

/* 
1. Сделать смену пароля
*/
 
export class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentWillMount() {
    axios.get(config.API + 'user/entries').then((res) => {
      this.setState({
        users: res.data
      })
    })
  }

  render() {
    return (
      <div className="ui segments">
      	<div className="ui segment">
        <h3 className="ui header">Пользователи
          <div className="sub header">Редактирование и добавление</div>
        </h3>
        </div>
        <div className="ui segment">
          <Entries data={this.state.users} />
        </div>
        <div className="ui segment">
          <AddUser />
        </div>
      </div>
    );
  }
}

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	isAddFormActive: false,
      errors: null,
      message: null
    }
  }

  componentDidMount() {
  	UI()
  	$('.ui.checkbox').checkbox();
  }

  handleButton() {
  	this.setState({
  		isAddFormActive: !this.state.isAddFormActive
  	})
  }

  handleSubmit() {
    var inputs = this.form.querySelectorAll('input');
    var _this = this;
    axios.post(config.API + 'user/add', serializeForm(inputs))
    .then(function (response) {
      if(response.data.success) {
        _this.handleSuccess(response.data);
      } else {
        _this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(function (error) {
      // handle Error
    });
  }

  handleSuccess(page) {
    this.setState({
      message: page.message
    })
  }

  render() {
    var errors = []
    if (this.state.errors) {
      this.state.errors.forEach((item, i) => { 
        errors.push(<div key={i} >{item}</div>)
      });
    }

    var message = this.state.message;
    
    return (
      <div>
      	<div className={(!this.state.isAddFormActive) ? `large fluid circular ui button primary` : `large fluid circular ui button`} onClick={() => {this.handleButton()}}>
      		{(!this.state.isAddFormActive) ? `Добавить пользователя` : `Отмена`}
      	</div>
      	<div className={(!this.state.isAddFormActive) ? `ui form hidden` : `ui form`} ref={(form) => {this.form = form}}>
          <div className={(!this.state.errors) ? `ui message hidden` : `ui message visible warning`}>
            {errors}
          </div>
          <div className={(!this.state.message) ? `ui message hidden` : `ui message visible success`}>
            {message}
          </div>
          <div className="field">
  		      <input type="text" name="userName" placeholder="Полное имя пользователя" />
  		    </div>
  		    <div className="field">
  		      <input type="text" name="slug" placeholder="Логин пользователя" />
  		    </div>
  		    <div className="field">
  		      <input type="text" name="userEmail" placeholder="E-mail пользователя" />
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
          <div className="field">
              <div className="ui selection dropdown">
                  <input type="hidden" name="userRole" />
                  <i className="dropdown icon"></i>
                  <div className="default text">Роль</div>
                  <div className="menu">
                      <div className="item" data-value="subscriber">Пользователь</div>
                      <div className="item" data-value="advertiser">Рекламодатель</div>
                      <div className="item" data-value="admin">Администратор</div>
                      <div className="item" data-value="stuff">Редактор</div>
                  </div>
              </div>
          </div>
  		    <div className="field">
            <input type="password" name="userPassword" placeholder="Пароль" />
          </div>
          <div className="field">
            <input type="password" name="userPasswordSecond" placeholder="Повторите пароль" />
          </div>
          <div className="fluid ui button" onClick={() => {this.handleSubmit()}}>Отправить</div>
		    </div>
      	<style jsx>{`
    			#pageSubmitForm {
            margin-top:20px;
          }
      	`}</style>
      </div>
    );
  }
}

class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      loaded: false
    }
  }

  componentDidMount() {
    this.setState({
      loaded: true
    })
  }

  render() {
    var entries = [];
    this.props.data.map((item, i) => {
      entries.push(<Entry data={item} key={i} />)
    })
    return (
      <div className="ui middle aligned selection list transition">
        {(!this.state.loaded) ? <Loader /> : entries } 
      </div>
    );
  }
}

class Entry extends React.Component {
   constructor(props) {
     super(props);
   }

   render() {
    var entry = this.props.data;
    return (
      <div ref={(item) => {this.item = item}} className="item">
        <div className="right floated middle aligned">
          <Link href={{ pathname: '/panel/users', query: { slug: entry.slug }}}><div className="ui button tiny"><i className="fa fa-cog"></i></div></Link>
        </div> 
        <div className="content middle aligned">
          <div className="header">{entry.userName}</div>
          <div className="description">{entry.userEmail}</div>
        </div>
      </div>
    )
   }
}


/* 
*** -----------------------
*** Страница редактирования
*** -----------------------
*/

export class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    UI()
    $('.ui.checkbox').checkbox();
  }

  handleSave() {
    var form = this.form;
    var inputs = form.querySelectorAll('input');
    axios.post(config.API + 'user/entries/' + this.props.data.user.slug + '/update', serializeForm(inputs)).then(function (response) {
      // Handle Success
    })
    .catch(function (error) {
      // Handle Error
    });
  }

  handleRemove(id) {
    var result = confirm('Вы действительно хотите удалить пользователя?');
    if(result) {
      axios.get(config.API + `user/entries/` + id + `/remove`).then((res) => {
        // handle removed
      })
    }
  }


  render() {
    var entry = this.props.data.user;
    console.log(entry._id)
    return (
      <div className="ui grid">
        <div className="ui eight wide column">
          <h3 className="ui header">{entry.slug}
            <div className="sub header">
            {entry.userEmail}
            </div>
          </h3>
          <div className="ui divider"></div>
          <div className="ui form" ref={(form) => {this.form = form}}>
            <div className="field">
              <input defaultValue={entry.userName}  type="text" name="userName" placeholder="Полное имя пользователя" />
            </div>
            <div className="field">
              <input defaultValue={entry.slug} type="text" name="slug" placeholder="Логин пользователя" />
            </div>
            <div className="field">
              <input defaultValue={entry.userEmail} type="text" name="userEmail" placeholder="E-mail пользователя" />
            </div>
            <div className="field">
                <div className="ui selection dropdown">
                    <input defaultValue={entry.userGender} type="hidden" name="userGender" />
                    <i className="dropdown icon"></i>
                    <div className="default text">Пол</div>
                    <div className="menu">
                        <div className="item" data-value="male">Мужской</div>
                        <div className="item" data-value="female">Женский</div>
                    </div>
                </div>
            </div>
            <div className="field">
                <div className="ui selection dropdown">
                    <input defaultValue={entry.userRole} type="hidden" name="userRole" />
                    <i className="dropdown icon"></i>
                    <div className="default text">Роль</div>
                    <div className="menu">
                        <div className="item" data-value="subscriber">Пользователь</div>
                        <div className="item" data-value="advertiser">Рекламодатель</div>
                        <div className="item" data-value="admin">Администратор</div>
                        <div className="item" data-value="stuff">Редактор</div>
                    </div>
                </div>
            </div>
            <div className="field">
              <input type="password" name="userPassword" placeholder="Введите новый пароль" />
            </div>
            <div className="field">
              <input type="password" name="userPasswordSecond" placeholder="Новый пароль ещё раз" />
            </div>
          </div>
          <br />
          <div className="button ui primary" onClick={() => {this.handleSave()}}>Сохранить</div>
          <div className="button ui" onClick={() => {this.handleRemove(entry._id)}}>Удалить пользователя</div>
        </div>
      </div> 
    );
  }
}

