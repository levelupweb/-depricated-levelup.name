import React from 'react';
import User from '../user'
import Link from 'next/link'
import { connect } from 'react-redux'

class UserBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      user: this.props.userdata
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      user: nextProps.userdata
    })
  }

  render() {
    if(this.state.user) {
      var user = this.state.user;
      var currentUser = this.props.user.profile || {};
      return (
        <div className="userbar">
          <div className="left">
            {(user._id == currentUser._id || false) ? 
              <div className="editing">
                <Link href={{ pathname: 'settings', query: { slug: this.state.user.slug }}}>
                  <a><i className="fa fa-cog"></i></a>
                </Link>
              </div>
              : 
              <div></div>
            }
            <User id={this.state.user._id} />
          </div>
          <div className="right">
            <Statistic />
          </div>

        	<style jsx>{`
        		.userbar {
        			display:flex;
        			justify-content:space-between;
        			align-items:center;
        		}

            .userbar .left {
              display:flex;
              justify-content:center;
              align-items:center;
            }

            .userbar .left .editing {
              display:flex;
              justify-content:center;
              align-items:center;
              width:32px;
              height:32px;
              background:#eee;
              border-radius:100%;
              margin-right:10px;
            }
        	`}</style>
        </div>
      );
    } else {
      return (<div></div>)
    }
  }
}



class Statistic extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="ui statistics">
          <div className="statistic">
            <div className="value">
              0
            </div>
            <div className="label">
              нрав.
            </div>
          </div>
          <div className="statistic">
            <div className="value">
              0
            </div>
            <div className="label">
              подп.
            </div>
          </div>
          <div className="statistic">
            <div className="value">
              0
            </div>
            <div className="label">
              публ.
            </div>
          </div>
          <style jsx>{`
            .statistics .statistic {
              margin:0px 20px;
            }

            .statistics .statistic .value {
              font-size:21px!important;
              color:rgba(0,0,0,0.3);
            }

            .statistics .statistic.link {
              margin-top:auto;
              margin-bottom:auto;
            }

            .statistics .statistic.link .value .fa {
              color:rgba(0,0,0,0.5);
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
    );
  }
}

export default connect(state => state)(UserBar)