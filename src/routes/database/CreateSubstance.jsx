import React from "react";
import { useEffect,useState } from "react";
import Button from "../../component/button/button";
import FormInput from "../../component/input/input.comp";
import SingelTech from "./SingelTech";
import MonoInput from "../../component/input/MonoInput";
import Select from 'react-select'
const CreateSubstance = () => {

const technologies =[{value:'HPLC',label:"HPLC"},{value:'WET',label:"WET"},{value:'GC',label:"GC"}]
//INIT OBJECT
  // const initObj={
  //  id:randomID(),
  //   monographName:'',
  //   monographEdition:'',
  //   effectiveDate:''
  // }
  class Mono{
    constructor(name,eddition,date,tech,note){
      this.id=this.id()
       this.monographName=name;
       this. monographEdition=eddition;
       this.effectiveDate=date;
       this.tech=tech
       this.openNote=false
       this.note=note
       this.tests={HPLC:['Assay','IMP','Organic'],
                   WET:['IR','K.F'],
                  GC:['Methanol','DMSO']}

    }
     id(){ return Math.random()}
     openTextarea(){this.openNote=true}
     hai(){console.log('VVVVVVVVVVV....')}
  }
//STATES
const [show,setShow]=useState(false)
const [monograph,setMonograph]=useState([])//All the monograpes that the user create
const [test,setTest]=useState('')
const [openTextareaPannel,setOpenTextareaPannel]=useState(false);
const [textareaContent,setTextareaContent]=useState('');

  //FUNCTIONS
  //
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(monograph)
  
  }
  const saveMonograph=()=>{
  }
  //add the individual monograph to state that store all the monographes
  const addMonograph=(e)=>{
    const mono = new Mono('','','',[],'')
    setMonograph((prev) => [...prev,mono]);
    setShow(true)
   setOpenTextareaPannel(false);
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
 let arr =[]
monograph.forEach((item) => {
  if (item.id === id) {
    item.tech=[]
    op.forEach((optionValue)=>{
    item.tech.push(optionValue.value)
     arr.push(item.tech)
  })
}
 setTest(arr)
});
}//end
//open the textarea
 const handleTextareaPanel =(id)=>{
   monograph.forEach((item) => {
     if (item.id === id) {
       item['openNote']=true
     console.log(item)
   setOpenTextareaPannel(true)
}
});
}
const handletextareaContent=(e,id)=>{
  const text = e.target.value;
   monograph.forEach((item) => {
     if (item.id === id) {
       item['note']=text
      }
});
}
// *********************************
    return (
<div className="create-Newsubstance-container">
 <h1>Cretae New Substance</h1>
  <form className="signup-form" onSubmit={handleSubmit}>
   <header>
  <div className="btn-pannel">
    <Button
      buttontype="createSubstance"
      type="button"
      onClick={addMonograph}
      children={"add monograph"}
    />
    <Button children={"see preview"} />
    <Button
     buttontype="createSubstance"
      onClick={saveMonograph}
      children={"save monograph"}
    />
    <Button type="button" children={"delete"} />
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
        <MonoInput
    span="monograph"
  type="text"
    name="monographName"
    onClick={(e) => {
    handleMonographInput(e, item.id);
        }}
  />
  <MonoInput
    span="edition"
    type="number"
    name="edition"
    onChange={(e) => {
      handleMonographInput(e, item.id);
    }}
  />
  <MonoInput
    span="effective date"
        type="date"
        name="date"
        onChange={(e) => {
          handleMonographInput(e, item.id);
        }}
      />
      {/* tech section */}
      <div className="select-tech">
        <p>select Tech</p>
        <Select
          onChange={(option) => {
            handleSelectOption(option, item.id);
          }}
          options={technologies}
          isMulti
        />
        {item.tech.map((technology) => (
          <SingelTech technology={technology}/>
        ))}
      </div>
      {/* textarea */}
      <p>add Note <Button
       buttontype="openTextarea"
      type="button"
      onClick={()=>{handleTextareaPanel(item.id)}}
      children='&#9547;' />
      </p>
      {item['openNote']&&<textarea className="note-textarea"
      onKeyUpCapture={(e)=>{handletextareaContent(e,item.id)}}
      
      ></textarea>}
      {/* end of textarea */}
      <Button
        onClick={() => {
        removeMonograph(item.id);
        }}
        children={"remove"}
      />
    </div>
  ))}
    </div>
    <div className="substance-UI"></div>
   </form>
</div>
    );
};

export default CreateSubstance;