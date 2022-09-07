import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDocument } from '../../hooks/useDocument';
import { useSubstance } from '../../hooks/useSubstance';
import Monograph from './Monograph';
const Substance = () => {
  const { id } = useParams();
  const { error, document } = useDocument("substances", id);

  // Object.keys(document).map((monograph) =>
  // console.log(monograph, document[monograph].GC)
  // );
  return (
    <div className="substance-container">
      <h2 className='substance-title'> {id}</h2>
      {!error && (
        <>
    {document&& Object.keys(document).map(m=>
    <Monograph Monograph={m}/> 
      )}
        </>
      )}
    </div>
  );
};

export default Substance;