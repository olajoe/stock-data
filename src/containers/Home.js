import React from 'react'

import { HeaderComponent } from './Header'
import { FooterComponent } from './Footer'

class Home extends React.Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <HeaderComponent/>
        <h1>Take me Home</h1>
        <FooterComponent/>
      </div>
    )
  }
}

export default Home