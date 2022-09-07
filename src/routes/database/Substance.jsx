import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDocument } from '../../hooks/useDocument';
import { useSubstance } from '../../hooks/useSubstance';
import Monograph from './Monograph';
const Substance = () => {
 const { id } = useParams()
 const {error,document}=useDocument('substances',id)
 const { polishedObj } = useSubstance(document);
 return (
   <div className='substance-container'>
     <h2> {id}</h2>
     {!error && (
      <>
   <Monograph />
       </>
     )}
   </div>
 );
};

export default Substance;