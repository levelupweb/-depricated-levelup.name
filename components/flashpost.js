import React from 'react';

export default class FlashPost extends React.Component {

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
					<div className="user">
  					<i className="fa fa-paper-plane"></i>
  					<img className="rounded image ui" src="../static/img/avatar.png" width="40px" height="40px" />
			    </div>
			    <textarea rows="2" placeholder="О чем бы вы хотели сейчас рассказать?" />
			    <div className="bar">
			    	<button className="medium circular ui button primary">
					  Перейти в редактор
					</button>
			    </div>
		  	</div>
			</form>
		</div>
    );
  }
}
