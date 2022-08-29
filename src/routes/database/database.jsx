import { useState} from "react";
import { Routes, Route} from "react-router-dom";
import Button from "../../component/button/button";
import SubstancesList from "../../component/substancesList/substancesList";
import Substance from "../singal-substance/Substance";
import { useGetFromCollection } from '../../hooks/useGetFromCollection'
import Search from "../../component/input/Search";
import { useStyleContext } from "../../hooks/useStyleContext";
import { useEffect } from "react";
const Database = () => {
  const [open,setOpen]=useState(false)
 const { openDatabaseNav } = useStyleContext()
 useEffect(()=>{
  
if(openDatabaseNav){
  setTimeout(()=>{setOpen(true)},10)
}

 },[openDatabaseNav,open])
  //customHooks
 const { getdocID,arrayOfDocID} = useGetFromCollection()
 //functions
const seeAllDoc=()=>{
// a gurd that prevent sending request to firestore if we got already data, so after data has been recive, clicking on the btn will not work and therefor substancesList comp will not form more and more <Navlink/> comp.
if(arrayOfDocID.length==0){
  getdocID("substances");
  console.log('dsfsdfsdfsdfsdf')
}
}
  return (
    <div className="database">
      <nav className={`database-navbar ${(open)?'open':"close"}`}>
        <Button children="new substanca" buttonType='substance' />

        <Button
          children="All substance"
          onClick={seeAllDoc}
           buttonType="substance"
        />
        <Search />
      </nav>
      <div className="database-substances-container">
      <SubstancesList substancesID={arrayOfDocID} />
      <Routes>
        <Route path=":id" element={<Substance />} />
      </Routes>
      </div>
    </div>
  );
};

export default Database;