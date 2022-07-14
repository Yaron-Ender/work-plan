import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import FormInput from "../../component/form-input/input.comp";


const Database = () => {
  const defaultFormField = {substance:""}
  const [formField,setFormField] = useState(defaultFormField)
  const {substance} = formField
 const {data}=useCollection()
 console.log(data)
const handleChange=(e)=>{
 const {value,name} = e.target
 setFormField({...formField,[name]:value})
}
  return (
    <div>
      <div className="databse-title">
      <h1>SUBSTANCES DATABASE</h1>
      </div>
      <div className="form-container">
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