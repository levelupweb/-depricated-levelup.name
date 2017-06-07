import React from 'react';
import { connect } from 'react-redux'
import Link from 'next/link'
import { makeSearch } from '../../actions/app.js'

class Header extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			results: null
		}
  }

  getSearch() {
	  	var results = $('.results')
	  	this.props.dispatch({type: 'SEARCH_SWITCH'})

	  	var dimmer = require('semantic-ui-dimmer');
	  	$('.after-header').dimmer({closable:false})
	  	.dimmer('toggle');  
  }

  handleTyping(e) {
		var query = e.target.value;
		makeSearch(query).then((res) => {
			this.setState({
				results:res.data
			})
		})
  }

  render() {
  	console.log(this.state)
  	var results = () => {
  		if(this.state.results) { 
	  		return this.state.results.users.map((item, i) => {
				return (<User user={item} />)
			})
	  	} else {
	  		return (<div></div>)
	  	}
  	}
    return (
      <div className="header-wrapper">

  		{this.props.header.search ?
		    <div className="ui secondary menu block search">
		    	<div className="menu left">
		    		<div className="search-inner">
		    			<div className="search">
							<input onChange={(e) => {this.handleTyping(e)}} type="text" ref={input => input && input.focus()} className="search-input" placeholder="Что будем искать?" />
				    		<div className="results">
				    			{results}
					 		</div>
				    	</div>
		    			<a className="ui item" onClick={() => {this.getSearch(true)}}>
							<i className="fa fa-times"></i>
						</a>
				    </div>
			    </div>
		    </div>
			    :
			<div className="ui secondary menu block">
				<div className="menu">
					<Link href='/'><a className="item"><b>Лента</b></a></Link>
			      <Link href='/authors'><a className="item">Авторы</a></Link>
				   <Link href='/blogs'><a className="item">Блоги</a></Link>
				   <Link href='/adv'><a className="item">Рекламодателям</a></Link>
				</div>
				<div className="right menu">
				   	<a className="ui item" onClick={() => {this.getSearch(true)}}>
						<i className="fa fa-search"></i>
				   	</a>
				</div>
			</div>
			
			}	

			 <style jsx>{`
					.search {
						width:100%;
						position:relative;
					}

					.search .results {
						position:absolute;
						left:0px;
						top:100%;
						width:668px;
						background:#fff;
						z-index:9999;	
					}
	    		`}</style>
		</div>
    );
  }
}


class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	var user = this.state.user;
    return (
      <div>{user.userName} HelloWorld</div>
    )
  }
}


export default connect((state) => state)(Header)