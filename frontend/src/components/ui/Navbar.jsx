import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/userSlice";
import logo from "../../assets/lo.png";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const { cart } = useSelector((store) => store.product);

  // ✅ FIXED HERE (only change)
  const { items } = useSelector((store) => store.wishlist);

  const admin = user?.role === "admin" ? true : false;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  const logoutHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        dispatch(setUser(null));
        toast.success(res.data.message);

        localStorage.removeItem("accessToken");

        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Logout failed");
    }
  };

  console.log(cart);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md rounded-b-2xl">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          <img
            src={logo}
            alt="Foram Furnishing"
            className="w-7 h-7 object-contain"
          />
          FORAM <span className="text-blue-600">FURNISHING</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <ul className="flex gap-7 item-center text-l">
            <Link to={"/"}>
              <li>Home</li>
            </Link>

            <Link to={"/product"}>
              <li>Product</li>
            </Link>

            <Link to={"/service"}>
              <li>Service</li>
            </Link>

            <Link to={"/project"}>
              <li>Project</li>
            </Link>

            <Link to={"/aboutus"}>
              <li>About US</li>
            </Link>

            <Link to={"/contactus"}>
              <li>Contact US</li>
            </Link>

            {user && (
              <Link to={`/profile/${user._id}`}>
                <li>Hello , {user.firstName}</li>
              </Link>
            )}

            {admin && (
              <Link to={`/dashboard/sales`}>
                <li>Dashboard</li>
              </Link>
            )}
          </ul>

          {/* ❤️ Wishlist Icon */}
          <Link to={"/wishlist"} className="relative">
            <Heart />
            <span className="bg-red-500 rounded-full absolute text-white -top-3 -right-5 px-2">
              {items?.length || 0} {/* ✅ FIXED */}
            </span>
          </Link>

          {/* 🛒 Cart */}
          <Link to={"/cart"} className="relative">
            <ShoppingCart />
            <span className="bg-blue-500 rounded-full absolute text-white -top-3 -right-5 px-2">
              {cart?.items?.length ||
                cart?.products?.length ||
                cart?.length ||
                0}
            </span>
          </Link>

          {user ? (
            <Button
              onClick={logoutHandler}
              className="bg-pink-600 text-white cursor-pointer"
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white cursor-pointer"
            >
              Login
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;