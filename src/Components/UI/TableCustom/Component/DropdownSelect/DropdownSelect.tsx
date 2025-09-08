import Button from "@/Components/UI/Button/Button";
import React from "react";

interface DropdownSelectProps {
  value: string;
  onFilter?: () => void;
  onClear?: () => void;
  onChange: (val: string) => void;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({ value, onChange, onFilter, onClear }) => {
  const options = ["created", "updated", "deleted"];
  const handleClearInput = () => {
    onClear?.();
  };
  return (
    <div className="flex flex-col gap-2 text-sm">
      <div className="flex max-h-40 overflow-y-auto">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded"
        >
          <input
            type="radio"
            name="action"
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="accent-blue-500"
          />
          <span className="capitalize">{opt}</span>
        </label>
      ))}
      </div>
      <div className="flex justify-end gap-2 mb-2">
        <Button
          onClick={onFilter}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm cursor-pointer"
        >
          Filter
        </Button>
        <Button
          onClick={handleClearInput}
          className="bg-white text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-gray-50 text-sm cursor-pointer"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default DropdownSelect;
