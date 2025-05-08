// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ActiveOrder from "./pages/ActiveOrder";
import OrderHistory from "./pages/OrderHistory";
import Earnings from "./pages/Earnings";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Notifications from "./pages/Notifications";
import ShiftManagement from "./pages/ShiftManagement";
import Performance from "./pages/Performance";
import RiderLayout from "./layout/RiderLayout";

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<RiderLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/active-order" element={<ActiveOrder />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/shift-management" element={<ShiftManagement />} />
        <Route path="/performance" element={<Performance />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
