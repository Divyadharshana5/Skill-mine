import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { LandingPages } from "./Components";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPages />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
