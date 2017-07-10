// Important
import React from 'react';
import { connect } from 'react-redux'
import cookies from 'js-cookie'

// Components
import Header from './isomorphic/header/index.js'
import Sidebar from './isomorphic/sidebar/index.js'

// Actions
import { handleSuccess, handleWarn, handleError, hideMessage } from '../actions/app.js'

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.module = this.props.module;
    this.isAccessable = this.props.app.accessable;
  }

  render() {
    if(this.isAccessable) {
    	return <Component 
        module={this.props.module} 
        children={this.props.children}
        message={this.props.message}
        dispatch={this.props.dispatch}
      />
    } else {
      return <AccessDenied />
    }
  }
}

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;
    this.state = {
      ...this.props.module
    }
  }

  componentDidMount() {
    var hasVisited = cookies.get('hasVisited');
    if (!hasVisited) {
      this.dispatch(handleWarn(
        'Данный сайт использует ваши cookie-данные для лучшей работы', true
      ));
    }
    cookies.set('hasVisited', true)
  }

  render() {
    var module = this.state;
    var className = (module.moduleShowSidebar) ? module.moduleClassName + ' main' : module.moduleClassName + ' full main'
    
    return (
      <div className={(module.moduleShowHeader) ? 'module-wrapper' : 'module-wrapper no-header'}>
        {module.moduleShowSidebar &&
          <Sidebar />
        }
        <div className={className}>
          <div className="inner">
            {module.moduleShowHeader && <Header /> }
            <div className="after-header">
              {module.beforeChildren}
              {module.child}
              {module.afterChildren}
            </div>
          </div>
          {/* <Banner /> */}
        </div>
        <Message dispatch={this.props.dispatch} message={this.props.message} />
      </div>
    );
  }
}

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch
  }

  render() {
    if(this.props.message) {
      var { title, description, isClosable, isActive } = this.props.message
      return (
        <div className="message-wrapper" className={isActive ? 'message-wrapper active' : 'message-wrapper'}>
          <div className="message">
            <div className="content">
              <div className="title">
                {title}
              </div>
              <div className="description">
                {description}
              </div>
            </div>
            <div className="actions">
              {isClosable && (<i onClick={() => {this.dispatch(hideMessage())}} className="fa fa-close"></i>) }
            </div>
          </div>

          <style jsx>{`
            .message-wrapper {
              position:fixed;
              right:0px;
              bottom:-200px;
              margin:20px;
              transition:0.2s all ease;
              z-index:999;
            }
            .message-wrapper.active {
              bottom:0px;
            }
            .message-wrapper .message {
              background:#222;
              border-radius:5px;
              padding:20px;
              transition:0.2s all ease;
              opacity:0.5;
              display:flex;
              align-items:flex-start;
              justify-content:space-between;
              max-width:300px;
              min-width:250px;
            }
            .message-wrapper.active .message {
              opacity:1.0;
            }
            .message .title {
              color:#fff;
              font-size:17px;
              margin-bottom:7px;
            }
            .message .description {
              color:#c0c0c0;
            }
            .message .fa-close {
              margin-left:20px;
              padding:3px;
              color:#fff;
              opacity:0.5;
              transition:0.2s all ease;
              cursor:pointer;
            }
            .message .fa-close:hover {
              opacity:1.0;
            }
          `}</style>
        </div>
      );
    } else {
      return null
    }
  }
}



var Banner = (props) => {
  return (
    <div className="advert">
      <div className="title">BANNER</div>
    </div>
  )
}

var AccessDenied = (props) => {
  return (
    <div>Ошибка доступа</div>
  )
}

function mapStateToProps(state) {
  return { 
    app: state.app,
    message: state.message
  }
}


export default connect(mapStateToProps)(Container)

