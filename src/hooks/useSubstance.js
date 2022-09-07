import { useState,useEffect } from "react";

export const useSubstance = (document)=>{
    const [polishedObj,setPolishedObj] =useState({})
    useEffect(()=>{
     if(document){   
const createPolishedObj=()=>{
//grab all monograph
 const ArrOfMonograph = Object.keys(document);
}  
createPolishedObj() 
}
},[polishedObj,document])


return{ polishedObj }
}


// Object.keys(document).map((monograph) =>
// console.log(monograph, document[monograph].GC)
// );