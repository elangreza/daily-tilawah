import React from "react";
import "./calendarView2.css";

function CalendarView2() {
  // to simulate using feb 2025
  // const d = new Date(new Date().setMonth(1))
  // to simulate using may 2025
  const d = new Date(new Date().setMonth(4))
  // const d = new Date()
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

  const totalDaysInTheCurrentMonth = new Date(year, d.getMonth()+1, 0).getDate()
  
  let dates = Array.from({ length: totalDaysInTheCurrentMonth }, (val, i) => ({
    date: new Date(year, d.getMonth(), i+1),
    bold: true
  }),);
  
  // check if first date is not in the Sunday append at first
  let firstDayOfTheMonth = new Date(year, d.getMonth(), 1)
  // this condition will check if the current month is not start in sunday
  const SUNDAY = 0
  if (firstDayOfTheMonth.getDay() !== SUNDAY) {
    const daysToGenerate = firstDayOfTheMonth.getDay()
    for (let step = 0; step < daysToGenerate; step++) {
      firstDayOfTheMonth.setDate(firstDayOfTheMonth.getDate() - 1)
      dates.unshift({
        date: new Date(firstDayOfTheMonth),
        bold: false
      }) 
    }
  }

  // check if last date is not in the Saturday append at last
  let lasttDayOfTheMonth = new Date(year, d.getMonth(), totalDaysInTheCurrentMonth)
  // this condition will check if the current month is not last in saturday
  const SATURDAY = 6
  if (lasttDayOfTheMonth.getDay() !== SATURDAY) {
    const daysToGenerate = 6 - lasttDayOfTheMonth.getDay()
    for (let step = 0; step < daysToGenerate; step++) {
      lasttDayOfTheMonth.setDate(lasttDayOfTheMonth.getDate() + 1)
      dates.push({
        date: new Date(lasttDayOfTheMonth),
        bold: false
      }) 
    }
  }

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
        <div className="calendar-dates">
          {dates.map((date, i) => (
            <div key={i}>
              {
                date.bold ? <strong>{date.date.getDate().toString()}</strong> : <>{date.date.getDate().toString()}</> 
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarView2;
