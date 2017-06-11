import React from 'react';
import config from '../../app.config.js'
import fetch from 'isomorphic-fetch'
import { setUser, getUserByToken } from '../../actions/user'
import { setQuery, setPageData, getPageBySlug, setPageSettings, setAccessError } from '../../actions/app'
import cookies from 'js-cookie'
import axios from 'axios'
import Loader from '../loader'

/* 

*** Получение токена. cookies.get - для клиента, req.cookies - для сервера

* req - Объект реквеста к серверу, из которого будем брать cookies

*/

function getToken(req) {
      try {
        return cookies.get('x-access-token') || req.cookies['x-access-token'];
      } catch (err) {
        return 0
      }
} 

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
      var url = config.API + item.type + `/entries/` + encodeURI(slug);
      await fetch(url).then(async (res) => {
        data[item.type] = await res.json();
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
      var user          = await store.dispatch(getUserByToken(token)); // + запихиваем информацию о user в store

      await getPageBySlug(slug).then(async (res) => {
          await prepareData(builder, query).then(async (data) => {
            var state = await store.getState();
            var canPass = canUserPass(res.data, state.user);
            if (canPass) {
              await store.dispatch(setQuery(builder, query));
              await store.dispatch(setPageData(data));
              await store.dispatch(setPageSettings(res.data))
            } else {
              await store.dispatch(setAccessError())
            }
          });
      })

      // УБРАТЬ
      return {
        user: user
      }
  }

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    };
  }

 
  componentDidMount () {
    this.setState({ 
      isLoading: false
    })
  }
  render() {
      return (
        <Component {...this.props} />
      )
    }
  }
}
  


