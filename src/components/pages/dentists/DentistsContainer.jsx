import React, { useContext, useEffect, useState } from 'react'
import Dentists from './Dentists'
import { ContextDentists } from '../../../context/ContextUsers';


const DentistsContainer = () => {
  const { state, dispatch } = useContext(ContextDentists);

  return (
    <div>
        <Dentists
        dentists = {state.users}
        />
    </div>
  )
}

export default DentistsContainer