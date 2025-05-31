import React from "react";
import "./calendarView.css";

function CalendarView() {
  const d = new Date();
  const year = d.getFullYear();

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
  let month = months[d.getMonth()];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      <div className="calendar-container">
        <div className="calendar-header">
          <h3>
            {month} {year}
          </h3>
        </div>
        <div className="calendar-week">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="days-of-week">
              <strong>{day}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
