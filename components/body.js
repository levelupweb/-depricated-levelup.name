import React from 'react';
import { connect } from 'react-redux'
import Header from './header/'

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	flashpost: {
    		revealed: false
    	}
    }
  }

  render() {
  	var data = this.props.app.pageSettings,
  	    children = this.props.children;

  	if (data.pageShowTitle) {
      var title = (
        <h1 className="ui header">
    		  {data.pageTitle}
    		  <div className="sub header">{data.pageDescription}</div>
    		</h1>
      )
    }
    return (
      <div className={(data.pageShowSidebar) ? `${data.pageClassnames} main` : `${data.pageClassnames} full main`}>
      	<div className="inner">
      		{data.pageShowHeader ? <Header/ > : ``}
      			<div className="after-header">
      				<div>
      	      	{data.beforeChildren}
      	      </div>
      				<div className="block">
      					{title}
      					{children}
      	      </div>
      	      {data.afterChildren}
      		  </div>
      	</div>
        <div className="advert">
          <div className="title">BANNER</div>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(Body)