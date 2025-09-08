import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

interface DropdownDateProps {
  onChange?: (range: { startDate: Date; endDate: Date }) => void;
}

const DropdownDate: React.FC<DropdownDateProps> = ({ onChange }) => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="bg-white border border-gray-300 rounded shadow-md">
      <DateRangePicker
        ranges={range}
        onChange={(ranges) => {
          const selection = ranges.selection;
          setRange([
            {
              startDate: selection.startDate ?? new Date(),
              endDate: selection.endDate ?? new Date(),
              key: selection.key ?? "selection",
            },
          ]);
          onChange?.({
            startDate: selection.startDate ?? new Date(),
            endDate: selection.endDate ?? new Date(),
          });
        }}
        moveRangeOnFirstSelection={false}
        rangeColors={["#2563eb"]}
      />
    </div>
  );
};

export default DropdownDate;
