// Important
import React from "react";
import { connect } from "react-redux";
import cookies from "js-cookie";

// Components
import Header from "./isomorphic/header/Header.js";
import Sidebar from "./isomorphic/sidebar/index.js";
import Message from "./Message.js";
import AccessDenied from "./AccessDenied.js";

// Actions
import { handleWarn } from "../actions/app.js";

class Container extends React.Component {
  constructor(props) {
    super(props);
  }
 
  componentDidMount() {
    const { dispatch } = this.props;
    const hasVisited = cookies.get("hasVisited");
    if (!hasVisited) {
      dispatch(
        handleWarn(
          "Данный сайт использует ваши cookie-данные для лучшей работы",
          true
        )
      );
    }
    cookies.set("hasVisited", true);
  }

  render() {
    const {
      children,
      message, 
      module, 
      app 
    } = this.props;
    const {
      header,
      sidebar,
      beforeChildren,
      afterChildren,
      slug,
      classNames
    } = module;

    if (app.accessable) {
      return (
        <div className={header ? "module-wrapper" : "module-wrapper no-header"}>
          {sidebar && <Sidebar />}
          <div className={`main module-${slug} ${classNames}`}>
            <div className="inner">
              {header && <Header />}
              <div className="after-header">
                {beforeChildren}
                {children}
                {afterChildren}
              </div>
            </div>
          </div>
          <Message message={message} />
        </div>
      );
    } else {
      return <AccessDenied />;
    }
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    message: state.message
  };
}

export default connect(mapStateToProps)(Container);
