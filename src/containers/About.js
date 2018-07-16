import React from 'react'

import { HeaderComponent } from './Header'
import { FooterComponent } from './Footer'

class About extends React.Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <HeaderComponent/>
        <h3>This Website for learning React and other</h3>
        <FooterComponent/>
      </div>
    )
  }
}

export default About