import React from 'react';
import Link from 'next/link'

export default class SimpleHeader extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-wrapper">
			<div className="ui secondary menu block">
				<div className="left menu">
				   	<Link href="/">
				   		<a className="ui item transparent"><i className="fa fa-angle-left"></i><span>назад</span></a>
					</Link>
				</div>
			</div>

			<style jsx>{
				`

					.header-wrapper .menu .fa {
						font-size:15px;
						color:#000;
					}

					.header-wrapper .menu .item span {
						margin-left:10px;
						font-size:13px;
						font-weight:bold;
					}
				`
			}</style>
		</div>
    );
  }
}
