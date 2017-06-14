import React from 'react';
import Link from 'next/link'
import { getUserTags, getAllTags, getTagById } from '../actions/tag.js'
import Loader from './loader.js'

// Компонент принимает userID или выводит список популярных

export default class TagsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      isLoaded: false
    }
  }

  componentWillMount() {
    if(this.props.tagsdata === undefined) {
      if(this.props.subscriber === undefined) {
        getAllTags().then((res) => {
          this.setState({
            tags: res.data
          })
        })
      } else {
        getUserTags(this.props.subscriber).then((res) => {
          this.setState({
            tags: res.data
          })
        })
      }
    } else {
      this.setState({
        tags: this.props.tagsdata
      })
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      isLoaded: true
    })
  }

  render() {
    if(this.state.isLoaded) {
      if(this.state.tags.length == 0) {
        return (
          <div className="no-content">
            <p>Список пуст</p>
          </div>
        )
      } else {
        return (
          <div className="tag-list">
            {this.state.tags.map((item) => {
              return <Tag tagData={item} key={item._id} />
            })}
          </div>
        )
      }
    } else {
      return (
          <Loader />
      )
    }
  }
}

class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var tag = this.props.tagData;
    return (
      <div className="tag">
        <Link href={{ pathname: 'explore', query: { search: tag.slug }}}>
          <a>{tag.tagTitle}</a>
        </Link>
      </div>
    );
  }
}
