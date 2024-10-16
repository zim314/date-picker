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

  const [task1Date, setTask1Date] = useState<SelectDate>({
    startDate: null,
    overDate: null,
  });

  const handleTask1Date = (year: number, month: number, day: number) => {
    const result = dateComparison([year, month, day], task1Date.startDate);

    switch (result) {
      case -1: {
        setTask1Date((prev) => ({
          startDate: [year, month, day],
          overDate: Array.isArray(prev.overDate) ? [...prev.overDate] : null,
        }));
        break;
      }
      case 0: {
        setTask1Date({
          startDate: null,
          overDate: null,
        });
        break;
      }
      case 1: {
        setTask1Date((prev) => ({
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
          Task – 1 (Date Range Component for current month)
        </h3>
        <DatePicker
          toDay={toDay}
          selectDate={task1Date}
          handleSelectDate={handleTask1Date}
        />
        <div className="app__selectDate">
          {task1Date.startDate && (
            <p>已選擇日期 {changeDateFormat(task1Date.startDate)} </p>
          )}
          {task1Date.overDate && (
            <p>&nbsp;到 {changeDateFormat(task1Date.overDate)}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
