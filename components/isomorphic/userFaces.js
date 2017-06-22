// Important
import React from 'react';

export default class UserFaces extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="ui inline dropdown right face">                  
            <Avatar 
              color={`#46978c`} 
              round={true} 
              size={32} 
              src={(this.state.currentFace.faceImage) ? this.state.currentFace.faceImage : user.userImage} 
              name={this.state.currentFace.faceName} 
            />
            {(this.state.isRevealed) && <i className="fa fa-angle-down icon"></i> }
            <div className="menu left">
              <div className="item" onClick={() => {this.setType('user', user)}}>
                <Avatar color={`#46978c`} round={true} size={20} src={user.userImage} name={user.userName} />
                <span>{user.userName}</span>
              </div>
              {(this.state.faces) &&
                this.state.faces.map((item, i) => {
                  return (
                    <div onClick={() => {this.setType('blog', item)}} className="item" key={i}>
                      <Avatar color={`#46978c`} round={true} size={20} src={item.blogImage} name={item.blogTitle} />
                      <span>{item.blogTitle}</span>
                    </div>
                  )})
                }
            </div>
          </div>
    );
  }
}
