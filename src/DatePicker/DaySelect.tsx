import dateComparison from "./dateComparison";
import { SelectDate } from "../App";
interface Props {
  toDay: number[];
  showDate: number[];
  selectDate: SelectDate;
  handleSelectDate: (year: number, month: number, day: number) => void;
  disableSelectionOfNonCurrentMonth?: boolean;
}

const DaySelect = ({
  toDay,
  showDate,
  selectDate,
  handleSelectDate,
  disableSelectionOfNonCurrentMonth,
}: Props) => {
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
      ).map((day: number) => (
        <button
          key={"previous" + day}
          className={`
            datePicker__notCurrentMonth
             ${
               dateComparison(
                 [showDate[0], showDate[1] - 1, day],
                 selectDate.startDate
               ) === +1 && "datePicker__dayButton--active"
             }
            ${
              dateComparison(
                [showDate[0], showDate[1] - 1, day],
                selectDate.startDate
              ) === 0 && "datePicker__dayButton--active"
            }
          `}
          onClick={() => handleSelectDate(showDate[0], showDate[1] - 1, day)}
          disabled={disableSelectionOfNonCurrentMonth}
        >
          {day}日
        </button>
      ))}
      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
        (day: number, index: number) => {
          return (
            <button
              key={day}
              className={`
                datePicker__dayButton 
                ${
                  toDay[0] === showDate[0] &&
                  toDay[1] === showDate[1] &&
                  toDay[2] === index + 1 &&
                  "datePicker__dayButton--today"
                }
                ${
                  dateComparison(
                    [showDate[0], showDate[1], day],
                    selectDate.startDate
                  ) === 0 && "datePicker__dayButton--active"
                }
                ${
                  dateComparison(
                    [showDate[0], showDate[1], day],
                    selectDate.startDate
                  ) === 1 &&
                  dateComparison(
                    [showDate[0], showDate[1], day],
                    selectDate.overDate
                  ) === -1 &&
                  selectDate.overDate !== null &&
                  "datePicker__dayButton--active"
                }
                ${
                  dateComparison(
                    [showDate[0], showDate[1], day],
                    selectDate.overDate
                  ) === 0 && "datePicker__dayButton--active"
                }
              `}
              onClick={() =>
                handleSelectDate(showDate[0], showDate[1], index + 1)
              }
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
        ).map((day: number, index: number) => {
          return (
            <button
              key={"next" + day}
              className={`
                datePicker__notCurrentMonth
                ${
                  dateComparison(
                    [showDate[0], showDate[1] + 1, day],
                    selectDate.overDate
                  ) === -1 &&
                  selectDate.overDate !== null &&
                  "datePicker__dayButton--active"
                }
                ${
                  dateComparison(
                    [showDate[0], showDate[1] + 1, day],
                    selectDate.overDate
                  ) === 0 && "datePicker__dayButton--active"
                }

                ${
                  dateComparison(
                    [showDate[0], showDate[1] + 1, day],
                    selectDate.startDate
                  ) === 0 && "datePicker__dayButton--active"
                }
                ${
                  dateComparison(
                    [showDate[0], showDate[1] + 1, day],
                    selectDate.startDate
                  ) === 1 &&
                  dateComparison(
                    [showDate[0], showDate[1] + 1, day],
                    selectDate.overDate
                  ) === -1 &&
                  selectDate.overDate !== null &&
                  "datePicker__dayButton--active"
                }
                ${
                  dateComparison(
                    [showDate[0], showDate[1] + 1, day],
                    selectDate.overDate
                  ) === 0 && "datePicker__dayButton--active"
                }
              `}
              onClick={() =>
                handleSelectDate(showDate[0], showDate[1] + 1, index + 1)
              }
              disabled={disableSelectionOfNonCurrentMonth}
            >
              {day}日
            </button>
          );
        })}
    </div>
  );
};

export default DaySelect;
