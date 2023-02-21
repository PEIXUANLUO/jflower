// import React from "react";
// import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Votenames from "./pages/Votenames"
import Navigation from "./conponents/navbar"
import Votes  from "./pages/Vote";
import PsychologicalTestIndex from "./pages/psychologicalTestIndex"
import PsychologicalTest from "./pages/psychologicalTest"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <voteTime />
       <Routes>
        <Route path="/Votenames" element={<Votenames/>} />
        <Route path="/Vote/:voteId" element={<Votes/>} />
        <Route path="/PsychologicalTestIndex" element={<PsychologicalTestIndex/>} />
        <Route path="/PsychologicalTest" element={<PsychologicalTest/>} />
        

       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
