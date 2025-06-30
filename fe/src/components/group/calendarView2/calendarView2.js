import { useState } from "react";
import CalendarNavButton from "../../single/calendarNavButton/CalendarNavButton";
import "./calendarView2.css";

const CalendarView2 = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // State for month and year
  const today = new Date();
  const [monthIndex, setMonthIndex] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

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

  // count total days to determine the total number of days in each month
  const totalDays = new Date(year, monthIndex + 1, 0).getDate();
  // create an array from of (length)the number of days of a month determined before
  const dates = Array.from({ length: totalDays }, (_, i) => ({
    date: new Date(year, monthIndex, i + 1),
    bold: true,
  }));

  // get the first day (monday, tuesday, wednesday etc) of each month
  const firstDayOfTheMonth = new Date(year, monthIndex, 1);
  firstDayOfTheMonth.getDay();
  // fill in the blank day(date) at the beginning of the month if it is not Sunday(0),
  // fill the entire month page
  const SUNDAY = 0;
  if (firstDayOfTheMonth.getDay() !== SUNDAY) {
    const clone = new Date(firstDayOfTheMonth);
    for (let i = 0; i < firstDayOfTheMonth.getDay(); i++) {
      clone.setDate(clone.getDate() - 1);
      dates.unshift({ date: new Date(clone), bold: false });
    }
  }

  // get the last day (monday, tuesday, wednesday etc) of each month
  const lastDayOfTheMonth = new Date(year, monthIndex, totalDays);
  lastDayOfTheMonth.getDay();
  // fill in the blank day(date) at the end of the month if it is not Saturday(6),
  // fill the entire month page
  const SATURDAY = 6;
  if (lastDayOfTheMonth.getDay() !== SATURDAY) {
    const clone = new Date(lastDayOfTheMonth);
    for (let i = 0; i < 6 - lastDayOfTheMonth.getDay(); i++) {
      clone.setDate(clone.getDate() + 1);
      dates.push({ date: new Date(clone), bold: false });
    }
  }

  return (
    <div>
      <div className="calendar-container">
        <div className="calendar-header">
          <CalendarNavButton arrow="<" onClick={() => changeMonth("prev")} />
          <h3>
            {months[monthIndex]} {year}
          </h3>
          <CalendarNavButton arrow=">" onClick={() => changeMonth("next")} />
        </div>

        <div className="calendar-week">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="days-of-week">
              <strong>{day}</strong>
            </div>
          ))}
        </div>

        <div className="calendar-dates">
          {dates.map((d, i) => (
            <div key={i}>
              {d.bold ? (
                <strong>{d.date.getDate()}</strong>
              ) : (
                <>{d.date.getDate()}</>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView2;
