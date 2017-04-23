import React from 'react'
import { startClock } from '../actions'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Sidebar from '../components/sidebar'
import Body from '../components/body'
import FlashPost from '../components/flashpost'
import Feed from '../components/feed/'

class Index extends React.Component {

  static getInitialProps ({ store, isServer }) {
    return {

    }
  }

  constructor(props) {
    super(props);
    this.state = {
      page: {
        classnames: 'feed block',
        title: 'Лента',
        showTitle: false, 
        description: 'Публикации, которые могут вам понравиться',
        beforeChildren: <FlashPost />,
        afterChildren: null,
        displayHeader: true
      }
    }
  }

  componentDidMount() {
    window.jquery = require('jquery');
    require('../static/css/ui/semantic.min.js');
    var dropdown = require('semantic-ui-dropdown');
    $('.ui.dropdown').dropdown();
  }

  render () {
    return (
      <div>
        <Sidebar />
        <Body page={this.state.page}><Feed template="article" /></Body>
      </div>
    )
  }
}

export default withRedux(initStore, (state) => state)(Index)