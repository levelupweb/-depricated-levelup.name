// Important
import React from 'react';
import { connect } from 'react-redux'

// Utils
import { UI } from '../../utils/initScripts.js'

// Actions
import { setFace, setUserFaces } from '../../actions/user.js'
import Avatar from 'react-avatar'

class SwitchFace extends React.Component {
  constructor(props) {
	  super(props);
  }

  // React Lifecycle
  componentWillMount() {
  	const { currentUser, defaultFace, dispatch } = this.props
  	dispatch(setUserFaces(currentUser))
  	.then(() => {
  		var { userFaces } = this.props
			var face = userFaces.faces.filter((face) => {
			  return face._id == (defaultFace ? defaultFace : currentUser._id);
			});
  		dispatch(setFace(face[0]))
  	})
  }

  componentDidMount() {
	  UI()
	  $('.ui.dropdown')
	  .dropdown();
	}

  render() {
  	const { size, userFaces, currentUser, imageSize, dispatch } = this.props
  	const { current, faces } = userFaces
	  if (current) {
	  	const { image, title, description } = current
		  return (
		    <div className={`switch ${size}`}>
	        <div className="user-wrapper dropdown ui">
	         	<div className="user">
              <Avatar 
	             	color={`#46978c`} 
	             	round={true} 
	             	size={imageSize || 32} 
	             	src={image} 
	             	name={title} />
              <div className="content">
              	<span className="name">
              		{title}
              	</span>
              	<span className="description">
              		{description}
              	</span>
              </div>
	            </div>
	            <div className="menu left">
	            	<Faces 
	            		faces={faces}
	            		dispatch={dispatch} />
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
    this.dispatch = this.props.dispatch;
  }

  // React Lifecycle
  componentDidMount() {
  	UI();
  	$('.ui.dropdown')
  	.dropdown()
  }

  // Specific Methods
  renderFaces(faces) {
  	return faces.map((face, i) => {
  		const { title, image } = face;
  		const instance = (face.title) ? 'blog' : 'user';
  		face.instance = instance
       	return (
       		<div 
	      		onClick={() => {this.dispatch(setFace(face))}} 
	      		className="item" 
	      		key={i}>
	        <Avatar 
	        	color={`#46978c`} 
	        	round={true} 
	        	size={20} 
	        	src={image} 
	        	name={title} />
	        <span>
	          {title}
	        </span>
	        <style jsx>{`
						.item {
							padding:10px;
							cursor:pointer;
							display:flex;
							align-items:center;
						}
						.item:hover {
							background:#eee;
						}
						.item span {
							margin-left:7px;
						}
	        `}</style>
     		</div> 
     	)
    })
  }

  render() {
	  const { faces } = this.props
		if(!!faces) {
			return (
				<div className="faces">
		      {this.renderFaces(faces)}
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
