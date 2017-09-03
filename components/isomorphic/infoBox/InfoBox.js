import React from 'react';
import infoBoxStyles from './infoBox.css'
import applyStyles from 'next-style-loader/applyStyles'
import PropTypes from 'prop-types'


const renderErrors = (errors = []) => {
  <ul className="list">
    {errors.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
}

class InfoBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	const { message, type, errors, isActive, onClose } = this.props;
  	const { title, description } = message;
  	if(isActive) {
      return (
    		<div className="infoBox-wrapper">
    			<div className={"ui message " + type}>
            <i className="close icon fa fa-close" onClick={() => {
              onClose()
            }}></i>
    				<h4 className="ui header">
    					{title}
    				</h4>
    				<p className="description">
    					{description}
    				</p>
            <div className="errors">
              {errors.length > 0 &&
                <ul className="list">
                  {errors.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              }
            </div>
    			</div>
    		</div>
      )
  	} else {
      return null
    }
  }
}

InfoBox.defaultProps = {
	type: 'default',
	isActive: false,
	errors: [],
	message: {}
}

InfoBox.propTypes = {
	message: PropTypes.object,
	type: PropTypes.string,
	isActive: PropTypes.bool,
	errors: PropTypes.array
}

export default applyStyles(infoBoxStyles)(InfoBox)