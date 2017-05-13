import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Post from '../components/post/'
import Body from '../components/body'
import Sidebar from '../components/sidebar'
import PostAfter from '../components/post/postafter' 
import Router from 'next/router'
import NProgress from 'nprogress'
import 'isomorphic-fetch';
import { auth } from '../actions/user.js';
import { UI } from '../utils/initscripts'
import config from '../app.config.js'
import createPage from '../utils/createPage.js'
import page from '../components/HOC/page'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class PostPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var page = createPage(this.props.page, <Post />, null, <PostAfter />);
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

const PostContainer = page(PostPage, 'post');
export default withRedux(initStore, (state) => state)(PostContainer)