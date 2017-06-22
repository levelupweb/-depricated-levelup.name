// Important
import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Body from '../components/body'
import Router from 'next/router'
import NProgress from 'nprogress'
import { UI } from '../utils/initscripts'
import config from '../app.config.js'
import HOC from '../components/HOC/page'

// For Page
import FlashPost from '../components/flashpost'
import Feed from '../components/feed/feed.js'

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
    return <Body page={this.options}>
      {this.options.child}
    </Body>
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

const Container = HOC(Page, 'panel-index', query);
export default withRedux(initStore, (state) => state)(Container)