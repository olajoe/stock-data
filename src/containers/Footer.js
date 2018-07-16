import React from 'react'
import { Layout } from  'antd' 

const { Footer } = Layout

export const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Stock data demo ©2018 Created by Joe
    </Footer>
  )
}