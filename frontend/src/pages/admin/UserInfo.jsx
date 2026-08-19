import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userLogo from "../../assets/user.jpg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useSelector, useDispatch } from "react-redux"; // Added useDispatch if you use it in handleSubmit
import axios from "axios";
import { toast } from "sonner"; // Assuming you use sonner or similar for toast
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { setUser } from "@/redux/userSlice";

const UserInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateUser, setUpdateUser] = useState(null);
  const [file, setFile] = useState(null);
  const [role, setRole] = useState("");

useEffect(() => {
  if (updateUser?.role) {
    setRole(updateUser.role); // "admin" or "user"
  }
}, [updateUser]);

  //const { user } = useSelector((store) => store.user);
  const params = useParams();
  const userId = params.id;

  const handleChange = (e) => {
    setUpdateUser({
      ...updateUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    setUpdateUser({
      ...updateUser,
      profilePic: URL.createObjectURL(selectedFile),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");

    try {
      const formData = new FormData();
      formData.append("firstName", updateUser.firstName);
      formData.append("lastName", updateUser.lastName);
      formData.append("email", updateUser.email);
      formData.append("phoneNo", updateUser.phoneNo);
      formData.append("address", updateUser.address);
      formData.append("city", updateUser.city);
      formData.append("zipCode", updateUser.zipCode);
      formData.append("role", updateUser.role);

      if (file) {
        formData.append("file", file);
      }

      const res = await axios.put(
        `http://localhost:8000/api/v1/user/update/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setUser(res.data.user)); // Ensure setUser is imported if used
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update profile");
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/user/get-user/${userId}`,
      );
      if (res.data.success) {
        setUpdateUser(res.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-xl mx-auto py-8">
        {/* Header with Back Button */}
        <div className="flex items-center mb-1">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="p-10 hover:bg-transparent"
          >
            <ArrowLeft className="h-101 w-200  text-gray-600" />
          </Button>
        </div>

        {/* Profile Image Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <img
              src={updateUser?.profilePic || userLogo}
              alt="profile"
              className="w-28 h-28 rounded-full object-cover border-2 border-blue-100"
            />
          </div>
          <label className="mt-4">
            <span className="bg-[#3b82f6] text-white px-6 py-2 rounded-md cursor-pointer text-sm font-medium hover:bg-blue-600 transition-colors">
              Change Picture
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Row */}
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <label className="text-gray-700 font-medium">First Name</label>
              <Input
                type="text"
                name="firstName"
                className="w-full border-gray-300 rounded-md"
                value={updateUser?.firstName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 space-y-2">
              <label className="text-gray-700 font-medium">Last Name</label>
              <Input
                type="text"
                name="lastName"
                className="w-full border-gray-300 rounded-md"
                value={updateUser?.lastName || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Email</label>
            <Input
              type="email"
              name="email"
              disabled
              className="w-full border-gray-300 rounded-md bg-white"
              value={updateUser?.email || ""}
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Phone Number</label>
            <Input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full border-gray-300 rounded-md"
              value={updateUser?.phone || ""}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Address</label>
            <Input
              type="text"
              name="address"
              className="w-full border-gray-300 rounded-md"
              value={updateUser?.address || ""}
              onChange={handleChange}
            />
          </div>

          {/* City */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">City</label>
            <Input
              type="text"
              name="city"
              className="w-full border-gray-300 rounded-md"
              value={updateUser?.city || ""}
              onChange={handleChange}
            />
          </div>

          {/* Zip Code */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Zip Code</label>
            <Input
              type="text"
              name="zipCode"
              className="w-full border-gray-300 rounded-md"
              value={updateUser?.zipCode || ""}
              onChange={handleChange}
            />
          </div>

          {/* <div className="flex gap-3 items-center">
            <Label className="block text-sm font-medium">Role :</Label>
            <RadioGroup
              value={updateUser?.role}
              onValueChange={(value) =>
                setUpdateUser({ ...updateUser, role: value })
              }
              className="flex items-center"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="user" id="user" />
                <Label htmlFor="user">User</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="admin" id="admin" />
                <Label htmlFor="admin">Admin</Label>
              </div>
            </RadioGroup>
          </div> */}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#3b82f6] text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors mt-6"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
