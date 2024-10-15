interface Props {
  toDay: number[];
}

const DaySelect = ({ toDay }: Props) => {
  const daysInMonth = new Date(toDay[0], toDay[1] + 1, 0).getDate();

  return (
    <div className="datePicker__content">
      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
        (day: number, index: number) => (
          <button
            className={`datePicker__dayButton ${
              index + 1 === toDay[2] && "datePicker__dayButton--today"
            }`}
          >
            {day}日
          </button>
        )
      )}
    </div>
  );
};

export default DaySelect;
