import { fromJS } from 'immutable'

import * as types from '../constants/ActionTypes'

const initialState = fromJS({
  companyNewsInfo: [],
  errorResponse: {}
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_COMPANY_NEWS_SUCCESS:
      return state.set('companyNewsInfo', fromJS(action.news || []))
    case types.FETCH_COMPANY_NEWS_FAILURE:
      return state.set('errorResponse', fromJS(action.message))
    default:
      return state
  }
}
