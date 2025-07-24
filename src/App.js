import './App.css';
import { Routes, Route} from "react-router-dom";
import  Leetcode from './components/Leetcode';
import KafkaNotes from './components/notes/KafkaNotes';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<p>home</p>} ></Route>
        <Route path='/leetcode' element={<Leetcode />} ></Route>
        <Route path='/notes/kafka' element={<KafkaNotes />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
