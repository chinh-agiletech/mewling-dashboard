import React, { useState } from "react";
import { Table, Input, Button, Radio, DatePicker, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

interface DataType {
  key: string;
  user: string;
  action: string;
  entity: string;
  entityId: number;
  changes: string;
  date: string;
}

const data: DataType[] = [
  {
    key: "1",
    user: "Alice",
    action: "created",
    entity: "Order",
    entityId: 101,
    changes: "Added new order",
    date: "2025-09-01",
  },
  {
    key: "2",
    user: "Bob",
    action: "updated",
    entity: "User",
    entityId: 202,
    changes: "Changed email",
    date: "2025-09-05",
  },
];

const AdminTable: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [actionFilter, setActionFilter] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(null);

  const columns: ColumnsType<DataType> = [
    {
      title: "User",
      dataIndex: "user",
      filterDropdown: ({ confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search user"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onPressEnter={() => confirm()}
            style={{ marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => confirm()}
              size="small"
              icon={<SearchOutlined />}
            >
              Filter
            </Button>
            <Button
              onClick={() => {
                setSearchText("");
                clearFilters?.();
              }}
              size="small"
            >
              Clear
            </Button>
          </Space>
        </div>
      ),
      onFilter: (value, record) =>
        record.user.toLowerCase().includes((value as string).toLowerCase()),
    },
    {
      title: "Action",
      dataIndex: "action",
      filterDropdown: ({ confirm }) => (
        <div style={{ padding: 8 }}>
          <Radio.Group
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value)}
          >
            <Radio value="created">Created</Radio>
            <Radio value="updated">Updated</Radio>
            <Radio value="deleted">Deleted</Radio>
          </Radio.Group>
          <div style={{ marginTop: 8, textAlign: "right" }}>
            <Button type="primary" size="small" onClick={() => confirm()}>
              Apply
            </Button>
          </div>
        </div>
      ),
      onFilter: (value, record) => record.action === value,
    },
    {
      title: "Entity",
      dataIndex: "entity",
    },
    {
      title: "Entity ID",
      dataIndex: "entityId",
    },
    {
      title: "Changes",
      dataIndex: "changes",
    },
    {
      title: "Date",
      dataIndex: "date",
      filterDropdown: ({ confirm }) => (
        <div style={{ padding: 8 }}>
          <RangePicker
            value={dateRange as any}
            onChange={(val) => setDateRange(val as any)}
          />
          <div style={{ marginTop: 8, textAlign: "right" }}>
            <Button type="primary" size="small" onClick={() => confirm()}>
              Apply
            </Button>
          </div>
        </div>
      ),
      onFilter: (value, record) => {
        if (!dateRange) return true;
        const recordDate = dayjs(record.date);
        return (
          recordDate.isAfter(dateRange[0], "day") &&
          recordDate.isBefore(dateRange[1], "day")
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default AdminTable;
