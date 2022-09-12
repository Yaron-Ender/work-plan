import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDocument } from '../../hooks/useDocument';
import { useSubstance } from '../../hooks/useSubstance';
import MonographList from './MonographList';
const Substance = () => {
  const { id } = useParams();
  const { error, document } = useDocument("substances", id);
  const { customObj } = useSubstance(document)
  // Object.keys(document).map((monograph) =>
  // console.log(monograph, document[monograph].GC)
  // );
  return (
    <div className="substance-container">
      <h2 className='substance-title'> {id}</h2>
      {!error && (
        <>
      <MonographList document={document} id={id} />
        </>
      )}
    </div>
  );
};

export default Substance;