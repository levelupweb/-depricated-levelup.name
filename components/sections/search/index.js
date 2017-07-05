// Important
import React from 'react';
import { connect } from 'react-redux'

// Actions
import { makeSearch } from '../../../actions/app.js'

// Components
import PostList from '../../isomorphic/postList.js'
import BlogList from '../../isomorphic/blogList.js'
import UserList from '../../isomorphic/userList.js'
import Loader from '../../isomorphic/loader.js'

class SearchContainer extends React.Component {
  	constructor(props) {
	   super(props);
	   this.state = {
	   	results: null,
	   	isHydrating: false
	   }
  	}

  	shouldComponentUpdate(nextProps, nextState) {
  		return this.state.results
  	}

  	componentWillMount() {
  		this.setState({
  			isHydrating: true
  		}, () => {
  			this.search(this.props.app.query.query)
  		})
  	}

  	componentWillReceiveProps(nextProps) {
  		this.setState({
  			isHydrating: true
  		}, () => {
  			this.search(this.props.app.query.query)
  		})
  	}

  	search(query) {
		return makeSearch(query).then((res) => {
	  		this.setState({
	  			results: res.data
	  		})
	  	})
	  	.then(() => {
	  		this.setState({
	  			isHydrating: false
	  		})
	  	})
	  	.then(() => {
	  		this.searcher.value = query
	  	})
  	}

  	handleTyping(e) {
  		var value = e.target.value;
  		this.setState({
  			isHydrating: true
  		}, () => {
  			this.search(value)
  		})
  	}

  	render() {
    	return (
	    <div className="search-wrapper blocks">
	    	<div className="search block-item">
	    		<div className="ui form">
		    		<div className="field">
			    		<input 
			    			ref={(e) => {this.searcher = e}} 
			    			defaultValue={this.state.query}
			    			onChange={e => this.handleTyping(e)} 
			    			type="text" 
			    			placeholder="Введите запрос для поиска.."
			    		/>
			    	</div>
			   </div>
	    	</div>
    		<div>
    			{!this.state.isHydrating ? 
    				<Results results={this.state.results} /> : <Loader />
    			}
		   </div>
	    </div>
    	);
  	}
}

var Results = (props) => {
	if(props.results) {
		if(props.results.users.length > 0
		|| props.results.blogs.length > 0
		|| props.results.posts.length > 0) {
			return (
				<div className="">
					{props.results.posts.length > 0 && 
						<div className="posts block-item">
						   <div className="results">
						    	<h2 className="ui header">
						    		Посты
						    		<div className="sub header">Все посты по вашему запросу</div>
						    	</h2>
						    	<PostList size="block" posts={props.results.posts} /> 
						   </div>
						</div>
					}
					
					{props.results.users.length > 0 && 
						<div className="users block-item">
						   <div className="results">
						    	<h2 className="ui header">
						    		Юзеры
						    		<div className="sub header">Все пользователи по вашему запросу</div>
						    	</h2>
						    	<UserList size="block" users={props.results.users} /> 
						   </div>
						</div>
					}
					{props.results.blogs.length > 0 && 
						<div className="blogs block-item">
						   <div className="results">
						    	<h2 className="ui header">
						    		Блоги
						    		<div className="sub header">Все пользовательские блоги по вашему запросу</div>
						    	</h2>
						    	<BlogList size="block" blogs={props.results.blogs} /> 
						   </div>
						</div>
					}
					
				</div>
			)
		} else {
			return (
				<div className="block-item">К сожалению, ничего не нашлось. Попробуйте ещё!</div>
			)	
		}
	} else {
		return (
			<div className="block-item">Начните вводить ключевое слово</div>
		)
	}
}

export default connect((store) => store)(SearchContainer)

