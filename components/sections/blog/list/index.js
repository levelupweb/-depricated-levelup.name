// Important
import React from 'react';
import { connect } from 'react-redux'

// Actions 
import { findBlog } from '../../../../actions/blog.js'

// Components
import BlogList from '../../../isomorphic/blogList.js'
import Loader from '../../../isomorphic/loader.js'
import Link from 'next/link'

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	entries: [],
    	isLoaded: false,
      isHydrating: false
    }
  }

  componentWillMount() {
  	this.setState({
      entries: this.state.entries.concat(this.props.app.pageData.blog)
    })
  }

  componentDidMount() {
  	this.setState({
  		isLoaded: true
  	})
  }

  search(query) {
    return findBlog(query).then((res) => {
      this.setState({
        entries: res.data.blogs
      })
    })
    .then(() => {
      this.setState({
        isHydrating: false
      })
    })
  }

  handleTyping(query) {
    this.setState({
      isHydrating: true
    }, () => {
      this.search(query)
    })
  }

  render() {
  	if(this.state.isLoaded) {
	    return (
	      <div className="blocks">
          <div className="block-item">
            <h2 className="ui header">Блоги <small>все блоги сайта</small></h2>
          </div>
          <div className="block-item">
            <div className="search">
              <div className="ui form">
                <div className="field">
                  <input 
                    onChange={(e) => {this.handleTyping(e.target.value)}}
                    type="text" 
                    placeholder="Введите запрос для поиска.."
                  />
                </div>
             </div>
            </div>
          </div>
          <div className="block-item">
            {!this.state.isHydrating ? 
              (this.state.entries.length > 0) ?
                <BlogList blogs={this.state.entries} size="block" />
                : 
                <p>Ничего не найдено..</p>
              :
              <Loader />
            }
          </div>
        </div>
	    )
	  } else {
  		return (<Loader />)
  	}
  }
}

export default connect((store) => store)(Blogs)