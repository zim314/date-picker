import DatePicker from "./DatePicker";
import "./reset.scss";
import "./app.scss";
import { useState } from "react";

interface SelectDate {
  startDate: null | number[];
  overDate: null | number[];
}

const App = () => {
  const [task1Date, setTask1Date] = useState<SelectDate>({
    startDate: null,
    overDate: null,
  });

  const handleTask1Date = (year: number, month: number, day: number) => {
    console.log(year, month, day);
  };

  return (
    <>
      <div className="app__container">
        <h3 className="app__question">
          Task – 1 (Date Range Component for current month)
        </h3>
        <DatePicker selectDate={handleTask1Date} />
        <div className="app__selectDate">
          {task1Date.startDate && <p>已選擇日期 {task1Date.startDate} </p>}
          {task1Date.overDate && <p>&nbsp;到 {task1Date.overDate}</p>}
        </div>
      </div>
    </>
  );
};

export default App;
