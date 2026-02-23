import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaReply, FaTrash, FaSearch, FaEye } from "react-icons/fa";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:3000/admin/contacts",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-orange">Contact Submissions</h2>
        <div className="relative w-72">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-grayMid text-sm" />
          <input
            type="text"
            placeholder="Search contacts..."
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
        <div className="grid grid-cols-1 gap-4">
          {filteredContacts.map((contact) => (
            <div
              key={contact._id}
              className="bg-dark border border-grayMid/10 rounded-2xl p-6 hover:border-orange/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange/10 flex items-center justify-center text-orange text-lg">
                    {contact.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-orange transition-colors">
                      {contact.name}
                    </h3>
                    <p className="text-grayMid text-xs select-all cursor-pointer">
                      {contact.email}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] text-grayMid italic">
                    {new Date(contact.createdAt).toLocaleString()}
                  </span>
                  <button className="p-1.5 hover:bg-orange/10 rounded-lg text-grayMid hover:text-orange transition-all">
                    <FaReply className="text-sm" />
                  </button>
                  <button className="p-1.5 hover:bg-red-500/10 rounded-lg text-grayMid hover:text-red-500 transition-all">
                    <FaTrash className="text-sm" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-grayMid">
                  <p className="flex items-center gap-2">
                    <span className="font-bold text-white/40 uppercase tracking-tighter">
                      Phone:
                    </span>
                    {contact.phone || "N/A"}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-bold text-white/40 uppercase tracking-tighter">
                      Niche:
                    </span>
                    {contact.niche || "N/A"}
                  </p>
                </div>
                <p className="text-sm font-bold text-orange/90">
                  {contact.subject}
                </p>
                <p className="text-sm text-grayMid leading-relaxed line-clamp-3">
                  {contact.message}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-grayMid/5 flex justify-end">
                <button className="text-[10px] font-bold uppercase tracking-widest text-orange flex items-center gap-2 hover:gap-3 transition-all">
                  Read Full Message <FaEye />
                </button>
              </div>
            </div>
          ))}
          {filteredContacts.length === 0 && (
            <div className="text-center py-20 text-grayMid italic">
              No messages found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactManager;
