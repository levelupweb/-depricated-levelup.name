import React from 'react';
import { connect } from 'react-redux'
import { searchByQuery } from '../../actions/app.js'
import TagsList from '../tags-list.js'
import UserList from '../user-list.js'

class SearchContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	results: null
    }
  }

  componentWillMount() {
  	this.setState({
  		results: {
  			...this.state.results,
  			...this.props.app.pageData
  		}
  	})
  }

  render() {
    return (
	    <div>
	    	<div className="search">
	    		<div className="ui form">
		    		<div className="field">
			    		<label>Поиск</label>
			    		<input type="text" name="searchQuery" placeholder="Что ищем?" />
			    	</div>
			   </div>
	    	</div>
	    	<div className="ui divider"></div>
	    	<div className="results">
	    		<h2 className="ui header">
	    			Теги
	    			<div className="sub header">Все теги по вашему запросу</div>
	    		</h2>
	    		<TagsList datatags={this.state.results.tags} />
	    	</div>
	    	<div className="ui divider"></div>
	    	<div className="results">
	    		<h2 className="ui header">
	    			Юзеры
	    			<div className="sub header">Все пользователи по вашему запросу</div>
	    		</h2>
	    		<UserList size="block" datausers={this.state.results.users} />  
	    	</div>
	    </div>
    );
  }
}

export default connect((store) => store)(SearchContainer)

