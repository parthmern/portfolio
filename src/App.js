import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Leetcode from "./components/Leetcode";
import KafkaNotes from "./components/notes/KafkaNotes";
import Navbar from "./components/Navbar";
import { UberBackend } from "./components/UberBackend";
import { Home } from "./components/Home";
import { useEffect } from "react";
import { OtherNotes } from "./components/OtherNotes";
import { Sandbox } from "./components/Sandbox";
import { Work1 } from "./components/Work1";

function App() {
  function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const frame = window.requestAnimationFrame(() => {
          document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
        });
        return () => window.cancelAnimationFrame(frame);
      }
      window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null; // This component doesn't render anything visually
  }

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/leetcode" element={<Leetcode />}></Route>
        <Route path="/uber" element={<UberBackend />}></Route>
        <Route path="/sandbox" element={<Sandbox />}></Route>
        <Route path="/work" element={<Work1 />}></Route>
        <Route path="/works" element={<Work1 />}></Route>
        <Route path="/notes/kafka" element={<KafkaNotes />}></Route>
        <Route path="/notes" element={<OtherNotes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
