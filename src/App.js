import Home from './Home.js';
import Welcome from './Welcome.js';
import { Route, Link, Routes } from "react-router-dom";
import Calculator from './Calculator.jsx';

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route exact path="/welcome" element={<Welcome/>} /> */}
        </Routes> 
        
    </div>
  )
}

export default App;
