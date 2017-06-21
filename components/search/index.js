import React from 'react';
import { connect } from 'react-redux'
import { makeSearch } from '../../actions/app.js'
import PostList from '../postList.js'
import BlogList from '../blogList.js'
import UserList from '../userList.js'
import Loader from '../loader.js'

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
	    <div className="block">
	    	<div className="search">
	    		<div className="ui form">
		    		<div className="field">
			    		<input className="block-shadow" ref={(e) => {this.searcher = e}} defaultValue={this.state.query} onChange={e => this.handleTyping(e)} type="text" name="searchQuery" placeholder="Что ищем?" />
			    	</div>
			   </div>
	    	</div>
    		<div className="block-vertical">
    			{!this.state.isHydrating ? 
    				<Results results={this.state.results} /> : <Loader />
    			}
		   </div>
		   <style jsx>{`
				.search .form input {
					border-radius:999em!important;
					background:#333!important;
					color:#fff!important;
					transition:0.2s all ease;
					font-size:20px!important;
				}
				.search .form input:focus {
					background:#fff!important;
					color:#000!important;
					border-color:#46978c!important;
				}
		   `}</style>
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
				<div>
					{props.results.users.length > 0 && 
						<div className="users">
						   <div className="ui divider"></div>
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
						<div className="blogs">
						   <div className="ui divider"></div>
						   <div className="results">
						    	<h2 className="ui header">
						    		Блоги
						    		<div className="sub header">Все пользовательские блоги по вашему запросу</div>
						    	</h2>
						    	<BlogList size="block" blogs={props.results.blogs} /> 
						   </div>
						</div>
					}
					{props.results.posts.length > 0 && 
						<div className="posts">
						   <div className="ui divider"></div>
						   <div className="results">
						    	<h2 className="ui header">
						    		Посты
						    		<div className="sub header">Все посты по вашему запросу</div>
						    	</h2>
						    	<PostList size="block" posts={props.results.posts} /> 
						   </div>
						</div>
					}
				</div>
			)
		} else {
			return (
				<div>К сожалению, ничего не нашлось. Попробуйте ещё!</div>
			)	
		}
	} else {
		return (
			<div>Начните вводить ключевое слово</div>
		)
	}
}

export default connect((store) => store)(SearchContainer)

