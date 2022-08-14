import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
// import FormInput from "../../component/form-input/input.comp";
import Button from "../../component/button/button";
import SubstancesList from "../../component/substancesList/substancesList";


const Database = () => {
  const defaultFormField = {substance:""}
  //states
  const [formField,setFormField] = useState(defaultFormField);
  const [idArray,setIdAraay]=useState(null);
  const {substance} = formField
  //customUse
 const {data}=useCollection('substances')
//  console.log(data)

 //functions
const handleChange=(e)=>{
 const {value,name} = e.target
 setFormField({...formField,[name]:value})
}
const seeAllDoc=()=>{
  // console.log("hat");
setIdAraay(data)
}
  return (
    <div>
      <div className="databse-title"> 
      <h1>SUBSTANCES DATABASE</h1>
      </div>
        <Button 
        children='All substance'
        onClick={seeAllDoc}
        />
        <SubstancesList substances={idArray}/>
      {/* <div className="form-container">
        <form>
          <FormInput
           label='substance'
          type='text'
          name='substance'
          onChange={handleChange}
          placeholder='test'
          value={substance}
          />
        </form>
      </div> */}
    </div>
  );
};

export default Database;