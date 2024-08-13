import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Signin from './components/Signin';
import Data from './components/Data'
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  } 
  from "react-router-dom";

function App() {
  return (
    
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
        <Routes>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        <Routes>
          <Route path="/Data" element={<Data/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
