// Important
import React from "react";
import { connect } from "react-redux";
import cookies from "js-cookie";
import router from "next/router";

// Actions
import {
  setPostField,
  prepareNewPost,
  createPost,
  displayStatus,
  setPost
} from "../../../actions/post.js";

// Utils
import randomString from "../../../utils/randomString.js";
import createSlug from "../../../utils/createSlug.js";

// Components
import Sidebar from "./sidebar.js";
import Textarea from "./textarea.js";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;
    this.token = cookies.get("x-access-token");
  }

  // React Lifecycle

  componentWillMount() {
    const { defaultPost, currentUser, postState, dispatch } = this.props;
    if (defaultPost) {
      dispatch(setPost(defaultPost));
    } else {
      dispatch(prepareNewPost("post")).then(() => {
        dispatch(createPost(this.token, this.props.postState.post)).then(id => {
          router.replace("/editor?id=" + id, "/editor?id=" + id, {
            shallow: true
          });
        });
      });
    }
  }

  // Isomorphic Methods

  getField(field) {
    const { postState } = this.props;
    return postState.post[field];
  }

  handleChange(field, value) {
    this.dispatch(setPostField(field, value));
  }

  // Specific Methods

  handleSlug(value) {
    this.dispatch(setPostField("slug", createSlug(value.slice(0, 35))));
    this.dispatch(setPostField("title", value));
  }

  render() {
    const { postState, currentUser } = this.props;
    return (
      <div className="module-wrapper">
        <Sidebar user={currentUser} post={postState.post} />
        <div>
          <div className="inner blocks">
            <div className="header block-item">
              <Header
                onChange={(field, value) => {
                  this.handleSlug(value);
                }}
                value={postState.post.title}
                status={postState.status}
              />
            </div>
            <div className="description block-item">
              <Description
                onChange={value => {
                  this.handleChange("description", value);
                }}
                value={this.props.postState.post.description}
              />
            </div>
            <div className="textarea block-item">
              <Textarea
                value={this.getField("content")}
                onChange={value => {
                  this.handleChange("content", value);
                }}
              />
            </div>
          </div>
        </div>
        <style jsx>{`
          .description {
            padding-top: 20px !important;
          }
        `}</style>
      </div>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, status, onChange } = this.props;
    return (
      <div className="header">
        <div className="title">
          <input
            onInput={e => {
              onChange("title", e.target.value);
            }}
            type="text"
            placeholder="Заголовок вашего поста"
            value={value || ""}
          />
        </div>
        <div className="status">
          {status &&
            <span>
              {status}
            </span>}
        </div>
        <style jsx>{`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .header .title {
            width: 100%;
          }
          .header .title input {
            font-size: 20px;
            border: 0px;
            width: 100%;
            outline: 0px;
          }
          .header .status {
            color: #c0c0c0;
            white-space: nowrap;
            animation: pulse 1s infinite;
          }
          @keyframes pulse {
            0% {
              opacity: 0.5;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0.5;
            }
          }
        `}</style>
      </div>
    );
  }
}

class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, onChange } = this.props;
    return (
      <div className="description">
        <textarea
          maxLength="140"
          onInput={e => {
            onChange(e.target.value);
          }}
          placeholder="Описание к вашему посту"
          value={value || ""}
        />
        <style jsx>{`
          .description textarea {
            width: 100%;
            font-size: 17px;
            border: 0px;
            outline: 0px;
            height: 120px;
            overflow: hidden;
          }
        `}</style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postState: state.postState,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Editor);
