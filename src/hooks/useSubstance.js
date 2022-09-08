import { useState,useEffect,useReducer } from "react";

export const useSubstance = (document)=>{

const substanceReducer=(state,action)=>{
   return {...state,...action.payload}
}
const[customObj,dispatch]=useReducer(substanceReducer,{})
    useEffect(()=>{
     if(document){   
dispatch({payload:document})
}
},[document])


return { customObj };
}


// Object.keys(document).map((monograph) =>
// console.log(monograph, document[monograph].GC)
// );