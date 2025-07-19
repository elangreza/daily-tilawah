export const months = [
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

export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Function to get total days in a month
export const getTotalDays = (year, monthIndex) => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

// Function to create dates array for a month
export const createDatesArray = (year, monthIndex) => {
  const totalDays = getTotalDays(year, monthIndex);
  const dates = Array.from({ length: totalDays }, (val, i) => ({
    date: new Date(year, monthIndex, i + 1),
    bold: true,
  }));
  return dates;
};

// Function to fill blank days at the beginning of month
export const fillBeginningDays = (dates, year, monthIndex) => {
  const firstDayOfTheMonth = new Date(year, monthIndex, 1);
  const SUNDAY = 0;

  if (firstDayOfTheMonth.getDay() !== SUNDAY) {
    const clone = new Date(firstDayOfTheMonth);
    for (let i = 0; i < firstDayOfTheMonth.getDay(); i++) {
      clone.setDate(clone.getDate() - 1);
      dates.unshift({ date: new Date(clone), bold: false });
    }
  }

  return dates;
};

// Function to fill blank days at the end of month
export const fillEndingDays = (dates, year, monthIndex) => {
  const totalDays = getTotalDays(year, monthIndex);
  const lastDayOfTheMonth = new Date(year, monthIndex, totalDays);
  const SATURDAY = 6;

  if (lastDayOfTheMonth.getDay() !== SATURDAY) {
    const clone = new Date(lastDayOfTheMonth);
    for (let i = 0; i < 6 - lastDayOfTheMonth.getDay(); i++) {
      clone.setDate(clone.getDate() + 1);
      dates.push({ date: new Date(clone), bold: false });
    }
  }

  return dates;
};

// Main function to generate complete calendar dates
export const generateCalendarDates = (year, monthIndex) => {
  let dates = createDatesArray(year, monthIndex);
  dates = fillBeginningDays(dates, year, monthIndex);
  dates = fillEndingDays(dates, year, monthIndex);

  return dates;
};

export const calendarFunc = {
  months,
  daysOfWeek,
  getTotalDays,
  createDatesArray,
  fillBeginningDays,
  fillEndingDays,
  generateCalendarDates,
};
