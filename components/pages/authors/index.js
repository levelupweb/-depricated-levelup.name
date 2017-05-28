import React from 'react';
import { getAllUsers } from '../../../actions/user.js'
import Loader from '../../loader.js'
import TimeAgo from 'timeago-react';

export default class Authors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	entries: null,
    	components: null,
    	loaded: false
    }
  }

  componentWillMount() {
  	var components = [];
  	getAllUsers().then((res) => {
  		this.setState({
  			entries: res.data
  		})
  	}).then(() => {
  		this.state.entries.map((item, i) => {
  			components.push(<User user={item} key={i} />)
  		})
  		this.setState({
  			components: components
  		})
  	})
  }

  componentDidMount() {
  	this.setState({
  		loaded: true
  	})
  }

  render() {
  	console.log(this.state)
  	if(this.state.loaded) {
	    return (
	      <div className="ui three column grid">{this.state.components}</div>
	    )
	} else {
		return (<Loader />)
	}
  }
}

var User = (props) => {
	var user = props.user;
	return (
		<div className="column">
		<div className="ui card block-shadow">
		  <div className="image">
		    <img src={user.userImage} width="100%" />
		  </div>
		  <div className="content">
		    <a className="header">{user.userName}</a>
		    <div className="meta">
		      <span className="date">Присоединился <TimeAgo datetime={user.created} locale='ru' /></span>
		    </div>
		    <div className="description">
		      {user.userBio}
		    </div>
		  </div>
		  <div className="extra content">
		    <a>
		      <i className="user icon"></i>
		      1 подписчик
		    </a>
		  </div>
		</div>
		</div>
	)
}