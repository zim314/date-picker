interface Props {
  toDay: number[];
}

const DaySelect = ({ toDay }: Props) => {
  const daysInMonth = new Date(toDay[0], toDay[1] + 1, 0).getDate();
  const daysInPrevMonth = new Date(toDay[0], toDay[1], 0).getDate();
  const firstDayOfMonth =
    new Date(2024, toDay[1], 1).getDay() === 0
      ? 7
      : new Date(2024, toDay[1], 1).getDay();

  return (
    <div className="datePicker__content">
      {Array.from(
        { length: firstDayOfMonth - 1 },
        (_, i) => daysInPrevMonth - i
      ).map((day) => (
        <div key={"previous" + day} className="datePicker__disbledDay">
          {day}日
        </div>
      ))}
      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
        (day: number, index: number) => (
          <button
            key={day}
            className={`datePicker__dayButton ${
              index + 1 === toDay[2] && "datePicker__dayButton--today"
            }`}
          >
            {day}日
          </button>
        )
      )}
      {Array.from(
        { length: 7 - ((daysInMonth + firstDayOfMonth - 1) % 7) },
        (_, i) => i + 1
      ).map((day: number) => (
        <div key={"next" + day} className="datePicker__disbledDay">
          {day}日
        </div>
      ))}
    </div>
  );
};

export default DaySelect;
