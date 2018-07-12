import axios from 'axios'

const baseURI = 'https://api.iextrading.com/1.0'

export const getCompanyDetailAPI = (symbol) => {
  const companyPath = `/stock/${symbol}/company`
  return axios.get(`${baseURI+companyPath}`,{
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => response.data)
  .catch(err => {
    throw err
  })
}