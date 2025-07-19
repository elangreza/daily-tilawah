import React, { useState, useEffect } from "react";
import Header from "./components/group/header/header";
import CircularProgress from "./components/single/progressDonut/circularProgress";
import ModalAdd from "./components/group/modalAdd/modalAdd";
import DeleteButton from "./components/single/deleteButton/deleteButton";
import CalendarView from "./components/group/calendarView/calendarView";

function App() {
  const [progressPages, setProgressPages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedProgress = localStorage.getItem("inputProgress");
    console.log("savedProgress from localStorage:", savedProgress);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setProgressPages(Array.isArray(parsed) ? parsed : []);
        console.log(savedProgress);
      } catch {
        setProgressPages([]);
      }
    } else {
      setProgressPages([]);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("inputProgress", JSON.stringify(progressPages));
      console.log(progressPages);
    }
  }, [progressPages, isLoaded]);

  // count total pages for CircularProgress
  const totalPages = progressPages.reduce(
    (sum, item) => sum + (item.numberOfPages || 0),
    0
  );

  return (
    <div className="App flex flex-col min-h-screen bg-gray-900">
      <Header titleApp={"Daily Tilawah"} />
      <CircularProgress progressPages={totalPages} />
      <div className="flex justify-center items-center top-[120px] w-full h-[120px] content-evenly text-[25px]">
        <div className="flex flex-col items-end md:w-[600px] sm:w-[400px] w-[300px] gap-3">
          <ModalAdd
            progressPages={progressPages}
            setProgressPages={setProgressPages}
          />
          <div className="text-sm md:text-xl justify-center">
            <input
              className="w-7 md:w-20 bg-transparent text-red-600"
              type="number"
              readOnly
              placeholder={` 0`}
              value={totalPages}
            />
            <span className="text-white"> Pages</span>
          </div>
          <DeleteButton setProgressPages={setProgressPages} />
        </div>
      </div>
      <div className="flex w-full justify-center absolute top-[250px]">
        <CalendarView />
      </div>
    </div>
  );
}

export default App;
