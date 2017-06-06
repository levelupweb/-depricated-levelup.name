import React from 'react'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'
import Body from '../../components/body'
import { PagesContainer } from '../../components/panel/pages'
import SimpleHeader from '../../components/simpleheader'
import Router from 'next/router'
import NProgress from 'nprogress'
import fetch from 'isomorphic-fetch';
import { auth } from '../../actions/user.js';
import initScripts from '../../utils/initscripts'
import createPage from '../../utils/createPage.js'
import config from '../../app.config'
import page from '../../components/HOC/page'
import axios from 'axios'

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: null
    }
  }

  componentWillMount() {
    var page = createPage(this.props.app.pageSettings, <PagesContainer data={this.props.app.pageData} />, <SimpleHeader />, null);
    this.state = { page: page }
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

const query = {
  page: {
    type: 'page',
    single: true
  }
}

const Container = page(Page, 'pages', query);
export default withRedux(initStore, (state) => state)(Container)