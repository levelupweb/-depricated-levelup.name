import React from 'react';
import Editor from '../components/editor/'
import Body from '../components/body'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import initScripts from '../utils/initscripts'
import createPage from '../utils/createPage.js'
import page from '../components/HOC/page'

class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var page = createPage(this.props.page, <Editor />, null, null);
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

const query = {}
const Container = page(Page, 'editor', query)
export default withRedux(initStore, (state) => state)(Container)