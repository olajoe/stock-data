import { fromJS } from 'immutable'

import * as types from '../constants/ActionTypes'

const initialState = fromJS({
  company: {},
  errorResponse: {}
})

export const fetchCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COMPANY_SUCCESS:
      return state.set('company', fromJS(action.company || {}))
    case types.FETCH_COMPANY_FAILURE:
      return state.set('errorResponse', fromJS(action.message))
    default:
      return state
  }
}