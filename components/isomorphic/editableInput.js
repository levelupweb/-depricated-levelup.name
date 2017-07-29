// Important 
import React from 'react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'

// Utils
import { UI } from '../../utils/initScripts.js'

// Actions
import { updateField } from '../../models/app.js'
import { getBlog } from '../../actions/blog.js'


class EditableInput extends React.Component {
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
	  	updateField(this.token, this.props.entryType, this.props.entry._id, {
	  		field: this.props.field,
	  		value: this.state.temp
	  	}).then((response) => {
	  		if(response.data.success) {
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

  canEdit(currentUserID, entry, entryType) {
  	if(entryType == 'user') {
  		return currentUserID == entry._id;
  	} else if(entryType == 'blog') {
  		return currentUserID == entry.owner._id;
  	}
  }

  render() {
  const { value, editing, description } = this.state;
  const { currentUser, entry, entryType, align, title, size } = this.props;
  if(this.canEdit(currentUser._id, entry, entryType)) {
			if (!editing) {
				return (
					<p data-inverted="" 
						data-tooltip="Нажмите для редактирования" 
						data-position={align ? `bottom ${align}` : `bottom center`}
						className={`${size}`}
						onClick={() => {this.edit()}}>
						
						{value ? <span>{value}</span> : `Добавьте ${title.toLowerCase()}` }

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
									defaultValue={value} 
									ref={(e) => {this.input = e}}
									type="text" 
									className={`${align} add mini`} 
									placeholder={title} 
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
		} else {
			return (
				<p className={`${size}`}>
					{value && <span>{value}</span> }

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
		}
  }
}

function mapStateToProps(state) {
  return { 
  	currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(EditableInput)
