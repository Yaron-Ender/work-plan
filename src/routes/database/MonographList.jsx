import { useState,useEffect,Fragment } from "react";
import { useFriestore } from "../../hooks/useFirestore";
const MonographList = ({ document,id }) => {
  const {updateDocument,updateMonograph}=useFriestore("substances",id)
  const[monograph,setMonograph]=useState([]);
  const[monographfieldText,setMonographfieldText]=useState("");
  const [Mono,setMono]=useState(null)
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

  const handleSubmit=(e)=>{
   e.preventDefault();
 updateMonograph(id,monographfieldText,Mono)
  }

    const handleChange =(e)=>{
     setMonographfieldText(e.target.value);
     setMono(e.target.name);
    
    //  let mono=e.target.value
    //  let arr = monograph
    //  arr.splice(x,1,mono)
    // setMonograph(arr)
}
const handleUpdate =async (e,mono,tech,index)=>{
const newVal=e.target.value
await updateDocument(id,document,mono,tech,index,newVal)
}
return (
  <div className="substance-form">
    {document &&
      Object.keys(document).map((mono, index) => (
        <Fragment key={mono}>
          <div className="mono-title">
            <form onSubmit={handleSubmit}>
              <label>
                <span>{mono}</span>
                <input
                  type="text"
                  name={mono}
                  placeholder={mono}
                  onChange={handleChange}
                  value={monographfieldText}
                />
              </label>
              <button>save</button>
            </form>
          </div>

          {Object.keys(document[mono]).map((technology, index) => (
            <div className="single-test" key={index}>
              <p>{technology}</p>
              <ul>
                {document[mono][technology].map((test, index) => (
                  <Fragment key={index}>
                    <li>{test}</li>
                    <input
                      type="text"
                      onChange={(e) => {
                        handleUpdate(e, mono, technology, index);
                      }}
                    />
                  </Fragment>
                ))}
              </ul>
            </div>
          ))}
        </Fragment>
      ))}
  </div>
);
};

export default MonographList
