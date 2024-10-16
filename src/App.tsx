import DatePicker from "./DatePicker";
import "./reset.scss";
import "./app.scss";
import { useState, useMemo, useEffect } from "react";
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

  const [take1Date, setTake1Date] = useState<SelectDate>({
    startDate: null,
    overDate: null,
  });

  const [take2Date, setTake2Date] = useState<SelectDate>({
    startDate: null,
    overDate: null,
  });

  const getTask1Date = (year: number, month: number, day: number) => {
    const result = dateComparison([year, month, day], toDay);
    if (result === 0) {
      setTake1Date((prev) => ({
        ...prev,
        startDate: null,
      }));
    }

    if (
      result !== 1 &&
      dateComparison([year, month, day], take1Date.startDate) !== 0
    ) {
      setTake1Date((prev) => ({
        ...prev,
        startDate: [year, month, day],
      }));
    }
  };

  const getTask2Date = (year: number, month: number, day: number) => {
    const result = dateComparison([year, month, day], take2Date.startDate);

    switch (result) {
      case -1: {
        setTake2Date((prev) => ({
          ...prev,
          startDate: [year, month, day],
        }));
        break;
      }
      case 0:
      case 1: {
        setTake2Date((prev) => ({
          ...prev,
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
          selectDate={take1Date}
          handleSelectDate={getTask1Date}
          disabledSelectMonth
          disableSelectionOfNonCurrentMonth
        />
        <div className="app__selectDate">
          {take1Date.startDate && (
            <p>已選擇日期 {changeDateFormat(take1Date.startDate)}</p>
          )}
        </div>
      </div>
      <div className="app__container">
        <h3 className="app__question">
          Task.2 (Date Range Component for cross months)
        </h3>
        <DatePicker
          toDay={toDay}
          selectDate={take2Date}
          handleSelectDate={getTask2Date}
        />
        <div className="app__selectDate">
          {take2Date.startDate && (
            <p>已選擇日期 {changeDateFormat(take2Date.startDate)} </p>
          )}
          {take2Date.overDate && (
            <p>&nbsp;到 {changeDateFormat(take2Date.overDate)}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
