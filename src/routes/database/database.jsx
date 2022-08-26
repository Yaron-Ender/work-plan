import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import Button from "../../component/button/button";
import SubstancesList from "../../component/substancesList/substancesList";
import Substance from "../singal-substance/Substance";
import { useGetFromCollection } from '../../hooks/useGetFromCollection'

const Database = () => {
  //customHooks
 const { getdocID,arrayOfDocID} = useGetFromCollection()
 //functions
const seeAllDoc=()=>{
// gurd that prevent send request to firestore if we got already data, so after data has been recive clicking on the btn will not work and therefor substancesList comp will not form more and more <Navlink/>
if(arrayOfDocID.length==0){
  getdocID("substances");
}
}
  return (
    <div>
      <div className="databse-title">
        <h1>SUBSTANCES DATABASE</h1>
      </div>
      <Button children="All substance" onClick={seeAllDoc} />
      <SubstancesList substancesID={arrayOfDocID} />
      <Routes>
        <Route path=":id" element={<Substance />} />
      </Routes>
    </div>
  );
};

export default Database;