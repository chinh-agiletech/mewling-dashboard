import React, { useState, useRef, useEffect } from "react";

interface FieldProps {
  label: string;
  name: string;
  filter?: React.ReactNode;
  sortTable?: boolean;
  sortActive?: boolean;
  sortOrder?: "asc" | "desc";
  icon?: string;
  onSort?: () => void;
}

const Field: React.FC<FieldProps> = ({
  label,
  name,
  filter,
  sortTable,
  icon,
  onSort,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <th
      key={name}
      className="relative border border-slate-400 px-[16px] py-[16px] first:rounded-tl-xl last:rounded-tr-xl"
    >
      <div
        className={`flex items-center justify-between gap-1 ${
          sortTable ? "cursor-pointer select-none" : ""
        }`}
        onClick={sortTable ? onSort : undefined}
      >
        <span className="font-medium">{label}</span>

        {icon && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((prev) => !prev);
            }}
          >
            <img src={icon} alt="" className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dropdown filter */}
      {icon && filter && open && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 mt-2 border border-[#d9d9d9] rounded bg-white shadow-md z-50"
        >
          {filter}
        </div>
      )}
    </th>
  );
};

export default Field;
