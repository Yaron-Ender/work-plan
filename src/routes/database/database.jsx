import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import FormInput from "../../component/form-input/input.comp";
import Button from "../../component/button/button";
import SubstancesList from "../../component/substancesList/substancesList";


const Database = () => {
  const defaultFormField = {substance:""}
  //states
  const [formField,setFormField] = useState(defaultFormField)
  const {substance} = formField
 const {data}=useCollection('substances')
 console.log(data)
 //function
const handleChange=(e)=>{
 const {value,name} = e.target
 setFormField({...formField,[name]:value})
}
const seeAllDoc=()=>{
<SubstancesList substances={data}/>
 console.log("hat");
}
  return (
    <div>
      <div className="databse-title"> 
      <h1>SUBSTANCES DATABASE</h1>
      </div>
      <div className="form-container">
        <Button 
        children='All substance'
        onClick={seeAllDoc}
        />
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
      </div>
    </div>
  );
};

export default Database;