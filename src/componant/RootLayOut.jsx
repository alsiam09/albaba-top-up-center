import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

const RootLayOut = () => {
  return (
    <>
    <Menu/>
    <Outlet/>
    </>
  )
}

export default RootLayOut