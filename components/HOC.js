// Important
import React from 'react';
import config from '../app.config.js'
import cookies from 'js-cookie'

// Actions
import { setUser, authenticateUser } from '../actions/user'
import { setQuery, setPageData, getModule, setPageSettings, setAccessError } from '../actions/app'

// Utils
import getToken from '../utils/getToken.js'
import { axiosAuth, axiosNoAuth } from '../utils/axiosAuth.js'

// Components
import Loader from './isomorphic/loader.js'

/* 

*** Запрос к API, учитывающий необходимые данные для данной страницы

* query - объект, содержащий параметры GET-запроса
* builder - объект с информацией о том, какие данные могут понадобиться дочернему контейнеру 

*/

async function prepareData(builder, query) {
  if(builder) {
    var data = {}
    var queries = await Object.values(builder)
    await Promise.all(queries.map(async (item) => {
      var slug = (item.single) ? query.slug : ``;
      if(item.custom) {
        var url = item.url
      } else {
        var url = config.API + item.type + `/entries/` + encodeURI(slug);
      }
      await axiosNoAuth({
          url: url,
          method: 'GET'
      }).then(async (res) => {
        data[item.type] = res.data
      })
    }));

    return new Promise((resolve, reject) => {
      return resolve(data);
    })

  } else {
    return null
  }
}

// Добавить уровни доступа // Вынести в UTILS и добавить уровни доступа
function canUserPass(options, user) {
  if(user.isLogged) {
    return true
  } else {
    if(options.userMustBeLoggedIn) {
      return false
    } else {
      return true
    }
  }
}
 
/* 

*** Функция, отвечающая за подготовку данных, которые могут понадобиться дочернему контейнеру

* Component - дочерний компонент
* slug - ключевое слово для генерируемой страницы
* builder - объект с информацией о том, какие данные могут понадобиться дочернему контейнеру 

*/

export default function page(Component, slug, builder) {
  return class GetAuth extends Component {

    static async getInitialProps ({ req, store, query }) {
      var token         = await getToken(req); // находим токен
      var user          = await store.dispatch(authenticateUser(token)); // + запихиваем информацию о user в store
      
      await getModule(slug).then(async (res) => {
          await prepareData(builder, query).then(async (data) => {
            var state =   await store.getState();
            var canPass = await canUserPass(res.data, state.currentUser);
            if (canPass) {
              await store.dispatch(setQuery(builder, query));
              await store.dispatch(setPageData(data));
              await store.dispatch(setPageSettings(res.data))
            } else {
              await store.dispatch(setAccessError())
            }
          });
      })

      return {
        user: user
      }
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
  


