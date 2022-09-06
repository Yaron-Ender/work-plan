import { useState } from 'react';
import { db } from '../firebase/firebase'
import { collection,doc,getDocs,getDoc,onSnapshot } from "firebase/firestore";

export const useGetFromCollection =()=>{
const [arrayOfDocID,setArrayOfDocID]=useState([])
const [singleDoc,setSingleDoc]=useState(null)
// get all the documents id in the collection
const getdocsID= async(_collection)=>{
let collRef = collection(db,_collection)
   const snapshot=await getDocs(collRef)
   snapshot.docs.map((doc)=>{
     setArrayOfDocID((prev)=>([...prev,doc.id]))
   }) 
    }
//get all the documents in the collection online 
const getdocContent = async(_collection,documentId)=>{
let docRef = doc(db, _collection,documentId);
const docSnap = await getDoc(docRef)
if(docSnap.exists()){
 setSingleDoc(docSnap.data())
}else{
  console.log("No such document!");;
}
}
return { getdocsID,arrayOfDocID,getdocContent,singleDoc }
}