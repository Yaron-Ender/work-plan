import { createContext,useReducer } from "react"
import { onAuthStateChanged } from "firebase/auth"
export const AuthContext=  createContext()

const authReducer =(state,action)=>{

}

export const AuthContextProvider=({children})=>{
 const[state,dispatch]=useReducer(authReducer,{
    user:null
 })
    return(
 <AuthContext.Provider value={{color:'pink'}}>
    {children}
 </AuthContext.Provider>
    )
}