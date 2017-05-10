import React from 'react';
import Loader from '../loader'
import Link from 'next/link'
import Router from 'next/router'
import Article from './article'
import ListArticle from './listArticle'


export default class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
    	perPage: 4,
    	page: 0,
    	isFull: false,
    	scrolled: 0,
    	elements: [],
    	masonry: [],
      templates: {article: Article, listarticle: ListArticle},
    	articles: [{
    		title: 'Как мы делали ML Boot Camp III',
    		description: `19 марта закончился третий чемпионат по машинному обучению на платформе ML Boot Camp. 614 человек прислали решения и поборолись за главный приз ー MacBook Air.`,
    		meta: {
    			likes: 20,
    			comments: 13
    		},
    		image: 'https://habrastorage.org/files/0ec/0e9/24f/0ec0e924f02b4743ae92dc48289d4983.jpg',
    		author: {
    			name: 'Иван К.',
    			description: 'Программист'
    		},
    		size: 100
    	},
    	{
    		title: 'Натив или гибрид? Специалисты Яндекса отвечают на главный вопрос мобильной разработки',
    		description: `Осталось буквально четыре дня до момента, когда мы закончим принимать заявки на участие во второй «Мобилизации» Яндекса.`,
    		meta: {
    			likes: 20,
    			comments: 13
    		},
    		image: 'https://habrastorage.org/files/3ec/aca/8e0/3ecaca8e03314c638b679c2cd68b3115.jpg',
    		author: {
    			name: 'Иван К.',
    			description: 'Программист'
    		},
    		size: 50
    	},
    	{
    		title: 'Опыт внедрения Tarantool в сервисе Calltouch',
    		description: `В современном мире информационных технологий у всех — и у крупных, и у небольших компаний — существует большое количество различных API.`,
    		meta: {
    			likes: 20,
    			comments: 13
    		},
    		image: 'https://habrastorage.org/files/656/391/54f/65639154fc194c6589bf230e85c46cc1.jpg',
    		author: {
    			name: 'Иван К.',
    			description: 'Программист'
    		},
    		size: 50
    	},
    	{
    		title: 'Как я возил робота, чуть не поседел и залил кровью серверную',
    		description: `Это история одного из самых запомнившихся случаев в моей инженерной практике. По понятным причинам я поменял имена, места и некоторые узнаваемые детали, чтобы нельзя было точно определить заказчика и других участников истории. `,
    		meta: {
    			likes: 20,
    			comments: 13
    		},
    		image: 'https://habrastorage.org/getpro/habr/post_images/797/933/d8a/797933d8a7cc536bfaba42021078fa00.jpg',
    		author: {
    			name: 'Иван К.',
    			description: 'Программист'
    		},
    		size: 100
    	},
    	{
    		title: 'Как мы делали ML Boot Camp III',
    		description: `19 марта закончился третий чемпионат по машинному обучению на платформе ML Boot Camp. 614 человек прислали решения и поборолись за главный приз ー MacBook Air.`,
    		meta: {
    			likes: 20,
    			comments: 13
    		},
    		image: 'https://habrastorage.org/files/0ec/0e9/24f/0ec0e924f02b4743ae92dc48289d4983.jpg',
    		author: {
    			name: 'Иван К.',
    			description: 'Программист'
    		},
    		size: 100
    	},
    	{
    		title: 'Натив или гибрид? Специалисты Яндекса отвечают на главный вопрос мобильной разработки',
    		description: `Осталось буквально четыре дня до момента, когда мы закончим принимать заявки на участие во второй «Мобилизации» Яндекса.`,
    		meta: {
    			likes: 20,
    			comments: 13
    		},
    		image: 'https://habrastorage.org/files/3ec/aca/8e0/3ecaca8e03314c638b679c2cd68b3115.jpg',
    		author: {
    			name: 'Иван К.',
    			description: 'Программист'
    		},
    		size: 50
    	},
    	{
    		title: 'Опыт внедрения Tarantool в сервисе Calltouch',
    		description: `В современном мире информационных технологий у всех — и у крупных, и у небольших компаний — существует большое количество различных API.`,
    		meta: {
    			likes: 20,
    			comments: 13
    		},
    		image: 'https://habrastorage.org/files/656/391/54f/65639154fc194c6589bf230e85c46cc1.jpg',
    		author: {
    			name: 'Иван К.',
    			description: 'Программист'
    		},
    		size: 50
    	},
    	{
    		title: 'Как я возил робота, чуть не поседел и залил кровью серверную',
    		description: `Это история одного из самых запомнившихся случаев в моей инженерной практике. По понятным причинам я поменял имена, места и некоторые узнаваемые детали, чтобы нельзя было точно определить заказчика и других участников истории. `,
    		meta: {
    			likes: 20,
    			comments: 13
    		},
    		image: 'https://habrastorage.org/getpro/habr/post_images/797/933/d8a/797933d8a7cc536bfaba42021078fa00.jpg',
    		author: {
    			name: 'Иван К.',
    			description: 'Программист'
    		},
    		size: 100
    	},
    	{
    		title: 'Как я возил робота, чуть не поседел и залил кровью серверную',
    		description: `Это история одного из самых запомнившихся случаев в моей инженерной практике. По понятным причинам я поменял имена, места и некоторые узнаваемые детали, чтобы нельзя было точно определить заказчика и других участников истории. `,
    		meta: {
    			likes: 20,
    			comments: 13
    		},
    		image: 'https://habrastorage.org/getpro/habr/post_images/797/933/d8a/797933d8a7cc536bfaba42021078fa00.jpg',
    		author: {
    			name: 'Иван К.',
    			description: 'Программист'
    		},
    		size: 100
    	}]
    }
  }


  componentWillUnmount() {
    this.createGrid();
    $('.grid').css({height:0})
  }

  componentWillMount() {
  	for(var i = 0; i < this.state.perPage; i++) {
  		this.state.elements.push(<Article data={this.state.articles[i]} key={i} />)
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
			    columnWidth: '.grid-sizer'
			  }
	  	});	
	 });
  }

  componentDidMount() {
  	this.pushItems()
  	this.createGrid()
  	this.createEventListeners();
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

  componentDidUpdate(prevProps, prevState) {
    
  }

  render() {

  	var posts = (!this.state.masonry.length) ? this.state.elements : this.state.masonry

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
