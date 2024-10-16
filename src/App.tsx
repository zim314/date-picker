import DatePicker from "./DatePicker";
import "./reset.scss";
import "./app.scss";
import { useState, useMemo } from "react";
import dateComparison from "./DatePicker/dateComparison";
import changeDateFormat from "./DatePicker/changeDateFormat";

export interface SelectDate {
  startDate: null | number[];
  overDate: null | number[];
}

const App = () => {
  const toDay = useMemo(
    () => [
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
    ],
    []
  );

  const [selectDate, setSelectDate] = useState<SelectDate>({
    startDate: null,
    overDate: null,
  });

  const getTask1Date = (year: number, month: number, day: number) => {
    const result = dateComparison([year, month, day], toDay);
    if (result !== 1)
      setSelectDate((prev) => ({
        ...prev,
        startDate: [year, month, day],
      }));
  };

  const getTask2Date = (year: number, month: number, day: number) => {
    const result = dateComparison([year, month, day], selectDate.startDate);

    switch (result) {
      case -1: {
        setSelectDate((prev) => ({
          startDate: [year, month, day],
          overDate: Array.isArray(prev.overDate) ? [...prev.overDate] : null,
        }));
        break;
      }
      case 0: {
        setSelectDate({
          startDate: null,
          overDate: null,
        });
        break;
      }
      case 1: {
        setSelectDate((prev) => ({
          startDate: Array.isArray(prev.startDate) ? [...prev.startDate] : null,
          overDate: [year, month, day],
        }));
        break;
      }
    }
  };

  return (
    <>
      <div className="app__container">
        <h3 className="app__question">
          Task.1 (Date Range Component for current month)
        </h3>
        <DatePicker
          toDay={toDay}
          selectDate={selectDate}
          handleSelectDate={getTask1Date}
          disabledSelectMonth
          disableSelectionOfNonCurrentMonth
        />
        <div className="app__selectDate">
          {selectDate.startDate && (
            <p>已選擇日期 {changeDateFormat(selectDate.startDate)} </p>
          )}
          {selectDate.overDate && (
            <p>&nbsp;到 {changeDateFormat(selectDate.overDate)}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
