// Important
import React from 'react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'

// Actions
import { getTags, getTagSubscribers, findTag } from '../../../actions/tag.js'

// Components
import InfiniteScroll from 'redux-infinite-scroll';
import SubscribeButton from '../../isomorphic/subscribeButton.js'
import Loader from '../../isomorphic/loader.js'
import TimeAgo from 'timeago-react';
import Link from 'next/link'

class Tags extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      isHydrating: false,
    	tags: [],
    	isLoaded: false,
      isFull: false,
      perPage: 5,
      page: 1
    }
  }

  componentWillMount() {
    if(this.props.tags) {
    	this.setState({
        tags: this.props.tags,
        isLoaded: true
      })
    } else {
      getTags({perPage: this.state.perPage, skip: 0}).then((res) => {
        this.setState({
          tags: res.data,
          isLoaded: true
        })
      })
    }
  }


  loadMore() {
    var skip = (this.state.page) * this.state.perPage
    getTags({perPage: this.state.perPage, skip: skip})
      .then((res) => {
        if(res.data.length > 0) {
          this.setState({
            tags: this.state.tags.concat(res.data),
            isLoaded: true
          })
        } else {
          this.setState({
            isFull: true
          })
        }
      }).then(() => {
        this.setState({
          isLoaded: true,
          page: this.state.page + 1
        })
    })
  }

  search(query) {
    return findTag(query).then((res) => {
      this.setState({
        tags: res.data.tags,
        isLoaded: true
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

  renderTags(tags) {
    return tags.map((item, i) => {
      return <Tag tag={item} key={i} />
    })
  }

  render() {
    const { tags, isLoaded, isFull } = this.state
  	if(isLoaded) {
	    return (
	      <div className="blocks">
          <div className="block-item">
            <h2 className="ui header">Темы <small>все темы сайта</small></h2>
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
            <InfiniteScroll
              items={this.renderTags(tags)}
              loadMore={() => {this.loadMore()}} 
              hasMore={!isFull}
              threshold={10}
              elementIsScrollable={false}
              className="tags grid ui"
            />
          </div>
        </div>
	    )
	} else {
  		return <Loader />
  	}
  }
}

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token');
  }

  render() {
    const { tag } = this.props;
    const { image, title, slug, description, updated, _id } = tag
    return (
      <div className="eight wide column">
        <div className="tag">
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
              {description && <p>{description}</p>}
            </div>
          </div>
          <div className="action">
          <SubscribeButton 
            subscribeText="Подписаться" 
            unsubscribeText="Отписаться"
            entryType="tag"
            entryID={_id}
            additionalClasses="small"
          />
          </div>
        </div>
        <style jsx>{`
          .tag {
            width: 100%;
            border-bottom:1px solid #eee;
            position:relative;
            max-height:150px;
            height:150px;
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
          .tag .action {
            position: absolute;
            right:0px;
            padding:15px;
            top:0px;
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
    )
  }
}

export default connect((store) => store)(Tags)

