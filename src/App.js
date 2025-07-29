import './App.css';
import { Routes, Route, useLocation} from "react-router-dom";
import  Leetcode from './components/Leetcode';
import KafkaNotes from './components/notes/KafkaNotes';
import Navbar from './components/Navbar';
import { UberBackend } from './components/UberBackend';
import { Home } from './components/Home';
import { useEffect } from 'react';




function App() {
  function ScrollToTop() {
      const { pathname } = useLocation();

      useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the window
        // Alternatively, for smooth scrolling:
        // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, [pathname]); // Re-run effect when pathname changes

      return null; // This component doesn't render anything visually
    }

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/leetcode' element={<Leetcode />} ></Route>
        <Route path='/uber' element={<UberBackend />}></Route>
        <Route path='/notes/kafka' element={<KafkaNotes />} ></Route>

      </Routes>
    </div>
  );
}

export default App;
