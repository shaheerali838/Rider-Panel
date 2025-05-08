import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const RiderLayout = () => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Navbar />
      <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <Outlet />
      </main>
    </div>
  </div>
);

export default RiderLayout;
