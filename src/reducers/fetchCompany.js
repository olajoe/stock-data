import * as types from '../constants/ActionTypes'
const initialState = {
  company: {}
}

export const fetchCompanyReducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case types.FETCH_COMPANY_SUCCESS:
      return {...state, company: action.company}
    case types.FETCH_COMPANY_FAILURE:
      return {...state, message: action.message}
    default:
      return state
  }
}