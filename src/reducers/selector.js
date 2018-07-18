import { createSelector } from 'reselect'
import * as _ from 'lodash'

export const companySelector = state => {
  console.log(state.get('fetchCompanyReducer').get('company').toJS())
  return state.get('fetchCompanyReducer')
}

export const getCompanySelector = createSelector(
  companySelector,
  data => data.get('company',{}).toJS()
)

export const getErrorResponseCompanySelector = createSelector(
  companySelector,
  data => data.get('errorResponse',{}).toJS()
)

const companyNewsSelector = state => {
  return state.get('fetchCompanyNews')
}

export const getCompanyNewsSelector = createSelector(
  companyNewsSelector,
  data => data.get('companyNews',{}).toJS()
)

export const getErrorResponseNewsSelector = createSelector(
  companyNewsSelector,
  data => data.get('errorResponse',{}).toJS()
)