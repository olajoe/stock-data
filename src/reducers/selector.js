// import { createSelector } from 'reselect'
// import * as _ from 'lodash'

export const getCompanySelector = state => {
  return state
    .get('companyModule')
    .get('companyInfo')
    .toJS()
}

export const getErrorResponseCompanySelector = state => {
  return state
    .get('companyModule')
    .get('errorResponse', {})
    .toJS()
}

export const getCompanyNewsSelector = state => {
  return state
    .get('companyNewsModule')
    .get('companyNewsInfo')
    .toJS()
}

export const getErrorResponseNewsSelector = state => {
  return state
    .get('companyNewsModule')
    .get('errorResponse', {})
    .toJS()
}
