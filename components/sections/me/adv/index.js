import React from 'react';
import { connect } from 'react-redux'

import List from './list/index.js'
import Single from './single/index.js'

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const { campaign } = this.props;
  	if(campaign) {
	  	if(campaign.length > 0) {
		    return <List campaigns={campaign} />
		  } else {
		  	return <Single campaign={campaign} />
		  }
		} else {
			return null
		}
  }
}


function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser,
    campaign: state.app.pageData.campaign
  }
}


export default connect(mapStateToProps)(Page)