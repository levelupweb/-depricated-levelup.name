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
