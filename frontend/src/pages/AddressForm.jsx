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
    <div className="max-w-7xl mx-auto grid place-items-center p-10">
      <div className="grid grid-cols-2 gap-20 mt-10 w-full">

        {/* LEFT SIDE */}
        <div className="space-y-4 p-6 bg-white">
          {showForm ? (
            <>
              <Label>Full Name</Label>
              <Input name="fullName" value={formData.fullName} onChange={handleChange} />

              <Label>Phone</Label>
              <Input name="phone" value={formData.phone} onChange={handleChange} />

              <Label>Email</Label>
              <Input name="email" value={formData.email} onChange={handleChange} />

              <Label>Address</Label>
              <Input name="address" value={formData.address} onChange={handleChange} />

              <Label>City</Label>
              <Input name="city" value={formData.city} onChange={handleChange} />

              <Label>State</Label>
              <Input name="state" value={formData.state} onChange={handleChange} />

              <Label>Zipcode</Label>
              <Input name="zipcode" value={formData.zipcode} onChange={handleChange} />

              <Label>Country</Label>
              <Input name="country" value={formData.country} onChange={handleChange} />

              <Button onClick={handleSave}>Save & Continue</Button>
            </>
          ) : (
            <>
              <h2 className="text-lg font-semibold">Saved Addresses</h2>

              {addresses.map((addr, index) => (
                <div
                  key={index}
                  onClick={() => dispatch(setSelectedAddress(index))}
                  className={`border p-4 rounded cursor-pointer ${
                    selectedAddress === index
                      ? "border-pink-600 bg-pink-50"
                      : ""
                  }`}
                >
                  <p>{addr.fullName}</p>
                  <p>{addr.phone}</p>
                  <p>{addr.address}</p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(deleteAddress(index));
                    }}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
              ))}

              <Button onClick={() => setShowForm(true)}>+ Add Address</Button>

              {/* ✅ PAYMENT OPTIONS */}
              <div>
                <h3 className="font-semibold mt-4">Payment Method</h3>

                <label className="flex gap-2">
                  <input
                    type="radio"
                    value="razorpay"
                    checked={paymentMethod === "razorpay"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Razorpay
                </label>

                <label className="flex gap-2">
                  <input
                    type="radio"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Cash on Delivery
                </label>
              </div>

              <Button
                disabled={selectedAddress === null}
                onClick={handleCheckout}
                className="w-full bg-blue-600"
              >
                Proceed To Checkout
              </Button>
            </>
          )}
        </div>

        {/* RIGHT SIDE */}
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>

          <CardContent>
            <p>Subtotal: ₹{subtotal}</p>
            <p>Shipping: ₹{shipping}</p>
            <p>Tax: ₹{tax}</p>
            <Separator />
            <h2 className="font-bold">Total: ₹{total}</h2>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default AddressForm;