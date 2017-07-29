import { axiosNoAuth } from './axiosAuth.js'

/* usage: 
  {
   
  }
*/

export default async function prepareData(pageBuilder, query) {
  if(pageBuilder) {
    let data = {}

    let queries = await Object.values(pageBuilder)
    let keys = await Object.keys(pageBuilder)
    await Promise.all(queries.map(async (item, i) => {
      const { single, type, params, by, customUrl } = item;
      const value = single ? query[by] || query.slug : ``;
      let url;
      if(customUrl) {
        url = type + '/' + customUrl
      } else {
        if(value) {
          if(by) {
            url = `${type}/entries/${encodeURI(value)}/by${by}`
          } else {
            url = `${type}/entries/${encodeURI(value)}`
          }
        } else {
          url = `${type}/entries/`
        }
      }
      await makeRequest(url, params).then(async (res) => {
        data[keys[i]] = res.data
      })
    }));

    return new Promise((resolve, reject) => {
      return resolve(data);
    })
  } else {
    return null
  }
}

function makeRequest(url, params) {
  return axiosNoAuth({
    url: url,
    method: 'GET',
    params
  })
}