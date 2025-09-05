import React from "react";
import Header from "./layouts/Header";
import Sidebar from "@/Components/UI/SideBar/SideBar";

const AdminScreen: React.FC = () => {
    return (
        <div className="">
            <Header />
            <div className="">
                <Sidebar />
            </div>
        </div>
    )
}

export default AdminScreen;