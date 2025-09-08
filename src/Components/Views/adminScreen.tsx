import React from "react";
import Header from "./layouts/Header";
import Sidebar from "@/Components/UI/SideBar/SideBar";
import TableCustom from "../UI/TableCustom/TableCustom";
import AdminTable from "../UI/AdminTable/AdminTable";

const AdminScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {/* <aside className="w-64 bg-gray-100 border-r overflow-y-auto">
          <Sidebar />
        </aside> */}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 bg-white">
          {/* <TableCustom /> */}
          <AdminTable />
        </main>
      </div>
    </div>
  );
};

export default AdminScreen;
