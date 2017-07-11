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
    this.state = {
      isLoaded: false,
      user: null
    }
  }

  componentWillMount() {
    this.getUser(this.props.id)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.id != nextProps.id) {
      this.getUser(nextProps.id)
    }
  }

  getUser(id) {
    if(id) {
      getUser(id).then((res) => {
        this.setState({
          user: {
            ...this.state.user,
            ...res.data
          },
          isLoaded: true
        })
      })
    } else {
      if(this.props.user.isLogged) {
        this.setState({
          ...this.state,
          user: this.props.user.profile,
          isLoaded: true
        })
      } 
    }
  }

  render() {
    var user = this.state.user;
    if(this.state.isLoaded && this.state.user != null) {
        return (
          <div className={`${this.props.size} user ${this.props.classNames}`}>
            <div className="image">
              <Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
                <Avatar color={`#46978c`} round={true} size={this.props.imageSize || 32} src={user.userImage} name={user.userName} />
              </a></Link>
            </div>
            <div className="content">
              <Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
                <span className="name">{user.userName}</span>
              </a></Link>
              <div className={(this.props.size == 'small') ? `hidden` : `description`}>
                {(user.userDescription) ? user.userDescription : `Подписчиков: ${user.userSubscribersCount}`}
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
            .user.small .image {
              width:20px;
              height:20px;
              margin:0px;
            }
            .user.medium .image {
              width:30px;
              height:30px;
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
              font-weight:100;
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
  return { user: state.currentUser }
}


export default connect(mapStateToProps)(User)