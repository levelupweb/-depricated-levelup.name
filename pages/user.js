import React from 'react';
import UserSingle from '../components/user/usersingle'
import Sidebar from '../components/sidebar'
import Body from '../components/body'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import initScripts from '../utils/initscripts'

class UserContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: {
        classnames: 'user',
        title: 'Пользователь',
        description: 'Страница пользователя',
        showTitle: false,
        children: <UserSingle />,
        beforeChildren: null,
        afterChildren: null,
        displayHeader: true
      }
    }
  }

  componentDidMount() {
    initScripts();
  }


  render() {
  	var page = this.state.page;
    return (
      <div>
        <Sidebar />
        <Body page={page}>{page.children}</Body>
      </div>
    );
  }
}


export default withRedux(initStore, state => state)(UserContainer)