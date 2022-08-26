import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useGetFromCollection } from '../../hooks/useGetFromCollection';
const Substance = () => {
 const { id } = useParams()
 const { getdocContent,singleDoc } = useGetFromCollection()
 useEffect(()=>{
if(id){
const getDoc= async()=>{
 await getdocContent('substances',id)
 console.log(singleDoc)
}
getDoc()
}
 },[id])
 
    return (
        <div>
          <h2> substance {id }</h2>  
        </div>
    );
};

export default Substance;