import React from 'react';
import { UI } from '../../utils/initscripts.js'
import axios from 'axios'
import Link from 'next/link'
import serializeForm from '../../utils/serializeForm'
import config from '../../app.config'
import Loader from '../loader'
import Avatar from 'react-avatar'
import { updateUserById, removeUserById } from '../../actions/user'

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
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        ...this.props.data.user
      }
    })
  }

  componentDidMount() {
    UI()
    $('.ui.checkbox').checkbox();
    this.bindChangeEvent()
  }

  handleSave() {
    updateUserById(this.state.user._id, this.state.user).then((res) => {
      // handle success
    })
  }

  handleRemove(id) {
    let result = confirm('Вы действительно хотите удалить пользователя?');
    if (result) {
      removeUserById(id).then((res) => {
        console.log(res.data)
      })
    }
  }

  bindChangeEvent() {
    let inputs = document.querySelectorAll('.form input, .form textarea');
    inputs.forEach((input) => {
      input.addEventListener('change', (e) => {
        let property = e.target.name;
        let value = e.target.value;
        this.setState({
          ...this.state,
          user: {
            ...this.state.user,
            [property]: value
          }
        })
      });
    })
  }

  // Переписать в actions при помощи axios!!!
  async handleUpload(e) {
    var self = this;
    var image = e.target.files[0];
    var formData = new FormData();
    var url = config.API + 'user/upload';
    await formData.append('userImage', image);
    await formData.append('slug', this.state.user.slug)
    if (image) {
       await fetch(url, {
        method: 'POST',
        body: formData
      }).then(async (res) => {
        var result = await res.json()
        var path = config.storage + 'users/' + self.state.user.slug + '/' + result.filename
        await self.setState({
          ...self.state,
          user: {
            ...self.state.user,
            userImage: path
          }
        })
      })
    }
  }

  render() {
    console.log(this.state)
    var entry = this.state.user;
    return (
      <div>
        <h3 className="ui header">
          <Avatar src={entry.userImage} name={entry.slug} color={`#46978c`} size={40} className={`ui image`} round={true} />
          <div className="content">
            {entry.slug}
            <div className="sub header">
            {entry.userEmail}
            </div>
          </div>
        </h3>
        <div className="ui divider"></div>
          <div className="ui form" ref={(form) => {this.form = form}}>
            <div className="ui grid">
              <div className="ui six wide column">
                <div className="field">
                  <input defaultValue={entry.userName} type="text" name="userName" placeholder="Полное имя пользователя" />
                </div>
                <div className="field">
                  <input disabled defaultValue={entry.slug} type="text" name="slug" placeholder="Логин пользователя" />
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
              <div className="ui six wide column">
                <div className="field">
                  <input type="text" defaultValue={entry.userCompany} name="userCompany" placeholder="Компания, место работы" />
                </div>
                <div className="field">
                  <input type="text" defaultValue={entry.userDescription} name="userDescription" placeholder="Профессия, должность" />
                </div>
                <div className="field">
                  <textarea name="userBio" placeholder="Биография, пару слов о себе" rows="2">{entry.userBio}</textarea>
                </div>
              </div>
              <div className="ui four wide column">
                <div>
                  <div className="selectAvatar" onClick={() => {this.avatar.click()}}>
                    <Avatar round={true} src={entry.userImage} name={entry.slug} color={`#46978c`} size={100} className={`ui image`} />
                    <div className="selectAvatarIcon"><i className="fa fa-cog" aria-hidden="true"></i></div>
                  </div>
                  <span className="content small"></span>
                  <input onChange={(e) => this.handleUpload(e)} type="file" className="hidden ui" ref={(avatar) => {this.avatar = avatar}} />
                </div>
              </div>
            </div>
          <br />
          <div className="button ui primary" onClick={() => {this.handleSave()}}>Сохранить</div>
          <div className="button ui" onClick={() => {this.handleRemove(entry._id)}}>Удалить пользователя</div>
        </div>
        <style jsx>{`
          .selectAvatar {
            cursor:pointer;
            position:relative;
            width:100px;
            border-radius:100%;
            overflow:hidden;
          }

          .selectAvatar:hover .selectAvatarIcon {
            opacity:1;
          }

          .selectAvatarIcon {
             position:absolute;
             left:0px;
             top:0px;
             background:rgba(0,0,0,0.5);
             color:#fff;
             width:100%;
             height:100%;
             display:flex;
             justify-content:center;
             align-items:center;
             opacity:0;
             transition:0.2s all ease;
          }

          .selectAvatarIcon i {
            font-size:20px;
          }
        `}</style>
      </div>
    );
  }
}

