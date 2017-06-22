// Important
import React from 'react'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'
import Body from '../../components/body'
import Router from 'next/router'
import NProgress from 'nprogress'
import { UI } from '../../utils/initscripts'
import config from '../../app.config.js'
import HOC from '../../components/HOC/page'
import { PagesContainer } from '../../components/panel/pages'

// For Page
import Panel from '../../components/panel/'

// Router with Progress Bar
Router.onRouteChangeStart = (url) => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      ...this.props.app.pageSettings,
      child: <PagesContainer data={this.props.app.pageData} />,
      beforeChildren : null,
      afterChildren : null
    }
  }

  render () {
    return <Body page={this.options}>
      {this.options.child}
    </Body>
  }
}

const query = {
  page: {
    type: 'page',
    single: true
  }
}


const Container = HOC(Page, 'pages', query);
export default withRedux(initStore, (state) => state)(Container)







