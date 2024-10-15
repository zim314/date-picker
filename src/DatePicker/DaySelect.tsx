interface Props {
  toDay: number[];
}

const DaySelect = ({ toDay }: Props) => {
  const days = [
    [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  ];

  const isLeapYear = (year: number) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 1 : 0;

  return (
    <div className="datePicker__content">
      {Array.from(
        { length: days[isLeapYear(toDay[0])][toDay[1]] },
        (_, i) => i + 1
      ).map((day: number, index: number) => (
        <button
          className={`datePicker__dayButton ${
            index + 1 === toDay[2] && "datePicker__dayButton--today"
          }`}
        >
          {day}日
        </button>
      ))}
    </div>
  );
};

export default DaySelect;
