import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromWishlist, setWishlist } from "@/redux/wishlistSlice";
import { setCart } from "@/redux/productSlice";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Wishlist = () => {

  const [wishlist, setLocalWishlist] = useState([]);
  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");

  // GET WISHLIST
  const getWishlist = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/wishlist",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        const products = res.data.wishlist;
        setLocalWishlist(products);
        dispatch(setWishlist(products));
      }

    } catch (error) {
      console.log(error);
    }
  };

  // REMOVE
  const removeWishlist = async (productId) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/wishlist/toggle",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        toast.success("Removed from wishlist");

        setLocalWishlist((prev) =>
          prev.filter((item) => item._id !== productId)
        );

        dispatch(removeFromWishlist(productId));
      }

    } catch (error) {
      toast.error("Error removing wishlist");
    }
  };

  // ADD TO CART
  const addToCart = async (productId) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/cart/add",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        toast.success("Added to cart");
        dispatch(setCart(res.data.cart));
        removeWishlist(productId);
      }

    } catch (error) {
      toast.error("Cart error");
    }
  };

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-24 p-6">

      <h1 className="text-3xl font-bold mb-8">
        My Wishlist ❤️
      </h1>

      {wishlist.length === 0 ? (

        <div className="text-center py-20 text-gray-500 text-lg">
          No products in wishlist
        </div>

      ) : (

        // ✅ UPDATED GRID
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {wishlist.map((product) => (

            // ✅ UPDATED CARD UI
            <div
              key={product._id}
              className="shadow-lg rounded-lg overflow-hidden h-max relative bg-white hover:shadow-xl transition duration-300"
            >

              {/* 🗑 Remove Button */}
              <button
                onClick={() => removeWishlist(product._id)}
                className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow"
              >
                <Trash2 size={18} className="text-gray-600" />
              </button>

              {/* Image */}
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={product.productImg?.[0]?.url}
                  alt={product.productName}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-3 py-2 space-y-1">

                <h2 className="font-semibold h-12 line-clamp-2">
                  {product.productName}
                </h2>

                <p className="text-blue-600 font-bold text-lg">
                  ₹{product.productPrice}
                </p>

                <Button
                  onClick={() => addToCart(product._id)}
                  className="bg-blue-600 w-full mb-2"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>

              </div>

            </div>

          ))}

        </div>

      )}
    </div>
  );
};

export default Wishlist;