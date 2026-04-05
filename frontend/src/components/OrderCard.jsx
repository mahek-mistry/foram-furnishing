import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import OrderTracking from "./OrderTracking";

const OrderCard = ({ userOrder = [], downloadInvoice }) => {
  const navigate = useNavigate();

  return (
    <div className="pr-20 flex flex-col gap-6">
      <div className="w-full p-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button onClick={() => navigate(-1)}>
            <ArrowLeft />
          </Button>
          <h1 className="text-2xl font-bold">My Orders</h1>
        </div>

        {/* EMPTY STATE */}
        {!userOrder || userOrder.length === 0 ? (
          <p className="text-gray-500 text-lg">
            No Orders Found
          </p>
        ) : (
          <div className="space-y-6">

            {userOrder.map((order) => (
              <div
                key={order._id}
                className="border rounded-xl shadow-sm p-6 bg-white"
              >

                {/* ORDER HEADER */}
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="font-semibold">{order._id}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Total Amount</p>
                    <p className="font-semibold">₹{order.amount}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Payment</p>
                    <span
                      className={`px-3 py-1 rounded text-xs font-medium ${
                        order.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                {/* ORDER TRACKING */}
                <OrderTracking status={order?.orderStatus} />

                {/* PRODUCTS */}
                <div className="mt-6 space-y-4">
                  {order?.products && order.products.length > 0 ? (
                    order.products.map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border rounded-lg p-3"
                      >
                        <img
                          onClick={() =>
                            navigate(`/product/${product?.productId?._id}`)
                          }
                          className="w-16 h-16 object-cover cursor-pointer"
                          src={product?.productId?.productImg?.[0]?.url}
                          alt="product"
                        />

                        <div className="flex-1 ml-4">
                          <p className="font-medium">
                            {product?.productId?.productName || "Product Name"}
                          </p>

                          <p className="text-sm text-gray-500">
                            Quantity: {product?.quantity || 0}
                          </p>
                        </div>

                        <div className="font-semibold">
                          ₹{product?.productId?.productPrice || 0}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400">
                      No products found
                    </p>
                  )}
                </div>

                {/* INVOICE BUTTON */}
                {order?.status === "Paid" && (
                  <div className="mt-6">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => downloadInvoice(order._id)}
                    >
                      Download Invoice
                    </Button>
                  </div>
                )}

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default OrderCard;