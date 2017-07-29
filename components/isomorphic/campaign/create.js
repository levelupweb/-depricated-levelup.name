// Important
import React from 'react';
import { connect } from 'react-redux'
import { UI } from '../../../utils/initScripts.js'
import router from 'next/router'
import dynamic from 'next/dynamic'
import moment from 'moment'
import cookies from 'js-cookie'

// Actions
import { createCampaign } from '../../../actions/campaign.js'

// Components
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates'
import InputRange from 'react-input-range';

class Campaign extends React.Component {
	constructor(props) {
	 	super(props);
	 	this.dispatch = this.props.dispatch;
	 	this.token = cookies.get('x-access-token');
	 	this.defaultValue = {
	 		isDating: false,
	 		isTarget: false,
	 		infoBox: {},
	 		campaign: {
	 			owner: this.props.currentUser._id,
	 			dating: {
	 				start: null,
	 				end: null
	 			},
	 			targeting: {
	 				gender: 'all',
	 				age: {
	 					min: 0,
	 					max: 100
	 				}
	 			}
	 		}
	 	}
	 	this.state = this.defaultValue;
	}

	// React Lifecycle
	componentDidUpdate(prevProps, prevState) {
		if(prevState.isTarget != this.state.isTarget) {
			$('.dropdown').dropdown({
		   	onChange: (value) => {
		      this.setState({
		      	campaign: {
		      		...this.state.campaign,
		      		targeting: {
		      			...this.state.campaign.targeting,
		      			gender: value
		      		}
		      	}
		      })
		   	}
			})
		} 
	}

	componentDidMount() {
		UI();
		moment.locale('ru-ru');
	}

	// Specific Methods
	handleCreate(token, campaign) {
		this.props.dispatch(
			createCampaign(token, campaign)
		).then((response) => {
			if(response.success) {
				$('.ui.modal').modal('hide')
				this.setState(this.defaultState)
				router.push('/me/adv?id=' + response.campaign._id, '/me/adv?id=' + response.campaign._id, {shallow: false})
			} else {
				this.handleErrorMessage(
					response.message, response.errors
				)
			}
		})
	}

	handleErrorMessage(message, errors = []) {
		this.setState({
			infoBox: {
				success: false,
				message,
				errors
			}
		})
	}

	handleSuccessMessage(message) {
		this.setState({
			infoBox: {
				success: true,
				errors: [],
				message
			}
		})
	}

	// Isomorphic Methods
	handleView(view) {
		this.setState({
			...this.state,
			view
		})
	}

	handleChange(field, value) {
		this.setState({
			campaign : {
				...this.state.campaign,
				[field] : value
			}
		})
	}

	render() {
		const { infoBox, campaign, isDating, isTarget } = this.state;
  	return (
    <div className="signin">
    	<div className="ui modal basic small">
    		<h3 className="header ui">Создание новой рекламной кампании</h3>
    		{infoBox.message &&
    			<div className="content">
    				{infoBox.message &&
	      			<div className={(infoBox.success) ? 'ui positive message' : 'ui warning message'}>
						  	<div className="header">{infoBox.message}</div>
						  	{(infoBox.errors.length > 0 && !infoBox.success) && 
						  		<ul className="list">
						  			{infoBox.errors.map((error, i) => {
						  				return <li key={i}>{error}</li>
						  			})}
						  		</ul>
						  	}
						</div>
	      		}
	      	</div>
    		}
		  	<div className="content">
		    	<div className="description">
		    		<div className="ui grid">
					  	<div className="eight wide column">
					  		<p>Заполните основные поля</p>
			          	<div className="ui form">
				          	<div className="field">
				           		<input 
				           			type="text" 
				           			onInput={(e) => {this.handleChange('title', e.target.value)}}
				           			placeholder="Название рекламной кампании"
				           			value={campaign.title || ''} />
				          	</div>
				          	<div className="field">
				          		{isDating ? 
					            	<DateRangePicker
												  startDate={campaign.dating.start} 
												  endDate={campaign.dating.end}
												  onDatesChange={({ startDate, endDate }) => this.setState({ campaign: { ...campaign, dating: { start: startDate, end: endDate } } })} 
													focusedInput={this.state.focusedInput} 
	  											onFocusChange={focusedInput => this.setState({ focusedInput })} 
													startDatePlaceholderText="Начало"
	        								endDatePlaceholderText="Конец"
	        							/>
        							: 
	        							<a className="ui button default fluid basic inverted"
	        								onClick={() => {this.setState({isDating: true})}}>
	        								Выбрать даты проведения
	        							</a>
        						}
				          	</div>
				          	<div className="field">
				          		{isTarget ? 
				          			<div>
					            		<div className="ui selection dropdown fluid">
					                  <input type="hidden" />
					                  <i className="dropdown icon"></i>
					                  <div className="default text">Пол</div>
					                  <div className="menu">
				                      <div className="item" data-value="male">Мужской</div>
				                      <div className="item" data-value="female">Женский</div>
				                      <div className="item" data-value="all">Все</div>
					                  </div>
					              	</div>
					              	<div className="field inverted">
					              		<label>Возраст аудитории</label>
					              	 	<div className="range">
						              	 	<InputRange
											          draggableTrack
											          maxValue={100}
											          minValue={0}
											          onChange={(value) => {this.setState({
							                  	campaign: {
							                  		...campaign, 
								                  	targeting: { 
								                  		...campaign.targeting,
								                  		age: value
								                  	}
								                 }})}}
											          value={campaign.targeting.age} />
										        </div>
										      </div>
					              </div>
        							: 
	        							<a className="ui button default fluid basic inverted"
	        								onClick={() => {this.setState({isTarget: true})}}>
	        								Выбрать аудиторию
	        							</a>
        						}
				          	</div>
				        	</div>
				        	<div className="ui divider"></div>
				        	<div className="ui text menu inverted">
			          		<a onClick={() => {this.handleCreate(this.token, this.state.campaign)}} className="ui button circular basic default inverted">Готово</a>
				         </div>
					  	</div>
					  	<div className="eight wide column">
					  		<p>Начните свою рекламную кампанию с простой регистрации!</p>
					  		<p>Пожалуйста, заполните все необходимые поля, чтобы получить возможность размещать рекламные объявления</p>
					  	</div>
						</div>
		    	</div>
		  	</div>
			</div>
		<span>
			{React.cloneElement(this.props.children, { 
				onClick: () => {registerModal('.ui.modal')} 
			})}
		</span>
		<style jsx>{`
			.range {
				margin:25px 7px;
			}
			.field.inverted label {
				color:#fff;
				margin-top:20px;
			}
		`}</style>
    </div>
  	);
	}
}

function registerModal(el) {
	$(el)
  .modal({ blurring: true, observeChanges: true })
  .modal('setting', 'transition', 'fade')
  .modal('show');
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(Campaign)