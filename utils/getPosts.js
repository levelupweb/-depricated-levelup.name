import { getPosts } from '../actions/post.js'

function get(page, options, token) {
	if(!options.perPage) {
	  options.perPage = 10;
	}
	var skip = (page - 1) * options.perPage
	
	if(token) {
		return getPosts(token, {
		  ...options,
		  skip
		})
	} else {
		return getPosts({
		  ...options,
		  skip
		})
	}
}

export default get;