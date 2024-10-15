import "./index.scss";
import Header from "./Header";
import DaySelect from "./DaySelect";
import { useMemo, useState } from "react";

const Index = () => {
  const toDay = useMemo(
    () => [
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
    ],
    []
  );

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
    <div className="datePicker__layout debug">
      <Header
        showDate={showDate}
        goToPreMonth={handleGoToPreMonth}
        goToNextMonth={handleGoToNextMonth}
      />
      <DaySelect toDay={toDay} showDate={showDate} />
    </div>
  );
};

export default Index;
