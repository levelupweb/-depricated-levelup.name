// Important
import React from 'react'
import { initStore } from '../../../store.js'
import withRedux from 'next-redux-wrapper'
import Container from '../../../components/container.js'
import Router from 'next/router'
import NProgress from 'nprogress'
import { UI } from '../../../utils/initScripts.js'
import config from '../../../app.config.js'
import HOC from '../../../components/HOC.js'

// For Page
import Panel from '../../../components/sections/panel/v2/index.js'

// Router with Progress Bar
Router.onRouteChangeStart = (url) => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      ...this.props.app.pageSettings,
      child: <Panel />,
      beforeChildren : null,
      afterChildren : null
    }
  }

  render () {
    return <Container page={this.options}>
      {this.options.child}
    </Container>
  }
}

const Component = HOC(Page, 'auth');
export default withRedux(initStore, (state) => state)(Component)