import React from 'react';
import User from '../user'
import Link from 'next/link'
import { connect } from 'react-redux'
import { getUserById, getUserLikesCount, getUserPostsCount, uploadImage, updateUserById } from '../../actions/user.js'
import { createBlog, getAllBlogs } from '../../actions/blog.js'
import Loader from '../loader.js'
import Avatar from 'react-avatar'
import config from '../../app.config.js'
import cookies from 'js-cookie'
import router from 'next/router'

class UserBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      tempBlog: {
        blogTitle: null
      }
    }

    this.currentUser = this.props.user.profile;
    this.token = cookies.get('x-access-token');
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      user: this.props.userdata
    })
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      user: nextProps.userdata
    })
  }

  handleUpload(e) {
    var image = e.target.files[0];
    if (image && this.currentUser) {
      var formData = new FormData();
      formData.append('userImage', image);
      formData.append('userID', this.currentUser._id)
      uploadImage(this.token, this.currentUser._id, formData)
      .then((res) => {
        var path = config.storage + 'users/' + this.state.user._id + '/' + res.data.filename
        this.setState({
          user: {
            ...this.state.user,
            userImage: path
          }
        })
      })
      .then(() => {
        updateUserById(this.currentUser._id, this.state.user).then(() => {
          console.log('Uploaded Successfully')
        })
      })
    }
  }

  createBlog() {
    createBlog(this.token, {
      blogTitle: this.state.tempBlog.blogTitle
    }).then((res) => {
      // Редирект на страницу только что созданного блога
      // router.push('blog?slug=' + res.data.slug)
    })
  }


  render() {
    console.log(this.state.tempBlog)
    if(this.state.user) {
      var user = this.state.user;
      var currentUser = this.props.user.profile || {};
      return (
        <div>
          <div className="ui modal small form-blog">
            <div className="header">Создание блога</div>
            <div className="image content">
              <div className="ui form">
                <p>Начните создание своего блога с названия. Нельзя использовать специальные символы (~, #, & и т.д)</p>
                <div className="field">
                  <label>Название</label>
                  <input ref={(input) => {this.blogTitle = input}} onChange={(e) => {this.setState({tempBlog: { ...this.state.tempBlog, blogTitle:  e.target.value}})}} type="text" name="blogTitle" placeholder="Название блога" />
                </div>
              </div>
            </div>
            <div className="actions">
              <div className="ui button">Отмена</div>
              <div className="ui button primary" onClick={() => this.createBlog()}>Далее</div>
            </div>
          </div>
          <div className="userbar block block-shadow">
            <div className="header">
              <a onClick={() => {window.history.back()}}><strong><i className="fa fa-angle-left"></i> Назад</strong></a>
              <Link href={{ pathname: 'settings', query: { slug: this.state.user.slug }}}><a href="#">Настройки</a></Link>
            </div>
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
                  <a href="#" className="ui button circular primary ">Подписаться</a>
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
          <div className="block stats">
            <div className="summary statistics mini">
              <div className="statistic">
                <div className="value">
                  2,616
                </div>
                <div className="label">
                  балл.
                </div>
              </div>
            </div>
            <div className="common">
              <div className="statistic">
                <div className="value">
                  23
                </div>
                <div className="label">
                  лайк.
                </div>
              </div>
              <div className="statistic">
                <div className="value">
                  5
                </div>
                <div className="label">
                  публ.
                </div>
              </div>
              <div className="statistic">
                <div className="value">
                  16
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
          </div>
        	<style jsx>{`
            .form-blog .form {
              width:100%;
            }
            .form-blog p {
              margin-top:0px;
              padding-top:0px;
            }
            .form-blog .form .field input {
              font-size:25px;
              border:0px;
              padding:10px 0px;
            }
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
            .userbar {
              background: #ffffff; /* Old browsers */
              background: -moz-linear-gradient(-45deg, #ffffff 36%, #ffffff 44%, #ffffff 58%, #f3f3f3 100%); /* FF3.6-15 */
              background: -webkit-linear-gradient(-45deg, #ffffff 36%,#ffffff 44%,#ffffff 58%,#f3f3f3 100%); /* Chrome10-25,Safari5.1-6 */
              background: linear-gradient(135deg, #ffffff 36%,#ffffff 44%,#ffffff 58%,#f3f3f3 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f3f3f3',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
            }
            .userbar .user {
              padding:0px;
              margin-top:25px;
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
              margin-top:15px;
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
      <div className="statistic">
        <div className="blank avatar"></div>
        <div className="blank avatar"></div>
        <div className="blank avatar"></div>
        <style jsx>{`
          .statistic { 
            display:flex;
            flex-direction:row;
          }

          .statistic .avatar {
            margin-left:20px;
          }
        `}</style>
      </div>
    );
  }
}


export default connect(state => state)(UserBar)