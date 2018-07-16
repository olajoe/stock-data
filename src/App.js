import React from 'react';
import { Provider } from  'react-redux'
import { Route } from 'react-router-dom'

import store from './store'
import Company from './containers/Company' 

const About = () => <h1>About</h1>

export default () => (
  <Provider store={store}>
    <div>
      <Route
        path='/'
        exact
        render={() => <div>Take me home</div>}
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
    </div>
  </Provider>
)
