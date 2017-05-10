import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Sidebar from '../components/sidebar'
import Body from '../components/body'
import FlashPost from '../components/flashpost'
import Feed from '../components/feed/'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'isomorphic-fetch';
import { auth } from '../actions/user.js';
import initScripts from '../utils/initscripts'
import config from '../app.config.js'
import createPage from '../utils/createPage.js'
import page from '../components/HOC/page'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var page = createPage(this.props.page, <Feed template="article" />, <FlashPost />, null);
    this.state = { page: page }
  }

  componentDidMount() {
    initScripts()
  }

  render () {
    var page = this.state.page;
    return (
      <div>
        <Sidebar />
        <Body page={page}>{page.child}</Body>
      </div>
    )
  }
}

const Index = page(IndexPage, 'index');
export default withRedux(initStore, (state) => state)(Index)