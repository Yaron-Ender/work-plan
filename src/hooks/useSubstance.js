import { useState,useEffect,useReducer } from "react";

export const useSubstance = (document)=>{
const initObj ={
doc:''
};
const substanceReducer=(state,action)=>{

}
 const[customObj,dispatch]=useReducer(substanceReducer,initObj)

    useEffect(()=>{
     if(document){   
const createCustomObj=()=>{

//grab all monograph
 const ArrOfMonograph = Object.keys(document);
}  
createCustomObj() 
}
},[document])


return { customObj };
}


// Object.keys(document).map((monograph) =>
// console.log(monograph, document[monograph].GC)
// );