// Important
import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Container from '../components/Container'
import Router from 'next/router'
import NProgress from 'nprogress'
import config from '../app.config.js'
import HOC from '../components/HOC.js'

// For Page
import Blogs from '../components/sections/blog/list/index.js'

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
      <Blogs blogs={this.props.app.pageData.blog} />
    </Container>
  }
}

Page.options = {
  slug: "blogs",
  title: "Блоги",
  passLevel: 0,
  userMustBeLoggedIn: false,
  classNames: "",
  sidebar: true,
  header: true,
  description: "Список блогов",
  beforeChildren : null,
  afterChildren : null
}

const query = {
  blogs: {
    type: 'blog',
    single: false
  }
}

const Component = HOC(Page, query);
export default withRedux(initStore, (state) => state)(Component)





