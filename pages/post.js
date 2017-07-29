// Important
import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Container from '../components/Container'
import Router from 'next/router'
import NProgress from 'nprogress'
import config from '../app.config.js'
import HOC from '../components/HOC.js'

// Components
import Post from '../components/sections/post/index.js'

// Actions
import { getPost } from '../models/post.js'

Router.onRouteChangeStart = (url) => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      ...this.props.app.pageSettings,
      child: <Post defaultPost={this.props.app.pageData.post} />,
      beforeChildren : null,
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
  post: {
    type: 'post',
    single: true
  }
}


const Component = HOC(Page, 'post', query);
export default withRedux(initStore, (state) => state)(Component)





