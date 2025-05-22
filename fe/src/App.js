import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/group/header/header";
import CircularProgress from "./components/single/progressDonut/circularProgress";
import ButtonProgress from "./components/single/buttonProgress/buttonProgress";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <CircularProgress />
        <ButtonProgress />
      </div>
    </Router>
  );
}

export default App;
