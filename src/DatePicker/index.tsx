import "./index.scss";
import Header from "./Header";
import DaySelect from "./DaySelect";

const index = () => {
  const toDay = [
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    new Date().getDate(),
  ];

  return (
    <div className="datePicker__layout debug">
      <Header toDay={toDay} />
      <DaySelect toDay={toDay} />
    </div>
  );
};

export default index;
