const CalendarNavButton = ({ arrow, onClick }) => {
  return (
    <div>
      <button
        className="button-arrow text-2xl w-[40px] font-bold hover:cursor active:translate-y-1"
        onClick={onClick}
      >
        {arrow}
      </button>
    </div>
  );
};

export default CalendarNavButton;
