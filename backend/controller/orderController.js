import razorpayInstance from "../config/razorpay.js";
import { Cart } from "../models/cartModel.js";
import { Order } from "../models/orderModel.js";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";
import PDFDocument from "pdfkit";
import { User } from "../models/userModel.js";
import { Product } from "../models/productModel.js";

export const createOrder = async (req, res) => {
  try {
    const { products, amount, tax, shipping, currency } = req.body;

    console.log("BODY:", req.body);
    console.log("USER:", req.user);

    const options = {
      amount: Math.round(Number(amount) * 100),
      currency: currency || "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const razorpayOrder = await razorpayInstance.orders.create(options);

    const newOrder = new Order({
      user: req.user._id,
      products,
      amount,
      tax,
      shipping,
      currency,
      status: "Pending",
      paymentMethod: "RAZORPAY", // ✅ MUST BE HERE
      razorpayOrderId: razorpayOrder.id,
    });

    await newOrder.save();

    res.json({
      success: true,
      order: razorpayOrder,
      dbOrder: newOrder,
    });
  } catch (error) {
    console.error("🔥 ERROR:", error); // IMPORTANT
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      paymentFailed,
    } = req.body;

    const userId = req.user._id;

    // If payment failed
    if (paymentFailed) {
      const order = await Order.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id },
        { status: "Failed" },
        { new: true },
      );

      return res.status(400).json({
        success: false,
        message: "Payment failed",
        order,
      });
    }

    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(sign.toString())
      .digest("hex");

    // Payment Verified
    if (expectedSignature === razorpay_signature) {
      const order = await Order.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id },
        {
          status: "Paid",
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,
        },
        { new: true },
      )
        .populate("user", "firstName email")
        .populate({
          path: "products.productId",
          select: "productName productPrice",
        });

      // Clear cart
      await Cart.findOneAndUpdate(
        { userId },
        { $set: { items: [], totalPrice: 0 } },
      );

      // Create product list for email
      const productList = order.products
        .map(
          (p) =>
            `${p.productId.productName} (Qty: ${p.quantity}) - ₹${p.productId.productPrice}`,
        )
        .join("\n");

      const message = `
Hello ${order.user.firstName},

🎉 Your order has been successfully placed!

Order ID: ${order._id}

Products:
${productList}

Tax: ₹${order.tax}
Shipping: ₹${order.shipping}
Total Paid: ₹${order.amount}

Payment Status: Paid

Thank you for shopping with us 🪑
Foram Furnishing
`;

      // Send Email
      await sendEmail(
        order.user.email,
        "Order Confirmation - Furniture Store",
        message,
      );

      return res.json({
        success: true,
        message: "Payment Successful",
        order,
      });
    } else {
      await Order.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id },
        { status: "Failed" },
        { new: true },
      );

      return res.status(400).json({
        success: false,
        message: "Invalid Signature",
      });
    }
  } catch (error) {
    console.error("❌ Error in verify Payment:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getMyOrder = async (req, res) => {
  try {
    const userId = req.user._id; // ✅ FIXED

    const orders = await Order.find({ user: userId })
      .populate({
        path: "products.productId",
        select: "productName productPrice productImg",
      })
      .populate("user", "firstName lastName email");

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ message: error.message });
  }
};

/* DOWNLOAD INVOICE PDF*/

