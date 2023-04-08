import React, { createContext, useEffect, useReducer } from 'react'
import { getDentists } from '../service/serviceDentists';


export const ContextDentists = createContext()

const initialState = {
    users:[],
    user:{},
    isDark: false,
    favs:JSON.parse(localStorage.getItem("favs")) || [],
};



const globalReducer = (state, action) =>{
    switch(action.type){
        case "GET_USERS":
            return {...state, users: action.payload}
        case "SWITCH_MODE":
                return {...state, isDark: !state.isDark}
        case "GET_USER":
                    return { ...state, user: action.payload };
        case "HANDLE_FAVORITE":
                    return { ...state, favs: action.payload };
    }

}

const ContextDentistsProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(globalReducer, initialState)

    useEffect(()=>{
        const dentistsApi = getDentists()
        dentistsApi.then((res)=>dispatch({type:"GET_USERS",payload:res.data}));
    },[]) 



  return (
    <ContextDentists.Provider value = {{state, dispatch}}> 
    {children}
    </ContextDentists.Provider>
   
    
  )
}

export default ContextDentistsProvider