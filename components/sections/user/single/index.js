// Important
import React from 'react';
import { connect } from 'react-redux'

// Utils
import { UI } from '../../../../utils/initScripts.js'

// Components
import FlashPost from '../../../isomorphic/flashPost.js'
import Comments from '../../../isomorphic/comments/index.js'
import UserBar from './userbar.js'
import Feed from '../../../isomorphic/feed/feed.js'


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userPage: null
    }
  }

  componentWillMount() {
    this.getInitialState(
      this.props.pageData.user
    )
  }

  componentWillReceiveProps(nextProps) {
    this.getInitialState(
      nextProps.pageData.user
    )
  }

  getInitialState(user) {
    if (user) {
      this.setState({
        userPage: user
      })
    }
  }

  render() {
    var user = this.state.userPage
    if (user) {
      return (
        <div className="profile-feed feed">
        	<UserBar user={user} /> 
          <div className="block content">
            <Feed 
              flashPost={true}
              options={{ 
                userID : user._id, 
                status: ['published'] 
              }} 
            />
          </div>
          <style jsx>{`
            .content {
              background:#fff;
              box-shadow:-5px 4px 20px 0px rgba(0, 0, 0, 0.03);
              border-top:1px solid #eee;
            }
          `}</style>
        </div>
      );
    } else {
      return (
        <div>Пользователь не найден</div>
      )
    }
  }
}

function mapStateToProps(state) {
  return { pageData: state.app.pageData }
}

export default connect(mapStateToProps)(User)