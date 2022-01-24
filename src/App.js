import React from "react";
import MainContent from "./components/main_content";
import Sets from "./components/set_call";
import Cards from "./components/get_r_cards";
import Header from "./components/header";

import { Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<MainContent />} />
        <Route exact path="/search" element={<MainContent />} />
        <Route exact path="/sets" element={<Sets />} />
        <Route exact path="/cards" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
