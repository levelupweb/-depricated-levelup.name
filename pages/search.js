import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Search from '../components/search/'
import Body from '../components/body'
import Sidebar from '../components/sidebar'
import { UI } from '../utils/initscripts'
import config from '../app.config.js'
import createPage from '../utils/createPage.js'
import page from '../components/HOC/page'

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var page = createPage(this.props.app.pageSettings, <Search data={this.props.app.pageData} />, null, null);
    this.state = { page: page }
  }

  componentDidMount() {
    UI()
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

const query = {
  posts: {
    type: 'post',
  },
  users: {
    type: 'user'
  },
  tags: {
    type: 'tag'
  }
}

const Container = page(Page, 'post', query);
export default withRedux(initStore, (state) => state)(Container)