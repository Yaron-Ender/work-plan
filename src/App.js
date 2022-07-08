import './App.scss';
import { Routes, Route} from "react-router-dom";
import Navbar from './routes/navbar/navbar';
import Home from './routes/home/home';
import Database from './routes/database/database';
import Workers from './routes/workers/workers';
function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Navbar />}>
       <Route index element={<Home />} />
       <Route path='database' element={<Database />} />
       <Route path='workers' element={<Workers />} />
       
       </Route>
      </Routes>
    </div>
  );
}

export default App;
