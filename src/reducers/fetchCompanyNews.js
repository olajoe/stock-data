import { fromJS } from 'immutable'

import * as types from '../constants/ActionTypes'

const initialState = fromJS({
  companyNews: [],
  errorResponse: {}
})

export const fetchCompanyNews = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COMPANY_NEWS_SUCCESS:
     return state.set('companyNews', fromJS(action.news || []))
    case types.FETCH_COMPANY_NEWS_FAILURE:
      return state.set('errorResponse', fromJS(action.message))
    default:
      return state
  }
}