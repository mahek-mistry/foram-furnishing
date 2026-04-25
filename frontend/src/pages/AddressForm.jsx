import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import {
  addAddress,
  deleteAddress,
  setCart,
  setSelectedAddress,
} from "@/redux/productSlice";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { CheckCircle2, MapPin, CreditCard, Banknote, Trash2, Plus, ChevronLeft } from "lucide-react";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("razorpay");

  const { cart, addresses, selectedAddress } = useSelector(
    (store) => store.product
  );

  const [showForm, setShowForm] = useState(
    addresses?.length > 0 ? false : true
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(addAddress(formData));
    setShowForm(false);
  };

  const subtotal = cart.totalPrice;
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = parseFloat((subtotal * 0.05).toFixed(2));
  const total = subtotal + shipping + tax;

  // ===================== COD FUNCTION =====================
  const handleCOD = async () => {
    const accessToken = localStorage.getItem("accessToken");

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/api/v1/orders/create-cod-order`,
        {
          products: cart?.items?.map((item) => ({
            productId: item.productId._id,
            quantity: item.quantity,
          })),
          tax,
          shipping,
          amount: total,
          currency: "INR",
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      if (data.success) {
        toast.success("Order placed with COD ✅");
        dispatch(setCart({ items: [], totalPrice: 0 }));
        navigate("/order-success");
      } else {
        toast.error("COD Order Failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  // ===================== RAZORPAY FUNCTION (UNCHANGED) =====================
  const handlePayment = async () => {
    const accessToken = localStorage.getItem("accessToken");

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/api/v1/orders/create-order`,
        {
          products: cart?.items?.map((item) => ({
            productId: item.productId._id,
            quantity: item.quantity,
          })),
          tax,
          shipping,
          amount: total,
          currency: "INR",
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      if (!data.success) return toast.error("Something went wrong");

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        order_id: data.order.id,
        name: "Ekart",
        description: "Order Payment",
        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              `${import.meta.env.VITE_URL}/api/v1/orders/verify-payment`,
              response,
              {
                headers: { Authorization: `Bearer ${accessToken}` },
              }
            );

            if (verifyRes.data.success) {
              toast.success("Payment successful!");
              dispatch(setCart({ items: [], totalPrice: 0 }));
              navigate("/order-success");
            } else {
              toast.error("Payment verification failed");
            }
          } catch (error) {
            console.log(error);
            toast.error("Error verifying payment");
          }
        },
        modal: {
          ondismiss: async function () {
            await axios.post(
              `${import.meta.env.VITE_URL}/api/v1/orders/verify-payment`,
              {
                razorpay_order_id: data.order.id,
                paymentFailed: true,
              },
              {
                headers: { Authorization: `Bearer ${accessToken}` },
              }
            );
            toast.error("Payment Cancelled");
          },
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#0000FF" },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", async function () {
        toast.error("Payment Failed");
      });

      rzp.open();
    } catch (error) {
      console.error(error);
      toast.error("Payment error");
    }
  };

  // ===================== MAIN BUTTON HANDLER =====================
  const handleCheckout = () => {
    if (paymentMethod === "razorpay") {
      handlePayment();
    } else {
      handleCOD();
    }
  };

  return (
    <div className="pt-24 pb-12 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate("/cart")}
            className="p-2 hover:bg-white rounded-full transition-colors text-gray-500 hover:text-blue-600 shadow-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Checkout
            </h1>
            <p className="text-gray-500 text-sm">
              Complete your order by providing delivery details.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDE: Address & Payment */}
          <div className="flex-1 flex flex-col gap-6">
            <Card className="border-none bg-white p-2">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <MapPin className="text-blue-600" size={20} />
                  Delivery Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showForm ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-gray-500">Full Name</Label>
                      <Input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" className="rounded-xl border-gray-200" />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone Number</Label>
                      <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" className="rounded-xl border-gray-200" />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</Label>
                      <Input name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="rounded-xl border-gray-200" />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-gray-500">Street Address</Label>
                      <Input name="address" value={formData.address} onChange={handleChange} placeholder="House No, Street, Landmark" className="rounded-xl border-gray-200" />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-gray-500">City</Label>
                      <Input name="city" value={formData.city} onChange={handleChange} placeholder="Mumbai" className="rounded-xl border-gray-200" />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-gray-500">State</Label>
                      <Input name="state" value={formData.state} onChange={handleChange} placeholder="Maharashtra" className="rounded-xl border-gray-200" />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-gray-500">Zipcode</Label>
                      <Input name="zipcode" value={formData.zipcode} onChange={handleChange} placeholder="400001" className="rounded-xl border-gray-200" />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-gray-500">Country</Label>
                      <Input name="country" value={formData.country} onChange={handleChange} placeholder="India" className="rounded-xl border-gray-200" />
                    </div>

                    <div className="md:col-span-2 pt-4 flex gap-3">
                      <Button onClick={handleSave} className="bg-blue-600 text-white font-bold py-6 px-8 rounded-2xl hover:bg-blue-700 transition-all cursor-pointer">
                        Save Address
                      </Button>
                      {addresses?.length > 0 && (
                        <Button variant="outline" onClick={() => setShowForm(false)} className="py-6 px-8 rounded-2xl text-gray-500 transition-all cursor-pointer">
                          Cancel
                        </Button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {addresses.map((addr, index) => (
                        <div
                          key={index}
                          onClick={() => dispatch(setSelectedAddress(index))}
                          className={`group relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                            selectedAddress === index
                              ? "border-blue-600 bg-blue-50/50 shadow-md shadow-blue-100"
                              : "border-gray-100 bg-gray-50/50 hover:border-gray-200"
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                              {selectedAddress === index && <CheckCircle2 size={18} className="text-blue-600" />}
                              <p className="font-bold text-gray-900">{addr.fullName}</p>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch(deleteAddress(index));
                              }}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{addr.address}</p>
                          <p className="text-sm text-gray-600">{addr.city}, {addr.state} - {addr.zipcode}</p>
                          <p className="text-sm font-medium text-gray-900 mt-2">{addr.phone}</p>
                        </div>
                      ))}
                      
                      <button
                        onClick={() => setShowForm(true)}
                        className="flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-dashed border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all group min-h-[140px]"
                      >
                        <Plus size={24} className="text-gray-400 group-hover:text-blue-500 mb-2" />
                        <span className="text-sm font-bold text-gray-500 group-hover:text-blue-600">Add New Address</span>
                      </button>
                    </div>

                    {/* PAYMENT METHOD SELECTION */}
                    <div className="mt-10 pt-8 border-t border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                        <CreditCard className="text-blue-600" size={20} />
                        Payment Method
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                          paymentMethod === "razorpay" 
                            ? "border-blue-600 bg-blue-50/50 shadow-md shadow-blue-100" 
                            : "border-gray-100 bg-gray-50/50 hover:border-gray-200"
                        }`}>
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${paymentMethod === "razorpay" ? "bg-blue-600 text-white" : "bg-white text-gray-400 shadow-sm"}`}>
                              <CreditCard size={20} />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">Online Payment</p>
                              <p className="text-xs text-gray-500">Pay via Razorpay / Cards / UPI</p>
                            </div>
                          </div>
                          <input
                            type="radio"
                            value="razorpay"
                            checked={paymentMethod === "razorpay"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-5 h-5 text-blue-600 accent-blue-600"
                          />
                        </label>

                        <label className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                          paymentMethod === "cod" 
                            ? "border-blue-600 bg-blue-50/50 shadow-md shadow-blue-100" 
                            : "border-gray-100 bg-gray-50/50 hover:border-gray-200"
                        }`}>
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${paymentMethod === "cod" ? "bg-green-600 text-white" : "bg-white text-gray-400 shadow-sm"}`}>
                              <Banknote size={20} />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">Cash on Delivery</p>
                              <p className="text-xs text-gray-500">Pay when you receive the order</p>
                            </div>
                          </div>
                          <input
                            type="radio"
                            value="cod"
                            checked={paymentMethod === "cod"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-5 h-5 text-blue-600 accent-blue-600"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* RIGHT SIDE: Order Summary */}
          <div className="w-full lg:w-[380px] shrink-0">
            <Card className="border-none bg-white shadow-2xl sticky top-24">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-gray-900">
                  Total Payable
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5 pt-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Order Subtotal</span>
                    <span className="font-medium text-gray-900">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Shipping Charges</span>
                    <span className={shipping === 0 ? "text-green-600 font-medium" : "font-medium text-gray-900"}>
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Tax (GST 5%)</span>
                    <span className="font-medium text-gray-900">
                      ₹{tax.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                <Separator className="bg-gray-100" />

                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-base font-semibold text-gray-900">Grand Total</span>
                  <div className="text-right">
                    <span className="block text-3xl font-black text-blue-600">
                      ₹{total.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                      GST Inclusive
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    disabled={selectedAddress === null || showForm}
                    onClick={handleCheckout}
                    className="w-full bg-blue-600 py-7 text-white font-black text-lg rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] active:scale-100 transition-all cursor-pointer disabled:opacity-50 disabled:hover:scale-100"
                  >
                    PLACE ORDER NOW
                  </Button>
                  
                  {selectedAddress === null && !showForm && (
                     <p className="text-[10px] text-red-500 font-bold text-center mt-3 uppercase tracking-widest">
                       Please select a delivery address first
                     </p>
                  )}
                </div>

                {/* Trust Footer */}
                <div className="bg-gray-50 rounded-2xl p-4 mt-6">
                  <p className="text-[10px] text-gray-400 leading-relaxed text-center">
                    By placing your order, you agree to our terms of service and privacy policy. 
                    All transactions are encrypted and secure.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;