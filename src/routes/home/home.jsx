import { useState } from "react";
import Button from "../../component/button/button";
import Login from "../login/Login";

const Home = () => {
  const [ openLoginComp,setOpenLoginComp ] = useState(false)
  console.log(openLoginComp)
   const handleClick=()=>{
setOpenLoginComp(true)
   }
    return (
      <div className="homepage">
        <h1>home</h1>
        <div className="hero-img">
          <img
            src="https://via.placeholder.com/550X350"/>
        </div>
      {!openLoginComp && ( <Button children={'Login'} buttonType={'login'} handleClick={handleClick} />)} 
      {openLoginComp &&( <Login />)} 
      </div>
    );
};

export default Home;