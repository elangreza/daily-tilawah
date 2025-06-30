import "./CalendarNavButton.css";
const CalendarNavButton = ({ arrow, onClick }) => {
  return (
    <div>
      <button className="button-arrow" onClick={onClick}>
        {arrow}
      </button>
    </div>
  );
};

export default CalendarNavButton;
