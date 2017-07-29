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
    this.dispatch = this.props.dispatch;
    this.state = {}
  }

  // Generic Methods
  mapDataToState (data) {
    if(!!data) {
      for(var name in data) {
        this.setState({
          [name]: data[name] || false
        })
      }
    }
  }

  // React Lifecycle
  componentWillMount() {
    if(!this.state.blog) {
      this.mapDataToState(this.props.app.pageData)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.mapDataToState(nextProps.app.pageData)
  }

  render() {
    const user = this.state.user;
    const options = {
      userID: user._id,
      status: ['published']
    }
    if (user) {
      return (
        <div className="profile-feed blocks">
        	<div className="block-item">
            <UserBar 
              statistics={true}
              user={user} /> 
          </div>
          <div className="block-item">
            <Feed flashPost={true} options={{ ...options }} />
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
  return { 
    app: state.app
  }
}

export default connect(mapStateToProps)(User)