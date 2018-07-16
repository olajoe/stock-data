import axios from 'axios'

const baseURI = 'https://api.iextrading.com/1.0'

export const getNewsCompanyAPI = (symbol,range = 1) => {
  const newsPath = `/stock/${symbol}/news/last/${range}`
  return axios.get(`${baseURI+newsPath}`,{
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => response.data)
  .catch(err => {
    throw err
  })
}