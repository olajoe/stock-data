import * as types from '../constants/ActionTypes'
export const fetchCompany = symbol => ({
  type: types.FETCH_COMPANY,
  symbol
})

export const fetchCompanySuccess = company => ({
  type: types.FETCH_COMPANY_SUCCESS,
  company
})

export const fetchCompanyFailure = message => ({
  type: types.FETCH_COMPANY_FAILURE,
  message
})
