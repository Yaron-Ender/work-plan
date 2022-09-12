import { useState,useEffect,useReducer } from "react";
import { useFriestore } from "../../hooks/useFirestore";
const MonographList = ({ document,id }) => {
  const {updateDocument}=useFriestore("substances")
  const[monograph,setMonograph]=useState([]);
  const[selectedTech,setSelectedTech]=useState(null);
  
  const randomNum =()=>{
    return Math.random()*10000000
  }
  useEffect(()=>{
    if(document){
      const monographArr =()=>{
        Object.keys(document).map((mono) => {
            setMonograph(prev=>[...prev])
          setMonograph(prev=>[...prev,mono])
        });
      }
      monographArr();
    }
  },[document])

    const handleSubmit =(e)=>{
      e.preventDefault()
    }
    const handleChange =(e,x)=>{
     let mono=e.target.value
     let arr = monograph
     arr.splice(x,1,mono)
    setMonograph(arr)
}
const handleUpdate =async (e,mono,tech,index)=>{
const newVal=e.target.value
await updateDocument(id,document,mono,tech,index,newVal)
}
return (
  <div className="substance-form">
      {document &&
        Object.keys(document).map((mono, index) => (
          <form onSubmit={(e)=>{
 handleSubmit()
          } }>
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
              {document[mono][technology].map((test, index) => (
            <>
                <li key={randomNum()}>{test}</li>
                 <input
               type="text"
              onChange={(e) => {
             handleUpdate(e,mono,technology,index)
                    
                    }}
                />
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