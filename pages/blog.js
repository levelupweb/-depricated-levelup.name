import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Blog from '../components/blog/index.js'
import Body from '../components/body'
import Sidebar from '../components/sidebar'
import { UI } from '../utils/initscripts'
import createPage from '../utils/createPage.js'
import page from '../components/HOC/page'

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var page = createPage(this.props.app.pageSettings, <Blog />, null, null);
    this.setState({
       page: page
    })
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
  blog: {
    type: 'blog',
    single: true
  }
}

const Container = page(Page, 'blog', query);
export default withRedux(initStore, (state) => state)(Container)