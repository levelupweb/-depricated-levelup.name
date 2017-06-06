import React from 'react'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'
import Body from '../../components/body'
import { TagsContainer } from '../../components/panel/tags'
import SimpleHeader from '../../components/simpleheader'
import Router from 'next/router'
import { UI } from '../../utils/initscripts'
import createPage from '../../utils/createPage.js'
import config from '../../app.config'
import page from '../../components/HOC/page'

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var page = createPage(this.props.app.pageSettings, <TagsContainer data={this.props.app.pageData} />, <SimpleHeader />, null);
    this.state = { page: page }
  }

  componentDidMount() {
    UI()
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
  tag: {
    type: 'tag',
    single: true
  }
}

const Container = page(Page, 'panel-tags', query);
export default withRedux(initStore, (state) => state)(Container)