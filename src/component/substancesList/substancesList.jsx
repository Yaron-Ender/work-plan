import { NavLink } from "react-router-dom";


const SubstancesList = ({ substances }) => {

  return (
    <div>
     {substances &&(
      <>
      <h1>hai</h1>
      <nav>
       {substances.map((item)=>(
        <NavLink to={`${item.id}`}>{item.id}</NavLink>
        ))}
      </nav>
      </>
    
     )}   
    </div>
  )
};

export default SubstancesList;