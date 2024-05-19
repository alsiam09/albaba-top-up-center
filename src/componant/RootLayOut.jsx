import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'
import Footer from './Footer'

const RootLayOut = () => {
  return (
    <>
    <Menu/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayOut