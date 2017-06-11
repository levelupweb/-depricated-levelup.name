import React from 'react';
import Loader from '../loader'
import Link from 'next/link'
import Router from 'next/router'
import cookies from 'js-cookie'
import Article, { Blank } from './article'
import ListArticle from './listArticle'
import axios from 'axios'
import config from '../../app.config.js'
import { getPosts } from '../../actions/post'
import { connect } from 'react-redux'

// Принимает:
// 1. userID (id пользователя, чьи посты нужно отобразить)
// 2. posts (массив с постами)
// default. (если ничего не передано, то загружает все посты из базы данных)

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	entries: [],
      isLoaded: false
    }

    this.token = cookies.get('x-access-token')
    this.currentUser = this.props.user.profile;
  }

  componentWillMount() {
    if(this.props.posts != null) {
      this.setState({
        entries: this.props.posts.post
      })
    } else if(this.props.userID) {
      this.getPosts(1, { userID: this.props.userID })
      .then((res) => {
        this.setState({
          entries: res.data
        })
      })
      .then(() => {
        this.setState({
          isLoaded: true
        })
      })
    } else {
      this.getPosts(1)
      .then((res) =>{
        this.setState({
          entries: res.data
        })
      }) 
      .then(() => {
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
    var options = {
      ...options
    }
    if(!options.perPage) {
      options.perPage = 10;
    }
    var skip = (page - 1) * options.perPage
    return getPosts(this.token, {
      ...options,
      skip
    })
  }

  createGrid() {
  	var Isotope = require('isotope-layout');
  	var imagesLoaded = require('imagesloaded');

  	imagesLoaded('.grid', function() {
	  	var grid = new Isotope('.grid', {
	  		itemSelector: '.grid-item',
			  percentPosition: true,
			  masonry: {
			    columnWidth: '.grid-sizer',
          gutterWidth: 10
			  }
	  	});	
	 });
  }

  render() {
    if(this.state.isLoaded) {
      if(this.state.entries.length > 0) {
        return (
          <div className="grid">
            <div className="grid-sizer"></div>
             {this.state.entries.map((item,i) => {
              return (<Article article={item} key={i} />)
             })}
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