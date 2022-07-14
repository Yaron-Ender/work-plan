import { getFirestore, collection, doc, getDocs,getDoc } from "firebase/firestore";
import { db } from'../firebase/firebase'
import { useState,useEffect} from "react";
export const useCollection = () => {
    const[data,setData]=useState([])

    useEffect(()=>{
    try{
   const colref = collection(db, "substances");
   const docref = doc(colref,'substance-1')
   getDocs(colref).then((snapshot) => {
     if(snapshot === undefined){
       throw new Error('no data,sorry')
      }
    snapshot.docs.forEach((item)=>{
      const obj = { data: item.data(), id: item.id };
      // console.log(obj)
      // setData(prev=>)
     setData(prev=>[...prev,obj])
    // setData(prev=>[{...prev,data:item.data(),id:item.id}]);
    })
   });
 }catch(err){
console.log(err.name)
 }
    },[])

    return {data}
};

