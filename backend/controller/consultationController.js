import Consultation from "../models/Consultation.js";
import sendEmail from "../utils/sendEmail.js";

// CREATE (FORM SUBMIT)
export const createConsultation = async (req, res) => {
    try {
        const files = req.files || [];
        const photos = files.map((file) => file.filename);

        const data = await Consultation.create({
            ...req.body,
            photos,
        });

        // 📧 SEND EMAIL
        await sendEmail(
            req.body.email,
            "Consultation Request Received",
            `Hello ${req.body.fullName},

Thank you for contacting Home Furnishing.

We have received your consultation request and our team will follow up with you within 24 hours.

Best Regards,
Home Furnishing Team`
        );
        res.status(201).json({
            success: true,
            message: "Consultation submitted",
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false });
    }
};

// GET ALL (ADMIN)
export const getAllConsultations = async (req, res) => {
    try {
        const data = await Consultation.find().sort({ createdAt: -1 });

        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false });
    }
};

// GET SINGLE
export const getSingleConsultation = async (req, res) => {
    try {
        const data = await Consultation.findById(req.params.id);

        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false });
    }
};

// ADD REMARK
export const addRemark = async (req, res) => {
    try {
        const { followUp } = req.body;

        const updated = await Consultation.findByIdAndUpdate(
            req.params.id,
            {
                followUp,
                status: "remarked",
            },
            { new: true }
        );

        res.json({ success: true, data: updated });
    } catch (error) {
        res.status(500).json({ success: false });
    }
};

// DELETE
export const deleteConsultation = async (req, res) => {
    try {
        await Consultation.findByIdAndDelete(req.params.id);

        res.json({ success: true, message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false });
    }
};