import * as types from '../constants/ActionTypes'

// About Company Detail
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

// About Company News

export const fetchCompanyNews = (symbol, range) => ({
  type: types.FETCH_COMPANY_NEWS,
  symbol,
  range
})

export const fetchCompanyNewsSuccess = news => ({
  type: types.FETCH_COMPANY_NEWS_SUCCESS,
  news
})

export const fetchCompanyNewsFailure = message => ({
  type: types.FETCH_COMPANY_NEWS_FAILURE ,
  message
})