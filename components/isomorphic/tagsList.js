// Important
import React from 'react';

// Actions
import { getUserTags, getTags } from '../../actions/tag.js'

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
    const { isLoaded, tags } = this.state;
    const { size } = this.props
    if(isLoaded) {
      if(tags.length == 0) {
        return (
          <div className="no-content">
            <p><i className="fa fa-ellipsis-h"></i></p>
          </div>
        )
      } else {
        return (
          <div className="tag-list">
            {tags.map((item) => {
              return <Tag size={size} tag={item} key={item._id} />
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
    const { tag, size } = this.props
    const { image, title, description, slug, updated } = tag 
    if(size == 'block') {
      return (
        <div className="tag">
          <div>
            <div className="info">
              <span>подписчиков</span>
            </div>
            <div className="image">
              <img src={image} />
            </div>
            <div className="content">
              <Link href={{ pathname: 'search', query: { query: slug }}}>
                <a className="header">{title}</a>
              </Link>
              <div className="meta">
                <p>{description ? description : "У этого тега пока нет описания"}</p>
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
      if(size == 'menu') {
        return (
          <div className="tag">
            <Link href={{ pathname: 'search', query: { query: slug }}}>
              <a className="header">{title}</a>
            </Link>
            <style jsx>{`
              .tag {
                width: 100%;
                position:relative;
                background:#fafafa;
                margin-top:5px;
                display:inline-block;
                width:auto!important;
                padding:3px 6px;
                font-size:13px;
                border-radius:5px;
              }
              .tag a {
                color:#000;
              }
            `}</style>
          </div>
        );
      } else {
        return (
          <div className="tag">
            <Link href={{ pathname: 'search', query: { query: slug }}}>
              <a>{title}</a>
            </Link>
          </div>
        );
      }
    }
  }
}
