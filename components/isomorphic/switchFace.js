// Important
import React from 'react';
import { connect } from 'react-redux'

// Utils
import { UI } from '../../utils/initScripts.js'

// Actions
import { setFace } from '../../actions/user.js'
import Avatar from 'react-avatar'

class SwitchFace extends React.Component {
   constructor(props) {
	   super(props);
	   this.dispatch = this.props.dispatch;
	   this.currentUser = this.props.currentUser;
	   this.imageSize = 32;
   }

   render() {

   	var face = this.props.userFaces.current, 
	   	 faces = this.props.userFaces.faces;
	  	if (face) {
		   return (
		      <div className={`switch ${this.props.size}`}>
		         <div className="user-wrapper dropdown ui">
		         	<div className="user">
		               <Avatar 
		               	color={`#46978c`} 
		               	round={true} 
		               	size={this.imageSize} 
		               	src={face.image} 
		               	name={face.title} 
		               />
		               <div className="content">
		                	<span className="name">
		                		{face.title}
		                	</span>
		                	<span className="description">
		                		{face.description}
		                	</span>
		               </div>
		            </div>
		            <div className="menu left">
		            	<Faces 
		            		faces={faces}
		            		dispatch={this.dispatch}
		            	/>
		            </div>
		         </div>
		         <style jsx>{`
		         	.ui.active.dropdown>.menu {
		         		margin-top:15px!important;
		         	}
						.switch .user {
							display:flex;
							align-items:center;
							flex-direction:row;
							flex-wrap:wrap;
						}
						.switch .content {
							display:flex;
							flex-direction:column;
							margin-left:10px;
							max-width:150px;
						}
						.switch .content .name {
							font-weight:bold;
						}
						.switch .content .description {
							font-size:14px;
						}
						.switch.small .description {
							display:none;
						}
						.switch.tiny .content {
							display:none;
						}
		         `}</style>
		      </div>
		   );
		} else {
			return null
		}
   }
}


class Faces extends React.Component {
   constructor(props) {
    	super(props);
   }

   componentDidMount() {
	  	UI();
	  	$('.ui.dropdown')
	  	.dropdown()
   }

   render() {
	   var faces = this.props.faces;
		if(faces.length > 0) {
			return (
				<div className="faces">
		      {faces.map((face, i) => {
		         return (
	          	<div onClick={() => {this.props.dispatch(setFace(face))}} 
	          		className="item" 
	          		key={i}>
		            <Avatar 
		            	color={`#46978c`} 
		            	round={true} 
		            	size={20} 
		            	src={face.image} 
		            	name={face.title} />
		            <span>
		            	{face.title}
		            </span>
	         	</div>
		      )})}
		      <style jsx>{`
					.faces .item {
						padding:10px;
						cursor:pointer;
						display:flex;
						align-items:center;
					}
					.faces .item:hover {
						background:#eee;
					}
					.faces .item span {
						margin-left:7px;
					}
		      `}</style>
		      </div>
			)
		} else {
			return null
		}
   }
}

function mapStateToProps(state) {
  return { 
  	currentUser: state.currentUser,
  	userFaces: state.userFaces
  }
}



export default connect(mapStateToProps)(SwitchFace)
