import "./CalendarNavButton.css";

const CalendarNavButton = (props) => {
  return (
    <div>
      <button className="button-arrow">{props.arrow}</button>
    </div>
  );
};

export default CalendarNavButton;
