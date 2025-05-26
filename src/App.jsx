import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import LandingPages from "./Components/LandingPages";

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
