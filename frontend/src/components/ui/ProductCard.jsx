import { ShoppingCart, Heart } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setCart } from "@/redux/productSlice";
import { addToWishlist, removeFromWishlist } from "@/redux/wishlistSlice";
import axios from "axios";

const ProductCard = ({ product }) => {

  const { _id, productImg, productPrice, productName } = product;

  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Get wishlist from Redux
  const items = useSelector((state) => state.wishlist.items);

  // ✅ Sync heart icon
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const exists = items.find((item) => item._id === _id);
    setIsWishlisted(!!exists);
  }, [items, _id]);

  // ✅ Add to Cart
  const addToCart = async () => {
    try {

      const res = await axios.post(
        "http://localhost:8000/api/v1/cart/add",
        { productId: _id },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        toast.success("Product added to cart");
        dispatch(setCart(res.data.cart));
      }

    } catch (error) {
      toast.error("Error adding to cart");
    }
  };

  // ✅ FIXED: Toggle Wishlist (updates Redux instantly)
  const toggleWishlist = async () => {
    try {

      const res = await axios.post(
        "http://localhost:8000/api/v1/wishlist/toggle",
        { productId: _id },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {

        const exists = items.find((item) => item._id === _id);

        if (exists) {
          dispatch(removeFromWishlist(_id)); // 🔥 decrease instantly
          toast.success("Removed from wishlist");
        } else {
          dispatch(addToWishlist(product)); // 🔥 increase instantly
          toast.success("Added to wishlist");
        }

        setIsWishlisted(!isWishlisted);
      }

    } catch (error) {
      toast.error("Wishlist error");
    }
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden h-max relative">

      {/* ❤️ Wishlist Icon */}
      <button
        onClick={toggleWishlist}
        className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow"
      >
        <Heart
          size={20}
          className={isWishlisted ? "text-red-500 fill-red-500" : "text-gray-500"}
        />
      </button>

      <div className="w-full h-full aspect-square overflow-hidden">
        <img
          onClick={() => navigate(`/product/${_id}`)}
          src={productImg?.[0]?.url || "/placeholder.png"}
          alt={productName}
          className="w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="px-2 space-y-1">
        <h1 className="font-semibold h-12 line-clamp-2">
          {productName}
        </h1>

        <h2 className="font-bold">
          ₹{productPrice}
        </h2>

        <Button
          onClick={addToCart}
          className="bg-blue-600 mb-3 w-full"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;