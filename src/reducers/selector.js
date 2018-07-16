import { createSelector } from 'reselect'
import * as _ from 'lodash'

const companySelector = state => {
  return _.get(state, 'fetchCompanyReducer', {})
}

export const getCompanySelector = createSelector(
  companySelector,
  data => _.get(data, 'company', {})
)