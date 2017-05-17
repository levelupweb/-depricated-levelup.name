import React from 'react';
import Loader from '../loader'
import Link from 'next/link'
import Router from 'next/router'
import Article from './article'
import ListArticle from './listArticle'
import axios from 'axios'
import config from '../../app.config.js'
import { getPostsByUserId } from '../../actions/post'

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
      templates: {article: Article, listarticle: ListArticle}
    }
  }

  componentWillUnmount() {
    this.createGrid();
    $('.grid').css({height:0})
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
    //this.pushItems()
    await this.createGrid()
    //this.createEventListeners();
    await this.setState({
      isFull: true
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

  pushItems() {
  	var loaded = this.state.perPage * this.state.page;
  	var lost = this.state.articles.length % this.state.perPage;
  	var pages = (this.state.articles.length - lost) / this.state.perPage;
    var SpecifiedArticle = this.state.templates[this.props.template]

  	if (loaded < this.state.articles.length) { 
  		if (this.state.page != pages) {
		  	for(var i = loaded; i < loaded + this.state.perPage; i++) {
		  		this.state.masonry.push(<SpecifiedArticle data={this.state.articles[i]} key={i} />);
		  	}
  		} else {
  			for(var i = loaded; i < loaded + lost; i++) {
		  		this.state.masonry.push(<SpecifiedArticle data={this.state.articles[i]} key={i} />);
		  	}
  		}
  	} else {
  		this.setState({
  			isFull: true
  		})
  	}

    this.state.page = this.state.page + 1;
    this.createGrid();
  }

  createEventListeners() {
  	var feed = document.querySelector('.feed');
    this.interval = setInterval(() => {
    	if (!this.state.isFull) { 
      		this.handleScroll(feed, feed.clientHeight);
          this.setState({
            scrolled: document.body.scrollTop
          })
      }
    }, 1000)

    var _this = this;
    window.createGrid = new Event('createGrid');
    document.addEventListener('createGrid', function (e) { _this.createGrid() }, true);
  }

  handleScroll(container, height) {
    var scrolled = this.state.scrolled;
    if ($(".loader.active").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
    	this.pushItems()
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
  	//var posts = (!this.state.masonry.length) ? this.state.elements : this.state.masonry
    var posts = this.state.entries
    return (
    <div>
    	<div className="grid">
    		<div className="grid-sizer"></div>
			 {posts}
		  </div>
      {(!this.state.isFull) ? <Loader /> : ``}
	 </div>
    );
  }
}
