import React from 'react';
import {
  Users,
  UserCheck,
  Building2,
  Truck,
  BookOpen,
  Route,
  Package,
  Receipt,
  FileText,
  BarChart3,
  Bell,
  Shield,
  Settings,
  LogOut,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'users', label: 'User & Role Management', icon: Users },
  { id: 'customers', label: 'Customer Management', icon: UserCheck },
  { id: 'transporters', label: 'Transporter & Fleet', icon: Truck },
  { id: 'bookings', label: 'Booking & Orders', icon: BookOpen },
  { id: 'dispatch', label: 'Dispatch & Routes', icon: Route },
  { id: 'tracking', label: 'Shipment Tracking', icon: Package },
  { id: 'billing', label: 'Billing & Invoicing', icon: Receipt },
  { id: 'documents', label: 'Document Management', icon: FileText },
  { id: 'reports', label: 'Reports & Analytics', icon: BarChart3 },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'compliance', label: 'Compliance', icon: Shield },
  { id: 'settings', label: 'System Settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  // const { signOut } = useAuth();

  return (
    <div className="bg-gray-900 text-white w-64 max-h-screen overflow-scroll flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">TransportMS</h1>
            <p className="text-sm text-gray-400">Management System</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          // onClick={signOut}
          className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;