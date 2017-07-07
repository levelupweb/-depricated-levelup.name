// Important
import React from 'react';
import { connect } from 'react-redux'

// Components
import Header from './isomorphic/header/index.js'
import Sidebar from './isomorphic/sidebar/index.js'

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.module = this.props.module;
    this.isAccessable = this.props.app.accessable
  }

  render() {
    if(this.isAccessable) {
    	return <Component 
        module={this.props.module} 
        children={this.props.children}
      />
    } else {
      return <AccessDenied />
    }
  }
}

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.module
    }
  }

  render() {
    var module = this.state;
    var className = (module.moduleShowSidebar) ? module.moduleClassName + ' main' : module.moduleClassName + ' full main'

    return (
      <div className="module-wrapper">
        {module.moduleShowSidebar &&
          <Sidebar />
        }
        <div className={(module.moduleShowHeader) ? `${className}` : `${className} no-header`}>
          <div className="inner">
            {module.moduleShowHeader && 
              <Header />
            }
            <div className="after-header">
              {module.beforeChildren}
              {module.child}
              {module.afterChildren}
            </div>
          </div>
          {/* <Banner /> */}
        </div>
      </div>
    );
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

export default connect((state) => state)(Container)