export const downloadInvoice = async (req, res) => {
  try {
    const orderId = req.params.id;

    const order = await Order.findById(orderId)
      .populate("user", "firstName email")
      .populate({
        path: "products.productId",
        select: "productName productPrice",
      });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const doc = new PDFDocument({ margin: 50 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=invoice-${order._id}.pdf`,
    );

    doc.pipe(res);

    doc.fontSize(22).text("Furniture Store Invoice", { align: "center" });
    doc.moveDown();

    doc.fontSize(14).text(`Order ID: ${order._id}`);
    doc.text(`Customer Name: ${order.user.firstName}`);
    doc.text(`Email: ${order.user.email}`);
    doc.text(`Payment Status: ${order.status}`);
    doc.moveDown();

    doc.text("Products:", { underline: true });
    doc.moveDown();

    order.products.forEach((item) => {
      doc.text(
        `${item.productId.productName} | Qty: ${item.quantity} | Price: ₹${item.productId.productPrice}`,
      );
    });

    doc.moveDown();

    doc.text(`Tax: ₹${order.tax}`);
    doc.text(`Shipping: ₹${order.shipping}`);
    doc.text(`Total Paid: ₹${order.amount}`);

    doc.moveDown();

    doc.text("Thank you for shopping with us!", {
      align: "center",
    });

    doc.end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error generating invoice" });
  }
};

// Admin only
export const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params; // userId will come from URL

    const orders = await Order.find({ user: userId })
      .populate({
        path: "products.productId",
        select: "productName productPrice productImg",
      }) // fetch product details
      .populate("user", "firstName lastName email"); // fetch user info

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.log("Error fetching user order: ", error);
    res.status(500).json({ message: error.message });
  }
};

export const getAllOrdersAdmin = async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .populate("user", "name email") // populate user info
      .populate("products.productId", "productName productPrice"); // populate product info

    res.json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch all orders",
      error: error.message,
    });
  }
};

export const getSalesData = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({});
    const totalProducts = await Product.countDocuments({});
    const totalOrders = await Order.countDocuments({ status: "Paid" });

    const totalSaleAgg = await Order.aggregate([
      { $match: { status: "Paid" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const totalSales = totalSaleAgg[0]?.total || 0;

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const salesByDate = await Order.aggregate([
      {
        $match: {
          status: "Paid",
          createdAt: { $gte: thirtyDaysAgo },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
          },
          amount: { $sum: "$amount" },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    const formattedSales = salesByDate.map((item) => ({
      date: item._id,
      amount: item.amount,
    }));

    res.json({
      success: true,
      totalUsers,
      totalProducts,
      totalOrders,
      totalSales,
      sales: formattedSales,
    });
  } catch (error) {
    console.error("Error fetching sales data:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {

  try {

    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success:false,
        message:"Order not found"
      });
    }

    order.orderStatus = status;

    await order.save();

    res.status(200).json({
      success:true,
      message:"Order updated",
      order
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};

export const createCODOrder = async (req, res) => {
  try {
    const { products, amount, tax, shipping, currency } = req.body;

    const order = new Order({
      user: req.user._id,
      products,
      amount,
      tax,
      shipping,
      currency,
      status: "Pending",
      paymentMethod: "COD",
      orderStatus: "Order Placed",
    });

    await order.save();

    // Populate for email
    const populatedOrder = await Order.findById(order._id)
      .populate("user", "firstName email")
      .populate({
        path: "products.productId",
        select: "productName productPrice",
      });

    // Clear cart
    await Cart.findOneAndUpdate(
      { userId: req.user._id },
      { $set: { items: [], totalPrice: 0 } }
    );

    // 🟢 CREATE PRODUCT LIST
    const productList = populatedOrder.products
      .map(
        (p) =>
          `${p.productId.productName} (Qty: ${p.quantity}) - ₹${p.productId.productPrice}`
      )
      .join("\n");

    // 🟢 EMAIL MESSAGE
    const message = `
Hello ${populatedOrder.user.firstName},

🎉 Your order has been successfully placed!

Order ID: ${populatedOrder._id}

Products:
${productList}

Tax: ₹${populatedOrder.tax}
Shipping: ₹${populatedOrder.shipping}
Total Amount: ₹${populatedOrder.amount}

Payment Method: Cash on Delivery

Thank you for shopping with us 🪑
Foram Furnishing
`;

    // 🟢 SEND EMAIL
    await sendEmail(
      populatedOrder.user.email,
      "Order Confirmation - COD",
      message
    );

    res.json({
      success: true,
      message: "COD Order placed successfully",
      order: populatedOrder,
    });

  } catch (error) {
    console.error("🔥 COD ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};