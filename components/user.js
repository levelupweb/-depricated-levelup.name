import React from 'react';
import Link from 'next/link'

export default class User extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${this.props.size} user`}>
      	<div className="image">
    			<Avatar size={this.props.size} link={this.props.avatarUrl} />
    		</div>
    		<div className="content">
    			<Link href="/user"><span className="name"><a href="#">Иван К</a></span></Link>
    			<div className={(this.props.size == 'small') ? `hidden` : `description`}>Программист</div>
    		</div>

  		<style jsx>{`
			.user {
				display:inline-block;
        margin:6px 0px;
			}

      .user .image,
      .user .content {
        display:inline-block;
        vertical-align:middle;
      }

      .user.small {
        margin-bottom:6px;
      }

      .user.medium {
        margin-bottom:4px;
      }

      .user.small .image {
        width:20px;
        height:20px;
        margin:0px;
      }

      .user.medium .image {
        width:30px;
        height:30px;
      }

      .user .image a {
        display:inline-block;
      }

			.user .content {
				padding-left:15px;
			}

      .user.small .content {
        padding-left:8px;
        margin:5px 0px;
      }

			.user .content .name {
				display:block;
				font-size:17px;
				font-weight:bold;
			}

      .user.small .content .name {
        font-size:14px;
        font-weight:100;
      }

      .user.medium .content .name {
        font-size:14px;
      }

			.user .content .description {
				font-size:13px;
				color:rgba(0,0,0,0.4);
				margin-top:5px;
			}

      .user.medium .content .description {
        font-size:13px;
        margin-top:0px;
      }



  		`}</style>
      </div>
    );
  }
}


export class Avatar extends React.Component {
  render() {
    return (
      
      <div className="avatar">
        <a href="#">
          <img className={(this.props.size == 'small') ? `circular image ui` : `rounded image ui`} src="../static/img/avatar.png" />
        </a>
        <style jsx>{
          `
            .avatar {
              display:inline-block;
              vertical-align:middle;
            }
          `
        }</style>
      </div>
    )
  }
}