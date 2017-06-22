import cookies from 'js-cookie'
import router from 'next/router'
import { getLogout } from '../actions/user.js'

export default class AuthService  {
	constructor(dispatch) {
		this.dispatch = dispatch
		this.token = cookies.get('x-access-token')
	}

	getLogout() {
		this.dispatch(getLogout()).then(() => {
			cookies.remove('x-access-token', { path: '' });
		}).then(() => {
			router.push('/', '/', {})
		})
	}  

	isLogged() {
		if(this.token) {
			return true
		} else {
			return false
		}
	}
}
