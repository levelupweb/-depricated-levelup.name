var db = {
	users: [{
		login: 'admin',
		password: 'root'
	}]
}

export const auth = (user) => {
	var userObject = db.users.filter((item) => {
	  return item.login == 'admin';
	})[0];


	if (userObject.password == user.userPassword && userObject.login == user.userLogin) {
		return {
			type: 'LOGIN_SUCCESS',
			payload: user
		}
	} else {
		return {
			type: 'LOGIN_FAILURE',
			payload: {
				title: 'Ошибка',
				message: 'Неверный логин или пароль'
			}
		}
	}
}

