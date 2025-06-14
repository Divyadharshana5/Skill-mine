import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPages from "./Components/LandingPages";
import "./App.css";
import "@fontsource/jost";
import "@fontsource/jost/700.css";

function App() {
  return (
    <div classname="h-[100vh]" style={{ fontFamily: "jost,sans-serif" }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPages />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
