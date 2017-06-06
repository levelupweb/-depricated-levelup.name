import React from 'react';
import { UI } from '../../utils/initscripts.js'
import axios from 'axios'
import Link from 'next/link'
import serializeForm from '../../utils/serializeForm'
import config from '../../app.config'
import Loader from '../loader'
import { Checkbox } from 'semantic-ui-react'

/* 
1. Доделать обработку ошибок в AddPage
2. Разбить на несколько функций AddPage.handleSubmit
3. Упростить компоненты 
*/

/* 
*** Компонент списка страниц (универсальный)
*/
 
export class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }
  }

  componentWillMount() {
    axios.get(config.API + `page/entries`).then((res) => {
      this.setState({
        entries: res.data
      })
    })
  }

  render() {
    return (
      <div className="ui segments">
      	<div className="ui segment">
        <h3 className="ui header">Страницы сайта
          <div className="sub header">
          Редактирование и добавление
          </div>
        </h3>
        </div>
        <div className="ui segment">
          <Entries data={this.state.entries} />
        </div>
        <div className="ui segment">
          <AddPage />
        </div>
      </div>
    );
  }
}

/* 
*** Компонент добавления страницы (универсальный)
*/
class AddPage extends React.Component {
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

  /* 
  *** Парсинг формы и отправка данных (можно разбить на 2 функции)
  */
  handleSubmit() {
    var form = document.getElementById('pageSubmitForm');
    var inputs = form.querySelectorAll('input');
    var _this = this;
    axios.post(config.API + `page/add`, serializeForm(inputs))
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
      // Handle Error
    });
  }

  /* 
  *** Вызывается в случае успешной отправки данных на сервер
  */
  handleSuccess(page) {
    this.setState({
      message: page.message
    })
  }

  /* 
  *** Рендер формы добавления (доделать обработку ошибок)
  */
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
      		{(!this.state.isAddFormActive) ?
      			`Добавить страницу` : `Отмена`
      		}
      	</div>
      	<div id="pageSubmitForm" className={(!this.state.isAddFormActive) ? `ui form hidden` : `ui form`} ref={(form) => {this.form = form}}>
          <div className={(!this.state.errors) ? `ui message hidden` : `ui message visible warning`}>
            {errors}
          </div>
          <div className={(!this.state.message) ? `ui message hidden` : `ui message visible success`}>
            {message}
          </div>
          <div className="field">
  		      <input data-type="text" data-label="Системной имя страницы" type="text" name="slug" placeholder="Системной имя страницы" />
  		    </div>
  		    <div className="field">
  		      <input data-type="text" data-label="Название страницы" type="text" name="pageTitle" placeholder="Название страницы" />
  		    </div>
  		    <div className="field">
  		      <input data-type="text" data-label="Небольшое описание страницы" type="text" name="pageDescription" placeholder="Небольшое описание страницы" />
  		    </div>
          <div className="field">
            <input data-type="text" data-label="CSS-классы" type="text" name="pageClassnames" placeholder="CSS-классы" />
          </div>
  		    <div className="inline field">
  			   <div className="ui checkbox">
  			    <input data-type="checkbox" data-label="Включить шапку страницы" name="pageShowHeader" type="checkbox" className="hidden" />
  			    <label>Включить шапку страницы</label>
  			   </div>
  			  </div>
    			<div className="inline field">
    			  <div className="ui checkbox">
    			    <input data-type="checkbox" data-label="Включить заголовок страницы" name="pageShowTitle" type="checkbox" className="hidden" />
    			    <label>Включить заголовок страницы</label>
    			  </div>
    			</div>
          <div className="inline field">
            <div className="ui checkbox">
              <input data-type="checkbox" data-label="Включить сайдбар" name="pageShowSidebar" type="checkbox" className="hidden" />
              <label>Включить сайдбар</label>
            </div>
          </div>
          <div className="inline field">
            <div className="ui checkbox">
              <input data-type="checkbox" data-label="Обязательная авторизация" name="userMustBeLoggedIn" type="checkbox" className="hidden" />
              <label>Обязательная авторизация</label>
            </div>
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


/* 
*** Список всех итемов
*/
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


