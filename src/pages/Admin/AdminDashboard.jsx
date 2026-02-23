import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaEnvelope,
  FaNewspaper,
  FaChartBar,
  FaSignOutAlt,
  FaArrowLeft,
} from "react-icons/fa";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/sign-in");
  };

  const navItems = [
    { title: "Users", icon: <FaUsers />, path: "/admin" },
    { title: "Contacts", icon: <FaEnvelope />, path: "/admin/contacts" },
    { title: "Newsletter", icon: <FaNewspaper />, path: "/admin/newsletter" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-dark/50 border-r border-grayMid/20 backdrop-blur-md p-6 flex flex-col gap-8 fixed h-full z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-orange/20">
            W3
          </div>
          <div>
            <h2 className="font-bold text-lg leading-none">Admin Panel</h2>
            <p className="text-grayMid text-xs mt-1">v1.0.0</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-grayMid hover:text-white group border border-transparent hover:border-grayMid/10"
            >
              <span className="text-lg group-hover:text-orange transition-colors">
                {item.icon}
              </span>
              <span className="font-medium text-sm">{item.title}</span>
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 pt-6 border-t border-grayMid/10">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-grayMid hover:text-white"
          >
            <FaArrowLeft className="text-sm" />
            <span className="text-sm">Back to Site</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 transition-all text-grayMid hover:text-red-500"
          >
            <FaSignOutAlt className="text-sm" />
            <span className="text-sm font-medium">Logout Admin</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome back, <span className="text-orange">Lalit</span>
            </h1>
            <p className="text-grayMid mt-1 text-sm">
              Here's what's happening with your workspace today.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold">Lalit Saini</p>
              <p className="text-xs text-grayMid">Super Admin</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-grayMid/20 overflow-hidden">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lalit"
                alt="avatar"
              />
            </div>
          </div>
        </header>

        <div className="bg-dark/40 border border-grayMid/20 rounded-3xl p-8 backdrop-blur-sm min-h-[calc(100vh-200px)]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
