import React from "react";
import Navbar from "./Navbar";
import Home from './Home'
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Exercises from "./Exercises";
import Classrooms from "./Classrooms"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element= {<Home />}></Route>
          <Route path="/exercises" element= {<Exercises />}></Route>
          <Route path="/classrooms" element= {<Classrooms />}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}
export default App;
