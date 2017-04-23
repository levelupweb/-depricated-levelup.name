import React from 'react';
import User from '../user'
import Statistic from './statistic'

export default class UserBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="userbar block">
      	<User />
      	<Statistic />


      	<style jsx>{`
      		.userbar {
      			background:#fafafa;
      			display:flex;
      			justify-content:space-between;
      			align-items:center;
      			padding-top:20px;
      			padding-bottom:20px;
      		}
      	`}</style>
      </div>
    );
  }
}
