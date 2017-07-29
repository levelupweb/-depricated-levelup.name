// Important
import React from 'react';
import { connect } from 'react-redux'
import router from 'next/router'

// Actions
import { getUser } from '../../actions/user.js'

// Components
import Avatar from 'react-avatar'
import Loader from './loader'
import Link from 'next/link'


class User extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;
    this.state = {
      isLoaded: false,
      user: null
    }
  }

  // React Lifecycle
  componentWillMount() {
    const { id, user } = this.props
    if(id != undefined) {
      this.getUser(id)
    } else {
      this.setUser(user)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { id, user } = nextProps
    if(id) {
      if(this.props.id != id) {
        this.getUser(id)
      }
    } else {
      this.setUser(user)
    }
  }

  getUser(id) {
    const { currentUser, user } = this.props;
    if(id) {
      getUser(id).then((response) => {
        this.setUser(response.data)
      })
    } else {
      if(currentUser.isLogged) {
        this.setUser(currentUser)
      } 
    }
  }

  setUser(user) {
    this.setState({
      user,
      isLoaded: true
    })
  }

  render() {
    const { user, isLoaded } = this.state;
    const { size, classNames, imageSize } = this.props;
    if(isLoaded && user) {
        const { slug, fullName, description, subscribers, image } = user;
        return (
          <div className={`${size} user ${classNames}`}>
            <div className="image">
              <Link href={{ pathname: 'user', query: { slug }}}><a>
                <Avatar color={`#46978c`} round={true} size={imageSize || 32} src={image || null} name={fullName} />
              </a></Link>
            </div>
            <div className="content">
              <Link href={{ pathname: 'user', query: { slug }}}><a>
                <span className="name">{fullName}</span>
              </a></Link>
              <div className={(size == 'small') ? `hidden` : `description`}>
                {description ? description : `Подписчиков:`}
              </div>
            </div>
          
        		<style jsx>{`
        			.user {
        				display: flex;
                margin: 6px 0px;
                align-items: center;
        			}
              .user .image,
              .user .content {
                display:flex;
                align-items:flex-start;
                flex-direction:column;
              }
              .user.small {
                margin-bottom:6px;
              }
              .user.medium {
                margin-bottom:4px;
              }
              .user.dropdown .content {
                display:none;
              }
              .user .image a {
                display:flex;
                justify-content:center;
                align-items:center;
              }
        			.user .content {
        				padding-left:12px;
        			}
              .user.small .content {
                padding-left:8px;
                margin:5px 0px;
              }
        			.user .content .name {
        				display:block;
        				font-size:16px;
        				font-weight:bold;
        			}
              .user.small .content .name {
                font-size:14px;
                font-weight:bold;
              }
              .user.medium .content .name {
                font-size:14px;
              }
        			.user .content .description {
        				font-size:13px;
        				color:rgba(0,0,0,0.4);
        			}
              .user.medium .content .description {
                font-size:13px;
                margin-top:0px;
              }
              .user.inverted .content .name,
              .user.inverted .content .description {
                color:#fff;
              }
        		`}</style>
          </div>
        ) 
    } else {
      return (<Blank size={size} />)
    }
  }
}


export class Blank extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { size } = this.props;
    if(size != 'dropdown') {
      return (
        <div className="user">
          <div className="blank string"></div>
          <div className="blank description"></div>
        </div>
      )
    } else {
      return (
        <div className="user">
          <div className="blank avatar"></div>
        </div>
      )
    }
  }
}


function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}


export default connect(mapStateToProps)(User)