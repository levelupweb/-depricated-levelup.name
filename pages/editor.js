import React from 'react';
import Editor from '../components/editor/'
import Body from '../components/body'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

class WriteContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: {
        classnames: 'user',
        title: 'Добавление поста',
        description: 'Страница добавления поста',
        showTitle: false,
        children: <Editor />,
        beforeChildren: null,
        afterChildren: null,
        displayHeader: false
      }
    }
  }

  componentDidMount() {
    window.$ = require('jquery');
    require('../static/css/ui/semantic.min.js');
    var dropdown = require('semantic-ui-dropdown');
    $('.ui.dropdown').dropdown();
  }


  render() {
  	var page = this.state.page;
    return (
      <div>
        <Body page={page} classnames={`full`}>{page.children}</Body>
      </div>
    );
  }
}


export default withRedux(initStore, state => state)(WriteContainer)