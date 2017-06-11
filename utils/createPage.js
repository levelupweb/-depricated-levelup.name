export default function createPage(options, child, before, after) {
	var res;

	if(options) {
		var res = options;
			res.child = child;
			res.beforeChildren = before;
			res.afterChildren = after; 
	} else {
		var res = {
			access: false,
			message: 'Необходима авторизация'
		}
	} 

	return res;
}