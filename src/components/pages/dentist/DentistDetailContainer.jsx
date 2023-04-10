import React, { useContext, useEffect, useState } from 'react'
import DentistDetail from './DentistDetail'
import { ContextDentists } from '../../../context/ContextUsers';
import { useParams } from 'react-router-dom';
import { getDentistsById } from '../../../service/serviceDentists';

const DentistDetailContainer = () => {
  const { state, dispatch } = useContext(ContextDentists);

  const[denstist, setDentist] = useState({})

  const { id } = useParams();
 


  useEffect(()=>{
    const dentistsApi = getDentistsById(id)
    dentistsApi.then((res)=>dispatch({type:"GET_USER",payload:res.data}));
},[]) 

const dentistById = state.user;




  return (
    <div>
         <DentistDetail
        dentist={dentistById}
        darkMode = {state.isDark}
        favs = {state.favs}
        
        />
    </div>
  )
}

export default DentistDetailContainer