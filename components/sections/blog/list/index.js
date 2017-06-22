// Important
import React from 'react';
import { connect } from 'react-redux'

// Components
import BlogList from '../../../isomorphic/blogList.js'
import Loader from '../../../isomorphic/loader.js'
import Link from 'next/link'



class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	entries: [],
    	isLoaded: false
    }
  }

  componentWillMount() {
    console.log(this.props)
  	this.setState({
      entries: this.state.entries.concat(this.props.app.pageData.blog)
    })
  }

  componentDidMount() {
  	this.setState({
  		isLoaded: true
  	})
  }

  render() {
    	if(this.state.isLoaded) {
  	    return (
  	      <div className="ui three column grid">
            <BlogList blogs={this.state.entries} size="block" />
          </div>
  	    )
  	  } else {
    		return (<Loader />)
    	}
    }
}

export default connect((store) => store)(Blogs)