import React from "react";
import Header from "./components/group/header/header";
import CircularProgress from "./components/single/progressDonut/circularProgress";
import ModalAdd from "./components/group/modalAdd/modalAdd";
import DeleteButton from "./components/single/deleteButton/deleteButton";
import CalendarView from "./components/group/calendarView/calendarView";

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-gray-900">
      <Header />
      <CircularProgress />
      <div className="btn-modal-wrapper absolute top-[120px] right-[100px] w-[150px] h-[120px] content-evenly text-[25px]">
        <ModalAdd />
        <DeleteButton />
      </div>
      <div className="flex w-full justify-center absolute top-[250px]">
        <CalendarView />
      </div>
    </div>
  );
}

export default App;
