import React from 'react'

import NavbarLayout from './NavBarLayout'
import { Outlet, useNavigate } from 'react-router-dom'

const NavBarLayoutContainer = () => {


  const nav = useNavigate()


  return (
    <div>
        <NavbarLayout
        nav={nav}
        />
        <Outlet/>
    </div>
  )
}

export default NavBarLayoutContainer