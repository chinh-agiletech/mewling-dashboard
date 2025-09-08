import Button from "@/Components/UI/Button/Button";
import React from "react";

interface DropdownSearchProps {
  value: string;
  onChange: (val: string) => void;
  onFilter?: () => void;
  onClear?: () => void;
}

const DropdownSearch: React.FC<DropdownSearchProps> = ({
  value,
  onChange,
  onFilter,
  onClear,
}) => {

  const hanleClearInput = () => {
    onClear?.();
  }

  return (
    <div className="w-56 p-2">
      {/* Input */}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
      />

      {/* Buttons */}
      <div className="flex justify-end gap-2 mt-2">
        <Button
          onClick={onFilter}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm cursor-pointer"
        >
          Filter
        </Button>
        <Button
          onClick={hanleClearInput}
          className="bg-white text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-gray-50 text-sm cursor-pointer"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default DropdownSearch;
