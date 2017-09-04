// Important
import React from 'react';
import { connect } from 'react-redux';
import cookies from 'js-cookie'

// Actions
import { subscribeToEntry } from '../../models/app'

class SubscribeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSubscribed: false, isHydrating: false }
    this.token = cookies.get('x-access-token');
  }

  componentWillMount() {
    const { entryId, entryType } = this.props;
    if(this.isSubscribed(entryId, entryType)) {
      this.setState({ isSubscribed: true }) 
    } else {
      this.setState({ isSubscribed: false })
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.isSubscribed(nextProps.entryId, nextProps.entryType)) {
      this.setState({ isSubscribed: true }) 
    } else {
      this.setState({ isSubscribed: false }) 
    }
  }

  isSubscribed(entryID, entryType) {
    const { currentUser } = this.props
    if(currentUser.isLogged) {
     return currentUser.subscriptions[entryType + 's'].indexOf(entryID) != -1
    }
  }

  handleSubscription(token, entryType, entryId) {
    this.setState({
      isHydrating: true
    });

    subscribeToEntry(token, entryType, entryId).then(response => {
      if(response.data.success) {
        this.setState({ 
          isSubscribed: !this.state.isSubscribed,
          isHydrating: false
        }) 
      } else {
        console.log('Ошибка при подписке..')
        this.setState({
          isHydrating: false
        })
      }
    })
  }

  render() {
    const { isSubscribed, isHydrating } = this.state;
    const { subscribeText, entryType, entryId, additionalClasses, unsubscribeText } = this.props
  	if(!isSubscribed) {
  		return (
  			<a onClick={() => {
          this.handleSubscription(this.token, entryType, entryId)
        }} className={"button circular ui primary " + additionalClasses + (isHydrating && " loading")}>
		      {subscribeText ? subscribeText : 'Подписаться на автора'}
		    </a>	
      	)
  	} else {
	    return (
			<a onClick={() => {
        this.handleSubscription(this.token, entryType, entryId)
      }} className={"button default circular ui " + additionalClasses + (isHydrating && " loading")}>
				{unsubscribeText ? unsubscribeText : 'Отписаться от автора'}
			</a>	
	    )
    }
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  currentUserId: state.currentUser._id
})

export default connect(mapStateToProps)(SubscribeButton)

