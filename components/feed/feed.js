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
import getPosts from '../../utils/getPosts'
import { connect } from 'react-redux'
import InfiniteScroll from 'redux-infinite-scroll';

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
      page: 1,
    	entries: [],
      isLoaded: false,
      isFull: false,
      isFound: true
    }
  }

  componentWillMount() {
    this.getInitialState(this.props.options)
  }

  componentWillReceiveProps(nextProps) {
    this.getInitialState(nextProps.options)

  }

  getInitialState(options) {
    var data = this.props.app.pageData;
    if (data) {
      if(data.post) {
        if(data.post.length > 0) {
          this.setState({
            entries: data.post,
            isLoaded: true
          })
        } else {
          this.setState({
            isFound: false
          })
        }
      } else {
      getPosts(1, {...options})
        .then((res) => {
          if(res.data.length > 0) {
            this.setState({
              entries: res.data
            })
          } else {
            this.setState({
              isFound: false
            })
          }
        }).then(() => {
          this.setState({
            isLoaded: true
          })
        })
      }
    }
  }

  loadMore() {
    getPosts(this.state.page + 1, {...this.props.options})
      .then((res) => {
        if(res.data.length > 0) {
          this.setState({
            entries: this.state.entries.concat(res.data)
          })
        } else {
          this.setState({
            isFull: true
          })
        }
      }).then(() => {
        this.setState({
          isLoaded: true,
          page: this.state.page + 1
        })
    })
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    })
  }


  render() {
    var components = this.state.entries.map((item, i) => {
      return (<Article article={item} key={i} />)
    })
    if(this.state.isFound) {
      if(this.state.isLoaded) {
        return (
          <div className="grid">
            <InfiniteScroll
              items={components}
              loadMore={() => {this.loadMore()}} 
              hasMore={!this.state.isFull}
              threshold={10}
              elementIsScrollable={false}
            />
          </div>
        )
      } else {
        return <Blank />
      }
    } else {
      return (
          <h2 className="ui icon header">
            <div className="content">
              <div className="sub header">Записей не найдено</div>
            </div>
          </h2>
        )
    }
  }
}

export default connect((store) => store)(Feed)