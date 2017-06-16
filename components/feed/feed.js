import React from 'react';
import Loader from '../loader'
import Link from 'next/link'
import Router from 'next/router'
import cookies from 'js-cookie'
import Article, { Blank } from './article.js'
import Note from './note.js'
import ListArticle from './listArticle'
import axios from 'axios'
import config from '../../app.config.js'
import { getPosts } from '../../actions/post'
import { connect } from 'react-redux'

// Принимает:
// 1. options (правила выдачи постов для API)
// 2. posts (массив с постами)
// default. (если ничего не передано, то загружает все посты из базы данных)

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token')
    this.currentUser = this.props.user.profile;
    this.state = {
    	entries: [],
      isLoaded: false
    }
  }

  componentWillMount() {
    if(this.props.app.pageData.post) {
      this.setState({
        entries: this.props.app.pageData.post,
        isLoaded: true
      })
    } else {
      this.getPosts(1, {...this.props.options})
      .then((res) =>{
        this.setState({
          entries: res.data
        })
      }).then(() => {
        this.setState({
          isLoaded: true
        })
      })
    }
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    })
  }

  getPosts(page, options) {
    if(!options.perPage) {
      options.perPage = 10;
    }
    var skip = (page - 1) * options.perPage
    return getPosts(this.token, {
      ...options,
      skip
    })
  }

  render() {
    var components = this.state.entries.map((item, i) => {
      return (<Article article={item} key={i} />)
    })
    if(this.state.isLoaded) {
      if(this.state.entries.length > 0) {
        return (
          <div className="grid">
            {components}
          </div>
        )
      } else {
        return (
          <h2 className="ui icon header">
            <div className="content">
              <div className="sub header">Записей не найдено</div>
            </div>
          </h2>
        )
      }
    } else {
      return (<Blank />)
    }
  }
}

export default connect((store) => store)(Feed)