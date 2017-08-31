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
import Editor from '../components/sections/editor/index.js'


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
      <Editor defaultPost={this.props.app.pageData.post} />
    </Container>
  }
}

Page.options = {
  slug: "editor",
  title: "Редактор",
  passLevel: 0,
  userMustBeLoggedIn: true,
  classNames: "",
  sidebar: false,
  header: false,
  description: "Добавление и редактирование",
  beforeChildren : null,
  afterChildren : null
}

const query = {
  editor: {
    type: 'post',
    single: true,
    by: 'id'
  }
}

const Component = HOC(Page, query);
export default withRedux(initStore, (state) => state)(Component)





