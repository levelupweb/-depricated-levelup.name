import React from 'react';
import {connect} from 'react-redux'
import { Pages } from './pages'
import { Users } from './users'
import { Posts } from './posts'
import { Tags  } from './tags'

class Panel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="panel-wrapper">
      	<div className="ui grid">
          <div className="sixteen wide column">
            <div className="ui grid">
              <div className="twelve wide column">
                <Posts />
              </div>
              <div className="four wide column">
                <p>Статистика</p>
              </div>
            </div>
          </div>
    		  <div className="six wide column">
    		  	<Pages />
    		  </div>
          <div className="six wide column">
            <Users />
            <Tags />
          </div>
    		</div>
      </div>
    );
  }
}

export default connect((store) => store)(Panel)