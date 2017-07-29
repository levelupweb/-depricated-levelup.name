// Important
import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Container from '../components/Container'
import Router from 'next/router'
import NProgress from 'nprogress'
import config from '../app.config.js'
import HOC from '../components/HOC.js'
import cookies from 'js-cookie'

// For Page
import Feed from '../components/isomorphic/feed/feed.js'

// Models
import { fetchPosts } from '../models/post.js'

// Router with Progress Bar
Router.onRouteChangeStart = (url) => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const child = (<div className="blocks"><div className="block-item">
  <Feed flashPost={true} options={{perPage: 3, status: ['published']}} />
</div></div>)

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      ...this.props.app.pageSettings,
      child
    }
  }

  render() {
    return <Container module={this.options}>
      {this.options.child}
    </Container>
  }
}

const pageBuilder = {
  initialPosts: {
    type: 'post',
    single: false,
    params: {
      limit: 3,
      skip: 0,
      status: ['published']
    }
  }
}

const Component = HOC(Page, 'index', pageBuilder);
export default withRedux(initStore, (state) => state)(Component)