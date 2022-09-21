import React from "react";
import { useEffect,useState } from "react";
import Button from "../../component/button/button";
import FormInput from "../../component/input/input.comp";
import MonoInput from "../../component/input/MonoInput";
import Select from 'react-select'
const CreateSubstance = () => {
  // const randomID=()=>{
  //   return Math.random()
  // }
const technologies =[{value:'HPLC',label:"HPLC"},{value:'WET',label:"WET"},{value:'GC',label:"GC"}]
//INIT OBJECT
  // const initObj={
  //  id:randomID(),
  //   monographName:'',
  //   monographEdition:'',
  //   effectiveDate:''
  // }
  class Mono{
    constructor(name,eddition,date,tech){
       this.monographName=name;
       this. monographEdition=eddition;
       this.effectiveDate=date;
       this.tech=[]
       this.id=this.id()
    }
     id(){ return Math.random()}

  }
//STATES
const [show,setShow]=useState(false)
const [monograph,setMonograph]=useState([])//All the monograpes that the user create
const [individualMono,setIndividualMono]=useState('')
const [techObj,setTechObj]=useState({})
const [techPannel,setTechpannel]=useState(null)
const arrMono=[];
 let arr = [];
 useEffect(() => {
  console.log(techPannel)
    // setTechpannel({[techObj[0]]:'fsdff'})
 }, [techPannel]);
  //FUNCTIONS
  //
  const handleSubmit = (e)=>{
     e.preventDefault()
  }
  const saveMonograph=()=>{
  }
  //add the individual monograph to state that store all the monographes
  const addMonograph=(e)=>{
  const mono = new Mono('','','',[])
  setTechpannel([])
  console.log(mono)
  setMonograph((prev) => [...prev,mono]);
  setShow(true)
    // setTechpannel((prev) => [...prev, { [mono.id]:[]}]);
}
//remove spesific monograph from the monogrphs state container
const removeMonograph=(id)=>{
 setMonograph((prev) => prev.filter((item) => item.id !== id)); 
}
//handle with input of the monograph
const handleMonographInput=(e,id)=>{
monograph.forEach((item)=>{
  if(item.id===id){
item.monographName=e.target.value
  }
})
}
// handle with the Select comp
const handleSelectOption= (op,id)=>{
//op is the option object that store in array that come from the Select
monograph.forEach((item) => {
  if (item.id === id) {
    item.tech=[]
    op.forEach((optionVAlue)=>{
      arr=[]
    item.tech.push(optionVAlue.value)
    arr.push(item.tech)
  })
}
});
setTechObj(prev=>[])
setTechObj([id,arr])
setTechpannel(prev=>[])
 setTechpannel(prev=>[...prev,{[id]:arr}])
// setTechpannel({[id]:arr})
}
    return (
      <div className="create-Newsubstance-container">
        <h1>Cretae New Substance</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <header>
            <div className="btn-pannel">
              <Button onClick={addMonograph} children={"add monograph"} />
              <Button children={"see preview"} />
              <Button
              type='button'
              onClick={saveMonograph}
              children={"save monograph"} />
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
         name='monographName'
         onChange={(e)=>{handleMonographInput(e,item.id)}}
         />
         <MonoInput
         span='edition'
         type='number'
         name='edition'
        onChange={(e)=>{handleMonographInput(e,item.id)}}
         />
         <MonoInput
         span='effective date'
         type='date'
         name='date'
         onChange={(e)=>{handleMonographInput(e,item.id)}}
         />
  {/* tech section */}
       <div className="select-tech">
        <p>select Tech</p>
        <Select
        onChange={(option)=>{handleSelectOption(option,item.id);}}
        options={technologies}
        isMulti
        />
          {console.log(techPannel[0])}
        {techPannel && techPannel.length>0&& techPannel[0][item.id].map((tech)=>(
          <p>{tech}</p>
          // <ul>
          // {(tech[item.id].map(item=>(
           
          //    <li>{item}</li>
          
          //     )))}
          // </ul>
            ))}
       </div>
   
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