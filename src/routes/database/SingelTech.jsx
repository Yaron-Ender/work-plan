import MonoInput from "../../component/input/MonoInput";
import { useState, useEffect } from "react";
import Button from "../../component/button/button";
import plusSign from "../../asstes/plus.svg"
const SingelTech = ({technology,id}) => {
   const [testList,setTestList]=useState([])
   const [text,setText]=useState('')
// useEffect(()=>{
//    setTestList(prev=>[...prev,{}])
// },[id])
   const handleClick=(e)=>{
      console.log(text,technology)
  setTestList((prev) => [...prev, text]);
  setText("");
   }
   return (
    <div>
   <h3>{technology}</h3>
   <ul>
   {testList&&
   testList.map(item=>(
      <li>{item}</li>
   ))
   }
   </ul>
   <div className="test-container">
   <MonoInput type="text" span={"add test"}
   onChange={(e)=>{setText(e.target.value)}}
 value={text}
   />
   <Button type="button" 
   buttontype='addTest' 
    children={<img className="plus-sign" src={plusSign}
     onClick={handleClick}  />}
    />
    </div>
    </div>
    );
};

export default SingelTech;