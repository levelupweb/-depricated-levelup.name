import React from 'react';
import Loader from '../loader'
import Link from 'next/link'
import Router from 'next/router'
import Article from './article'
import ListArticle from './listArticle'
import axios from 'axios'
import config from '../../app.config.js'
import { getPostsByUserId } from '../../actions/post'

// Принимает:
// 1. userID (id пользователя, чьи посты нужно отобразить)
// 2. posts (массив с постами)
// default. (если ничего не передано, то загружает все посты из базы данных)

export default class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
    	perPage: 4,
    	page: 0,
    	isFull: false,
    	scrolled: 0,
    	entries: [],
    	masonry: [],
      templates: {
        article: Article, 
        listarticle: ListArticle
      }
    }
  }

  componentWillMount() {
    if(this.props.data) { 
      this.props.data.post.map((item, i) => {
        this.state.entries.push(<Article data={item} key={i} />)
      })
    }
  }

  async componentDidMount() {
    if(!this.props.data) {
      var posts = await getPostsByUserId(this.props.author);
      await posts.data.map(async (post, i) => {
        await this.state.entries.push(<Article data={post} key={i} />)
      })
    }
    await this.createGrid()
    await this.setState({
      isFull: true
    })
  }

  async componentWillReceiveProps(nextProps) {
    if(!this.props.data) {
      var components = [];
      var posts = await getPostsByUserId(nextProps.author);
      await posts.data.map(async (post, i) => {
        await components.push(<Article data={post} key={i} />)
      })
      await this.setState({
        entries: components
      })
    }
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
    return (
    <div className="feed">
      {(this.state.entries.length > 0) ? 
        <div className="grid">
          <div className="grid-sizer"></div>
	         {this.state.entries}
          </div>
         : 
         <h2 className="ui icon header">
          <i className="fa fa-bars icon"></i>
          <div className="content">
            Упс.. :)
            <div className="sub header">Записей не найдено</div>
          </div>
        </h2>
      }
      {(!this.state.isFull) ? <Loader /> : ``}
      <style jsx>{`
        .header i {
          color:#eee;
        }
        .feed {
          text-align:center;
        }
      `}</style>
	 </div>
    );
  }
}
