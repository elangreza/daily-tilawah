import React from "react";

import "./App.css";
import Header from "./components/group/header/header";
import CircularProgress from "./components/single/progressDonut/circularProgress";
import ModalAdd from "./components/group/modalAdd/modalAdd";
import DeleteButton from "./components/single/deleteButton/deleteButton";

function App() {
  return (
    <div className="App">
      <Header />
      <CircularProgress />
      <div className="btn-modal-wrapper">
        <ModalAdd />
        <DeleteButton />
      </div>
    </div>
  );
}

export default App;
