import React from 'react';
import { connect } from 'react-redux'
import { makeSearch } from '../../actions/app.js'
import TagsList from '../tagsList.js'
import UserList from '../userList.js'

class SearchContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	results: null
    }
  }

  componentWillMount() {
  	makeSearch('').then((res) => {
  		this.setState({
  			results: res.data
  		})
  	})
  }

  handleTyping(e) {
  	makeSearch(e.target.value).then((res) => {
  		this.setState({
  			results: res.data
  		})
  	})
  }

  render() {
  	
    return (
	    <div className="block">
	    	<div className="search">
	    		<div className="ui form">
		    		<div className="field">
			    		<label>Поиск</label>
			    		<input onChange={(e) => {this.handleTyping(e)}} type="text" name="searchQuery" placeholder="Что ищем?" />
			    	</div>
			   </div>
	    	</div>
	    	{this.state.results &&
	    		<div>
			    	<div className="ui divider"></div>
			    	{this.state.results.tags &&
				    	<div className="results">
				    		<h2 className="ui header">
				    			Теги
				    			<div className="sub header">Все теги по вашему запросу</div>
				    		</h2>
				    		<TagsList datatags={this.state.results.tags} />
				    	</div>
				   }
				   {this.state.results.users &&
				   	<div>
					    	<div className="ui divider"></div>
					    	<div className="results">
					    		<h2 className="ui header">
					    			Юзеры
					    			<div className="sub header">Все пользователи по вашему запросу</div>
					    		</h2>
					    		<UserList size="block" datausers={this.state.results.users} /> 
					    	</div>
					   </div>
			    	}
		    	</div>
		   }
	    </div>
    );
  }
}

export default connect((store) => store)(SearchContainer)

