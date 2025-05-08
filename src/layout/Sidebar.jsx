import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-64 bg-gray-800 text-white p-4 space-y-2">
    <Link to="/" className="block hover:bg-gray-700 p-2 rounded">
      Dashboard
    </Link>
    <Link to="/active-order" className="block hover:bg-gray-700 p-2 rounded">
      Active Order
    </Link>
    <Link to="/order-history" className="block hover:bg-gray-700 p-2 rounded">
      Order History
    </Link>
    <Link to="/earnings" className="block hover:bg-gray-700 p-2 rounded">
      Earnings
    </Link>
    <Link to="/profile" className="block hover:bg-gray-700 p-2 rounded">
      Profile
    </Link>
    <Link to="/settings" className="block hover:bg-gray-700 p-2 rounded">
      Settings
    </Link>
    <Link to="/support" className="block hover:bg-gray-700 p-2 rounded">
      Support
    </Link>
    <Link to="/notifications" className="block hover:bg-gray-700 p-2 rounded">
      Notifications
    </Link>
    <Link
      to="/shift-management"
      className="block hover:bg-gray-700 p-2 rounded"
    >
      Shift Management
    </Link>
    <Link to="/performance" className="block hover:bg-gray-700 p-2 rounded">
      Performance
    </Link>
  </aside>
);

export default Sidebar;
