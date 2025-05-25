import React from "react";

import "./App.css";
import Header from "./components/group/header/header";
import CircularProgress from "./components/single/progressDonut/circularProgress";

import ModalAdd from "./modalAdd";
import ModalDelete from "./modalDelete";

function App() {
  return (
    <div className="App">
      <Header />
      <CircularProgress />
      <div className="btn-wrapper">
        <ModalAdd />
        <ModalDelete />
      </div>
    </div>
  );
}

export default App;
