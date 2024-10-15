import { ChevronLeft, ChevronRight } from "lucide-react";

const Header = () => {
  return (
    <div className="datePicker__header">
      <button className="datePicker__monthSelect">
        <ChevronLeft />
      </button>
      <p>2022年 7月</p>
      <button className="datePicker__monthSelect">
        <ChevronRight />
      </button>
    </div>
  );
};

export default Header;
