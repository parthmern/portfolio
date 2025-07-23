import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, NavLink} from "react-router-dom";
import  Leetcode from './components/Leetcode';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<p>home</p>} ></Route>
        <Route path='/leetcode' element={<Leetcode />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
