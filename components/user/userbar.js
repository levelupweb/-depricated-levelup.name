import React from 'react';
import User from '../user'
import Link from 'next/link'
import { connect } from 'react-redux'
import { getUserById, getUserLikesCount, getUserPostsCount } from '../../actions/user.js'
import Loader from '../loader.js'

class UserBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      user: this.props.userdata
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      user: nextProps.userdata
    })
  }

  render() {

    if(this.state.user) {
      var user = this.state.user;
      var currentUser = this.props.user.profile || {};
      return (
        <div className="userbar">
          <div className="head">
            <div className="left">
              {(user._id == currentUser._id || false) ? 
                <div data-inverted="" data-tooltip="Редактировать профиль" data-position="top left" className="editing">
                  <Link href={{ pathname: 'settings', query: { slug: this.state.user.slug }}}>
                    <a><i className="fa fa-cog"></i></a>
                  </Link>
                </div> : <div></div>
              }
              <User id={this.state.user._id} />
            </div>
            <div className="right">
              <div className="socials">
                {user.userSocials.map((item, i) => {
                  var slug = item.title.toLowerCase().split(/[ ,]+/).join(' ');
                  return (<a href={item.link} target="_blank"><button className={'ui circular icon button small ' + slug}>
                          <i className={'fa icon fa-' + slug}></i>
                        </button></a>)
                })}
               </div>
            </div>
          </div>
          
          <div className="content">
            <div className="bio">
              {(user.userBio) ? <span>{user.userBio}</span>  :  <span></span> }
            </div>
            <div className="stats"><Statistic userID={user._id} /></div>
          </div>

        	<style jsx>{`

            .userbar .stats {
              text-align:center;
            }
            .userbar {
              border-bottom:1px solid #eee;
              margin-bottom:10px;
              padding-bottom:10px;
            }

            .userbar .content .company {
              position:absolute;
              right:0px;
              top:0px;
              padding:5px 0px;
            }

            .userbar .content .bio {
              width:50%;
            }

            .userbar .content {
              padding:5px 0px;
              position:relative;
              display:flex;
              align-items:center;
              justify-content:space-between;
            }

            .userbar .content span {
              display:block;
              font-size:15px;
            }

            .userbar .content span strong {
              color:#000;
            }

        		.userbar .head {
        			display:flex;
        			justify-content:space-between;
        			align-items:center;
              border-bottom:1px solid #eee;
              margin-bottom:10px;
              padding-bottom:10px;
        		}

            .userbar .left {
              display:flex;
              justify-content:center;
              align-items:center;
            }

            .userbar .left .editing {
              display:flex;
              justify-content:center;
              align-items:center;
              width:32px;
              height:32px;
              background:#eee;
              border-radius:100%;
              margin-right:10px;
            }


            .userbar .head .socials button {
              margin-left:7px;
            }
        	`}</style>
        </div>
      );
    } else {
      return (<div></div>)
    }
  }
}



// Clever Component. Accepts User ID

class Statistic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      likes: 0,
      posts: 0
    }
  }

  componentWillMount() {
    var id = this.props.userID;
    getUserById(id).then((res) => {
      this.setState({
        user: res.data
      })
    })
    .then(() => {
      getUserLikesCount(id).then((res) => {
        this.setState({
          likes: res.data
        })
      })
    })
    .then(() => {
      getUserPostsCount(id).then((res) => {
        this.setState({
          posts: res.data
        })
      })
    })
  }

  render() {
    if(this.state.user) {
    var subscribers = this.state.user.userSubscribersCount;
    var likes = this.state.likes.count;
    var posts = this.state.posts.count;
      return (
          <div className="ui statistics">
            <div className="statistic" data-inverted="" data-tooltip="Количество отметок 'Нравится'" data-position="bottom right">
              <div className="value">
                {likes}
              </div>
              <div className="label">
                нрав.
              </div>
            </div>
            <div className="statistic" data-inverted="" data-tooltip="Количество подписчиков" data-position="bottom right">
              <div className="value">
                {subscribers}
              </div>
              <div className="label">
                подп.
              </div>
            </div>
            <div className="statistic" data-inverted="" data-tooltip="Количество опубликованных постов" data-position="bottom right">
              <div className="value">
                {posts}
              </div>
              <div className="label">
                публ.
              </div>
            </div>
            <style jsx>{`
              .statistics {
                display:flex;
                justify-content:center;
              }
              .statistics .statistic {
                margin-right:20px;
                margin-bottom:0px;
                margin-left:0px;
                cursor:pointer;
              }

              .statistics .statistic .value {
                font-size:21px!important;
                color:rgba(0,0,0,0.5);
              }

              .statistics .statistic.link {
                margin-top:auto;
                margin-bottom:auto;
              }

              .statistics .statistic.link .value .fa {
                color:rgba(0,0,0,0.8);
                border:1px solid #eee;
                background:#eee;
                padding:5px;
              }

              .statistics .statistic .label {
                text-transform:lowercase;
                font-size:13px;
                font-weight:100;
                color:rgba(0,0,0,0.2);
              }
            `}</style>
          </div>        
      )
    } else {
      return <Loader />
    }
  }
}

export default connect(state => state)(UserBar)