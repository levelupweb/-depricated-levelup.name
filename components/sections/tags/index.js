// Important
import React from 'react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'

// Actions
import { getTags, subscribeToTag, getTagSubscribers, findTag } from '../../../actions/tag.js'

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
    	entries: [],
    	loaded: false,
      isFull: false,
      perPage: 5,
      page: 1
    }
  }

  componentWillMount() {
    if(this.props.tags) {
    	this.setState({
        entries: this.props.tags
      })
    } else {
      getTags({perPage: this.state.perPage, skip: 0}).then((res) => {
        this.setState({
          entries: res.data
        })
      })
    }
  }

  componentDidMount() {
  	this.setState({
  		loaded: true
  	})
  }

  loadMore() {
    var skip = (this.state.page) * this.state.perPage
    getTags({perPage: this.state.perPage, skip: skip})
      .then((res) => {
        if(res.data.length > 0) {
          this.setState({
            entries: this.state.entries.concat(res.data)
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
        entries: res.data.tags
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
    var tags = this.state.entries.map((item, i) => {
      return <Tag tag={item} key={i} />
    })

  	if(this.state.loaded) {
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
              items={tags}
              loadMore={() => {this.loadMore()}} 
              hasMore={!this.state.isFull}
              threshold={10}
              elementIsScrollable={false}
              className="tags grid ui"
            />
          </div>
        </div>
	    )
	} else {
  		return (<Loader />)
  	}
  }
}

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token');
  }

  render() {
    var tag = this.props.tag;
    var subscribersCount = tag.tagSubscribersCount;
    return (
      <div className={(subscribersCount > 10 && tag.tagDescription) ? `sixteen wide column` : `eight wide column`}>
        <div className="tag">
          <div className="info">
            <span>{subscribersCount} подписчиков</span>
          </div>
          <div className="image">
            <img src={tag.tagImage} />
          </div>
          <div className="content">
            <Link href={{ pathname: 'search', query: { query: tag.slug }}}>
              <a className="header">{tag.tagTitle}</a>
            </Link>
            <div className="meta">
              <p>{(tag.tagDescription) && tag.tagDescription}</p>
            </div>
          </div>
          <div className="action">
          <SubscribeButton 
            subscribeText="Подписаться" 
            unsubscribeText="Отписаться"
            entryType="tag"
            entryID={tag._id}
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
