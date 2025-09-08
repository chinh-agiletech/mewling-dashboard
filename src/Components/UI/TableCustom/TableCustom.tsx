import React, { useState } from "react";
import Field from "./Component/Field/Field";
import DropdownSearch from "./Component/DropdownSearch/DropdownSearch";
import DropdownSelect from "./Component/DropdownSelect/DropdownSelect";
import DropdownDate from "./Component/DropdownDate/DropdownDate";

export interface TableRow {
  id: number;
  user: string;
  action: string;
  entity: string;
  entityId: string | number;
  changes: string;
  date: string; // ISO string
}

const TableCustom: React.FC = () => {
  // Mock data
  const [data] = useState<TableRow[]>([
    {
      id: 1,
      user: "Alice",
      action: "created",
      entity: "Event",
      entityId: 81,
      changes: "Added new event",
      date: "2025-09-08T10:00:00Z",
    },
    {
      id: 2,
      user: "Bob",
      action: "updated",
      entity: "Contact",
      entityId: 45,
      changes: "Changed phone number",
      date: "2025-09-07T15:30:00Z",
    },
    {
      id: 3,
      user: "Charlie",
      action: "deleted",
      entity: "Company",
      entityId: 99,
      changes: "Removed company record",
      date: "2025-09-01T09:00:00Z",
    },
  ]);

  // Filter state
  const [filters, setFilters] = useState({
    searchUser: "",
    action: "",
    dateFrom: "",
    dateTo: "",
  });

  // Apply filters
  const filteredData = data.filter((row) => {
    const matchUser = row.user
      .toLowerCase()
      .includes(filters.searchUser.toLowerCase());

    const matchAction = filters.action
      ? row.action === filters.action
      : true;

    const matchDate =
      filters.dateFrom && filters.dateTo
        ? new Date(row.date) >= new Date(filters.dateFrom) &&
          new Date(row.date) <= new Date(filters.dateTo)
        : true;

    return matchUser && matchAction && matchDate;
  });

  return (
    <div>
      <table className="table-auto border border-slate-400 w-full">
        <thead>
          <tr>
            <Field
              label="User"
              name="user"
              icon="/icon/search.svg"
              filter={
                <DropdownSearch
                  value={filters.searchUser}
                  onChange={(val: any) =>
                    setFilters((f) => ({ ...f, searchUser: val }))
                  }
                />
              }
            />
            <Field
              label="Action"
              name="action"
              icon="/icon/filter.svg"
              filter={
                <DropdownSelect
                  value={filters.action}
                  onChange={(val) =>
                    setFilters((f) => ({ ...f, action: val }))
                  }
                />
              }
            />
            <Field label="Entity" name="entity" />
            <Field label="Entity ID" name="entityId" />
            <Field label="Changes" name="changes" />
            <Field
              label="Date & Time"
              name="date"
              icon="/icon/calendar.svg"
              filter={
                <DropdownDate
                  onChange={({ startDate, endDate }) =>
                    setFilters((f) => ({
                      ...f,
                      dateFrom: startDate.toISOString(),
                      dateTo: endDate.toISOString(),
                    }))
                  }
                />
              }
            />
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id} className="hover:bg-slate-100 cursor-pointer">
              <td className="border border-slate-400 px-4 py-2">{row.user}</td>
              <td className="border border-slate-400 px-4 py-2">{row.action}</td>
              <td className="border border-slate-400 px-4 py-2">{row.entity}</td>
              <td className="border border-slate-400 px-4 py-2">
                {row.entityId}
              </td>
              <td className="border border-slate-400 px-4 py-2">
                {row.changes}
              </td>
              <td className="border border-slate-400 px-4 py-2">
                {new Date(row.date).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCustom;
