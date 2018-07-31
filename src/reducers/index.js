// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable';
import { fetchCompanyReducer } from './fetchCompany'
import { fetchCompanyNews } from './fetchCompanyNews'


export default combineReducers({
    fetchCompanyReducer,
    fetchCompanyNews
})