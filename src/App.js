import './App.scss';
import { Routes,Route} from "react-router-dom";
import { useState } from 'react';
import Navbar from './routes/navbar/navbar';
import Home from './routes/home/home';
import Database from './routes/database/database';
import Workers from './routes/workers/workers';
import Arragment from './routes/work-arragment/Arragment';
function App() {
const [login,setLogin] = useState(false)

  return (
    <div className="App">
      <Routes>
        {(login)?(
       <Route path='/' element={<Navbar />}>
       <Route index element={<Arragment />} />
       <Route path='database/*' element={<Database />} />
       <Route path='workers' element={<Workers />} />
           </Route>
        ):(<Route path='/' element={<Home />}/>)
        }
      </Routes>
    </div>
  );
}

export default App;
