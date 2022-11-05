import React from "react";
import BoxCard from "./Components/LoginPage/BoxCard";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import TableApp from "./Components/Table/TableApp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BoxCard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/table" element={<TableApp />} />
      </Routes>
    </div>
  );
}

export default App;
