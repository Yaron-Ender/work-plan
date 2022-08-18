import { auth } from "../firebase/firebase"
import { signOut } from "firebase/auth"
import { useAuthContext } from "./useAuthContext"
export const useLogout =()=>{
 const{ dispatch } = useAuthContext()
    const logout=async()=>{
    try{
       await signOut(auth)
       dispatch({type:"LOGOUT"})

    }
    catch(err){
    
    }
    }
return{logout}
}