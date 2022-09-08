import { useState } from "react";
const MonographList = ({ customObj }) => {
const [inputValue,setInputValue]=useState('')
  //  console.log(customObj)
  const handleSubmit =(e)=>{
e.preventDefault()
console.log(e.target)
  }
const handleChange =(e)=>{
console.log(e.target.value)
console.log(e.target.name)
const {value,name}=e.target
setInputValue(value)
}
  return (
      <form onSubmit={handleSubmit} className="substance-form">
          {Object.keys(customObj).length > 0 &&
            Object.keys(customObj).map(mono=>(
              <label key={mono}>
              <span>{mono}</span>
            <input
             type="text"
             name={mono}
             onChange={handleChange}
             value={inputValue}  
             />
              </label>
            ))
          }
        <button>submit</button>
      </form>
  );
};

export default MonographList