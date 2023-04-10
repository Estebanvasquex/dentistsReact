import React, { createContext, useEffect, useReducer } from 'react'
import { getDentists } from '../service/serviceDentists';


export const ContextDentists = createContext()

const initialState = {
    users:[],
    user:{},
    isDark: false,
    favs:JSON.parse(localStorage.getItem("favs")) || [],
};

const removeFav = (id, state) =>{
    const cleanFav = state.favs.filter((fav)=> fav.id !== id)
    console.log();
    localStorage.setItem("favs", JSON.stringify (cleanFav))
    return cleanFav
    
}

const globalReducer = (state, action) =>{
    switch(action.type){
        case "GET_USERS":
            return {...state, users: action.payload}
        case "SWITCH_MODE":
                return {...state, isDark: !state.isDark}
        case "GET_USER":
                    return { ...state, user: action.payload };
        case "HANDLE_FAVORITE":
            const isFavorite = state.favs.some((fav)=>fav.id === action.payload.id)
            
            isFavorite 
            ? removeFav(action.payload.id, state)
            : localStorage.setItem("favs", JSON.stringify([...state.favs, action.payload])) //es necesario hacer el llamado para que obtenga el ultimo registro

                    return isFavorite
                     ? { ...state, favs: removeFav(action.payload.id, state) }
                     :{ ...state, favs: [...state.favs, action.payload]};
                      //desestructuro state.favs y le agrego lo que llega en action.payload
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