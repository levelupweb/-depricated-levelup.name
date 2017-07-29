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
import Blog from '../components/sections/blog/single/index.js'

// Router with Progress Bar
Router.onRouteChangeStart = (url) => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      ...this.props.app.pageSettings,
      child: <Blog blog={this.props.app.pageData.blog} />,
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
  blog: {
    type: 'blog',
    single: true
  }
}

const Component = HOC(Page, 'blog', query);
export default withRedux(initStore, (state) => state)(Component)



