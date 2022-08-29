
import { createContext,useReducer } from "react";

export const StyleContext = createContext();

const styleReducer =(state,action)=>{
switch (action.type) {
  case "OPEN_DATABASE_NAVBAR":
    return { ...state, openDatabaseNav: true };
  case "CLOSE_DATABASE_NAVBAR":
      return { ...state, openDatabaseNav: false };
  
  default:
    return state;
}
}

export const StyleContextProvider = ({ children })=>{
const [state, dispatch] = useReducer(styleReducer, {
  openDatabaseNav: false,
});
return(
<StyleContext.Provider value={{...state,dispatch}} >
    {children}
</StyleContext.Provider>  
)
} 