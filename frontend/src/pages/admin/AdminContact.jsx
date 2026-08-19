import { useEffect, useState } from "react";
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

function AdminContact() {
  const [contacts, setContacts] = useState([]);
  const [remarkOpen, setRemarkOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [activeContact, setActiveContact] = useState(null);
  const [remarkText, setRemarkText] = useState("");
  const [pageMessage, setPageMessage] = useState({ type: "", text: "" });

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/contact")
      console.log(res.data); // 🔥 DEBUG
      setContacts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const showMessage = (type, text) => {
    setPageMessage({ type, text });
    window.setTimeout(() => {
      setPageMessage({ type: "", text: "" });
    }, 4500);
  };

  // ✅ OPEN REMARK MODAL
  const openRemark = (contact) => {
    setActiveContact(contact);
    setRemarkText(contact.followUp || "");
    setRemarkOpen(true);
  };

  // ✅ OPEN DELETE MODAL
  const openDelete = (contact) => {
    setActiveContact(contact);
    setDeleteOpen(true);
  };

  // ✅ SAVE REMARK
  const handleRemarkSubmit = async () => {
    if (!activeContact) return;
    try {
      const res = await axios.put(`http://localhost:8000/api/v1/contact/${activeContact._id}/remark`, {
        followUp: remarkText,
      });
      setContacts((prev) => prev.map((c) => (c._id === activeContact._id ? res.data.data : c)));
      setRemarkOpen(false);
      showMessage("success", "Remark updated successfully.");
    } catch (err) {
      console.error(err);
      showMessage("error", "Unable to save remark. Please try again.");
    }
  };

  // ✅ DELETE CONFIRM
  const handleDeleteConfirm = async () => {
    if (!activeContact) return;
    try {
      await axios.delete(`http://localhost:8000/api/v1/contact/${activeContact._id}`);
      setContacts((prev) => prev.filter((c) => c._id !== activeContact._id));
      setDeleteOpen(false);
      showMessage("success", "Contact message deleted.");
    } catch (err) {
      console.error(err);
      showMessage("error", "Unable to delete the message. Please try again.");
    }
  };

  return (
    <div className="flex-1 pl-6 pt-4">
      <div className="lg:pl-72  bg-slate-50 py-12 pr-8 mx-auto  min-h-screen">

        <div className=" mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="pl-5 text-3xl font-semibold tracking-tight text-slate-900">Contact Messages</h2>
            <p className="mt-2 text-sm text-slate-600">
              Review incoming contact inquiries and manage follow-ups.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Total messages</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{contacts.length}</p>
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
              <h3 className="text-base font-semibold text-slate-900">Contact message log</h3>
              <p className="mt-1 text-xs text-slate-600">
                Click any row action to add follow-up remarks or delete messages.
              </p>
            </div>
            <span className="rounded-full bg-indigo-600 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
              {contacts.length} total
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-xs text-slate-700">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Name</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Email</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Phone</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Inquiry</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Style</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Space</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Location</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Message</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Remark</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.12em]">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white">
                {contacts.length === 0 ? (
                  <tr>
                    <td colSpan="10" className="px-4 py-8 text-center text-slate-500">
                      No contact messages available yet.
                    </td>
                  </tr>
                ) : (
                  contacts.map((c) => (
                    <tr key={c._id} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900">{c.fullName}</td>
                      <td className="px-4 py-3">{c.email}</td>
                      <td className="px-4 py-3">{c.phone}</td>
                      <td className="px-4 py-3">{c.inquiryType}</td>
                      <td className="px-4 py-3">{c.projectStyle}</td>
                      <td className="px-4 py-3">{c.spaceType}</td>
                      <td className="px-4 py-3">{c.location}</td>
                      <td className="px-4 py-3 max-w-50 truncate">{c.message}</td>
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
              Save a follow-up message directly on the contact inquiry.
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
            <AlertDialogTitle>Delete contact message</AlertDialogTitle>
            <AlertDialogDescription>
              Confirm removing this contact inquiry permanently.
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
}

export default AdminContact;