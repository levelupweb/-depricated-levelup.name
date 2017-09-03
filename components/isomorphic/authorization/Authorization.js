import React from 'react';
import { connect } from 'react-redux'
import { UI } from '../../../utils/initScripts.js'
import InfoBox from '../infoBox/InfoBox.js'
import router from 'next/router'
import cookies from 'js-cookie'
import Modal from '../modal/Modal.js'

import { 
	defaultState,
	handleTemporaryUserField,
	handleModalActiveStatus,
	handleInfoBoxSuccess,
	handleInfoBoxError,
	handleAuthData,
	restoreState,
	handleView
} from './Authorization.map.js';

import { 
	AUTHORIZATION, 
	REGISTER, 
	REGISTER_SECOND, 
	REGISTER_DATA_DESCRIPTION,
	REGISTER_DATA_GENDER,
	REGISTER_DATA_LOGIN,
	REGISTER_DATA_FULLNAME,
	REGISTER_DATA_EMAIL,
	REGISTER_DATA_PASSWORD,
	REGISTER_DATA_PASSWORD_REPEAT,
	AUTH_DATA_PASSWORD,
	AUTH_DATA_LOGIN
} from './Authorization.consts.js';

import { 
	signIn, 
	signUp 
} from '../../../actions/user.js';

class Auth extends React.Component {
	constructor(props) {
	 	super(props);
	 	this.token = cookies.get('x-access-token');
	 	this.state = { ...defaultState	}
	}

