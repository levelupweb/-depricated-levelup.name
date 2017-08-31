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
import UserSettings from '../components/sections/user/single/settings.js'

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
      <UserSettings user={this.props.app.pageData.user} />
    </Container>
  }
}

Page.options = {
  slug: "settings",
  title: "Настройки",
  passLevel: 0,
  userMustBeLoggedIn: false,
  classNames: "",
  sidebar: true,
  header: true,
  description: "Персональные настройки",
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





