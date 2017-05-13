import React from 'react';
import config from '../../app.config.js'
import createPage from '../../utils/createPage.js'
import fetch from 'isomorphic-fetch'
import { setUser } from '../../actions/user'
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
  var data = {}
  var queries = await Object.values(builder)

  await Promise.all(queries.map(async (item) => {
    var slug = (item.single) ? query.slug : ``;
    var url = config.API + item.type + `/entries/` + encodeURI(slug);
    await fetch(url).then(async (res) => {
      data[item.type] = await res.json();
    })
  }));

  return data;
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

      // Авторизация
      var token = await getToken(req);
      await store.dispatch(setUser(token));

      // Подготовка данных о странице
	    var page = await fetch(config.API + 'page/entries/' + slug)
	    var json = await page.json()

      // Берём данные для дочерних элементов
      if (builder) {
        var data = await prepareData(builder, query);
      }

      // Превращаем данные в props
	    return {
	      page: json,
        data: data
	    }
  }

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    };
  }

  componentDidMount () {
    this.setState({ isLoading: false })
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Component {...this.props} />
        )}
      </div>
    )
  }
  }
}


