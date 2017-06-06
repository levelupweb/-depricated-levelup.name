import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Body from '../components/body'
import Tags from '../components/pages/tags/index.js'
import initScripts from '../utils/initscripts'
import config from '../app.config.js'
import createPage from '../utils/createPage.js'
import page from '../components/HOC/page'
import Sidebar from '../components/sidebar.js'

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var page = createPage(this.props.app.pageSettings, <Tags data={this.props.app.pageData} />, null, null);
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

var query = {
  tags: {
    type: 'tag'
  }
}

const Container = page(Page, 'tags', query)
export default withRedux(initStore, (state) => state)(Container)



