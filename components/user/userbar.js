import React from 'react';
import User from '../user'
import Link from 'next/link'
import { connect } from 'react-redux'
import { getUserById, updateUserById, getUserStats } from '../../actions/user.js'
import { createBlog, getAllBlogs } from '../../actions/blog.js'
import { updateImage } from '../../actions/app.js'
import Loader from '../loader.js'
import Avatar from 'react-avatar'
import config from '../../app.config.js'
import cookies from 'js-cookie'
import router from 'next/router'
import SubscribeButton from '../subscribeButton.js'
import Header from '../header/index.js'

class UserBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      tempBlog: {
        blogTitle: null,
        blogOwner: null
      }
    }

    this.currentUser = this.props.user.profile;
    this.token = cookies.get('x-access-token');
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      user: this.props.userdata,
      tempBlog: {
        ...this.state.tempBlog,
        blogOwner: this.props.userdata._id
      }
    })
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      user: nextProps.userdata
    })
  }

  handleUpload(e) {
    var image = e.target.files[0];
    var userID = this.state.user._id;
    var entryType = 'user';
    updateImage(this.token, entryType, userID, image).then((res) => {
      this.setState({
        user: {
          ...this.state.user,
          userImage: res.path
        }
      })
    })
  }

  createBlog() {
    createBlog(this.token, this.state.tempBlog).then((res) => {
      if(res.data.success) {
        $('.ui.modal').modal('hide')
        router.replace('/blog?slug=' + res.data.blog.slug)
      }      
    })
  }

  render() {

    if(this.state.user) {
      var user = this.state.user;
      var currentUser = this.props.user.profile || {};
      return (
        <div>
          <div className="ui modal small form-blog">
            <div className="header">Создание блога</div>

            <div className="image content">
              <div className="ui form">
                <p>Начните публиковать посты от имени вашей организации/компании, создав отдельную блог-страницу</p>
                <div className="field">
                  <input ref={(input) => {this.blogTitle = input}} onChange={(e) => {this.setState({tempBlog: { ...this.state.tempBlog, blogTitle:  e.target.value}})}} type="text" name="blogTitle" placeholder="Название блога" />
                </div>
              </div>
            </div>
            <div className="actions">
              <div className="ui button primary" onClick={() => this.createBlog()}>Далее</div>
            </div>
          </div>
          <Header />
          <div className="userbar block block-shadow">
            
            <div className="user block-vertical">
              <div className="image">
                <Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
                  <Avatar color={`#eee`} fgColor={`#eee`} round={true} size={95} src={user.userImage} name={user.userName} />
                </a></Link>
                <div onClick={() => {this.fileUploader.click()}} data-position="bottom left" data-tooltip="Загрузить изображение" data-inverted="" className={(user.userImage) ? 'edit' : 'edit visible'}>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <input onChange={(e) => {this.handleUpload(e)}} type="file" ref={(file) => {this.fileUploader = file}} className="ui hidden" />
                </div>
              </div>
              <div className="content">
                <div className="description">{user.userDescription}</div>
                <h2 className="fullname">{user.userName}</h2>
                <div className="actions">
                  <SubscribeButton id={user._id} subscribeText="Подписаться" unsubscribeText="Отписаться" />
                  {user.userSocials.map((item, i) => {
                    var slug = item.title.toLowerCase().split(/[ ,]+/).join(' ');
                    return (<a key={i} href={item.link} target="_blank"><button className={'ui social circular icon button small ' }>
                            <i className={'fa icon fa-' + slug}></i>
                          </button></a>)
                  })}
                </div>
              </div>
            </div>
          </div>
          <Statistic userID={this.state.user._id} />
        	<style jsx>{`
            .form-blog .form {
              width:100%;
            }
            .form-blog p {
              margin-top:0px;
              padding-top:0px;
            }
            .userbar {
              box-shadow:0px 11px 20px 0px rgba(0, 0, 0, 0.03)
            }
            .form-blog .form .field input {
              font-size:25px;
              border:0px;
              padding:10px 0px;
            }
            .userbar .user {
              padding:0px;
            }
            .header {
              display:flex;
              flex-direction:row;
            }
            .header a {
              margin-right:24px;
              color:#333;
              text-transform:lowercase;
            }
            .user {
              display:flex;
              flex-direction:row;
              align-items:center;
            }
            .user .content {
              margin-left:15px;
            }
            .user .content h2 {
              margin-top:0px;
              margin-bottom:7px;
              font-weight:100;
              font-size:22px;
            }
            .user .content .actions .social {
              background:#eee;
            }
            .user .content .actions .social:hover {
              background:#c0c0c0;
            }

            .user .content .description {
              font-size:16px;
            }

            .user .image .edit {
              position:absolute;
              width:100%;
              height:100%;
              display:flex;
              justify-content:center;
              align-items:center;
              left:0px;
              top:0px;
            }

            .user .image {
              position:relative;
            }

            .user .image .edit i {
              font-size:50px;
              opacity:0;
              transition:0.2s all ease;
            }
            .user .image .edit.visible i {
              opacity:0.05
            }

            .user .image .edit:hover i {
              opacity:0.5;
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
      isLoaded: false
    }
  }

  componentWillMount() {
    var id = this.props.userID;
    getUserStats(id).then((res) => {
      this.setState({ ...res.data })
    }).then(() => {
      this.setState({isLoaded: true})
    })
  }

  componentDidMount() {
    this.setState({isLoaded: true})
  }

  componentWillReceiveProps(nextProps) {
    var id = nextProps.userID;
    getUserStats(id).then((res) => {
      this.setState({ ...res.data })
    }).then(() => {
      this.setState({isLoaded: true})
    })
  }

  render() {
    if(this.state.isLoaded) {
      return (
          <div className="block stats">
            <div className="summary statistics mini">
              <div className="statistic">
                <div className="value">
                  {this.state.score}
                </div>
                <div className="label">
                  балл.
                </div>
              </div>
            </div>
            <div className="common">
              <div className="statistic">
                <div className="value">
                  {this.state.likes}
                </div>
                <div className="label">
                  лайк.
                </div>
              </div>
              <div className="statistic">
                <div className="value">
                  {this.state.posts}
                </div>
                <div className="label">
                  публ.
                </div>
              </div>
              <div className="statistic">
                <div className="value">
                  {this.state.comments}
                </div>
                <div className="label">
                  комм.
                </div>
              </div>
            </div>
            <div className="blog" data-position="bottom right" data-tooltip="Создать блог" data-inverted="">
              <div onClick={() => { $('.ui.modal').modal('show'); this.blogTitle.focus() }} className="image ui circular">
                <i className="fa fa-plus"></i>
              </div>
            </div>
            <style jsx>{`
              .stats {
              display:flex;
              align-items:center;
              position:relative;
            }
            .stats .summary {
              min-width:90px;
              position:relative;
              padding-left:15px;
            }
            .stats .summary::after {
              position:absolute;
              left:100%;
              top:50%;
              margin-top:-10px;
              font-size:21px;
              content: '=';
            }
            .stats .common {
              display:flex;
              justify-content:center;
              align-items:center;
              margin-left:40px;
            }

            .stats .statistic {
              text-align:center;
              margin-right:20px;
            }
            .stats .statistic .value {
              font-size:20px;
            }
            .stats .blog {
              position:absolute;
              right:0px;
              top:0px;
              padding:17px 30px;
            }
            .stats .blog .image {
              width:40px;
              height:40px;
              background:#eee;
              float:right;
              display:flex;
              justify-content:center;
              align-items:center;
              cursor:pointer;
            }
            .stats .blog i {
              opacity:0.1;
              transition:0.2s all ease;
            }
            .stats .blog .image:hover i {
              opacity:1.0;
            }
            `}</style>
          </div>        
      )
    } else {
      return <Blank />
    }
  }
}


class Blank extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="block">
        <div className="blank avatar"></div>
        <div className="blank avatar"></div>
        <div className="blank avatar"></div>
        <style jsx>{`
          .block { 
            display:flex;
            flex-direction:row;
          }

          .block .avatar {
            margin-right:20px;
          }
        `}</style>
      </div>
    );
  }
}


export default connect(state => state)(UserBar)