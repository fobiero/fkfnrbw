import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Standings from "./pages/Standings";
import Fixture from "./pages/Fixture";
import Teams from "./pages/Teams";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ErrorPage from "./pages/auth/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fixtures" element={<Fixture />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/news" element={<News />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/notfound" element={<ErrorPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
