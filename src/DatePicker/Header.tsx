import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  showDate: number[];
  goToPreMonth: () => void;
  goToNextMonth: () => void;
  disabled?: boolean;
}

const Header = ({ showDate, goToPreMonth, goToNextMonth, disabled }: Props) => {
  return (
    <div className="datePicker__header">
      <button
        className="datePicker__monthSelect"
        onClick={goToPreMonth}
        disabled={disabled}
      >
        <ChevronLeft />
      </button>
      <p>
        {showDate[0]}年 {showDate[1] + 1}月
      </p>
      <button
        className="datePicker__monthSelect"
        onClick={goToNextMonth}
        disabled={disabled}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Header;
