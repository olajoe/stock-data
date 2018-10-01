// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import { default as companyReducer } from './fetchCompany'
import { default as companyNewsReducer } from './fetchCompanyNews'

export default combineReducers({
  companyModule: companyReducer,
  companyNewsModule: companyNewsReducer
})
