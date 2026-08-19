import OrderCard from "@/components/OrderCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowUserOrders = () => {
  const params = useParams();

  const [userOrder, setUserOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUserOrders = async () => {
    try {
      setLoading(true);
      setError(null);
      const accessToken = localStorage.getItem("accessToken");
      
      // Debug: Log the userId being used
      console.log("Fetching orders for userId:", params.userId);

      const res = await axios.get(
        `${import.meta.env.VITE_URL}/api/v1/orders/user-order/${params.userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (res.data.success) {
        setUserOrder(res.data.orders);
      }
    } catch (err) {
      console.error("Error fetching user orders:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.userId) {
      getUserOrders();
    }
  }, [params.userId]);

  console.log(userOrder);

  if (loading) {
    return (
      <div className="pl-[350px] py-20">
        <p className="text-gray-500">Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pl-[350px] py-20">
        <p className="text-red-600">Error loading orders: {error}</p>
        <p className="text-gray-500 mt-2">User ID: {params.userId}</p>
      </div>
    );
  }

  return (
    <div className="pl-[350px] py-20">
      <OrderCard userOrder={userOrder} />
    </div>
  );
};

export default ShowUserOrders;
