import React, { useContext } from 'react'

import NavbarLayout from './NavBarLayout'
import { Outlet, useNavigate } from 'react-router-dom'
import { ContextDentists } from '../../../context/ContextUsers'

const NavBarLayoutContainer = () => {
  const {state, dispatch}=useContext(ContextDentists)


  const nav = useNavigate()


  return (
    <div>
        <NavbarLayout
        nav={nav}
        dispatch = {dispatch}
        />
        <Outlet/>
    </div>
  )
}

export default NavBarLayoutContainer