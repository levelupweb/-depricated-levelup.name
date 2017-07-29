// Important
import React from 'react';

// Actions
import { authenticateUser } from '../actions/user'
import { settingUpPageProperties, settingUpPageData, setAccessStatus } from '../actions/app'

// Utils
import getToken from '../utils/getToken.js'

function withAuth(Component, pageSlug, pageBuilder) {
  return class HOC extends Component {
    static async getInitialProps ({ req, store, query, isServer }) {
      const { dispatch } = store;
      let token = getToken(req);

      await dispatch(authenticateUser(token)).then(async (user) => {
        await dispatch(settingUpPageProperties(pageSlug)).then(async (properties) => {
          if (canUserPass(user, properties.userMustBeLoggedIn)) {
            await dispatch(settingUpPageData(pageBuilder, query))
          } else {
            await dispatch(setAccessStatus(false))
          }
        })
      })
    }

    constructor(props) {
      super(props)
    }

    render() {
      return (
        <Component {...this.props} />
      )
    }
  }
}


function canUserPass(user, userMustBeLoggedIn) {
  if(user) {
    return true
  } else {
    return !userMustBeLoggedIn
  }
}

export default withAuth