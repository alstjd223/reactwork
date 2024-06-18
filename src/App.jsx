// App.js
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import PremierLeague from "./PremierLeague.jsx";
import LaLiga from "./LaLiga.jsx";
import ChampionsLeague from "./ChampionsLeague.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/premier-league">프리미어 리그</Link>
          </li>
          <li>
            <Link to="/la-liga">라리가</Link>
          </li>
          <li>
            <Link to="/champions-league">챔피언스 리그</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/premier-league" element={<PremierLeague />} />
          <Route path="/la-liga" element={<LaLiga />} />
          <Route path="/champions-league" element={<ChampionsLeague />} />
          <Route path="/" element={<PremierLeague />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
