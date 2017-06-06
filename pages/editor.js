import React from 'react';
import EditorWrapper from '../components/editor/index'
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
    var page = createPage(this.props.app.pageSettings, <EditorWrapper data={this.props.app.pageData} />, null, null);
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

const query = {
  editor: {
    type: 'post',
    single: true
  }
}

const Container = page(Page, 'editor', query)
export default withRedux(initStore, (state) => state)(Container)