import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Page Content */}
        <div className="flex-1 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
