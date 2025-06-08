import React from "react";
import "./App.css";
import Header from "./components/group/header/header";
import CircularProgress from "./components/single/progressDonut/circularProgress";
import ModalAdd from "./components/group/modalAdd/modalAdd";
import DeleteButton from "./components/single/deleteButton/deleteButton";
import CalendarView2 from "./components/group/calendarView2/calendarView2";

function App() {
  return (
    <div className="App">
      <Header />
      <CircularProgress />
      <div className="btn-modal-wrapper">
        <ModalAdd />
        <DeleteButton />
      </div>
      <div className="calendar-warp">
        <CalendarView2 />
      </div>
    </div>
  );
}

export default App;
