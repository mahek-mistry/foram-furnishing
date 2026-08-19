import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

const API_BASE = "http://localhost:8000";

const AdminConsultation = () => {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageMessage, setPageMessage] = useState({ type: "", text: "" });
  const [remarkOpen, setRemarkOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [activeConsultation, setActiveConsultation] = useState(null);
  const [remarkText, setRemarkText] = useState("");

  const fetchConsultations = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/api/v1/consultation`);
      setConsultations(res.data?.data || []);
    } catch (err) {
      console.error("Fetch consultations error:", err);
      setPageMessage({ type: "error", text: "Unable to load consultation requests." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchConsultations();
  }, []);

  const showMessage = (type, text) => {
    setPageMessage({ type, text });
    window.setTimeout(() => {
      setPageMessage({ type: "", text: "" });
    }, 4500);
  };

  const openRemark = (consultation) => {
    setActiveConsultation(consultation);
    setRemarkText(consultation.followUp || "");
    setRemarkOpen(true);
  };

  const openDelete = (consultation) => {
    setActiveConsultation(consultation);
    setDeleteOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!activeConsultation) return;
    try {
      await axios.delete(`${API_BASE}/api/v1/consultation/${activeConsultation._id}`);
      setConsultations((prev) => prev.filter((c) => c._id !== activeConsultation._id));
      setDeleteOpen(false);
      showMessage("success", "Consultation request deleted.");
    } catch (err) {
      console.error(err);
      showMessage("error", "Unable to delete the request. Please try again.");
    }
  };

  const handleRemarkSubmit = async () => {
    if (!activeConsultation) return;
    try {
      const res = await axios.put(`${API_BASE}/api/v1/consultation/remark/${activeConsultation._id}`, {
        followUp: remarkText,
      });
      setConsultations((prev) => prev.map((c) => (c._id === activeConsultation._id ? res.data.data : c)));
      setRemarkOpen(false);
      showMessage("success", "Remark updated successfully.");
    } catch (err) {
      console.error(err);
      showMessage("error", "Unable to save remark. Please try again.");
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="pl-5 flex-1">
      <div className="lg:pl-72 pl-6 bg-slate-50 py-12 pr-8 mx-auto px-4 min-h-screen">
        <div className="pt-5 mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Consultation Requests</h2>
            <p className="mt-2 text-sm text-slate-600">
              Review incoming consultation and estimate requests with detail-level controls.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Total requests</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{consultations.length}</p>
          </div>
        </div>

        {pageMessage.text && (
          <div
            className={`mb-6 rounded-2xl border px-4 py-3 text-sm ${
              pageMessage.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                : "border-rose-200 bg-rose-50 text-rose-900"
            }`}
          >
            {pageMessage.text}
          </div>
        )}

        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">
          <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-900">Live consultation log</h3>
              <p className="mt-1 text-xs text-slate-600">
                Click any row action to open request details or add a follow-up remark.
              </p>
            </div>
            <span className="rounded-full bg-indigo-600 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
              {consultations.length} total
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-xs text-slate-700">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Name</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Mobile</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Email</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">City</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Service</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Plan</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Consultation</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Remark</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Status</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white">
                {consultations.length === 0 ? (
                  <tr>
                    <td colSpan="10" className="px-4 py-8 text-center text-slate-500">
                      No consultation requests available yet.
                    </td>
                  </tr>
                ) : (
                  consultations.map((c) => (
                    <tr key={c._id} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900">{c.fullName}</td>
                      <td className="px-4 py-3">{c.mobileNumber}</td>
                      <td className="px-4 py-3">{c.email}</td>
                      <td className="px-4 py-3">{c.city}</td>
                      <td className="px-4 py-3">{c.service || c.subservice || "—"}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
                          {c.selectedPlan || "Not selected"}
                        </span>
                      </td>
                      <td className="px-4 py-3">{c.consultationType || "—"}</td>
                      <td className="px-4 py-3 max-w-xs truncate text-slate-600 text-xs">
                        {c.followUp ? (
                          <div title={c.followUp} className="truncate">
                            {c.followUp}
                          </div>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                          {c.status || "new"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => openRemark(c)}
                            className="rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-slate-950 transition hover:bg-amber-400"
                          >
                            Remark
                          </button>
                          <button
                            type="button"
                            onClick={() => openDelete(c)}
                            className="rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white transition hover:bg-rose-400"
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

      <AlertDialog open={remarkOpen} onOpenChange={setRemarkOpen}>
        <AlertDialogContent size="sm" className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-slate-900">Add remark</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-600">
              Save a follow-up message directly on the consultation request.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="space-y-4 pt-3">
            <label className="block text-sm font-semibold text-slate-900">Remark</label>
            <textarea
              value={remarkText}
              onChange={(e) => setRemarkText(e.target.value)}
              rows={6}
              className="w-full rounded-2xl border-2 border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              placeholder="Type your follow-up remark here..."
            />
          </div>

          <AlertDialogFooter>
            <button
              type="button"
              onClick={handleRemarkSubmit}
              className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Save remark
            </button>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete consultation</AlertDialogTitle>
            <AlertDialogDescription>
              Confirm removing this consultation request permanently.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <button
              type="button"
              onClick={handleDeleteConfirm}
              className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-400"
            >
              Delete
            </button>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminConsultation;