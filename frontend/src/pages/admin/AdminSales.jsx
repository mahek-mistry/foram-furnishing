import { useEffect, useState } from "react";
import axios from "axios";

function AdminContact() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/contact");
      console.log(res.data); // 🔥 DEBUG
      setContacts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // ✅ MARK AS READ
  const handleRead = async (id) => {
    await axios.put(`http://localhost:8000/api/contact/${id}/read`);
    fetchContacts();
  };

  // ✅ DELETE
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/contact/${id}`);
    fetchContacts();
  };

  return (
    <div className="flex-1">
  <div className="pl-[350px] bg-gray-100 py-20 pr-20 mx-auto px-4 min-h-screen">
    
    <h2 className="text-2xl font-bold mb-6">Contact Messages</h2>

    <div className="bg-white rounded-xl shadow-lg p-4 overflow-x-auto">
      
      <table className="min-w-full text-sm text-left border">
        
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Inquiry</th>
            <th className="p-3">Style</th>
            <th className="p-3">Space</th>
            <th className="p-3">Location</th>
            <th className="p-3">Message</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td colSpan="10" className="text-center p-5">
                No Data Found
              </td>
            </tr>
          ) : (
            contacts.map((c) => (
              <tr key={c._id} className="border-t hover:bg-gray-50">
                
                <td className="p-3">{c.fullName}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.phone}</td>
                <td className="p-3">{c.inquiryType}</td>
                <td className="p-3">{c.projectStyle}</td>
                <td className="p-3">{c.spaceType}</td>
                <td className="p-3">{c.location}</td>

                <td className="p-3 max-w-[200px] truncate">
                  {c.message}
                </td>

                <td className="p-3">
                  {c.isRead ? (
                    <span className="text-green-600 font-semibold">
                      Read
                    </span>
                  ) : (
                    <span className="text-red-500 font-semibold">
                      Unread
                    </span>
                  )}
                </td>

                <td className="p-3">
                  <div className="flex gap-2">
                    
                    {!c.isRead && (
                      <button
                        onClick={() => handleRead(c._id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Mark Read
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(c._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))
          )}
        </tbody>

      </table>

    </div>
  </div>
</div>
  );
}

export default AdminContact;