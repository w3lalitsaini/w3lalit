import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserEdit, FaTrash, FaSearch } from "react-icons/fa";

const UserManager = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/admin/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-orange">Manage Users</h2>
        <div className="relative w-72">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-grayMid text-sm" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-dark/50 border border-grayMid/20 rounded-xl px-10 py-2 w-full outline-none focus:border-orange transition-all text-sm"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-grayMid/10">
                <th className="py-4 px-4 text-grayMid font-medium text-sm">
                  User
                </th>
                <th className="py-4 px-4 text-grayMid font-medium text-sm">
                  Email
                </th>
                <th className="py-4 px-4 text-grayMid font-medium text-sm">
                  Role
                </th>
                <th className="py-4 px-4 text-grayMid font-medium text-sm">
                  Joined At
                </th>
                <th className="py-4 px-4 text-grayMid font-medium text-sm text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user._id}
                  className="border-b border-grayMid/5 hover:bg-white/5 transition-all"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center text-orange font-bold text-xs uppercase">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-medium text-sm text-white">
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-grayMid text-sm">
                    {user.email}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        user.role === "admin"
                          ? "bg-orange/20 text-orange"
                          : "bg-blue-500/20 text-blue-500"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-grayMid text-sm">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-orange/10 rounded-lg text-grayMid hover:text-orange transition-all">
                        <FaUserEdit className="text-sm" />
                      </button>
                      <button className="p-2 hover:bg-red-500/10 rounded-lg text-grayMid hover:text-red-500 transition-all">
                        <FaTrash className="text-sm" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredUsers.length === 0 && (
            <div className="text-center py-20 text-grayMid italic">
              No users found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserManager;
