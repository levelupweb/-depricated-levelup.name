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
  }

  render () {
    return <Container module={Page.options}>
      <Blog blog={this.props.app.pageData.blog} />
    </Container>
  }
}

Page.options = {
  slug: "blog",
  title: "Блог",
  passLevel: 0,
  userMustBeLoggedIn: false,
  classNames: "",
  sidebar: true,
  header: true,
  description: "Страница блога",
  beforeChildren : null,
  afterChildren : null
}

const query = {
  blog: {
    type: 'blog',
    single: true
  }
}

const Component = HOC(Page, query);
export default withRedux(initStore, (state) => state)(Component)



