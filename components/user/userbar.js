import React from 'react';
import User from '../user'
import Statistic from './statistic'

export default class UserBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var user = this.props.data.user
    return (
      <div className="userbar">
      	<User id={user._id} />
      	<Statistic />

      	<style jsx>{`
      		.userbar {
      			display:flex;
      			justify-content:space-between;
      			align-items:center;
      			padding-bottom:20px;
      		}
      	`}</style>
      </div>
    );
  }
}
