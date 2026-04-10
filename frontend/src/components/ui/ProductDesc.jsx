import React, { useState } from "react";
import { Input } from "./input";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { setCart } from "@/redux/productSlice";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const ProductDesc = ({ product }) => {

  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const addToCart = async (productId) => {
    // ✅ Check login first
    if (!accessToken) {
      toast.error("Please login first");
      return;
    }

    if (!productId) {
      toast.error("Invalid product");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/cart/add",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        toast.success("Product added to cart 🛒");
        dispatch(setCart(res.data.cart));
      }
    } catch (error) {
      console.error("Add to Cart Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Failed to add product");
    }
  };

  return (
    <div className="flex flex-col gap-5">

      {/* Product Name */}
      <h1 className="font-bold text-4xl text-gray-900">
        {product.productName}
      </h1>

      {/* Category + Brand */}
      <p className="text-gray-600">
        {product.category} | {product.brand}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-1">
        <Star className="text-yellow-400 fill-yellow-400" size={18}/>
        <Star className="text-yellow-400 fill-yellow-400" size={18}/>
        <Star className="text-yellow-400 fill-yellow-400" size={18}/>
        <Star className="text-yellow-400 fill-yellow-400" size={18}/>
        <Star className="text-gray-300" size={18}/>
        <span className="text-gray-500 ml-2">(4.0)</span>
      </div>

      {/* Price */}
      <h2 className="text-blue-600 font-bold text-3xl">
        ₹{product.productPrice}
      </h2>

      {/* Description */}
      <p className="text-gray-500 leading-relaxed">
        {product.productDesc}
      </p>

      {/* Quantity */}
      <div className="flex gap-3 items-center">
        <p className="font-semibold">Quantity :</p>

        <Input
          type="number"
          className="w-16"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-3">

        <Button
          onClick={() => addToCart(product._id)}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Add to Cart 🛒
        </Button>

      </div>
    </div>
  );
};

export default ProductDesc;