// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "sonner";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const Inventory = () => {
    
//   const user = useSelector((store) => store.auth?.user);

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const API = "http://localhost:8000/api/v1/product";
//   const accessToken = localStorage.getItem("accessToken");

//   // ✅ FETCH PRODUCTS
//   const fetchProducts = async () => {
//     try {
//     //   const res = await axios.get(`${API}/getallproducts`, {
//     //     headers: {
//     //       "Cache-Control": "no-cache",
//     //     },
//     //   });
//       const res = await axios.get(`${API}/getallproducts?t=${Date.now()}`);

//       console.log("API RESPONSE:", res.data);
//       console.log(products)

//       if (res.data.success) {
//         setProducts(res.data.products);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to load products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // ✅ LOADING STATE
//   if (loading) {
//     return <div className="p-6 text-lg">Loading inventory...</div>;
//   }

//   // ✅ USER NOT LOADED (fallback safe)
//   if (!user) {
//     return <div className="p-6 text-red-500">User not loaded</div>;
//   }

//   // ✅ ADMIN CHECK
//   if (!user.isAdmin) {
//     return <Navigate to="/" replace />;
//   }

//   // ✅ UPDATE STOCK
//   const updateStock = async (id, newStock) => {
//     if (newStock < 0) {
//       toast.error("Stock cannot be negative");
//       return;
//     }

//     try {
//       const res = await axios.put(
//         `${API}/update-stock/${id}`,
//         { stock: newStock },
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         },
//       );

//       if (res.data.success) {
//         toast.success("Stock updated");
//         fetchProducts();
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to update stock");
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Inventory Management</h1>

//       <p className="mt-2 text-gray-600">Total Products: {products.length}</p>

//       <table className="w-full border mt-5">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-2">Product</th>
//             <th>Price</th>
//             <th>Stock</th>
//             <th>Status</th>
//             <th>Update</th>
//           </tr>
//         </thead>

//         <tbody>
//           {products.length === 0 ? (
//             <tr>
//               <td colSpan="5" className="text-center p-5">
//                 No products found
//               </td>
//             </tr>
//           ) : (
//             products.map((p) => (
//               <tr key={p._id} className="text-center border-t">
//                 <td className="p-2">
//                   <div className="flex items-center gap-2">
//                     <img
//                       src={p.productImg?.[0]?.url}
//                       alt=""
//                       className="w-12 h-12 object-cover"
//                     />
//                     <span>{p.productName.slice(0, 25)}...</span>
//                   </div>
//                 </td>

//                 <td>₹{p.productPrice}</td>
//                 <td>{p.stock}</td>

//                 <td>
//                   {p.stock === 0 ? (
//                     <span className="text-red-500">Out of Stock</span>
//                   ) : p.stock < p.lowStockThreshold ? (
//                     <span className="text-yellow-500">Low Stock</span>
//                   ) : (
//                     <span className="text-green-600">In Stock</span>
//                   )}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Inventory;
