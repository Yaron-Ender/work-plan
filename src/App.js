import './App.scss';
import { Routes,Route} from "react-router-dom";
import Navbar from './routes/navbar/navbar';
import Home from './routes/home/home';
import Database from './routes/database/database';
import Workers from './routes/workers/workers';
import Arragment from './routes/work-arragment/Arragment';
import { useAuthContext } from'./hooks/useAuthContext'
function App() {
const { user,AuthIsReady }=useAuthContext()

  return (
    <div className="App">
        {AuthIsReady&&(
      <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Arragment />} />
            <Route path="database/*" element={<Database />} />
            <Route path="workers" element={<Workers />} />
          </Route>
        </Routes>
        ) 
        }
        {!AuthIsReady&&(
          <Routes>
            <Route path='/home/*' element={<Home />} />
          </Routes>
        )
        }
    </div>
  );
}

export default App;
