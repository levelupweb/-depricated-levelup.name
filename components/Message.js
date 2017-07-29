import React from 'react';
import { connect } from 'react-redux';

// actions
import { hideMessage } from '../actions/app.js'

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message, dispatch } = this.props
    if(message) {
      const { title, description, isClosable, isActive } = message
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
              {isClosable && (<i onClick={() => {dispatch(hideMessage())}} className="fa fa-close"></i>) }
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

export default connect()(Message)