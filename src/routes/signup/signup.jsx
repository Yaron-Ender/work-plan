import { useState,useEffect } from "react";
import FormInput from "../../component/form-input/input.comp";
import Button from "../../component/button/button";
import { workersData } from "../../asstes/workers-data";
import { useSignup } from "../../hooks/useSignup";
const Signup = () => {
  const { error,isPending,signup } = useSignup()
  const defaultInput = {
    userName: "",
    email:'',
    employeeNumber: "",
    password: "",
    confirmPassword: "",
  };
  const [inputFields, setInputFields] = useState(defaultInput);
  const [employeeNum,setEmployeeNum] =useState(null)
  const [comparePS,setComparePS] = useState(false)
  const { userName,email, employeeNumber,password, confirmPassword } = inputFields;
useEffect(()=>{
  setComparePS(false)
  if(password===confirmPassword){
    setComparePS(true)
  }
setEmployeeNum(prev=>(prev=workersData.find(num => num==employeeNumber)))
},[password,confirmPassword,employeeNum])
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({ ...prev, [name]: value }));
    // console.log(inputFields);
  };
  const handleSubmit =async(e)=>{
    e.preventDefault();
    if (comparePS && employeeNum) {
      await signup(email,password,userName,employeeNum);
      setComparePS(false)
      setEmployeeNum(null)
      setInputFields(defaultInput);
    } else {
      console.log("form could not submitted");
    }
  };
  return (
    <div className="signup-container">
      <h2>Sinup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <FormInput
          id="User Name"
          label="User Name"
          type="text"
          name="userName"
          value={userName}
          onChange={handleInput}
          required
        />
        <FormInput
          id="email"
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={handleInput}
          required
        />
        <FormInput
          id="Employee Number"
          label="Employee Number"
          type="number"
          name="employeeNumber"
          value={employeeNumber}
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
        <FormInput
          id="confirm password"
          label="confirm password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleInput}
          required
        />
        {!isPending && <Button children={"Signup"} />}
        {isPending && <Button disabled={'disabled'} children={"loading..."} />}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
