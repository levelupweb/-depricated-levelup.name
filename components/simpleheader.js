import React from 'react';
import Link from 'next/link'
import User from './user'
import Router from 'next/router'
import { connect } from 'react-redux'

class SimpleHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  handleBack() {
  	window.history.back()
  }

  render() {
  	console.log(this.props)
  	var user = (this.props.user.isLogged) ? 
  		<User size="dropdown" id={this.props.user.profile._id} />
  		:
		<Link href="/auth"><a>Войти</a></Link>
    return (
      <div className="header-wrapper">
			<div className="ui secondary menu block">
				<div className="left menu">
					{user}
				   	<a className="ui item transparent" onClick={() => {this.handleBack()}}><i className="fa fa-angle-left"></i><span>назад</span></a>
				</div>

				<div className="right menu">
					
				</div>
			</div>

			<style jsx>{`
				.header-wrapper .menu .fa {
					font-size:15px;
					color:#000;
				}

				.header-wrapper .menu.left {
					align-items:center;
				}

				.header-wrapper .menu .item {
					margin-left:20px;
				}

				.header-wrapper .menu .item span {
					margin-left:10px;
					font-size:13px;
					font-weight:bold;
				}
			`}</style>
		</div>
    );
  }
}


export default connect((store) => store)(SimpleHeader)