import { auth } from '../firebase/firebase'
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
export const useSignup = ()=>{
const [error, setError] = useState(null);
const [isPending, setIsPending] = useState(false);
 const signup = async(email,password,userName,employeeNum)=>
 {
  setIsPending(true)
  setError(null)
 try{
 const { user } = await createUserWithEmailAndPassword(auth, email, password);
 await updateProfile(user,{displayName:userName})
 if(!user){
     throw new Error('"could not complete sinup"');
 }
 setIsPending(false);
 setError(null);
 console.log(user)
 }catch(err){
    setIsPending(false);
setError(err.massage);
 }
 }
 return { error,isPending,signup }
}