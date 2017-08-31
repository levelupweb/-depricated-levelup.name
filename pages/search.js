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
import Search from '../components/sections/search/index.js'

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
      <Search />
    </Container>
  }
}

Page.options = {
  slug: "search",
  title: "Поиск",
  passLevel: 0,
  userMustBeLoggedIn: false,
  classNames: "",
  sidebar: true,
  header: true,
  description: "Поиск по сайту",
  beforeChildren : null,
  afterChildren : null
}

const Component = HOC(Page);
export default withRedux(initStore, (state) => state)(Component)





