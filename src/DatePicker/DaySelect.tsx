interface Props {
  toDay: number[];
  showDate: number[];
}

const DaySelect = ({ toDay, showDate }: Props) => {
  const daysInMonth = new Date(showDate[0], showDate[1] + 1, 0).getDate();
  const daysInPrevMonth = new Date(showDate[0], showDate[1], 0).getDate();
  const firstDayOfMonth =
    new Date(2024, showDate[1], 1).getDay() === 0
      ? 7
      : new Date(2024, showDate[1], 1).getDay();

  const replenishDay = 7 - ((daysInMonth + firstDayOfMonth - 1) % 7);

  return (
    <div
      className={`datePicker__content${
        daysInMonth + firstDayOfMonth - 1 > 35 ? "--6rows" : "--5rows"
      }`}
    >
      {Array.from(
        { length: firstDayOfMonth - 1 },
        (_, i) => daysInPrevMonth - i
      ).map((day) => (
        <div key={"previous" + day} className="datePicker__disbledDay">
          {day}日
        </div>
      ))}
      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
        (day: number, index: number) => {
          return (
            <button
              key={day}
              className={`datePicker__dayButton ${
                toDay[0] === showDate[0] &&
                toDay[1] === showDate[1] &&
                toDay[2] === index + 1 &&
                "datePicker__dayButton--today"
              }`}
            >
              {day}日
            </button>
          );
        }
      )}
      {replenishDay !== 7 &&
        Array.from(
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
