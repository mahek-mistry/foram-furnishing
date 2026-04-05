import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminOrders = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const accessToken = localStorage.getItem("accessToken");

  // Fetch Orders
  const fetchOrders = async () => {
    try {

      const { data } = await axios.get(
        "http://localhost:8000/api/v1/orders/all",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      if (data.success) {
        setOrders(data.orders);
      }

    } catch (error) {
      console.error("Failed to fetch orders", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Update Order Status
  const updateOrderStatus = async (orderId, status) => {

    try {

      const { data } = await axios.put(
        `http://localhost:8000/api/v1/orders/update-order-status/${orderId}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      if (data.success) {
        alert("Order Status Updated Successfully");
        fetchOrders();
      }

    } catch (error) {
      console.error("Failed to update order", error);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading Orders...
      </div>
    );
  }

  return (
    <div className="pl-[350px] py-20 pr-20 mx-auto px-4">

      <h1 className="text-3xl font-bold mb-6">
        Admin - All Orders
      </h1>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (

        <div className="overflow-x-auto">

          <table className="w-full border border-gray-200 text-left text-sm">

            <thead className="bg-gray-100">

              <tr>
                <th className="px-4 py-2 border">Order ID</th>
                <th className="px-4 py-2 border">User</th>
                <th className="px-4 py-2 border">Amount</th>
                <th className="px-4 py-2 border">Payment</th>
                <th className="px-4 py-2 border">Order Status</th>
                <th className="px-4 py-2 border">Update Status</th>
                <th className="px-4 py-2 border">Date</th>
              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (

                <tr key={order._id} className="hover:bg-gray-50">

                  {/* Order ID */}
                  <td className="px-4 py-2 border">
                    {order._id}
                  </td>

                  {/* User */}
                  <td className="px-4 py-2 border">
                    {order.user?.name}
                    <br />
                    <span className="text-xs text-gray-500">
                      {order.user?.email}
                    </span>
                  </td>

                  {/* Amount */}
                  <td className="px-4 py-2 border font-semibold">
                    ₹{order.amount}
                  </td>

                  {/* Payment */}
                  <td className="px-4 py-2 border">

                    <span className={`px-2 py-1 rounded text-xs font-medium
                      
                      ${
                        order.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                      }

                    `}>
                      {order.status}
                    </span>

                  </td>

                  {/* Order Status */}
                  <td className="px-4 py-2 border font-semibold">

                    {order.orderStatus === "Cancelled" ? (
                      <span className="text-red-600">
                        Cancelled
                      </span>
                    ) : (
                      <span className="text-blue-600">
                        {order.orderStatus}
                      </span>
                    )}

                  </td>

                  {/* Update */}
                  <td className="px-4 py-2 border">

                    <select
                      value={order.orderStatus}
                      onChange={(e) =>
                        updateOrderStatus(order._id, e.target.value)
                      }
                      className="border px-3 py-1 rounded"
                    >

                      <option value="Pending">Pending</option>

                      <option value="Placed">Placed</option>

                      <option value="Processing">Processing</option>

                      <option value="Shipped">Shipped</option>

                      <option value="Out for Delivery">
                        Out for Delivery
                      </option>

                      <option value="Delivered">
                        Delivered
                      </option>

                      <option value="Cancelled">
                        Cancelled
                      </option>

                    </select>

                  </td>

                  {/* Date */}
                  <td className="px-4 py-2 border">

                    {new Date(order.createdAt).toLocaleDateString()}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
};

export default AdminOrders;