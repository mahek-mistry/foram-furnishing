import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/userSlice";
import logo from "../../assets/lo.png";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const { cart } = useSelector((store) => store.product);

  // ✅ FIXED HERE (only change)
  const { items } = useSelector((store) => store.wishlist);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        },
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
    <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 bg-white backdrop-blur-md rounded-b-2xl">
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          <img
            src={logo}
            alt="Foram Furnishing"
            className="w-7 h-7 object-contain"
          />
          FORAM <span className="text-blue-600">FURNISHING</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <ul className="flex gap-7 items-center text-lg">
            <Link to={"/"}>
              <li
                className="relative cursor-pointer hover:text-blue-600 transition duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:w-0 after:h-[2px] after:bg-blue-600 
    after:transition-all after:duration-300 hover:after:w-full 
    hover:drop-shadow-md"
              >
                Home
              </li>
            </Link>

            <Link to={"/product"}>
              <li
                className="relative cursor-pointer hover:text-blue-600 transition duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:w-0 after:h-[2px] after:bg-blue-600 
    after:transition-all after:duration-300 hover:after:w-full 
    hover:drop-shadow-md"
              >
                Product
              </li>
            </Link>

            <Link to={"/service"}>
              <li
                className="relative cursor-pointer hover:text-blue-600 transition duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:w-0 after:h-[2px] after:bg-blue-600 
    after:transition-all after:duration-300 hover:after:w-full 
    hover:drop-shadow-md"
              >
                Service
              </li>
            </Link>

            <Link to={"/project"}>
              <li
                className="relative cursor-pointer hover:text-blue-600 transition duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:w-0 after:h-[2px] after:bg-blue-600 
    after:transition-all after:duration-300 hover:after:w-full 
    hover:drop-shadow-md"
              >
                Project
              </li>
            </Link>
{/* 
            <Link to={"/aboutus"}>
              <li
                className="relative cursor-pointer hover:text-blue-600 transition duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:w-0 after:h-[2px] after:bg-blue-600 
    after:transition-all after:duration-300 hover:after:w-full 
    hover:drop-shadow-md"
              >
                About US
              </li>
            </Link> */}

            <Link to={"/contactus"}>
              <li
                className="relative cursor-pointer hover:text-blue-600 transition duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:w-0 after:h-[2px] after:bg-blue-600 
    after:transition-all after:duration-300 hover:after:w-full 
    hover:drop-shadow-md"
              >
                Contact US
              </li>
            </Link>

            
            {admin && (
              <Link to={`/dashboard/sales`}>
                <li
                  className="relative cursor-pointer hover:text-blue-600 transition duration-300 
      after:content-[''] after:absolute after:left-0 after:-bottom-1 
      after:w-0 after:h-[2px] after:bg-blue-600 
      after:transition-all after:duration-300 hover:after:w-full 
      hover:drop-shadow-md"
                >
                  Dashboard
                </li>
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
          {user && (
            <Link to={`/profile/${user._id}`}>
              <div
                className="relative cursor-pointer hover:text-blue-600 transition duration-300 
      after:content-[''] after:absolute after:left-0 after:-bottom-1 
      after:w-0 after:h-[2px] after:bg-blue-600 
      after:transition-all after:duration-300 hover:after:w-full 
      hover:drop-shadow-md"
              >
                Hello {user.firstName}
              </div>
            </Link>
          )}


          {user ? (
            <Button
              onClick={logoutHandler}
              className="bg-red-500 hover:bg-red-600 text-white cursor-pointer transition-all px-6 rounded-xl"
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white cursor-pointer hover:shadow-md transition-all px-6 rounded-xl"
            >
              Login
            </Button>
          )}
        </nav>

        {/* Mobile Icons + Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          {/* ❤️ Wishlist Icon */}
          <Link to={"/wishlist"} className="relative">
            <Heart size={20} />
            <span className="bg-red-500 rounded-full absolute text-white -top-3 -right-3 text-xs px-1">
              {items?.length || 0}
            </span>
          </Link>

          {/* 🛒 Cart */}
          <Link to={"/cart"} className="relative">
            <ShoppingCart size={20} />
            <span className="bg-blue-500 rounded-full absolute text-white -top-3 -right-3 text-xs px-1">
              {cart?.items?.length ||
                cart?.products?.length ||
                cart?.length ||
                0}
            </span>
          </Link>
          

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 p-6 text-gray-700">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <li className="cursor-pointer hover:text-blue-600">Home</li>
            </Link>

            <Link to="/product" onClick={() => setMobileMenuOpen(false)}>
              <li className="cursor-pointer hover:text-blue-600">Product</li>
            </Link>

            <Link to="/service" onClick={() => setMobileMenuOpen(false)}>
              <li className="cursor-pointer hover:text-blue-600">Service</li>
            </Link>

            <Link to="/project" onClick={() => setMobileMenuOpen(false)}>
              <li className="cursor-pointer hover:text-blue-600">Project</li>
            </Link>

            <Link to="/aboutus" onClick={() => setMobileMenuOpen(false)}>
              <li className="cursor-pointer hover:text-blue-600">About US</li>
            </Link>

            <Link to="/contactus" onClick={() => setMobileMenuOpen(false)}>
              <li className="cursor-pointer hover:text-blue-600">Contact US</li>
            </Link>

            {user && (
              <Link to={`/profile/${user._id}`} onClick={() => setMobileMenuOpen(false)}>
                <li className="cursor-pointer hover:text-blue-600">Hello {user.firstName}</li>
              </Link>
            )}

            {admin && (
              <Link to="/dashboard/sales" onClick={() => setMobileMenuOpen(false)}>
                <li className="cursor-pointer hover:text-blue-600">Dashboard</li>
              </Link>
            )}

            {/* Auth Buttons */}
            <div className="mt-4 pt-4 border-t">
              {user ? (
                <Button
                  onClick={() => {
                    logoutHandler();
                    setMobileMenuOpen(false);
                  }}
                  className="bg-red-500 text-white w-full cursor-pointer py-5 rounded-xl"
                >
                  Logout
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    navigate("/login");
                    setMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-full cursor-pointer py-5 rounded-xl"
                >
                  Login
                </Button>
              )}
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
