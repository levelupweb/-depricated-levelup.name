import React from 'react';
import Link from 'next/link'
import axios from 'axios'
import config from '../../app.config.js'
import Loader from '../loader'
import getPosts from '../../utils/getPosts.js'

export class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }
  }

  componentWillMount() {
    getPosts(1, {}).then((res) => {
      console.log(res.data)
      this.setState({
        entries: res.data
      })
    })
  }

  render() {
    return (
      <div className="ui segments">
      	<div className="ui segment">
        <h3 className="ui header">Посты
          <div className="sub header">
          Редактирование и добавление
          </div>
        </h3>
        </div>
        <div className="ui segment">
          <Entries data={this.state.entries} />
        </div>
        <div className="ui segment">
          <AddPost />
        </div>
      </div>
    );
  }
}

class AddPost extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<Link href="/editor"><a className="large circular ui button primary">Добавить пост</a></Link>
		)
	}
}



/* 
*** Список всех итемов
*/
class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      loaded: false
    }
  }

  componentDidMount() {
    this.setState({
      loaded: true
    })
  }

  render() {
    var entries = [];
    this.props.data.map((item, i) => {
      entries.push(<Entry data={item} key={i} />)
    })
    return (
      <div className="ui middle aligned selection list transition">
        {(!this.state.loaded) ? <Loader /> : entries } 
      </div>
    );
  }
}


/* 
*** Одиночный итем (для списка)
*/
class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  /* 
  *** Удаление итема
  */
  handleRemove() {
    axios.get(config.API + `post/entries/` + this.props.data._id + `/remove`).then((res) => {
      this.item.classList.add('hidden');
    })
  }

  render() {
    var entry = this.props.data;
    return (
      <div ref={(item) => {this.item = item}} className="item" id={`page-${entry._id}`}>
        <div className="right floated middle aligned">
          <Link href={{ pathname: '/editor', query: { slug: entry.slug }}}><div className="ui button tiny"><i className="fa fa-cog"></i></div></Link>
          <div onClick={() => {this.handleRemove()}} className="ui button red tiny"><i className="fa fa-close"></i></div>
        </div> 
        <div className="content middle aligned">
          <div className="header">{entry.postTitle}</div>
          <div className="description">{entry.slug}</div>
        </div>
      </div>
    )
  }
}