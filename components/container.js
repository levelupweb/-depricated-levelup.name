// Important
import React from 'react';
import { connect } from 'react-redux'

// Components
import Header from './isomorphic/header/index.js'
import SimpleHeader from './isomorphic/header/simple.js'
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
        <Sidebar />
        <div className={className}>
          <div className="inner">
              <Head header={module.moduleShowHeader} />
              <div className="after-header">
                {module.beforeChildren}
                <Content module={module}>{module.child}</Content>
                {module.afterChildren}
              </div>
          </div>
          <Banner />
        </div>
      </div>
    );
  }
}

var Head = (props) => {
  return props.header ? <Header /> : <SimpleHeader block={true} />
}

var Content = (props) => {
  var content;
  switch(props.module.slug) {
    case 'user': case 'post': case 'blog':
    content = (
      <div>
        <Title title={props.module.moduleShowTitle} />
        {props.children}
      </div>
    )
    break;
    default: 
    content = (
      <div className="block">
        <Title title={props.module.moduleShowTitle} />
        {props.children}
      </div>
    )
    break;
  }
  return content
}

var Title = (props) => {
  if(props.title) {
    return (
      <h1 className="ui header">
        {module.moduleTitle}
        <div className="sub header">{module.moduleDescription}</div>
      </h1>
    )
  } else {
    return null
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
