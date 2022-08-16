import { useState } from "react";   
import Button from "../../component/button/button";
import FormInput from "../../component/form-input/input.comp";

const Login = () => {

  const defaultInput={
    userNumber:'',
    password:''
  }
  const [inputFields, setInputFields] = useState(defaultInput);
  const{userNumber,password}=inputFields;
  const handleInput =(e)=>{
     const{name,value}=e.target
     setInputFields(prev=>({...prev,[name]:value}))
     console.log(inputFields)
  }
  const handleSubmit = (e)=>{
  e.preventDefault()
  setInputFields(defaultInput)
  }
    return (
      <div className="login-container">
        <h2>log in</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <FormInput
            id="user number"
            label="user number"
            type="Number"
            name="userNumber"
            value={userNumber}
            onChange={handleInput}
            required
            />
          <FormInput
            id="password"
            label="password"
            type="password"
            name="password"
            value={password}
            onChange={handleInput}
            required
            />
        <p>forgot password ? click <span>here</span></p>
        <Button children={'Login'}/>
        </form>
    
      </div>
    );
};

export default Login;