import React from 'react';
import { Provider } from  'react-redux'
import { Route } from 'react-router-dom'

import store from './store'
import Company from './containers/Company' 
import CompanyNews from './containers/CompanyNews'
import Home from './containers/Home'
import About from './containers/About'


export default () => (
  <Provider store={store}>
    <div>
      <Route
        path='/'
        exact
        component= { Home }
      />
      <Route
        path='/about'
        exact
        component={ About }
      />
      <Route 
        path='/company' 
        exact
        component={ Company } 
      />
      <Route
        path='/company/:symbol'
        exact
        component={ Company }
      />
      <Route
        path='/news'
        exact
        component= { CompanyNews }
      />
      <Route
        path='/news/:symbol/last/:range'
        exact
        component= { CompanyNews }
      />
    </div>
  </Provider>
)
