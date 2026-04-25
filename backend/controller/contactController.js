import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      inquiryType,
      projectStyle,
      spaceType,
      location,
      message,
    } = req.body;

    const newContact = await Contact.create({
      fullName,
      email,
      phone,
      inquiryType,
      projectStyle,
      spaceType,
      location,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
      data: newContact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error saving contact",
    });
  }
};

export const getAllContacts = async (req, res) => {
 try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching contacts",
    });
  }
};

// ✅ MARK AS READ
export const markAsRead = async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, { isRead: true });

    res.json({ message: "Marked as read" });
  } catch (error) {
    res.status(500).json({ message: "Error updating" });
  }
};

// ✅ DELETE CONTACT
export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting" });
  }
};