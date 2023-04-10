import React, { useContext, useEffect, useState } from 'react'
import Dentists from './Dentists'
import { ContextDentists } from '../../../context/ContextUsers';


const DentistsContainer = () => {
  const { state, dispatch } = useContext(ContextDentists);
  return (
    <div>
        <Dentists
        favs = {state.favs}
        dentists = {state.users}
        darkMode = {state.isDark}
        dispatch ={dispatch}
        />
    </div>
  )
}

export default DentistsContainer