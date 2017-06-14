import React from 'react';
import { getAllUsers } from '../../../actions/user.js'
import Loader from '../../loader.js'
import TimeAgo from 'timeago-react';
import SubscribeButton from '../../subscribeButton.js'
import Avatar from 'react-avatar'
import Link from 'next/link'
import { connect } from 'react-redux'
import UserList from '../../userList.js'

// Clever Component. Accepts nothing and retrieving all users from DB

class Authors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	entries: [],
    	loaded: false
    }
  }

  componentDidMount() {
  	this.setState({
  		loaded: true
  	})
  }

  render() {
    	if(this.state.loaded) {
  	    return (
  	      <div className="ui three column grid">
            <UserList size="block" />
          </div>
  	    )
  	  } else {
    		return (<Loader />)
    	}
    }
}

export default connect((store) => store)(Authors)