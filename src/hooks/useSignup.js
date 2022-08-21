import { auth } from '../firebase/firebase'
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from './useAuthContext';
export const useSignup = ()=>{
    const { dispatch } = useAuthContext()
const [error, setError] = useState(null);
const [isPending, setIsPending] = useState(false);
 const signup = async(email,password,userName,employeeNum,isManager)=>
 {
  setIsPending(true)
  setError(null)
 try{
 const { user } = await createUserWithEmailAndPassword(auth, email, password);
 if(!user){
     throw new Error('"could not complete sinup"');
 }
 //update the user obj
 await updateProfile(user,{displayName:userName})
 //update AuthContext
 dispatch({ type: "LOGIN", payload:{user,employeeNum,isManager}});
 
 setIsPending(false);
 setError(null);
 }catch(err){
setIsPending(false);
if (err.code === "auth/email-already-in-use"){
    setError("email already in use");
}else{
     setError("error, email or password are not valid");
     console.log(err.message)
}
 }
 }
 return { error,isPending,signup }
}