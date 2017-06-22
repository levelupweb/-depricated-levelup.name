// Important 
import React from 'react';
import cookies from 'js-cookie'

// Utils
import { UI } from '../../utils/initScripts.js'

// Actions
import { updateField } from '../../actions/app.js'

export default class EditableInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	value: null,
    	editing: false,
    	temp: ''
    }

    this.token = cookies.get('x-access-token');
  }

  componentWillMount() {
  	this.setState({
  		value: this.props.value
  	})
  }

  componentWillReceiveProps(nextProps) {
  	this.setState({
  		value: nextProps.value
  	})
  }

  componentDidMount() {
  	this.createEventListeners()
  	UI()
  }

  save() {
  	if(this.state.temp != '') { 
	  	updateField(this.token, this.props.entryType, this.props.entryID, {
	  		field: this.props.field,
	  		value: this.state.temp
	  	}).then((res) => {
	  		if(res.data.success) {
	  			this.setState({
			  		value: this.state.temp,
			  		editing: false,
			  		temp: ''
			  	})
	  		}
	  	})
	} else {
		this.setState({
	  		editing: false
	  	})
	}
  }	

  edit() {
  	this.setState({
  		editing: true,
  		temp: this.state.value
  	})
  }	

  cancel() {
  	this.setState({
  		editing: false,
  		temp: ''
  	})
  }

  createEventListeners() {
  	var self = this
  	document.addEventListener('keydown', function (e) {
  		if(self.state.temp != '') { 
		    if (e.keyCode === 13) { return self.save() }
		    if (e.keyCode === 27) { return self.cancel() }
		}
	});
  }

  render() {
   var description = this.state.value;
	if (!this.state.editing) {
		return (
			<p  data-inverted="" 
				data-tooltip="Нажмите для редактирования" 
				data-position={(this.props.align) ? `bottom ${this.props.align}` : `bottom center`}
				className={`${this.props.size}`}
				onClick={() => {this.edit()}}>
				
				{description ? <span>{description}</span> : `Добавьте ${this.props.title.toLowerCase()}` }

				<style jsx>{`
					p {
						font-size: 16px;
						margin:0px;
						color: #c0c0c0;
					}
					p span {
						color: #000;
					}
					.big {
						font-size:32px;
						font-weight:bold;
					}
					.large {
						font-size:23px;
					}
					.medium {
						font-size:18px;
					}
					.normal {
						font-size:16px;
					}
					.mini {
						font-size:14px;
					}
				`}</style>
			</p>
		)
	} else {
		return (
			<div className="description">
				<div className="ui form">
	 				<div className="field" data-inverted="" data-tooltip="Enter чтобы сохранить, Esc чтобы отменить" data-position="bottom center">
						<input 
							onChange={() => {this.setState({temp: this.input.value})}} 
							defaultValue={description} 
							ref={(e) => {this.input = e}}
							type="text" 
							className={`${this.props.align} add mini`} 
							placeholder={this.props.title} 
							autoFocus
						/>
					</div>
				</div>

				<style jsx>{`
					.description .form {
						margin:10px 0px;
					}
					.description .form .field {
						margin-bottom:0px!important;
					}
					input {
						border:0px!important;
						width:270px!important;
						font-size:17px!important;
						text-align:center!important;
						padding:0px!important;
					}
					input.left {
						text-align:left!important;
					}
					input.center {
						text-align:center;
					}
					.description .form {
						display:flex;
						flex-direction:row;
					}
					.description .form .field {
						margin-right:10px;
					}
				`}</style>
			</div>
		)
	}
  }
}