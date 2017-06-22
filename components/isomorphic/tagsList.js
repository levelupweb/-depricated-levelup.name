// Important
import React from 'react';

// Actions
import { getUserTags, getTags, getTagById } from '../../actions/tag.js'

// Components
import Link from 'next/link'
import Loader from './loader.js'

export default class TagsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      isLoaded: false,
      perPage: 10,
      page: 1,
    }
  }

  componentWillMount() {
    if(this.props.tags === undefined) {
      if(this.props.subscriber === undefined) {
        getTags({perPage: 10}).then((res) => {
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
        tags: this.props.tags
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.tags) {
      this.setState({
        tags: nextProps.tags
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
              return <Tag size={this.props.size} tag={item} key={item._id} />
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
    var tag = this.props.tag;
    if(this.props.size == 'block') {
      return (
        <div className="tag">
          <div>
            <div className="info">
              <span>{tag.tagSubscribersCount} подписчиков</span>
            </div>
            <div className="image">
              <img src={tag.tagImage} />
            </div>
            <div className="content">
              <Link href={{ pathname: 'search', query: { query: tag.slug }}}>
                <a className="header">{tag.tagTitle}</a>
              </Link>
              <div className="meta">
                <p>{(tag.tagDescription) ? tag.tagDescription : `У этого тега пока нет описания`}</p>
              </div>
            </div>
          </div>
          <style jsx>{`
            .tag {
              width: 100%;
              border-bottom:1px solid #eee;
              position:relative;
              max-height:100px;
              height:100px;
              overflow:hidden;
              background:#fafafa;
            }
            .tag .image img {
              width:100%;
              opacity:0.1;
            }
            .tag .content {
              position: absolute;
              left:0px;
              bottom:0px;
              padding:15px;
              width:100%;
            }
            .tag .content .header {
              font-size:27px;
              font-weight:bold;
              color:#000;
            }
            .tag .content .header .meta p {
              color:#c0c0c0;
            }
            .tag .info {
              position:absolute;
              left:0px;
              top:0px;
              margin:15px;
              font-size:13px
            }
          `}</style>
        </div>
      );
    } else {
      return (
        <div className="tag">
          <Link href={{ pathname: 'search', query: { query: tag.slug }}}>
            <a>{tag.tagTitle}</a>
          </Link>
        </div>
      );
    }
  }
}
