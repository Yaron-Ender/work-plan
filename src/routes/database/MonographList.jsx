import { useState,useEffect,Fragment } from "react";
import { useFriestore } from "../../hooks/useFirestore";
import  edit from'../../asstes/edit.svg';

const MonographList = ({ document,id }) => {
  const {updateDocument,updateMonograph}=useFriestore("substances",id)
  const[monographfieldText,setMonographfieldText]=useState("");
  const [MonoName,setMonoName]=useState(null)
  const[monographTestNameField,setMonographTestNameField]=useState("");
  const[doesTextHasChnged,setDoesTextHasChanged]=useState(false)
  const [openMonoIput,setOpenMonoInput]=useState(false)
  const [disabled,setdisabled]=useState(true)
//open and close input
const openCloseInput=(e)=>{
 setOpenMonoInput(true)
setdisabled(false)

}
//send data to useFirestore
const handleSubmitMonograph=(e)=>{
   e.preventDefault();
  // move inout to the top and make it disabled
   setOpenMonoInput(false)
   setdisabled(true)
  if(monographfieldText&&
    doesTextHasChnged){
  updateMonograph(monographfieldText,MonoName)
  setDoesTextHasChanged(false)
  }
  }
//handle with the old and the new monograph name
const handleChangeMonoName =(e)=>{
     setMonographfieldText(e.target.value);
     setMonoName(e.target.name);
     setDoesTextHasChanged(true)
}
//send data to fireStore for update the test
const handleSubmitTest =async (e,mono,tech,index)=>{
  e.preventDefault();

await updateDocument(id,mono,tech,index,monographTestNameField)
}
//handle with the test field name
const handleChangeTestName=(e)=>{
  setMonographTestNameField(e.target.value)
}
return (
  <div className="substance-monograph">
    {document &&
// create the Monograph title
      Object.keys(document).map((mono, index) => (
        <Fragment key={mono}>
        <div className="mono-title-container"> 
        <form onSubmit={handleSubmitMonograph}>
        <label>
          <span>{mono} <img src={edit}
          onClick={openCloseInput}
           /></span>
        <input
        className={`${openMonoIput?'open-input':""}`}
        type="text"
        disabled={disabled}
        //  disabled={`${openMonoIput?'true':'false'}`}
      //  placeholder={mono}
       name={mono}
       onChange={handleChangeMonoName}
        value={monographfieldText}
                />
              {/* <button>save</button> */}
              </label>
            </form>
          </div>
      
  {Object.keys(document[mono]).map((technology, index) => (
    // create the Test fields
    <div className="single-test-container" key={index}>
         <p>{technology}</p>
           <ul>
         {document[mono][technology].map((test, index) => (
           <form key={index} onSubmit={(e)=>{handleSubmitTest(e,mono,technology,index);}}>
        <div className="test-title-container">
          <li>{test}</li> 
          <img src={edit} />
          </div> 
         <input
         data-id={index}
         type="text"
         value={monographTestNameField}
         name={test}
         onChange={handleChangeTestName}
        />
        <button>save</button>
       </form>
                ))}
              </ul>
            </div>
          ))}
        </Fragment>
      ))}
  </div>
);
};

export default MonographList
