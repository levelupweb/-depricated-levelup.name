import React from 'react';
import Body from '../components/body'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Auth from '../components/auth/index'
import SimpleHeader from '../components/simpleheader'
import initScripts from '../utils/initscripts'
import fetch from 'isomorphic-fetch'
import config from '../app.config'
import createPage from '../utils/createPage.js'

class AuthContainer extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    const page = await fetch(config.API + 'page/entries/auth')
    const json = await page.json()
    return {
      page: json
    }
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var page = createPage(this.props.page, <Auth />, <SimpleHeader />, null);
    this.state = { page: page }
  }

  componentDidMount() {
    initScripts()
  }

  render() {
  	var page = this.state.page;
    return (
      <div>
        <Body page={page}>{page.child}</Body>
      </div>
    );
  }
}


export default withRedux(initStore, state => state)(AuthContainer)