import "./index.scss";
import Header from "./Header";
import DaySelect from "./DaySelect";
import { useState } from "react";
import { SelectDate } from "../App";

interface Props {
  toDay: number[];
  selectDate: SelectDate;
  handleSelectDate: (year: number, month: number, day: number) => void;
}

const Index = ({ toDay, selectDate, handleSelectDate }: Props) => {
  const [showDate, setShowDate] = useState([toDay[0], toDay[1]]);

  const handleGoToPreMonth = () =>
    setShowDate((prev) =>
      prev[1] > 0 ? [prev[0], prev[1] - 1, prev[2]] : [prev[0] - 1, 11, prev[2]]
    );

  const handleGoToNextMonth = () =>
    setShowDate((prev) =>
      prev[1] === 11
        ? [prev[0] + 1, 0, prev[2]]
        : [prev[0], prev[1] + 1, prev[2]]
    );

  return (
    <div className="datePicker__layout">
      <Header
        showDate={showDate}
        goToPreMonth={handleGoToPreMonth}
        goToNextMonth={handleGoToNextMonth}
      />
      <DaySelect
        toDay={toDay}
        showDate={showDate}
        selectDate={selectDate}
        handleSelectDate={handleSelectDate}
      />
    </div>
  );
};

export default Index;
