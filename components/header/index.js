import React from 'react';
import SearchBar from '../searchbar'
import Menu from './menu'
import { connect } from 'react-redux'


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  getSearch() {
  	this.props.dispatch({type: 'SEARCH_SWITCH'})

  	var dimmer = require('semantic-ui-dimmer');
  	$('.after-header').dimmer({closable:false}).dimmer('toggle');  
  }

  render() {
    return (
      <div className="header-wrapper">
  		{this.props.header.search ?
		    	
		    <div className="ui secondary menu block search">
		    	<div className="menu left">
		    		<div className="search-inner">
		    			<SearchBar />
		    			<a className="ui item" onClick={() => {this.getSearch(true)}}>
							<i className="fa fa-times"></i>
						</a>
				    </div>
			    </div>
		    </div>

			    :

			<div className="ui secondary menu block">
				<Menu />

				<div className="right menu">
				   	<a className="ui item" onClick={() => {this.getSearch(true)}}>
						<i className="fa fa-search"></i>
				   	</a>
				</div>
			</div>
			
			}	
		</div>
    );
  }
}

export default connect((state) => state)(Header)