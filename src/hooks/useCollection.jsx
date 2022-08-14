import { collection, getDocs} from "firebase/firestore";
import { db } from'../firebase/firebase'
import { useState,useEffect} from "react";
export const useCollection = (_collection) => {
    const[data,setData]=useState([])

    useEffect(()=>{
      if(_collection){
    try{
   const colref = collection(db,_collection);
   getDocs(colref).then((snapshot) => {
     if(snapshot === undefined){
       throw new Error('no data,sorry')
      }
      let arr=[]
    snapshot.docs.forEach((item)=>{
      //item.data() return the data inside obj
      const obj = { id: item.id };
      arr.push(obj)
    })
    setData([...arr])
   });
 }catch(err){
console.log(err.name)
 }
}
    },[_collection])

    return {data}
};

