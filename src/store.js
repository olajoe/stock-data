import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'
import mySaga from './sagas'
import { Map } from 'immutable'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store

const initialState = Map({})

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// then run the saga
sagaMiddleware.run(mySaga)

// render the application

export default store