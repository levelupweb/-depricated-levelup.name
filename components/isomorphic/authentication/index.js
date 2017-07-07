// Important
import React from 'react';
import { connect } from 'react-redux'
import { UI } from '../../../utils/initScripts.js'
import router from 'next/router'

// Actions
import { signIn, signUp } from '../../../actions/user.js'

class Auth extends React.Component {
  	constructor(props) {
   	super(props);
   	this.dispatch = this.props.dispatch;
   	this.state = {
   		view: 'authorization',
   		temporaryUser: {},
   		authData: {},
   		infoBox: {
   			success: false,
   			message: null,
   			erorrs: []
   		}
   	}
  	}

  	// React Lifecycle
  	componentDidMount() {
  		UI();
  	}

  	componentDidUpdate(prevProps, prevState) {
  		// Прогрессивно генерируем dropdown semantic-ui
  		if(prevState.view == 'register' && this.state.view == 'register-2') {
  			$('.dropdown').dropdown({
			   onChange: (value) => {
			      this.handleChange(
			      	'temporaryUser',
			      	'userGender',
			      	value
			      )
			   }
			})
  		}
  	}

  	// Specific Methods

  	handleModal() {
  		$('.ui.modal')
  		  .modal({ blurring: true, observeChanges: true })
        .modal('setting', 'transition', 'fade')
        .modal('show')
      ;
  	}

  	handleAuth(data) {
  		this.props.dispatch(
  			signIn(data)
  		).then((res) => {
  			if(res.success) {
  				$('.ui.modal').modal('hide')
  			} else {
  				this.handleErrorMessage(
  					res.message
  				)
  			}
  		})
  	}

  	handleRegister(data) {
  		this.dispatch(
  			signUp(data)
  		).then((res) => {
  			if(res.success) {
  				this.handleView('authorization')
  				this.handleSuccessMessage(
  					res.message
  				)
  			} else {
  				this.handleErrorMessage(
  					res.message,
  					res.errors
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

  	handleChange(instance, field, value) {
  		this.setState({
  			[instance] : {
  				...this.state[instance],
  				[field] : value
  			}
  		})
  	}

  	render() {
  		var authData = this.state.authData;
  		var temporaryUser = this.state.temporaryUser;
  		var infoBox = this.state.infoBox;
    	return (
      <div className="signin">
      	<div className="ui modal basic small">
      		<h3 className="header ui">Авторизация</h3>
      		{(infoBox.message) &&
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
			  	{this.state.view == 'authorization' &&
				  	<div className="content">
				    	<div className="description">
				    		<div className="ui grid">
							  	<div className="eight wide column">
							  		<p>Авторизуйтесь под своим именем используя ваш логин и пароль</p>
					          	<div className="ui form">
						          	<div className="field">
						           		<input 
						           			type="text" 
						           			onInput={(e) => {this.handleChange('authData', 'userLogin', e.target.value)}}
						           			placeholder="E-mail или логин"
						           			value={authData.userLogin || ''} />
						          	</div>
						          	<div className="field">
						            	<input 
						           			type="password" 
						           			onInput={(e) => {this.handleChange('authData', 'userPassword', e.target.value)}}
						           			placeholder="Пароль"
						           			value={authData.userPassword || ''} />
						          	</div>
						        	</div>
						        	<div className="ui divider"></div>
						        	<div className="ui text menu inverted">
					          		<a onClick={() => {this.handleAuth(authData)}} className="ui button circular default basic inverted">Войти</a>
						         </div>
							  	</div>
							  	<div className="eight wide column">
							  		<p>У вас всё ещё нет аккаунта? Самое время это исправить!</p>
							  		<p>Зарегистрируйтесь и получите полный доступ к функционалу сайта</p>
							  		<div className="ui text menu inverted">
					          		<a onClick={() => {this.handleView('register')}} className="ui button circular basic default inverted">Регистрация</a>
						         </div>
							  	</div>
							</div>
				    	</div>
				  	</div>
				}
				{this.state.view == 'register' &&
				  	<div className="content">
				    	<div className="description">
			          	<p>Пройдите простую процедуру регистрации, чтобы раскрыть весь функционал сайта!</p>
			          	<div className="ui form">
			          		<div className="field">
				              	<input 
				           			type="text" 
				           			onInput={(e) => {this.handleChange('temporaryUser', 'userLogin', e.target.value)}}
				           			placeholder="Логин, который вы будете использовать при авторизации"
				           			value={temporaryUser.userLogin || ''} />
				            </div>
				            <div className="field">
				      		   <input 
				           			type="text" 
				           			onInput={(e) => {this.handleChange('temporaryUser', 'userEmail', e.target.value)}}
				           			placeholder="E-mail"
				           			value={temporaryUser.userEmail || ''} />
				      		</div>
				      		<div className="field">
				      		   <input 
				           			type="password" 
				           			onInput={(e) => {this.handleChange('temporaryUser', 'userPassword', e.target.value)}}
				           			placeholder="Пароль"
				           			value={temporaryUser.userPassword || ''} />
				      		</div>
				      		<div className="field">
				      		   <input 
				           			type="password" 
				           			onInput={(e) => {this.handleChange('temporaryUser', 'userPasswordRepeat', e.target.value)}}
				           			placeholder="И ещё раз"
				           			value={temporaryUser.userPasswordRepeat || ''} />
				      		</div>
				        	</div>
				        	<div className="ui divider"></div>
				        	<div className="ui text menu inverted">
				        		<a onClick={() => {this.handleView('authorization')}} className="ui button circular default basic inverted">Назад</a>
			          		<a onClick={() => {this.handleView('register-2')}} className="ui button circular primary basic inverted">Далее</a>
				         </div>
				    	</div>
				  	</div>
				}
				{this.state.view == 'register-2' &&
				  	<div className="content">
				    	<div className="description">
			          	<p>Еще чуть-чуть! Расскажите немного о себе</p>
			          	<div className="ui form">
				          	<div className="field">
				              	<input 
				           			type="text" 
				           			onInput={(e) => {this.handleChange('temporaryUser', 'userName', e.target.value)}}
				           			placeholder="Полное имя"
				           			value={temporaryUser.userName || ''} />
				            </div>
				            <div className="field">
				              	<input 
				           			type="text" 
				           			onInput={(e) => {this.handleChange('temporaryUser', 'userDescription', e.target.value)}}
				           			placeholder="Профессия, должность"
				           			value={temporaryUser.userDescription || ''} />
				            </div>
				            <div className="field">
				              <div className="ui selection dropdown">
				                  <input onChange={(e) => {this.handleChange('temporaryUser', 'userGender', e.target.value)}} type="hidden" />
				                  <i className="dropdown icon"></i>
				                  <div className="default text">Пол</div>
				                  <div className="menu">
				                      <div className="item" data-value="male">Мужской</div>
				                      <div className="item" data-value="female">Женский</div>
				                  </div>
				              </div>
				            </div>
				        	</div>
				        	<div className="ui divider"></div>
				        	<div className="ui text menu inverted">
			          		<a onClick={() => {this.handleView('register')}} className="ui button circular default basic inverted">Назад</a>
			          		<a onClick={() => {this.handleRegister(temporaryUser)}} className="ui button circular primary basic inverted">Готово!</a>
			          	</div>
				    	</div>
				  	</div>
				}
			</div>
			<span>
				{React.cloneElement(this.props.children, { 
					onClick: () => {this.handleModal()} 
				})}
			</span>
			<style jsx>{`
				
			`}</style>
      </div>
    	);
  	}
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}


export default connect(mapStateToProps)(Auth)