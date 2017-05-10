import React from 'react';
import Link from 'next/link'
import User from './user'
import Router from 'next/router'

export default class SimpleHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  handleBack() {
  	window.history.back()
  }

  render() {
    return (
      <div className="header-wrapper">
			<div className="ui secondary menu block">
				<div className="left menu">
					<User size="dropdown" />
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
