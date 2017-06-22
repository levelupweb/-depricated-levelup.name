// Important
import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Container from '../components/container'
import Router from 'next/router'
import NProgress from 'nprogress'
import config from '../app.config.js'
import HOC from '../components/HOC.js'

// For Page
import FlashPost from '../components/isomorphic/flashPost.js'
import Feed from '../components/isomorphic/feed/feed.js'

// Router with Progress Bar
Router.onRouteChangeStart = (url) => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      ...this.props.app.pageSettings,
      child: <Feed options={{perPage: 10}} />,
      beforeChildren : <FlashPost />,
      afterChildren : null
    }
  }

  render () {
    return <Container module={this.options}>
      {this.options.child}
    </Container>
  }
}

const query = {
  posts: {
    type: 'post',
    single: false,
    url: config.API + 'post/entries/personal',
    custom: true
  }
}

const Component = HOC(Page, 'index', query);
export default withRedux(initStore, (state) => state)(Component)