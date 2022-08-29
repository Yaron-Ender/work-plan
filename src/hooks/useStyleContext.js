import { useContext } from "react";
import { StyleContext } from "../context/styleContext";

export const useStyleContext = ()=>{
    const context = useContext(StyleContext)
    if(!context){
    console.log("useAuthContext must be inside an AuthcontextProvider");
    }
    return context
}