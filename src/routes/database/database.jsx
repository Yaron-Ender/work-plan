import { useState,useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import { useStyle } from '../../hooks/useStyle'
import Button from "../../component/button/button";
import SubstancesList from "./substancesList";
import Substance from './Substance';
import Search from "../../component/input/Search";
const Database = () => {
const { openDatabaseNavbar,openDatabaseNavState } = useStyle();
const [open,setOpen]=useState(false)
const [resultOfCollection,setResultOfCollection]=useState(null)
const { arrayOfDocID,error } =useCollection('substances')
 useEffect(() => {
   if (openDatabaseNavState) {
   setTimeout(() => {setOpen(true)}, 10);
   }
   openDatabaseNavbar()
 }, [openDatabaseNavState,open]);
 //functions
const seeAllDoc=()=>{
setResultOfCollection(arrayOfDocID)
}
  return (
    <div className="database">
      <nav className={`database-navbar ${(open)?'open':""}`}>
        <Button children="new substanca" buttontype='substance' />

        <Button
          children="All substance"
          onClick={seeAllDoc}
           buttontype="substance"
        />
        <Search />
      </nav>
      <div className="database-substances-container">
      {error&&<p>{error}</p>}
      {!error&&(
      <SubstancesList substancesID={resultOfCollection} />
      )}
      </div>
      <Routes>
        <Route path=":id" element={<Substance />} />
      </Routes>
    </div>
  );
};

export default Database;