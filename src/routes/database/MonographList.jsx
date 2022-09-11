import { useState,useEffect,useReducer } from "react";
const MonographList = ({ document }) => {
  const[monograph,setMonograph]=useState([]);
  const[tech,setTech]=useState([]);
  const randomNum =()=>{
    return Math.random()*10000000
  }
  useEffect(()=>{
    if(document){
      const findTech=()=>{
        monograph.map(m=>{
        }) 
      }
      const monographArr =()=>{
        console.log(document)
        Object.keys(document).map((mono) => {
            setMonograph(prev=>[...prev])
          setMonograph(prev=>[...prev,mono])
        });
        findTech()
        console.log(monograph)
      }
      monographArr();
    }
  },[document])
  
  const monographReducer=(state,action)=>{
 
    const {type,payload}=action    
  
      }
      const [state,dispatch]=useReducer(monographReducer,{...document})
    

    const handleSubmit =(e)=>{
      e.preventDefault()
      
    }
    const handleChange =(e,x)=>{
     let mono=e.target.value
     let arr = monograph
     arr.splice(x,1,mono)
    setMonograph(arr)
      console.log(monograph)


}
  return (
    <div className="substance-form">
      {document &&
        Object.keys(document).map((mono, index) => (
          <form onSubmit={handleSubmit}>
            <label key={randomNum()}>
              <span>{mono}</span>
              <input
                type="text"
                name={mono}
                placeholder={mono}
                onChange={(e) => {
                  handleChange(e, index);
                }}
              />
            </label>
            {Object.keys(document[mono]).map((technology, index) => (
              <div key={randomNum()}>
               <p>{technology}</p>
              <ul>
                {document[mono][technology].map((test,index)=>(
                <>
                <li key={randomNum()}>{test}</li>
               <input type="text" />
                </>
                ))}
              </ul>
              </div>
            ))}

            <button>submit</button>
          </form>
        ))}
    </div>
  );
};

export default MonographList
// {Object.keys(customObj).length > 0 &&
//   Object.keys(customObj).map(mono=>(
//     <label key={mono}>
//     <span>{mono}</span>
//   <input
//    type="text"
//    name={mono}
//    onChange={handleChange}
//    value={inputValue}  
//    />
//     </label>
//   ))
// }