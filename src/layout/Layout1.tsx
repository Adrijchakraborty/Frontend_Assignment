import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import { Outlet } from 'react-router-dom'

const Layout1: React.FC = () => {
  return (
    <>
        <Header/>
        <Navigation/>
        <Outlet/>
    </>
  )
}

export default Layout1