// Important
import config from '../../../app.config.js'
import { connect } from 'react-redux'
import Router from 'next/router'
import cookies from 'js-cookie'
import Loader from '../loader'
import Link from 'next/link'
import React from 'react';

// Actions
import { getPosts } from '../../../actions/post.js'

// Components
import InfiniteScroll from 'redux-infinite-scroll';
import Item from './item.js'
import Blank from './views/blank.js'
import Note from './views/note.js'
import FlashPost from '../flashPost.js'

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token')
    this.state = {
      page: 1,
    	components: [],
      isLoaded: false,
      isFull: false,
      isFound: true,
      isHydrating: false
    }
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    })
  }

  // Specific Methods

  pushPost(post) {
    this.setState({
      components: [<Item article={post} key={post._id} />, ...this.state.components]
    })
  }

  loadMore() {
    if(!this.state.isHydrating) {
      this.setState({
        isHydrating: true
      }, () => {
        getPosts(this.state.page, {...this.props.options})
        .then((res) => {
          if(res.data.length > 0) {
            this.setState({
              components: this.state.components.concat(res.data.map((item, i) => {
                return (<Item article={item} key={item._id} />)
              }))
            })
          } else {
            this.setState({
              isFull: true
            })
          }
        })
        .then(() => {
          this.setState({
            isLoaded: true,
            page: this.state.page + 1
          })
        })
        .then(() => {
          this.setState({
            isHydrating: false
          })
        })
      }
      )
    }
  }

  render() {
    if(this.state.isFound) {
      if(this.state.isLoaded) {
        return (
          <div className="grid">
            {this.props.flashPost && 
              <FlashPost onSubmit={(post) => {this.pushPost(post)}} />
            }
            <InfiniteScroll
              items={this.state.components}
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

function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Feed)