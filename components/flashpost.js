import React from 'react';
import User from './user.js'
import { connect } from 'react-redux'
import Link from 'next/link'

class FlashPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	flashpost: {
    		revealed: false
    	}
    }
  }

  revealFlashPost() {
  	this.setState({
  		flashpost: {
  			revealed: true
  		}
  	})
  }

  render() {
    return (
      <div className={(this.state.flashpost.revealed) ? `revealed flashpost` : `flashpost`} onClick={() => {this.revealFlashPost()}}>
			<form className="ui form">
				<div className="field">
					<div className="user-image">
  					<User id={this.props.user.profile._id} size="dropdown" />
			    </div>
			    <textarea rows="2" placeholder="О чем бы вы хотели сейчас рассказать?" />
			    <div className="bar">
			    	<Link href="/editor">
              <a className="medium circular ui button primary">
    					  Перейти в редактор
    					</a>
            </Link>
			    </div>
		  	</div>
			</form>
		</div>
    );
  }
}


export default connect((store) => store)(FlashPost)