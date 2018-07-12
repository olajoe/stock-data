import { call, put, takeEvery } from 'redux-saga/effects'
import * as types from './constants/ActionTypes'
import * as companyApi from './api/getCompany'

import {
  fetchCompanySuccess,
}
from './actions/index'


function* fetchCompanyFromSymbol(action) {
  try {
    const { symbol } = action
    const companyData = yield call(companyApi.getCompanyDetailAPI, symbol)
    console.log(companyData)
    yield put(fetchCompanySuccess(companyData))

  } catch (error) {
    yield put(fetchCompanySuccess({ error }))
  }
}

export default function* mySaga() {
  yield takeEvery(types.FETCH_COMPANY, fetchCompanyFromSymbol);
}
