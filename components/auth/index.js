import React from 'react';
import Auth from './auth'
import Register from './register'
import Statistic from './statistic'

export default class LoginContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
  	<div className="ui grid">
	  <div className="six wide column">
	  	<Auth />
	  </div>
	  <div className="six wide column">
	  	<Register />
	  </div>
	  <div className="four wide column">
	  	<Statistic />
	  </div>
	</div>
    );
  }
}
