import React from "react";
import { createElement,useState } from "react";
import Button from "../../component/button/button";
import FormInput from "../../component/input/input.comp";
const CreateSubstance = () => {
//STATES
const [show,setShow]=useState(false)
const [monograph,setMonograph]=useState([])
const arrMono=[];
  //FUNCTIONS
  const handleSubmit = (e)=>{
     e.preventDefault()
  }
  const addInput=(e)=>{
  arrMono.push(
    {id:Math.random()}
  );
  setMonograph(prev=>[...prev,...arrMono])
  console.log(monograph)
  setShow(true)
}
const removeMonograph=(id)=>{
 setMonograph((prev) => monograph.filter((item) => item.id !== id)); 
}
    return (
      <div>
        <h1>Cretae New Substance</h1>
        <div className="create-substance-container">
          <div className="create-pannel">
         <Button onClick={addInput} children={"add monograph"} />
          </div>
          <div className="fillup-tests">
            <form onSubmit={handleSubmit} className="signup-form">
              <FormInput
                type="text"
                id="sustance-title"
                label="sustance-title"
                name="sustanceTitle"
                //  required
              />
              <div className={`${(show)?'show':""} monographes-container`}>
                {monograph.length>0&&monograph.map(item=>(
                <div className="single-monograph" key={item.id}>
                <FormInput />
                <h3>HPLC</h3>
                <ul>
                  <li>imp</li>
                  <li>ass</li>
                  <li>organic</li>
                </ul>
                <Button
                onClick={()=>{removeMonograph(item.id)}}
                children={'remove'} />
                </div>
                  ))}
              </div>
            </form>
          </div>
          <div className="substance-UI"></div>
        </div>
      </div>
    );
};

export default CreateSubstance;