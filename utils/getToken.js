import cookies from 'js-cookie'

export default function getToken(req) {
  try {
  	return cookies.get('x-access-token') || req.cookies['x-access-token'];
  } catch (err) {
    return false
  }
} 