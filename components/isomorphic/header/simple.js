// Important
import React from 'react';
import Link from 'next/link'
import Router from 'next/router'
import { connect } from 'react-redux'

// Components
import User from '../user.js'


class SimpleHeader extends React.Component {

  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
  }

  handleBack() {
  	window.history.back()
  }

  render() {

  	var user = (this.currentUser.isLogged) ? 
  	<User size="dropdown" id={this.currentUser._id} /> : <Link href="/auth"><a>Войти</a></Link>
   
   return (
      <div className="header-wrapper">
			<div className={(this.props.block) ? `ui secondary menu block` : `ui secondary menu`}>
				<div className="left menu">
				   	<a className="ui item transparent" onClick={() => {this.handleBack()}}><i className="fa fa-angle-left"></i><span>назад</span></a>
					<a className="ui item transparent" onClick={() => {this.handleBack()}}><span>лента</span></a>
					<a className="ui item transparent" onClick={() => {this.handleBack()}}><span>авторы</span></a>
					<a className="ui item transparent" onClick={() => {this.handleBack()}}><span>блоги</span></a>
					<a className="ui item transparent" onClick={() => {this.handleBack()}}><span>исследовать</span></a>
				</div>
				<div className="right menu">
					{user}
				</div>
			</div>

			<style jsx>{`
				.header-wrapper {
					border-bottom:1px solid #eee;
					background:transparent!important;
				}
				.header-wrapper .menu .fa {
					font-size:15px;
					color:#000;
				}
				.header-wrapper .menu.left {
					align-items:center;
				}
				.header-wrapper .menu .item {
					margin-right:20px;
				}
				.header-wrapper .menu .item span {
					margin-left:10px;
					font-size:13px;
					font-weight:bold;
				}
				.header-wrapper .menu {
					background:transparent!important;
					box-shadow:none!important;
				}
				.header-wrapper .secondary.menu {
					height:auto!important;
					background:transparent!important;
				}
			`}</style>
		</div>
    );
  }
}


export default connect((store) => store)(SimpleHeader)

