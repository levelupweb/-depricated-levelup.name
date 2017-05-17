import React from 'react';
import Link from 'next/link'
import { connect } from 'react-redux'
import axios from 'axios'
import config from '../app.config.js'
import Loader from './loader'
import { getUserById } from '../actions/user.js'
import Avatar from 'react-avatar'

// 1. Разделить вид для владельца и для третьих лиц
// 2. Пофиксить баг с отображением small-темплейта

export class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      user: { }
    }
  }

  async componentDidMount() {
    if(this.props.id) {
      var user = await getUserById(this.props.id)
      await this.setState({
          ...this.state,
          user: user.data
        })
      await this.setState({
          isLoaded: true
        })
    } else {
      await this.setState({
        ...this.state,
        user: this.props.user.profile
      })
      await this.setState({
          isLoaded: true
        })
      }
  }


  render() {
    var user = this.state.user;
    if(this.state.isLoaded) {
      return (
        <div className={`${this.props.size} user`}>
          <div className="image">
            <div className="ui inline dropdown">
              <div className="text">
                <Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
                  <Avatar color={`#46978c`} round={true} size={32} src={user.userImage} name={user.slug} />
                </a></Link>
              </div>
              <div className="menu">
                <div className="item" data-text="this week">Профиль</div>
                <div className="item" data-text="this month">Написать пост</div>
                <div className="item" data-text="this month">Настройки</div>
                <div className="divider"></div>
                <div className="item" data-text="this month">Выход</div>
              </div>
            </div>
          </div>
          <div className="content">
            <Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
              <span className="name">{user.slug}</span>
            </a></Link>
            <div className={(this.props.size == 'small') ? `hidden` : `description`}>{user.userDescription}</div>
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
            align-items:center;
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
            display:inline-block;
          }

    			.user .content {
    				padding-left:15px;
    			}

          .user.small .content {
            padding-left:8px;
            margin:5px 0px;
          }

    			.user .content .name {
    				display:block;
    				font-size:17px;
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

      		`}</style>
        </div>
      )
    } else {
      return (<div>Загрузка..</div>)
    }
  }
}



export default connect((store) => store)(User)