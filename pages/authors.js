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
import Users from '../components/sections/user/list/index.js'

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
      <Users data={this.props.app.pageData} />
    </Container>
  }
}

Page.options = {
  slug: "authors",
  title: "Авторы",
  passLevel: 0,
  userMustBeLoggedIn: false,
  classNames: "",
  sidebar: true,
  header: true,
  description: "Популярные авторы",
  beforeChildren : null,
  afterChildren : null
}

const pageBuilder = {}

const Component = HOC(Page, pageBuilder);
export default withRedux(initStore, (state) => state)(Component)



