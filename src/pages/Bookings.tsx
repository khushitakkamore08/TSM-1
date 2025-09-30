import React, { useState } from "react";

const BookingsOrdersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"bookings" | "orders">("bookings");
  const [searchTerm, setSearchTerm] = useState("");

  const bookings = [
    {
      id: "B001",
      customer: "Rahul Sharma",
      contact: "rahul@example.com",
      pickup: "Pune",
      drop: "Mumbai",
      date: "2025-10-02",
      vehicle: "Tata Ace",
      goods: "500 kg",
      fare: "₹4,500",
      payment: "Pending",
      status: "Pending",
    },
    {
      id: "B002",
      customer: "Anjali Verma",
      contact: "anjali@example.com",
      pickup: "Nagpur",
      drop: "Bhopal",
      date: "2025-10-03",
      vehicle: "Mini Truck",
      goods: "300 kg",
      fare: "₹3,000",
      payment: "Paid",
      status: "Confirmed",
    },
  ];

  const orders = [
    {
      id: "O1001",
      customer: "Rahul Sharma",
      vehicle: "Tata Ace",
      driver: "Suresh Kumar",
      pickup: "Pune",
      drop: "Mumbai",
      status: "Ongoing",
      fare: "₹4,500",
      payment: "Pending",
    },
    {
      id: "O1002",
      customer: "Anjali Verma",
      vehicle: "Mini Truck",
      driver: "Amit Yadav",
      pickup: "Nagpur",
      drop: "Bhopal",
      status: "Completed",
      fare: "₹3,000",
      payment: "Paid",
    },
  ];

  // Filter by search term (customer name or ID)
  const filteredBookings = bookings.filter(
    (b) =>
      b.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredOrders = orders.filter(
    (o) =>
      o.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Badge component for status
  const StatusBadge = ({ status }: { status: string }) => {
    let color = "bg-gray-200 text-gray-800";
    if (status === "Confirmed" || status === "Completed")
      color = "bg-green-100 text-green-700";
    else if (status === "Pending" || status === "Ongoing")
      color = "bg-yellow-100 text-yellow-700";
    else if (status === "Cancelled")
      color = "bg-red-100 text-red-700";

    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${color}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("bookings")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "bookings"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 border"
          }`}
        >
          Bookings
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "orders"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 border"
          }`}
        >
          Orders
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by ID or Customer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Bookings Table */}
      {activeTab === "bookings" && (
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Bookings</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Booking ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Pickup</th>
                <th className="p-3">Drop</th>
                <th className="p-3">Date</th>
                <th className="p-3">Vehicle</th>
                <th className="p-3">Fare</th>
                <th className="p-3">Payment</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((b) => (
                <tr key={b.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{b.id}</td>
                  <td className="p-3">{b.customer}</td>
                  <td className="p-3">{b.pickup}</td>
                  <td className="p-3">{b.drop}</td>
                  <td className="p-3">{b.date}</td>
                  <td className="p-3">{b.vehicle}</td>
                  <td className="p-3">{b.fare}</td>
                  <td className="p-3">{b.payment}</td>
                  <td className="p-3">
                    <StatusBadge status={b.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Orders Table */}
      {activeTab === "orders" && (
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Orders</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Vehicle</th>
                <th className="p-3">Driver</th>
                <th className="p-3">Pickup</th>
                <th className="p-3">Drop</th>
                <th className="p-3">Fare</th>
                <th className="p-3">Payment</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((o) => (
                <tr key={o.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{o.id}</td>
                  <td className="p-3">{o.customer}</td>
                  <td className="p-3">{o.vehicle}</td>
                  <td className="p-3">{o.driver}</td>
                  <td className="p-3">{o.pickup}</td>
                  <td className="p-3">{o.drop}</td>
                  <td className="p-3">{o.fare}</td>
                  <td className="p-3">{o.payment}</td>
                  <td className="p-3">
                    <StatusBadge status={o.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookingsOrdersPage;