/* 
*** Одиночный итем (для списка)
*/
class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  /* 
  *** Удаление итема
  */
  handleRemove() {
    axios.get(config.API + `page/entries/` + this.props.data._id + `/remove`).then((res) => {
      this.item.classList.add('hidden');
    })
  }

  render() {
    var entry = this.props.data;
    return (
      <div ref={(item) => {this.item = item}} className="item" id={`page-${entry._id}`}>
        <div className="right floated middle aligned">
          <Link href={{ pathname: '/panel/pages', query: { slug: entry.slug }}}><div className="ui button tiny"><i className="fa fa-cog"></i></div></Link>
        </div> 
        <div className="content middle aligned">
          <div className="header">{entry.pageTitle}</div>
          <div className="description">{entry.slug}</div>
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

export class PagesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: null
    }
  }


  componentDidMount() {
    UI()
    $('.ui.checkbox').checkbox();
  }

  /* 
  *** Парсим форму и отправляем объект
  */

  handleSave() {
    var inputs = this.form.querySelectorAll('input');
    console.log(serializeForm(inputs))
    axios.post(config.API + 'page/entries/' + this.props.data.page.slug + '/update', serializeForm(inputs)).then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleRemove(id) {
    var result = confirm('Вы действительно хотите удалить страницу?');
    if(result) {
      axios.get(config.API + `page/entries/` + id + `/remove`).then((res) => {
        // handle removed
      })
    }
  }

  render() {
    var entry = this.props.data.page; // Данные из глобальных props
    // Рендерим форму для редактирования
    return (
      <div className="ui grid">
        <div className="ui eight wide column">
          <h3 className="ui header">{entry.pageTitle}
            <div className="sub header">
            {entry.pageDescription}
            </div>
          </h3>
          <div className="ui divider"></div>
          <div className="ui form" ref={(form) => {this.form = form}}>
            <div className="field">
              <input defaultValue={entry.slug} data-type="text" data-label="Системной имя страницы" type="text" name="slug" placeholder="Системной имя страницы" />
            </div>
            <div className="field">
              <input defaultValue={entry.pageTitle} data-type="text" data-label="Название страницы" type="text" name="pageTitle" placeholder="Название страницы" />
            </div>
            <div className="field">
              <input defaultValue={entry.pageDescription} data-type="text" data-label="Небольшое описание страницы" type="text" name="pageDescription" placeholder="Небольшое описание страницы" />
            </div>
            <div className="field">
              <input defaultValue={entry.pageClassnames} data-type="text" data-label="CSS-классы" type="text" name="pageClassnames" placeholder="CSS-классы" />
            </div>
            <div className="inline field">
             <div className="ui checkbox">
              <input defaultChecked={entry.pageShowHeader} data-type="checkbox" data-label="Включить шапку страницы" name="pageShowHeader" type="checkbox" className="hidden" />
              <label>Включить шапку страницы</label>
             </div>
            </div>
            <div className="inline field">
              <div className="ui checkbox">
                <input defaultChecked={entry.pageShowTitle} data-type="checkbox" data-label="Включить заголовок страницы" name="pageShowTitle" type="checkbox" className="hidden" />
                <label>Включить заголовок страницы</label>
              </div>
            </div>
            <div className="inline field">
              <div className="ui checkbox">
                <input defaultChecked={entry.pageShowSidebar} data-type="checkbox" data-label="Включить сайдбар" name="pageShowSidebar" type="checkbox" className="hidden" />
                <label>Включить сайдбар</label>
              </div>
            </div>
            <div className="inline field">
            <div className="ui checkbox">
              <input defaultChecked={entry.userMustBeLoggedIn} data-type="checkbox" data-label="Обязательная авторизация" name="userMustBeLoggedIn" type="checkbox" className="hidden" />
              <label>Обязательная авторизация</label>
            </div>
          </div>
          </div>
          <br />
          <div className="button ui primary" onClick={() => {this.handleSave()}}>Сохранить</div>
          <div className="button ui" onClick={() => {this.handleRemove(entry._id)}}>Удалить страницу</div>
        </div>
      </div>
    );
  }
}

