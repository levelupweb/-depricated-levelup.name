import React from 'react';
import { connect } from 'react-redux';
import { subscribeToUser } from '../actions/user'
import cookies from 'js-cookie'

// This.props.id = Id пользователя, на которого оформляется подписка
// This.token = токен активного пользователя
// This.props.user.profile = Профиль активного пользователя

class SubscribeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	isSubscribed: false
    }
    this.token = cookies.get('x-access-token');
  }

  componentWillMount() {
  	let currentUser = this.props.user.profile
  	if(currentUser.userSubscriptions.indexOf(this.props.id) != -1) {
  		this.setState({
  			isSubscribed: true
  		})
  	}  
  }

  handleSubscription(token, id) {
    subscribeToUser(token, id).then((res) => {
      console.log(res.data); // Handle response
      this.setState({
      	isSubscribed: !this.state.isSubscribed
      })
    })
  }

  render() {
  	if(this.state.isSubscribed) {
  		return (
  			<a onClick={() => {this.handleSubscription(this.token, this.props.id)}} className="button circular small ui">
		        Отписаться от автора
		    </a>	
      	)
  	} else {
	    return (
			<a onClick={() => {this.handleSubscription(this.token, this.props.id)}} className="button circular small ui primary">
				Подписаться на автора
			</a>	
	    )
	}
  }
}

export default connect((store) => store)(SubscribeButton)

