import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  toDay: number[];
}

const Header = ({ toDay }: Props) => {
  return (
    <div className="datePicker__header">
      <button className="datePicker__monthSelect">
        <ChevronLeft />
      </button>
      <p>
        {toDay[0]}年 {toDay[1] + 1}月
      </p>
      <button className="datePicker__monthSelect">
        <ChevronRight />
      </button>
    </div>
  );
};

export default Header;
