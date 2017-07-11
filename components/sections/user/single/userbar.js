// Important
import React from 'react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'
import router from 'next/router'

// Actions
import { getUserById, updateUserById, getUserStats } from '../../../../actions/user.js'
import { createBlog, getUserBlog } from '../../../../actions/blog.js'
import { updateImage } from '../../../../actions/app.js'

// Components
import SubscribeButton from '../../../isomorphic/subscribeButton.js'
import EditableInput from '../../../isomorphic/editableInput.js'
import Loader from '../../../isomorphic/loader.js'
import Avatar from 'react-avatar'
import User from '../../../isomorphic/user.js'
import Link from 'next/link'

class UserBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null }
    this.token = cookies.get('x-access-token');
  }

  // React Lifecycle
  componentWillMount() {
    this.setState({
      ...this.state,
      user: this.props.user,
      tempBlog: {
        ...this.state.tempBlog,
        blogOwner: this.props.user._id
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      user: nextProps.user
    })
  }

  // Specific Methods
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

  render() {
    var user = this.state.user;
    if (user) {
      var currentUser = this.props.currentUser;
      return (
        <div className="wrapper">
          <div className="userbar">
            <div className="user">
              <div className="image">
                <Link href={{ pathname: 'user', query: { slug: user.slug }}}><a>
                  <Avatar color={`#eee`} fgColor={`#eee`} round={true} size={95} src={user.userImage} name={user.userName} />
                </a></Link>
                <div onClick={() => {this.fileUploader.click()}} data-position="left center" data-tooltip="Загрузить изображение" data-inverted="" className={(user.userImage) ? 'edit' : 'edit visible'}>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <input onChange={(e) => {this.handleUpload(e)}} type="file" ref={(file) => {this.fileUploader = file}} className="ui hidden" />
                </div>
              </div>
              <div className="content">
                <EditableInput 
                  value={user.userDescription} 
                  entryType="user"
                  entryID={user._id}
                  field="userDescription"
                  title="Должность/профессия"
                  size="normal"
                  align="center" />
                <EditableInput 
                  value={user.userName} 
                  entryType="user"
                  entryID={user._id}
                  field="userName"
                  title="Полное имя пользователя"
                  size="large"
                  align="center" />
                <div className="actions">
                  {this.currentUser &&
                    <EditButton 
                      user={user} 
                      currentUser={this.currentUser} />
                  }
                  <SubscribeButton 
                    additionalClasses="small" 
                    entryType="user"
                    entryID={user._id} 
                    subscribeText="Подписаться" 
                    unsubscribeText="Отписаться"  />
                  {user.userSocials &&
                    user.userSocials.map((item, i) => {
                      var slug = item.title.toLowerCase().split(/[ ,]+/).join(' ');
                      return (
                        <a key={i} href={item.link} target="_blank"><button className={'ui social circular icon button small ' }>
                          <i className={'fa icon fa-' + slug}></i>
                        </button></a>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div>
            <Statistic currentUserID={currentUser._id} userID={this.state.user._id} />
          </div>
        	<style jsx>{`
            .userbar.block-shadow {
              border:0px;
            }
            .form-blog .form {
              width:100%;
            }
            .form-blog p {
              margin-top:0px;
              padding-top:0px;
            }
            .userbar {
              border-bottom:1px solid #eee;
              padding:50px 15px;
              text-align:center;
            }
            .userbar .user {
              padding:0px;
              display:flex;
              flex-direction:column;
              align-items:center;
              justify-content:center;
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
            .user .actions {
              margin-top:7px;
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
      isLoaded: false,
      blog: null
    }
  }

  componentWillMount() {
    var id = this.props.userID;
    getUserStats(id).then((res) => {
      this.setState({ ...res.data })
    })
    .then(() => {
      this.setState({isLoaded: true})
    })
  }

  componentDidMount() {
    this.setState({isLoaded: true})
  }

  componentWillReceiveProps(nextProps) {
    var id = nextProps.userID;
    if(id != this.props.userID) {
      console.log('Update state...')
      getUserStats(id).then((res) => {
        this.setState({ 
          ...res.data,
          isLoaded: true 
        })
      })
    }
  }

  render() {
    if(this.state.isLoaded) {
      return (
          <div className="stats">
            <div className="left">
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
                    {this.state.subscribers}
                  </div>
                  <div className="label">
                    подп.
                  </div>
                </div>
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
            </div>
            <div className="right">
              <UserBlog 
                currentUserID={this.props.currentUserID} 
                userID={this.props.userID} />
            </div>
            <style jsx>{`
            .stats {
              display:flex;
              align-items:center;
              justify-content:space-between;
              position:relative;
              padding:25px 0px;
              padding-bottom:10px;
            }
            .stats .left {
              display:flex;
              align-items:center;
              justify-content:space-between;
            }
            .stats .summary {
              min-width:90px;
              position:relative;
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
            `}</style>
          </div>        
      )
    } else {
      return null
    }
  }
}


class UserBlog extends React.Component {
  constructor(props) {
    super(props);
    this.token = cookies.get('x-access-token');
    this.state = {
      blog: null,
      isLoaded: false,
      tempBlog: {
        blogTitle: null,
        blogOwner: null
      }
    }
  }

  componentWillMount() {
    this.getBlog(this.props.userID).then(() => {
      this.setState({ isLoaded: true })
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.userID != this.props.userID) {
      this.getBlog(nextProps.userID).then(() => {
        this.setState({ isLoaded: true })
      })
    }
  }

  getBlog(id) {
    return getUserBlog(id).then((res) => {
      this.setState({ 
        blog: res.data,
        tempBlog: {
          ...this.state.tempBlog,
          blogOwner: id
        }
      })
    })
  }

  createBlog() {
    createBlog(this.token, this.state.tempBlog).then((res) => {
      if(res.data.success) {
        $('.ui.modal').modal('hide')
        router.replace('/blog?slug=' + res.data.blog.slug)
      } else {
        // handle error
        console.log(res.data)
      }      
    })
  }

  isOwner(currentUserID, id) {
    return currentUserID == id
  }

  render() {
    var blog = this.state.blog;
    if (blog == null) { 
      return (
        <div className="blog">
          <div className="ui modal small form-blog" >
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
          {this.isOwner(this.props.currentUserID, this.props.userID) && 
            <div onClick={() => { $('.form-blog.modal').modal('show'); this.blogTitle.focus() }} className="image ui circular">
              <i className="fa fa-plus"></i>
            </div>
          }
          <style jsx>{`
            .blog .image {
              width:40px;
              height:40px;
              background:#eee;
              float:right;
              display:flex;
              justify-content:center;
              align-items:center;
              cursor:pointer;
            }
            .blog i {
              opacity:0.1;
              transition:0.2s all ease;
            }
            .blog .image:hover i {
              opacity:1.0;
            }
            .form-blog .form .field input {
              font-size:25px;
              border:0px;
              padding:10px 0px;
            }
          `}</style>
        </div>
      );
    } else {
      if (this.state.isLoaded) {
        return (
          <div className="blog"  data-position="bottom right" data-tooltip={blog.blogTitle} data-inverted="">
            <div className="image">
              <Link href={{ pathname: 'blog', query: { slug: blog.slug }}}><a>
                <Avatar color={`#46978c`} round={true} size={40} src={blog.blogImage} name={blog.blogTitle} />
              </a></Link>
            </div>
            <style jsx>{`
              .blog {
                right:0px;
                top:0px;
              }
            `}</style>
          </div>
        )
      } else {
        return (
          <div className="block">
            <div className="blank avatar"></div>
          </div>
        )
      }
    }
  }
}

class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOwn: false
    }
    this.currentUser = this.props.user.profile;
  }

  componentWillMount() {
    if(this.isOwn(this.props.currentUser._id, this.props.user._id)) {
      this.setState({ isOwn: true })
    } else {
      this.setState({ isOwn: false })
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.isOwn(this.props.currentUser._id, nextProps.user._id)) {
      this.setState({ isOwn: true })
    } else {
      this.setState({ isOwn: false })
    }
  }

  isOwn(current, id) {
    if(current == id) {
      return true
    }
  }

  render() {
    return (
      <span>
        {this.state.isOwn && 
          <Link href={{ pathname: 'settings', query: { slug: this.props.user.slug }}}>
            <a className="ui button icon circular small">
              Ред.
            </a>
          </Link>
        }
      </span>
    );
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

function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser 
  }
}

export default connect(mapStateToProps)(UserBar)