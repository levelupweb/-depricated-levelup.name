// Important
import React from 'react';

// Components
import Auth from './auth.js'
import Register from './register.js'
import Statistic from './statistic.js'

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
		  	<div className="ui grid">
			  <div className="six wide column">
			  	<Auth />
			  </div>
			  <div className="six wide column">
			  	<Register />
			  </div>
			  <div className="four wide column">
			  	<div className="ui secondary vertical pointing menu">
				  <a className="item active">
				    Вход
				  </a>
				  <a className="item">
				    О проекте
				  </a>
				  <a className="item">
				    Вакансии
				  </a>
				</div>
			  </div>
			</div>
			<style jsx>{`
				.segment {
					margin-bottom:20px;
				}
			`}</style>
		</div>
    );
  }
}
