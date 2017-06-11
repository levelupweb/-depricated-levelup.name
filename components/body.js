import React from 'react';
import { connect } from 'react-redux'
import Header from './header/'
import SimpleHeader from './simpleheader.js'

class Body extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.app.accessable) {
    	return (
        <Content 
          page={this.props.page} 
          children={this.props.children} 
        />
      )
    } else {
      return (
        <Error />
      )
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

var Error = (props) => {
  return (
    <div>Ошибка доступа</div>
  )
}


class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = this.props.page,
        children = this.props.children,
        before = data.beforeChildren,
        after = data.afterChildren,
        content, title, header;

    // title
    if (data.pageShowTitle) {
      title = () => {
        return (
          <h1 className="ui header">
            {data.pageTitle}
            <div className="sub header">{data.pageDescription}</div>
          </h1>
        )
      }
    }

    // header
    if(data.pageShowHeader) {
      header = <Header/>
    }

    // content
    switch(data.slug) {
      case 'user': case 'post': case 'blog':
      content = (
        <div>
          {title}
          {children}
        </div>
      )
      break;
      default: 
      content = (
        <div className="block">
          {title}
          {children}
        </div>
      )
      break;
    }

    return (
      <div className={(data.pageShowSidebar) ? `${data.pageClassnames} main` : `${data.pageClassnames} full main`}>
        <div className="inner">
            {header}
            <div className="after-header">
              {before}
              {content} 
              {after}
            </div>
        </div>
        <Banner />
      </div>
    );
  }
}

export default connect((state) => state)(Body)
