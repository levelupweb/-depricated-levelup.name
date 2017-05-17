import React from 'react';
import Body from '../components/body'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Auth from '../components/auth/index'
import SimpleHeader from '../components/simpleheader'
import initScripts from '../utils/initscripts'
import config from '../app.config'
import createPage from '../utils/createPage.js'
import page from '../components/HOC/page'

class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var page = createPage(this.props.page, <Auth data={this.props.data} />, <SimpleHeader />, null);
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
    )
  }
}

const Container = page(Page, 'auth')
export default withRedux(initStore, (state) => state)(Container)
