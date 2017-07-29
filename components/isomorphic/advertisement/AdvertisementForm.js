// Important
import React from 'react';
import { connect } from 'react-redux'
import { UI } from '../../../utils/initScripts.js'
import router from 'next/router'
import moment from 'moment'
import cookies from 'js-cookie'

// Actions
import { createAdvertisement } from '../../../actions/advertisement.js'
import { uploadUnsignedImage } from '../../../actions/app.js'

// Components

class AdvertisementForm extends React.Component {
	constructor(props) {
	 	super(props);
	 	this.token = cookies.get('x-access-token');
	 	this.state = {
	 		infoBox: {},
	 		advertisement: {}
	 	}
	}

	componentWillMount() {
		const { campaignId } = this.props;
		this.setState({
			advertisement: {
				...this.state.advertisement,
				campaign: campaignId
			}
		})
	}

	componentWillReceiveProps(nextProps) {
		const { campaignId } = nextProps;
		this.setState({
			advertisement: {
				...this.state.advertisement,
				campaign: campaignId
			}
		})
	}

	// React Lifecycle
	componentDidUpdate(prevProps, prevState) {
		
	}

	componentDidMount() {
		UI();
		//moment.locale('ru-ru');
	}

	// Specific Methods
	handleCreate(token, advertisement) {
		const { dispatch, onCreate } = this.props;
		dispatch(createAdvertisement(token, advertisement))
		.then((response) => {
			const { success, message, errors, advertisement } = response.data
			if(success) {
				this.handleSuccess();
				onCreate(advertisement);
			} else {
				this.handleErrorMessage(message, errors)
			}
		})
	}

	handleImage(token, file) {
		const { dispatch } = this.props;
    dispatch(uploadUnsignedImage(token, file, path => {
    	this.handleChange('image', path)
    }))
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

	handleSuccess() {
		this.setState({
			infoBox: {},
			advertisement: {}
		})
	}

	// Isomorphic Methods
	handleChange(field, value) {
		this.setState({
			advertisement : {
				...this.state.advertisement,
				[field] : value
			}
		})
	}

	render() {
		const { infoBox, advertisement, isRevealed } = this.state;
  	return (
    <div className="advertisement">
    	{infoBox.message && <div className="content messages">
				{infoBox.message &&
    			<div className={(infoBox.success) ? 'ui positive message' : 'ui warning message'}>
				  	<div className="header">{infoBox.message}</div>
				  	{(infoBox.errors.length > 0 && !infoBox.success) && 
				  		<ul className="list">
				  			{infoBox.errors.map((error, i) => {
				  				return <li key={i}>{error}</li>
				  			})}
				  		</ul> }
				</div> }
    	</div> }
  		<form className="ui form">
	  		<div className="ui grid column three">
				  <div className="column six wide">
					  <div className="field">
					    <label>Заголовок объявления (75)</label>
							  <input 
		         			type="text" 
		         			onInput={(e) => {this.handleChange('title', e.target.value)}}
		         			placeholder="Заголовок объявления"
		         			value={advertisement.title || ''} />
							<br />
	         		<p>Придумайте призывающий заголовок, который привлечёт пользователя</p>
					  </div>
					  <div className="field ">
					    <label>Текст объявления (200)</label>
	         			<div className="ui right labeled input">
			         		<textarea rows="2"
			         			onInput={(e) => {this.handleChange('description', e.target.value)}}
			         			placeholder="Текст объявления"
			         			value={advertisement.description || ''}
			         		></textarea>
								</div>
							<br />
	         		<p>Придумайте текст, который убедит сомневающегося пользователя заинтересоваться вашим объявлением</p>
					  </div>
				  </div>
				  <div className="ui column six wide">
				    <div className="field">
					    <label>Ссылка на сайт</label>
						  <input 
	         			type="text" 
	         			onInput={(e) => {this.handleChange('link', e.target.value)}}
	         			placeholder="Ссылка на сайт"
	         			value={advertisement.link || ''} />
							<br />
	         		<p>Ссылка на сайт, где пользователь получит более подробную информацию</p>
					  </div>
					  <div className="field">
					    <label>Отображаемая ссылка</label>
						  <input 
	         			type="text" 
	         			onInput={(e) => {this.handleChange('displayLink', e.target.value)}}
	         			placeholder="Отображаемая ссылка"
	         			value={advertisement.displayLink || ''} />
							<br />
	         		<p>Ссылка, которая будет отображена пользователю</p>
					  </div>
				  </div>
				  <div className="column four wide">
		  			{advertisement.image ?
							<img src={advertisement.image} width="100%" className="ui image responsive rounded" /> :
							<div className="field">
								<label>Изображение</label>
							  <input 
			       			type="file" 
			       			className="ui hidden hided"
			       			ref={(e) => {this.image = e}}
			       			onChange={(e) => {this.handleImage(this.token, e.target.files[0])}} />
			       		<div className="ui button baisc" onClick={() => {this.image.click()}}>Изображение</div>
						  </div> 
						}
						<button onClick={(e) => {e.preventDefault();this.handleCreate(this.token, this.state.advertisement)}} className="ui button primary">Создать</button>
					</div>
				</div>
			</form>

			<style jsx>{`
				.messages {
					margin-bottom:15px;
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

export default connect(mapStateToProps)(AdvertisementForm)