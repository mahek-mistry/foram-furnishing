import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8000";

const AdminConsultation = () => {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchConsultations = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/api/v1/consultation`);
      setConsultations(res.data?.data || []);
    } catch (err) {
      console.error("Fetch consultations error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchConsultations();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this consultation?")) return;
    try {
      await axios.delete(`${API_BASE}/api/v1/consultation/${id}`);
      setConsultations((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete");
    }
  };

  const handleRemark = async (id) => {
    const followUp = prompt("Enter remark / follow-up note:");
    if (followUp === null) return;
    try {
      const res = await axios.put(`${API_BASE}/api/v1/consultation/remark/${id}`, { followUp });
      setConsultations((prev) => prev.map((c) => (c._id === id ? res.data.data : c)));
    } catch (err) {
      console.error(err);
      alert("Failed to add remark");
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="flex-1">
      <div className="pl-[350px] bg-gray-100 py-20 pr-20 mx-auto px-4 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Consultation Requests</h2>

        <div className="bg-white rounded-xl shadow-lg p-4 overflow-x-auto">
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Mobile</th>
                <th className="p-3">Email</th>
                <th className="p-3">City</th>
                <th className="p-3">Service</th>
                <th className="p-3">Subservice</th>
                <th className="p-3">Budget</th>
                <th className="p-3">Consultation</th>
                <th className="p-3">Site Visit</th>
                <th className="p-3">Photos</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {consultations.length === 0 ? (
                <tr>
                  <td colSpan="12" className="text-center p-5">
                    No Consultation Data
                  </td>
                </tr>
              ) : (
                consultations.map((c) => (
                  <tr key={c._id} className="border-t hover:bg-gray-50">
                    <td className="p-3">{c.fullName}</td>
                    <td className="p-3">{c.mobileNumber}</td>
                    <td className="p-3">{c.email}</td>
                    <td className="p-3">{c.city}</td>
                    <td className="p-3">{c.service}</td>
                    <td className="p-3">{c.subservice}</td>
                    <td className="p-3">{c.budget}</td>
                    <td className="p-3">{c.consultationType}</td>
                    <td className="p-3">{c.siteVisit}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        {c.photos?.length > 0 ? (
                          c.photos.map((img, i) => (
                            <img
                              key={i}
                              src={`${API_BASE}/uploads/${img}`}
                              alt="img"
                              className="w-10 h-10 rounded object-cover"
                            />
                          ))
                        ) : (
                          <span className="text-gray-400">No</span>
                        )}
                      </div>
                    </td>
                    <td className="p-3">{c.status}{c.followUp ? ` — ${c.followUp}` : ''}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => alert(JSON.stringify(c, null, 2))}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                        >
                          View
                        </button>

                        <button
                          onClick={() => handleRemark(c._id)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                        >
                          Remark
                        </button>

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
};

export default AdminConsultation;