// Important
import React from 'react';
import { connect } from 'react-redux'
import config from '../../app.config.js'
import router from 'next/router'

// Actions
import { getBlog } from '../../actions/blog.js'

// Components
import Avatar from 'react-avatar'
import Loader from './loader.js'
import Link from 'next/link'


export class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      blog: null
    }
  }

  componentWillMount() {
    this.getBlog(this.props.id)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.id != nextProps.id) {
      this.getBlog(nextProps.id)
    }
  }

  getBlog(id) {
    if(id) {
      getBlog(id).then((res) => {
        this.setState({
          blog: res.data,
          isLoaded: true
        })
      })
    } else {
      if(this.props.currentUser.isLogged) {
        this.setState({
          ...this.state,
          blog: this.props.currentUser,
          isLoaded: true
        })
      } 
    }
  }

  render() {
    var blog = this.state.blog;
    if (this.state.isLoaded && this.state.blog != null) {
        return (
          <div className={`${this.props.size} blog`}>
            <div className="image">
              <Link href={{ pathname: 'blog', query: { slug: blog.slug }}}><a>
                <Avatar color={`#46978c`} round={true} size={32} src={blog.blogImage} name={blog.blogTitle} />
              </a></Link>
            </div>
            <div className="content">
              <Link href={{ pathname: 'blog', query: { slug: blog.slug }}}><a>
                <span className="name">{blog.blogTitle}</span>
              </a></Link>
              <div className={(this.props.size == 'small') ? `hidden` : `description`}>
                {(blog.blogDescription) ? blog.blogDescription : `Подписчиков: ${blog.blogSubscribersCount}`}
              </div>
            </div>
        		<style jsx>{`
      			.blog {
      				display: flex;
              margin: 6px 0px;
              align-items: center;
      			}
            .blog .image,
            .blog .content {
              display:flex;
              align-items:flex-start;
              flex-direction:column;
            }
            .blog.small {
              margin-bottom:6px;
            }
            .blog.medium {
              margin-bottom:4px;
            }
            .blog.small .image {
              width:20px;
              height:20px;
              margin:0px;
            }
            .blog.medium .image {
              width:30px;
              height:30px;
            }
            .blog.dropdown .content {
              display:none;
            }
            .blog .image a {
              display:flex;
              justify-content:center;
              align-items:center;
            }
      			.blog .content {
      				padding-left:12px;
      			}
            .blog.small .content {
              padding-left:8px;
              margin:5px 0px;
            }
      			.blog .content .name {
      				display:block;
      				font-size:16px;
      				font-weight:bold;
      			}
            .blog.small .content .name {
              font-size:14px;
              font-weight:100;
            }
            .blog.medium .content .name {
              font-size:14px;
            }
      			.blog .content .description {
      				font-size:13px;
      				color:rgba(0,0,0,0.4);
      			}
            .blog.medium .content .description {
              font-size:13px;
              margin-top:0px;
            }

        		`}</style>
          </div>
        ) 
    } else {
      return (<Blank size={this.props.size} />)
    }
  }
}


export class Blank extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.size != 'dropdown') {
      return (
        <div className="blog">
          <div className="blank string"></div>
          <div className="blank description"></div>
        </div>
      )
    } else {
      return (
        <div className="blog">
          <div className="blank avatar"></div>
        </div>
      )
    }
  }
}




export default connect((store) => store)(Blog)