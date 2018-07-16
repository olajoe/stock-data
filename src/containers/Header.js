import React from 'react'
import { Layout,Menu } from  'antd' 
import { Link } from 'react-router-dom'

const { Header } = Layout

export const HeaderComponent = () => {
  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="home">
          <Link to="/">HOME</Link>
        </Menu.Item>
        <Menu.Item key="company">
          <Link to="/company">COMPANY</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">ABOUT</Link>
        </Menu.Item>
        <Menu.Item key="news">
          <Link to="/news">NEWS</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}