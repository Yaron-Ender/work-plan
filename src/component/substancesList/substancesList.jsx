import { NavLink } from "react-router-dom";
import { useGetFromCollection } from "../../hooks/useGetFromCollection";
const SubstancesList = ({ substancesID }) => {
const { getdocContent } = useGetFromCollection();
const handleClick =async (id)=>{
   await getdocContent("substances", id);
}
  return (
    <div>
     {substancesID &&(
      <>
      <nav>
       {substancesID.map((subID)=>(
        <NavLink 
        key={subID}
         to={subID}
         onClick={()=>{handleClick(subID)}}
         >{subID}</NavLink>
        ))}
      </nav>
      </>
    
     )}   
    </div>
  )
};

export default SubstancesList;