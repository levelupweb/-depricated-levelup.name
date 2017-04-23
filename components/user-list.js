import React from 'react';

export default class UserList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	users: []
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="ui items user-list-items">
      	{this.props.users.map((item) => {
      		return <User data={item} key={item.id} />
      	})}
      </div>
    );
  }
}


class User extends React.Component {
	render() {
		return (
			<div className="item">
				<Avatar data={this.props.data} />
				<h4 className="ui header">
					<a>{this.props.data.name}</a>
					<div className="sub header">{this.props.data.description}</div>
				</h4>
				<div className="updates">
					{(this.props.data.updates) ? `+${this.props.data.updates}` : ``} 
				</div>
			</div>

		)
	}
}

class Avatar extends React.Component {
	render() {
		return(
			<div>
			{(this.props.data.hasOwnProperty('image')) ?
				<div className="user-image">
					<a href="#"><img src={this.props.data.image} /></a>
				</div>
				:
				<div className="user-image">
					<a href="#">
						<div className={(this.props.data.updates) ? `red ui mini button` : `ui mini button`}>
								{this.props.data.name.charAt(0)}
						</div>
					</a>
				</div>
			}
			</div>
		)
	}
}