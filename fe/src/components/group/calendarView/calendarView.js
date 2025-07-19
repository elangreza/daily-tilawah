import { useState } from "react";
import CalendarNavButton from "../../single/calendarNavButton/CalendarNavButton";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { calendarFunc } from "./calendarFunc";

const CalendarView = () => {
  // State for month and year
  const today = new Date();
  const [monthIndex, setMonthIndex] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const dummyInputDates = {
    "2025-06-01": "bg-yellow-300",
    "2025-06-10": "bg-green-300",
    "2025-06-15": "bg-blue-300",
  };

  // Generate calendar dates using the separated function
  const dates = calendarFunc.generateCalendarDates(year, monthIndex);

  // function button navigation month and year
  const changeMonth = (direction) => {
    if (direction === "prev") {
      if (monthIndex === 0) {
        setMonthIndex(11); // December
        setYear((prev) => prev - 1);
      } else {
        setMonthIndex((prev) => prev - 1);
      }
    } else if (direction === "next") {
      if (monthIndex === 11) {
        setMonthIndex(0); // January
        setYear((prev) => prev + 1);
      } else {
        setMonthIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <div>
      <div className="calendar-container md:w-[500px] sm:w-[400px] w-[300px] rounded-lg  bg-white p-4">
        <div className="calendar-header flex justify-between items-center font-bold mb-3">
          <CalendarNavButton
            arrow={<ChevronsLeft size={30} strokeWidth={2.25} />}
            onClick={() => changeMonth("prev")}
          />
          <h3>
            {calendarFunc.months[monthIndex]} {year}
          </h3>
          <CalendarNavButton
            arrow={<ChevronsRight size={30} strokeWidth={2.25} />}
            onClick={() => changeMonth("next")}
          />
        </div>

        <div className="calendar-week grid grid-cols-7 gap-1 mb-2 text-xs sm:text-sm md:text-base">
          {calendarFunc.daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-center p-[5px] bg-slate-400 rounded-lg"
            >
              <strong>{day}</strong>
            </div>
          ))}
        </div>

        <div className="calendar-dates grid grid-cols-7 gap-3 text-center p-[5px] text-xs sm:text-sm md:text-base">
          {dates.map((d, i) => {
            const dateStr = d.date.toISOString().slice(0, 10);
            const markedBg =
              dummyInputDates[dateStr] || (d.bold ? "bg-white" : "bg-gray-200");
            return (
              <div key={i} className={`rounded ${markedBg}`}>
                {d.bold ? (
                  <strong>{d.date.getDate()}</strong>
                ) : (
                  <>{d.date.getDate()}</>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
