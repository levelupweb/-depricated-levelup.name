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
import Tags from '../components/sections/tags/index.js'

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
      <Tags tags={this.props.app.pageData.tags} />
    </Container>
  }
}

Page.options = {
  slug: "tags",
  title: "Теги",
  passLevel: 0,
  userMustBeLoggedIn: false,
  classNames: "",
  sidebar: true,
  header: true,
  description: "Страница с тегами",
  beforeChildren : null,
  afterChildren : null
}

var query = {
  tags: {
    type: 'tag'
  }
}

const Component = HOC(Page, query);
export default withRedux(initStore, (state) => state)(Component)





