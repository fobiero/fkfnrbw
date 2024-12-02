import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Standings from "./pages/Standings";
import Fixture from "./pages/Fixture";
import Teams from "./pages/Teams";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fixtures" element={<Fixture />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/teams" element={<Teams />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
