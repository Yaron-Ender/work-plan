import { workersID } from "../asstes/workers-ID-Numbers"
import { useState } from "react"
export const useISManager = ()=>{  
  const [isManager,setIsManager] = useState(null);
  const manager = (employeeNum) => {
    const findManager = workersID.find((num) => num === employeeNum);

    switch (findManager) {
      case "888888":
        return setIsManager(true);
      case "999999":
        return setIsManager(true);
      default:
        setIsManager(null);
    }
  };
return{ isManager,manager }
}