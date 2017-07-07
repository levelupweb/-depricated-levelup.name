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
      user: null
    }
  }

  componentWillMount() {
    if(this.props.user != null) {
      this.getInitialState(
        this.props.user
      )
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user != null) {
      this.getInitialState(
        nextProps.user
      )
    }
  }

  getInitialState(user) {
    if (user) {
      this.setState({
        user: user
      })
    }
  }

  render() {
    var user = this.state.user
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
  return { user: state.app.pageData.user }
}

export default connect(mapStateToProps)(User)