import React from "react";
import { createElement,useState } from "react";
import Button from "../../component/button/button";
import FormInput from "../../component/input/input.comp";
import MonoInput from "../../component/input/MonoInput";
const CreateSubstance = () => {
//STATES
const [show,setShow]=useState(false)
const [monograph,setMonograph]=useState([])//All the monograpes that the user create
const [individualMono,setIndividualMono]=useState()
const arrMono=[];

  //FUNCTIONS
  const handleSubmit = (e)=>{
     e.preventDefault()
  }
  const addMonograph=(e)=>{
  arrMono.push(
    {id:Math.random()}
  );
  setMonograph(prev=>[...prev,...arrMono])
  setShow(true)
}
const removeMonograph=(id)=>{
 setMonograph((prev) => monograph.filter((item) => item.id !== id)); 
}
    return (
      <div className="create-Newsubstance-container">
        <h1>Cretae New Substance</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <header>
            <div className="btn-pannel">
              <Button onClick={addMonograph} children={"add monograph"} />
              <Button children={"see preview"} />
              <Button children={"save monograph"} />
              <Button children={"delete"} />
            </div>
            <FormInput
              type="text"
              id="sustance-title"
              label="sustance-title"
              name="sustanceTitle"
              //  required
              />
          </header>
              <div className={`${show ? "show" : ""} monographes-container`}>
           {monograph.length > 0 &&
            monograph.map((item) => (
          <div className="singel-monograph" key={item.id}>
        <h3>HPLC</h3>
         <MonoInput
         span='monograph'
         type='text'
         value={item.id}
         />
         <MonoInput
         span='edition'
         type='number'
         />
         <MonoInput
         span='effective date'
         type='date'
         />
       
         <ul>
          <li>imp</li>
          <li>ass</li>
          <li>organic</li>
      </ul>
      <Button onClick={() => {removeMonograph(item.id);}}children={"remove"}/>
    </div>
     ))}
    </div>        
  
    <div className="substance-UI"></div>
        </form>
      </div>
    );
};

export default CreateSubstance;