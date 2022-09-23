import MonoInput from "../../component/input/MonoInput";
import { useState } from "react";
import Button from "../../component/button/button";
import plusSign from "../../asstes/plus.svg"
const SingelTech = ({technology}) => {
   const [testList,setTestList]=useState(null)
   const handleClick=(e)=>{
      console.log(e.target.value)
   }
    return (
    <div>
    <h3>{technology} </h3>
    <div className="test-container">
    <MonoInput type="text" span={"add test"} onClick={handleClick} />
    <Button type="button" 
    buttontype='addTest' 
    children={<img className="plus-sign" src={plusSign} />} />
    </div>
    </div>
    );
};

export default SingelTech;