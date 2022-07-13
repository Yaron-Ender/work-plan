import { getFirestore, collection, doc, getDocs,getDoc } from "firebase/firestore";
import { db } from'../firebase/firebase'
import { useState,useEffect} from "react";
export const useCollection = () => {
    const[data,setData]=useState(null)

    useEffect(()=>{
 const colref = collection(db, "substances");
 const docref = doc(db,'substances','pantoprazole Na')
 getDoc(docref).then((snapshot) => {
   const document=  snapshot.data();
   setData(document);
 });
    },[])
   
           
    return {data}
  

};

