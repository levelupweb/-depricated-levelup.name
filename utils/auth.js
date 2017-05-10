import axios from 'axios'
import cookies from 'js-cookie'

export async function isLoggedIn() {
  axios.get('http://localhost:3000/user').then((res) => {
    return {
    	hi: '123',
    	obj: res.data.isAuth
    }
  })
}

export function getUserId() {
	cookies
}