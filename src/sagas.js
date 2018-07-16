import { call, put, takeEvery } from 'redux-saga/effects'

import * as types from './constants/ActionTypes'
import * as companyApi from './api/getCompany'
import * as newsApi from './api/getNews'

import {
  fetchCompanySuccess,
  fetchCompanyNewsSuccess
}
from './actions'


function* fetchCompanyFromSymbol(action) {
  try {
    const { symbol } = action
    const companyData = yield call(companyApi.getCompanyDetailAPI, symbol)
    yield put(fetchCompanySuccess(companyData))

  } catch (error) {
    yield put(fetchCompanySuccess({ error }))
  }
}

function* fetchCompanyNews(action) {
  try {
    const { symbol, range } = action
    const newsData = yield call(newsApi.getNewsCompanyAPI, symbol, range)
    yield put(fetchCompanyNewsSuccess(newsData))
  } catch (error) {
    yield put(fetchCompanyNewsSuccess({ error }))
  }
}

export default function* mySaga() {
  yield takeEvery(types.FETCH_COMPANY, fetchCompanyFromSymbol);
  yield takeEvery(types.FETCH_COMPANY_NEWS, fetchCompanyNews)
}
