import { fromJS } from 'immutable'

import * as types from '../constants/ActionTypes'

const initialState = fromJS({
  companyInfo: {},
  errorResponse: {}
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_COMPANY_SUCCESS:
      return state.set('companyInfo', fromJS(action.company || {}))
    case types.FETCH_COMPANY_FAILURE:
      return state.set('errorResponse', fromJS(action.message))
    default:
      return state
  }
}
