import React from 'react';
import { UI } from '../../utils/initscripts.js'
import axios from 'axios'
import Link from 'next/link'
import serializeForm from '../../utils/serializeForm'
import config from '../../app.config'
import Loader from '../loader'
import Avatar from 'react-avatar'
import { getTags, addTag, updateTagById, removeTagById } from '../../actions/tag'
 
export class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    }
  }

  componentWillMount() {
    getTags().then((tags) => {
      this.setState({
        tags: tags.data
      })
    })
  }

  render() {
    return (
      <div className="ui segments">
      	<div className="ui segment">
        <h3 className="ui header">Тэги
          <div className="sub header">Редактирование и добавление</div>
        </h3>
        </div>
        <div className="ui segment">
          <Entries data={this.state.tags} />
        </div>
        <div className="ui segment">
          <AddTag />
        </div>
      </div>
    );
  }
}

class AddTag extends React.Component {
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
    addTag(serializeForm(inputs)).then((res) => {
      console.log(res.data)
    })
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
      		{(!this.state.isAddFormActive) ? `Добавить тэг` : `Отмена`}
      	</div>
      	<div className={(!this.state.isAddFormActive) ? `ui form hidden` : `ui form`} ref={(form) => {this.form = form}}>
          <div className={(!this.state.errors) ? `ui message hidden` : `ui message visible warning`}>
            {errors}
          </div>
          <div className={(!this.state.message) ? `ui message hidden` : `ui message visible success`}>
            {message}
          </div>
          <div className="field">
  		      <input type="text" name="slug" placeholder="Системное имя" />
  		    </div>
  		    <div className="field">
  		      <input type="text" name="tagTitle" placeholder="Заголовок" />
  		    </div>
  		    <div className="field">
  		      <input type="text" name="tagDescription" placeholder="Описание" />
  		    </div>
          <div className="fluid ui button" onClick={() => {this.handleSubmit()}}>Отправить</div>
		    </div>
      	<style jsx>{`
    			.form {
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
          <Link href={{ pathname: '/panel/tags', query: { slug: entry.slug }}}><div className="ui button tiny"><i className="fa fa-cog"></i></div></Link>
        </div> 
        <div className="content middle aligned">
          <div className="header">{entry.tagTitle}</div>
          <div className="description">{entry.tagSubscribersCount} подписчиков</div>
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

export class TagsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: {
        slug: null, 
        tagTitle: null,
        tagDescription: null,
        tagImage: null
      }
    }
  }

  componentWillMount() {
    this.setState({
      tag: {
        ...this.state.tag,
        ...this.props.data.tag
      }
    })
  }

  componentDidMount() {
    UI()
    this.bindChangeEvent()
  }

  handleSave() {
    updateTagById(this.state.tag._id, this.state.tag).then((res) => {
      console.log(res.data)
    })
  }

  handleRemove(id) {
    let result = confirm('Вы действительно хотите удалить тэг?');
    if (result) {
      removeTagById(id).then((res) => {
        console.log(res.data)
      })
    }
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
          tag: {
            ...self.state.tag,
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
    var url = config.API + 'tag/upload';
    await formData.append('tagImage', image);
    await formData.append('slug', this.state.tag.slug)
    if (image) {
       await fetch(url, {
        method: 'POST',
        body: formData
      }).then(async (res) => {
        var result = await res.json()
        var path = config.storage + 'tags/' + result.filename
        await self.setState({
          ...self.state,
          tag: {
            ...self.state.tag,
            tagImage: path
          }
        })
      })
    }
  }

  handleTyping() {
    var value = e.target.value
    var link = value.replace(/\s/g, '-').toLowerCase()
    this.link.value = link;
    this.updateState('postTitle', value).then(() => {
      this.updateState('slug', link)
    })
  }

  render() {
    var entry = this.state.tag;
    return (
      <div>
        <div className="header-wrapper">
          <div className="header-image">
            <img width="100%" src={entry.tagImage} />
          </div>
          <h3 className="ui header">
            {entry.tagTitle}
            <div className="sub header">
              {entry.slug}
            </div>
          </h3>
        </div>
        <div className="ui divider"></div>
          <div className="ui form" ref={(form) => {this.form = form}}>
            <div className="ui grid">
              <div className="ui six wide column">
                <div className="field">
                  <label>Заголовок</label>
                  <input defaultValue={entry.tagTitle} type="text" name="userName" placeholder="Заголовок тэга" />
                </div>
                <div className="field">
                  <label>Системное имя</label>
                  <input defaultValue={entry.slug} type="text" name="slug" placeholder="Системное имя тэга" />
                </div>
                <div className="field">
                  <label>Описание</label>
                  <input defaultValue={entry.tagDescription} type="text" name="userEmail" placeholder="Описание тэга" />
                </div>
              </div>
              <div className="ui eight wide column">
                <div className="field">
                  <label>Изображение</label>
                  <div className="selectAvatar" onClick={() => {this.avatar.click()}}>

                    {(entry.tagImage) ? 
                      <img className="image ui rounded" width="100%" src={entry.tagImage} /> 
                      :
                      <div className="no-image image ui rounded"><i className="fa fa-picture-o" aria-hidden="true"></i></div>
                    }

                  </div>
                  <span className="content small"></span>
                  <input onChange={(e) => this.handleUpload(e)} type="file" className="hidden ui" ref={(avatar) => {this.avatar = avatar}} />
                </div>
              </div>
            </div>
          <br />
          <div className="button ui primary" onClick={() => {this.handleSave()}}>Сохранить</div>
          <div className="button ui" onClick={() => {this.handleRemove(entry._id)}}>Удалить тэг</div>
        </div>
        <style jsx>{`

          .header-wrapper {
            max-height:120px;
            overflow:hidden;
            position:relative;
          }
          .header-image {
            position:absolute;
            left:0px;
            top:0px;
            width:100%;
            min-height:120px;
            z-index:10;
          }
          .header-wrapper h3.header {
            left:0px;
            bottom:0px;
            z-index:999;
            color:#fff
          }
          .no-image {
            min-width:100px;
            min-height:100px;
            background:#eee;
            display:flex;
            justify-content:center;
            align-items:center;
            color:#000;
          }
          .selectAvatar {
            cursor:pointer;
            position:relative;
          }

          .selectAvatar:hover {
            opacity:0.9;
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

