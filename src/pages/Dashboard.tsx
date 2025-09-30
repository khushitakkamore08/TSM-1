import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-700 mt-2">
        Welcome to Transport Management System. This is your dashboard where you
        can view key metrics and manage operations.
      </p>
    </div>
  );
};

export default Dashboard; // ✅ Default export
