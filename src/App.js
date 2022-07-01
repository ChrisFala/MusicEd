import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom'

// pages
import Home from './pages/Home'
import Exercises from "./pages/exercises/ExerciseSelect";
import Classrooms from "./pages/Classrooms"
import NoteIdentification from "./pages/exercises/NoteIdentification"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element= {<Home />}></Route>
          <Route path="/exercises*" element= {<Exercises />}></Route>
          <Route path="/classrooms" element= {<Classrooms />}></Route>
          <Route path="/NoteIdentification" element={<NoteIdentification />}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}
export default App;
