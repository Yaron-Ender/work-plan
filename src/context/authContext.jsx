import { createContext,useReducer,useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase/firebase'
export const AuthContext=  createContext()

const authReducer =(state,action)=>{
    const {type,payload}=action
 switch(type){
    case 'LOGIN':
        return {...state,user:payload[0],employeeNum:payload[1]}
    case 'AUTH_IS_READY':
      return { ...state,AuthIsReady:true, user: payload };
    default:
        return state
 }
}

export const AuthContextProvider=({children})=>{
 const[state,dispatch]=useReducer(authReducer,{
    user:null,
    manager:null,
    AuthIsReady:null,
    employeeNum:null
 })
 console.log('authentication state:', state )
useEffect(()=>{
  const unsub = onAuthStateChanged(auth,(user)=>{
 dispatch({ type: "AUTH_IS_READY", payload: user });
 //cleanup function
 unsub();
  })
},[dispatch])
    return(
 <AuthContext.Provider value={{...state,dispatch}}>
    {children}
 </AuthContext.Provider>
    )
}