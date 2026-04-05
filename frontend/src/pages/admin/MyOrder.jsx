import OrderCard from "@/components/OrderCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MyOrder = () => {

  const [userOrder, setUserOrder] = useState([]);

  const getUserOrders = async () => {
    try {

      const accessToken = localStorage.getItem("accessToken");

      const res = await axios.get(
        `${import.meta.env.VITE_URL}/api/v1/orders/myorder`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      if (res.data.success) {
        setUserOrder(res.data.orders);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const downloadInvoice = async (orderId) => {

    const accessToken = localStorage.getItem("accessToken");

    const response = await fetch(
      `${import.meta.env.VITE_URL}/api/v1/orders/invoice/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `invoice-${orderId}.pdf`;

    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  return (
    <OrderCard
      userOrder={userOrder}
      downloadInvoice={downloadInvoice}
    />
  );
};

export default MyOrder;