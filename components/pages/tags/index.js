import React from 'react';
import { getAllTags, subscribeToTag, getTagSubscribers } from '../../../actions/tag.js'
import Loader from '../../loader.js'
import TimeAgo from 'timeago-react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	entries: null,
    	components: null,
    	loaded: false
    }
  }

  componentWillMount() {
  	var components = [];
  	getAllTags().then((res) => {
  		this.setState({
  			entries: res.data
  		})
  	})
    .then(() => {
  		this.state.entries.map((item, i) => {
        components.push(<Tag tag={item} key={i} />)
  		})
  		this.setState({
  			components: components
  		})
  	})
  }

  componentDidMount() {
  	this.setState({
  		loaded: true
  	})
  }

  render() {
  	if(this.state.loaded) {
	    return (
	      <div className="tags grid ui">
          {this.state.components}
          <style jsx>{`
            
          `}</style>
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

  handleSubscribe(id) {
    subscribeToTag(this.token, id).then((res) => {
      console.log(res)
    })
  }

  render() {
    var tag = this.props.tag;
    var subscribersCount = tag.tagSubscribersCount;
    return (
      <div className={(subscribersCount > 1) ? `sixteen wide column` : `eight wide column`}>
      <div className="tag">
        <div className="info">
          <span>{subscribersCount} подписчиков</span>
        </div>
        <div className="image">
          <img src={tag.tagImage} />
        </div>
        <div className="content">
          <a className="header">{tag.tagTitle}</a>
          <div className="meta">
            <p>{(tag.tagDescription) ? tag.tagDescription : `У этого тега пока нет описания`}</p>
          </div>
        </div>
        <div className="action">
          <a href="#" onClick={() => {this.handleSubscribe(tag._id)}} className="button mini ui primary">Подписаться</a>
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

