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
    this.currentUser = this.props.user.profile;
  }

  componentWillMount() {
    this.isSubscribed(this.props.id, () => {
      this.set(true)
    }, () => {
      this.set(false)
    })
  }

  componentWillReceiveProps(nextProps) {
    this.isSubscribed(nextProps.id, () => {
      this.set(true)
    }, () => {
      this.set(false)
    })
  }

  isSubscribed(id, resolve, reject) {
    if(this.currentUser) {
      if(this.currentUser.userSubscriptions.authors.indexOf(id) != -1) {
        return resolve()
      } else {
        return reject()
      }
    }
  }

  set(value) {
    this.setState({isSubscribed: value})
  }

  handleSubscription(token, id) {
    subscribeToUser(token, id).then((res) => {
      this.set(!this.state.isSubscribed)
    })
  }

  render() {
  	if(!this.state.isSubscribed) {
  		return (
  			<a onClick={() => {this.handleSubscription(this.token, this.props.id)}} className={`button circular ui primary ${this.props.additionalClasses}`}>
		        {(this.props.subscribeText) ? this.props.subscribeText : 'Подписаться на автора'}
		    </a>	
      	)
  	} else {
	    return (
			<a onClick={() => {this.handleSubscription(this.token, this.props.id)}} className={`button circular ui ${this.props.additionalClasses}`}>
				    {(this.props.unsubscribeText) ? this.props.unsubscribeText : 'Отписаться от автора'}
			</a>	
	    )
	}
  }
}

export default connect((store) => store)(SubscribeButton)

