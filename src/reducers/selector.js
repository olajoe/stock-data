// import { createSelector } from 'reselect'
// import * as _ from 'lodash'


export const getCompanySelector = state => {
  return state.get('fetchCompanyReducer').get('company',{}).toJS()
}

export const getErrorResponseCompanySelector = state => {
  return state.get('fetchCompanyReducer').get('errorResponse',{}).toJS()
}

export const getCompanyNewsSelector = state => {
  return state.get('fetchCompanyNews').get('companyNews',{}).toJS()
}

export const getErrorResponseNewsSelector = state => {
  return state.get('fetchCompanyNews').get('errorResponse', {}).toJS()
}