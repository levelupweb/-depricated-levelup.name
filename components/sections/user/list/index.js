// Important
import React from 'react';
import { connect } from 'react-redux'

// Actions
import { getAllUsers } from '../../../../actions/user.js'

// Components
import Loader from '../../../isomorphic/loader.js'
import SubscribeButton from '../../../isomorphic/subscribeButton.js'
import UserList from '../../../isomorphic/userList.js'
import Avatar from 'react-avatar'
import Link from 'next/link'

class Users extends React.Component {
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

export default connect((store) => store)(Users)