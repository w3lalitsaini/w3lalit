import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaSearch, FaPaperPlane } from "react-icons/fa";

const NewsletterManager = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:3000/admin/subscribers",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        setSubscribers(response.data);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSubscribers();
  }, []);

  const filteredSubscribers = subscribers.filter((sub) =>
    sub.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-orange">
          Newsletter Subscribers
        </h2>
        <div className="flex gap-4 items-center">
          <button className="bg-orange text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange/80 transition-all">
            <FaPaperPlane /> Send Campaign
          </button>
          <div className="relative w-72">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-grayMid text-sm" />
            <input
              type="text"
              placeholder="Search emails..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-dark/50 border border-grayMid/20 rounded-xl px-10 py-2 w-full outline-none focus:border-orange transition-all text-sm"
            />
          </div>
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
                  Subscriber Email
                </th>
                <th className="py-4 px-4 text-grayMid font-medium text-sm">
                  Status
                </th>
                <th className="py-4 px-4 text-grayMid font-medium text-sm">
                  Subscribed On
                </th>
                <th className="py-4 px-4 text-grayMid font-medium text-sm text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredSubscribers.map((sub) => (
                <tr
                  key={sub._id}
                  className="border-b border-grayMid/5 hover:bg-white/5 transition-all"
                >
                  <td className="py-4 px-4 text-sm text-white select-all font-medium">
                    {sub.email}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        sub.status === "active"
                          ? "bg-green-500/20 text-green-500"
                          : "bg-red-500/20 text-red-500"
                      }`}
                    >
                      {sub.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-grayMid text-sm">
                    {new Date(sub.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="p-2 hover:bg-red-500/10 rounded-lg text-grayMid hover:text-red-500 transition-all">
                      <FaTrash className="text-sm" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredSubscribers.length === 0 && (
            <div className="text-center py-20 text-grayMid italic">
              No subscribers found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsletterManager;