	componentDidMount() {
		UI();
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.view == REGISTER && this.state.view == REGISTER_SECOND) {
			this.bindDropdownOnChange()
		}
	}

	handleAuth(data) {
		const { dispatch, onAuthSuccess } = this.props
		dispatch(signIn(data)).then(response => {
			if(response.success) {
				$('.ui.modal').modal('hide')
				this.setState(state => 
					defaultState
				)
			} else {
				this.setState(state => 
					handleInfoBoxError(state, response.message)
				)
			}
		})
	}

	handleRegister(newUser) {
		const { dispatch } = this.props;
		dispatch(signUp(newUser)).then(response => {
			if(response.errors) {
				this.setState(state => 
					handleInfoBoxError(state, response.message, response.errors)
				)
			} else {
				this.setState(state => 
					handleInfoBoxSuccess(state, response.message)
				)
				this.setState(state => 
					handleView(state, AUTHORIZATION)
				)
				this.setState({temporaryUser: {}})
			} 
		})
	}

	bindDropdownOnChange() {
		let self = this;
		$(this.dropdownGender).dropdown({
			onChange(value) {
				self.setState(state => 
					handleTemporaryUserField(state, REGISTER_DATA_GENDER, value)
				)
	   	}
		})
	}

	renderView(view) {
		const { authData, temporaryUser } = this.state
		switch(view) {
			case AUTHORIZATION:
			return (
				<div className={AUTHORIZATION + '-view'}>
	    		<div className="ui grid">
				  	<div className="eight wide column">
				  		<p>Авторизуйтесь под своим именем используя ваш логин и пароль</p>
		          	<div className="ui form">
			          	<div className="field">
			           		<input 
			           			ref={e => this[AUTH_DATA_LOGIN] = e}
			           			type="text" 
			           			onInput={() => this.setState(state => handleAuthData(state, AUTH_DATA_LOGIN, this[AUTH_DATA_LOGIN].value))}
			           			placeholder="E-mail или логин"
			           			value={authData[AUTH_DATA_LOGIN] || ''} />
			          	</div>
			          	<div className="field">
			            	<input 
			            		ref={e => this[AUTH_DATA_PASSWORD] = e}
			           			type="password" 
			           			onInput={() => this.setState(state => handleAuthData(state, AUTH_DATA_PASSWORD, this[AUTH_DATA_PASSWORD].value))}
			           			placeholder="Пароль"
			           			value={authData[AUTH_DATA_PASSWORD] || ''} />
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
		          	<a onClick={
		          		() => this.setState(state => handleView(state, REGISTER))
		          	} className="ui button circular basic default inverted">Регистрация</a>
			        </div>
				  	</div>
					</div>
		  	</div>
			)
			
			case REGISTER:
			return (
				<div className={REGISTER + '-view'}>
        	<p>
        		Пройдите простую процедуру регистрации, чтобы раскрыть весь функционал сайта!
        	</p>
        	<div className="ui form">
        		<div className="field">
              <input 
								ref={e => this[REGISTER_DATA_LOGIN] = e}
           			type="text" 
           			onInput={() => this.setState(state => handleTemporaryUserField(state, REGISTER_DATA_LOGIN, this[REGISTER_DATA_LOGIN].value))}
           			placeholder="Логин для авторизации"
           			value={temporaryUser[REGISTER_DATA_LOGIN] || ''} 
           		/>
            </div>
            <div className="field">
      		   	<input 
								ref={e => this[REGISTER_DATA_EMAIL] = e}
           			type="text" 
           			onInput={() => this.setState(state => handleTemporaryUserField(state, REGISTER_DATA_EMAIL, this[REGISTER_DATA_EMAIL].value))}
           			placeholder="E-mail"
           			value={temporaryUser[REGISTER_DATA_EMAIL] || ''} 
           		/>
      			</div>
      			<div className="field">
      		   	<input 
      		   		ref={e => this[REGISTER_DATA_PASSWORD] = e}
           			type="password" 
           			onInput={() => this.setState(state => handleTemporaryUserField(state, REGISTER_DATA_PASSWORD, this[REGISTER_DATA_PASSWORD].value))}
           			placeholder="Пароль"
           			value={temporaryUser[REGISTER_DATA_PASSWORD] || ''} 
           		/>
      			</div>
      			<div className="field">
      		   	<input 
      		   		ref={e => this[REGISTER_DATA_PASSWORD_REPEAT] = e}
           			type="password" 
           			onInput={() => this.setState(state => handleTemporaryUserField(state, REGISTER_DATA_PASSWORD_REPEAT, this[REGISTER_DATA_PASSWORD_REPEAT].value))}
           			placeholder="И ещё раз"
           			value={temporaryUser[REGISTER_DATA_PASSWORD_REPEAT] || ''} 
           		/>
      			</div>
        	</div>
        	<div className="ui divider"></div>
        	<div className="ui text menu inverted">
        		<a onClick={
        			() => this.setState(state => handleView(state, AUTHORIZATION))
        		} className="ui button circular default basic inverted">Назад</a>
        		<a onClick={
        			() => this.setState(state => handleView(state, REGISTER_SECOND))
        		} className="ui button circular primary basic inverted">Далее</a>
        	</div>
		  	</div>
			)

			case REGISTER_SECOND:
			return (
				<div className={REGISTER_SECOND + '-view'}>
        	<p>
        		Еще чуть-чуть! Расскажите немного о себе
        	</p>
        	<div className="ui form">
          	<div className="field">
              <input 
              	ref={e => this[REGISTER_DATA_FULLNAME] = e}
           			type="text" 
           			onInput={e => this.setState(state => handleTemporaryUserField(state, REGISTER_DATA_FULLNAME, this[REGISTER_DATA_FULLNAME].value))}
           			placeholder="Полное имя"
           			value={temporaryUser[REGISTER_DATA_FULLNAME] || ''} 
           		/>
            </div>
            <div className="field">
              <input 
              	ref={e => this[REGISTER_DATA_DESCRIPTION] = e}
           			type="text" 
           			onInput={e => this.setState(state => handleTemporaryUserField(state, REGISTER_DATA_DESCRIPTION, this[REGISTER_DATA_DESCRIPTION].value))}
           			placeholder="Профессия, должность"
           			value={temporaryUser[REGISTER_DATA_DESCRIPTION] || ''}
           		/>
            </div>
            <div className="field">
              <div className="ui selection dropdown" ref={e => {this.dropdownGender = e}}>
                <input 
                	ref={e => this[REGISTER_DATA_GENDER] = e}
                	onInput={e => this.setState(state => handleTemporaryUserField(state, REGISTER_DATA_GENDER, this[REGISTER_DATA_GENDER].value))}
           				type="hidden" 
           			/>
                <i className="dropdown icon"></i>
                <div className="default text">
                	Пол
                </div>
                <div className="menu">
                  <div className="item" data-value="male">
                  	Мужской
                  </div>
                  <div className="item" data-value="female">
                  	Женский
                  </div>
                </div>
              </div>
            </div>
        	</div>
        	<div className="ui divider"></div>
        	<div className="ui text menu inverted">
        		<a onClick={
        			() => this.setState(state => handleView(state, REGISTER))
        		} className="ui button circular default basic inverted">Назад</a>
        		<a onClick={
        			() => {this.handleRegister(temporaryUser)}
        		} className="ui button circular primary basic inverted">Готово!</a>
        	</div>
		  	</div>
			)
		}
	}

	render() {
		const { view, infoBox } = this.state;
  	return (
	    <div className="signin">
	    	{infoBox.isActive && 
    			<div className="block-item">
						<InfoBox {...infoBox} onClose={() => {
							this.setState(state => ({ 
								infoBox: { ...state.infoBox, isActive: false}
							}))
						}} />
					</div>
				}
				<div className="block-item">
					{this.renderView(view)}
				</div>
	    </div>
    );
	}
}

export default connect()(Auth)