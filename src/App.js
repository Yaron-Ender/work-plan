import './App.scss';
import { Routes,Route,useNavigate} from "react-router-dom";
import { useState,useEffect } from 'react';
import Navbar from './routes/navbar/navbar';
import Home from './routes/home/home';
import Database from './routes/database/database';
import Workers from './routes/workers/workers';
import Arragment from './routes/work-arragment/Arragment';
function App() {
const [login,setLogin] = useState(false)
const navigate =useNavigate()
useEffect(()=>{
 if(!login){
  navigate('/home')
 }
},[login])
  return (
    <div className="App">
        {login && (
      <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Arragment />} />
            <Route path="database/*" element={<Database />} />
            <Route path="workers" element={<Workers />} />
          </Route>
        </Routes>
        ) 
        }
        {!login&&
          <Routes>
            <Route path='/home/*' element={<Home />} />
          </Routes>
        
        }
    </div>
  );
}

export default App;
