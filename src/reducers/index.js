import { combineReducers } from 'redux'
import { fetchCompanyReducer } from './fetchCompany'
import { fetchCompanyNews } from './fetchCompanyNews'


export default combineReducers({
    fetchCompanyReducer,
    fetchCompanyNews
})