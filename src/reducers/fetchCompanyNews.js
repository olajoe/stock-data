import * as types from '../constants/ActionTypes'
const initialState = {
  companyNews: []
}

export const fetchCompanyNews = (state = {...initialState}, action) => {
  switch (action.type) {
    case types.FETCH_COMPANY_NEWS_SUCCESS:
     return {...state, companyNews: action.news }
    case types.FETCH_COMPANY_NEWS_FAILURE:
      return {...state, message: action.message}
    default:
      return state
  }
}