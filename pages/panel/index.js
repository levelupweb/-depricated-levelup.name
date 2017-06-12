import React from 'react'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'
import Sidebar from '../../components/sidebar'
import Body from '../../components/body'
import Panel from '../../components/panel/'
import SimpleHeader from '../../components/simpleheader'
import Router from 'next/router'
import NProgress from 'nprogress'
import fetch from 'isomorphic-fetch';
import { auth } from '../../actions/user.js';
import initScripts from '../../utils/initscripts'
import createPage from '../../utils/createPage.js'
import config from '../../app.config'
import page from '../../components/HOC/page'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class PanelPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props)
    var page = createPage(this.props.app.pageSettings, <Panel />, <SimpleHeader block={true} />, null);
    this.setState({ page: page })
  }


  componentDidMount() {
    initScripts()
  }

  render () {
    var page = this.state.page;
    return (
      <div>
        <Body page={page}>{page.child}</Body>
      </div>
    )
  }
}

const PanelContainer = page(PanelPage, 'panel');
export default withRedux(initStore, (state) => state)(PanelContainer)