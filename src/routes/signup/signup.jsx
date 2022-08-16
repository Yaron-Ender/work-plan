import { useState } from "react";
import FormInput from "../../component/form-input/input.comp";
import Button from "../../component/button/button";
const Signup = () => {

  const defaultInput = {
    userName: "",
    employeeNumber:"",
    password: "",
  };
  const [inputFields, setInputFields] = useState(defaultInput);
  const { userName, password,employeeNumber } = inputFields;
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({ ...prev, [name]: value }));
    console.log(inputFields);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputFields(defaultInput);
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
          name="confirm password"
          value={password}
          onChange={handleInput}
          required
        />
        <Button children={"Signup"} />
      </form>
    </div>
  );
};

export default Signup;
