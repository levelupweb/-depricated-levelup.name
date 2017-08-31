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
  }

  render () {
    return <Container module={this.options}>
      <Post defaultPost={this.props.app.pageData.post} />
    </Container>
  }
}

Page.options = {
  slug: "post",
  title: "Пост",
  passLevel: 0,
  userMustBeLoggedIn: false,
  classNames: "",
  sidebar: true,
  header: true,
  description: "Страница поста",
  beforeChildren : null,
  afterChildren : null
}

const query = {
  post: {
    type: 'post',
    single: true
  }
}


const Component = HOC(Page, query);
export default withRedux(initStore, (state) => state)(Component)





