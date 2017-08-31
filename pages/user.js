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
import User from '../components/sections/user/single/index.js'

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
      <User />
    </Container>
  }
}

Page.options = {
  slug: "user",
  title: "Пользователь",
  passLevel: 0,
  userMustBeLoggedIn: false,
  classNames: "",
  sidebar: true,
  header: true,
  description: "Страница пользователя",
  beforeChildren : null,
  afterChildren : null
}

var query = {
  user: {
    type: 'user',
    single: true
  }
}

const Component = HOC(Page, query);
export default withRedux(initStore, (state) => state)(Component)







