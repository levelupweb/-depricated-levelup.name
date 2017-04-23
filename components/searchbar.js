import React from 'react';
import { connect } from 'react-redux'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
		<input type="text" ref={input => input && input.focus()} className="search-input" placeholder="Что будем искать?" />
    );
  }
}

export default connect((state) => state.header)(SearchBar)
