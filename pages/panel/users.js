import React from 'react'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'
import Body from '../../components/body'
import { UsersContainer } from '../../components/panel/users'
import SimpleHeader from '../../components/simpleheader'
import Router from 'next/router'
import NProgress from 'nprogress'
import fetch from 'isomorphic-fetch';
import { auth } from '../../actions/user.js';
import initScripts from '../../utils/initscripts'
import createPage from '../../utils/createPage.js'
import config from '../../app.config'
import page from '../../components/HOC/page'


class Page extends React.Component {
  static async getInitialProps ({ store, isServer, query }) {
    const jsonPage = await fetch(config.API + 'page/entries/pages')
    const page = await jsonPage.json()
    return {
      page: page
    }
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var page = createPage(this.props.page, <UsersContainer data={this.props.data} />, <SimpleHeader />, null);
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
  user: {
    type: 'user',
    single: true
  }
}

const Container = page(Page, 'users', query);
export default withRedux(initStore, (state) => state)(Container)