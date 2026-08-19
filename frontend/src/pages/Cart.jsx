import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "@/redux/productSlice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const Cart = () => {
  const { cart } = useSelector((store) => store.product);
  console.log(cart);

  const subtotal = cart?.totalPrice || 0;
  const shipping = subtotal > 299 ? 0 : 10;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const API = "http://localhost:8000/api/v1/cart";
  const accessToken = localStorage.getItem("accessToken");

  const loadCart = async () => {
  try {
    const res = await axios.get(API, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    if (res.data.success) {
      // You likely want to dispatch the cart data here
      dispatch(setCart(res.data.cart))
    }
  } catch (error) {
    console.log(error);
  }
}

  const handleUpdateQuantity = async (productId, type) => {
    try {
      const res = await axios.put(
        `${API}/update`,
        { productId, type },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (res.data.success) {
        dispatch(setCart(res.data.cart));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (productId) => {
    try {
      const res = await axios.delete(`${API}/remove`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data:{productId}
      });

      if (res.data.success) {
        dispatch(setCart(res.data.cart));
        toast.success("Product removed from cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    loadCart()
  },[dispatch])

  return (
    <div className="pt-24 pb-12 bg-gray-50/50 min-h-screen">
      {cart?.items?.length > 0 ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Shopping Cart
            </h1>
            <p className="text-gray-500">
              Review your items and proceed to checkout.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items List */}
            <div className="flex-1 flex flex-col gap-4">
              {cart?.items?.map((product, index) => (
                <Card key={index} className="border-none transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col sm:flex-row items-center gap-6 p-5">
                    {/* Product Image */}
                    <div className="w-28 h-28 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-100">
                      <img
                        src={product?.productId?.productImg?.[0]?.url}
                        alt={product?.productId?.productName}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col sm:flex-row justify-between w-full">
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg text-gray-800 line-clamp-1">
                          {product?.productId?.productName}
                        </h3>
                        <p className="text-blue-600 font-semibold text-base">
                          ₹{product?.productId?.productPrice.toLocaleString("en-IN")}
                        </p>
                        
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center gap-3 bg-gray-100 p-1.5 rounded-xl border border-gray-200">
                            <button
                              onClick={() => handleUpdateQuantity(product.productId._id, "decrease")}
                              disabled={product.quantity <= 1}
                              className="p-1 hover:bg-white rounded-lg transition disabled:opacity-30 disabled:hover:bg-transparent"
                            >
                              <Minus size={14} className="text-gray-600" />
                            </button>
                            <span className="text-sm font-bold w-4 text-center text-gray-800">
                              {product.quantity}
                            </span>
                            <button
                              onClick={() => handleUpdateQuantity(product.productId._id, "increase")}
                              disabled={product.quantity >= 5}
                              className="p-1 hover:bg-white rounded-lg transition disabled:opacity-30 disabled:hover:bg-transparent"
                            >
                              <Plus size={14} className="text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-row sm:flex-col items-end justify-between sm:justify-start gap-4 mt-4 sm:mt-0">
                        <p className="font-bold text-xl text-gray-900">
                          ₹{(product?.productId?.productPrice * product?.quantity).toLocaleString("en-IN")}
                        </p>
                        
                        <button
                          onClick={() => handleRemove(product?.productId?._id)}
                          className="flex items-center gap-1.5 text-red-500 hover:text-red-600 text-sm font-medium transition-colors p-2 hover:bg-red-50 rounded-lg group"
                        >
                          <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary Column */}
            <div className="w-full lg:w-[380px] shrink-0">
              <Card className="border-none bg-white shadow-2xl sticky top-24">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Order Summary
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-5 pt-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-medium text-gray-900">
                        ₹{subtotal.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span>Estimated Shipping</span>
                      <span className={shipping === 0 ? "text-green-600 font-medium" : "font-medium text-gray-900"}>
                        {shipping === 0 ? "FREE" : `₹${shipping}`}
                      </span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span>GST (5%)</span>
                      <span className="font-medium text-gray-900">
                        ₹{tax.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>

                  <Separator className="bg-gray-100" />

                  <div className="flex justify-between items-baseline pt-2">
                    <span className="text-base font-semibold text-gray-900">Total</span>
                    <div className="text-right">
                      <span className="block text-2xl font-black text-blue-600">
                        ₹{total.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                        Including all taxes
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <Button 
                      onClick={() => navigate(`/address`)} 
                      className="w-full bg-blue-600 py-6 text-white font-bold text-base rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] active:scale-100 transition-all cursor-pointer"
                    >
                      CHECKOUT NOW
                    </Button>

                    <Button 
                      variant="outline" 
                      onClick={() => navigate("/product")}
                      className="w-full border-gray-200 py-6 text-gray-600 font-semibold hover:bg-gray-50 rounded-2xl transition-all"
                    >
                      CONTINUE SHOPPING
                    </Button>
                  </div>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[70vh] p-8 text-center max-w-lg mx-auto">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-blue-100 blur-3xl rounded-full opacity-50 scale-150" />
            <div className="relative bg-white p-8 rounded-[2.5rem] shadow-2xl border border-blue-50">
              <ShoppingCart className="w-20 h-20 text-blue-600 ml-2" />
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 uppercase tracking-tight">
            Empty Basket
          </h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Your shopping basket is currently empty. Start filling it with our curated furniture collection!
          </p>
          
          <Button
            onClick={() => navigate("/product")}
            className="group relative bg-blue-600 text-white py-8 px-12 rounded-3xl font-bold text-lg shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all overflow-hidden"
          >
            <span className="relative z-10">DISCOVER PRODUCTS</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
