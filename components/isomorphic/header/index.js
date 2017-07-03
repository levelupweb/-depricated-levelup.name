// Important
import React from 'react';
import { connect } from 'react-redux'

// Actions
import { makeSearch } from '../../../actions/app.js'

// Components
import Link from 'next/link'
import User from '../user.js'
import Avatar from 'react-avatar'
import UserList from '../userList.js'
import PostList from '../postList.js'
import BlogList from '../blogList.js'

class Header extends React.Component {
   constructor(props) {
		super(props);
		this.currentUser = this.props.currentUser;
		this.state = {
			results: {
				query: null,
				users: [],
				posts: [],
				blogs: [],
				isRevealed: false
			}
		}
   }

   handleTyping(e) {
		var query = e.target.value;
		this.setState({
			query: e.target.value
		})
		if(query.length > 0) {
			makeSearch(query).then((res) => {
				this.setState({
					results: res.data
				})
			})
		}
   }

   render() {
    	return (
      <div className="wrapper">
			<div className="header">
	   		<div className="menu">
   				<div className="item">
   					<User id={this.currentUser._id} size="dropdown" imageSize="36" />
   				</div>
   				<Link href="/"><a className="item ui button primary circular">
				    	Лента
				  	</a></Link>
				  	<Link href="/editor"><a className="item ui button basic circular icon">
				    	<i className="fa fa-pencil"></i>
					</a></Link>
				  	<Link href="/editor"><a className="item ui button basic circular icon">
				    	<i className="fa fa-video-camera"></i>
					</a></Link>
					<a className="item ui button basic circular icon">
				    	<i className="fa fa-bell-o"></i>
					</a>
					<a className="item ui button basic circular icon">
				    	<i className="fa fa-search"></i>
					</a>
				</div>
			</div>
			<style jsx>{`
			 	.wrapper {
					position:fixed;
					left:0px;
					top:0px;
					width:100%;
					background:#fff;
					z-index:999;
					box-shadow:0px 1px 2px 0 rgba(34, 36, 38, 0.15);
					border-bottom:1px solid #eee;
					padding: 10px 27px;
			 	}
			 	.header .menu {
			 		display:flex;
			 		flex-direction:row;
			 		align-items:center;
			 		width:1000px;
			 	}
			 	.header .menu .item {
			 		margin-right:10px;
			 		font-weight:100;
			 	}
			 	.header .menu .item.basic {
			 		box-shadow:none!important;
			 	}
		 	`}</style>
		</div>
    );
  }
}



export default connect((state) => state)(Header)