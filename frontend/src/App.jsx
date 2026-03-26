import React from 'react'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Verify from './pages/Verify'
import VerifyEmail from './pages/VerifyEmail'

import Footer from './components/ui/Footer'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import Product from './pages/Products'
import Project from './pages/Project'
import Service from './pages/Service'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import AdminSales from './pages/admin/AdminSales'
import AddProduct from './pages/admin/AddProduct'
import AdminProduct from './pages/admin/AdminProduct'
import AdminOrders from './pages/admin/AdminOrders'
import ShowUserOrders from './pages/admin/ShowUserOrders'
import AdminUsers from './pages/admin/AdminUsers'
import UserInfo from './pages/admin/UserInfo'
import ProtectedRoute from './components/ui/ProtectedRoute'
import SingleProduct from './pages/SingleProduct'
import AddressForm from './pages/AddressForm'
import OrderSuccess from './pages/OrderSuccess'
import ChangePassword from './pages/ChangePassword'
import VerifyOtp from './pages/VerifyOtp'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path:'/',
    element:<><Navbar/><Home/></>
  },

  {
    path:'/signup',
    element:<><Signup/></>
  },

  {
    path:'/login',
    element:<><Login/></>
  },

  {
    path:'/forgot-password',
    element:<><Navbar/><ForgotPassword/><Footer/></>
  },

  {
    path:'/verify-otp',
    element:<><Navbar/><VerifyOtp/><Footer/></>
  },

  {
    path:'/change-password',
    element:<><Navbar/><ChangePassword/><Footer/></>
  },
  {
    path:'/verify',
    element:<><Verify/></>
  },
  {
    path:'/verify/:token',
    element:<><VerifyEmail/></>
  },

  {
    path:'/profile/:userId',
    element:<ProtectedRoute><Navbar/><Profile/><Footer/></ProtectedRoute>
  },

  {
    path:'/product',
    element:<><Navbar/><Product/><Footer/></>
  },

  {
    path:'/product/:id',
    element:<><Navbar/><SingleProduct/></>
  },

  {
    path:'/cart',
    element:<ProtectedRoute><Navbar/><Cart/><Footer/></ProtectedRoute>
  },

  

  {
    path:'/address',
    element:<ProtectedRoute><AddressForm/></ProtectedRoute>
  },

  {
    path:'/order-success',
    element:<ProtectedRoute><OrderSuccess/></ProtectedRoute>
  },

  {
    path:'/service',
    element:<><Navbar/><Service/><Footer/></>
  },


  {
    path:'/project',
    element:<><Navbar/><Project/><Footer/></>
  },

  
  {
    path:'/aboutus',
    element:<><Navbar/><Aboutus/><Footer/></>
  },

  {
    path:'/contactus',
    element:<><Navbar/><Contactus/><Footer/></>
  },

  {
    path:'/dashboard',
    element:<ProtectedRoute adminOnly={true}><Navbar/><Dashboard/></ProtectedRoute>,
    children:[
      {
        path:"sales",
        element: <AdminSales/>
      },

      {
        path:"add-product",
        element: <AddProduct/>
      },

      {
        path:"products",
        element: <AdminProduct/>
      },

      {
        path:"orders",
        element: <AdminOrders/>
      },

      {
        path:"users/orders/:userId",
        element: <ShowUserOrders/>
      },

      {
        path:"users",
        element: <AdminUsers/>
      },

      {
        path:"users/:id",
        element: <UserInfo/>
      },

    ]
  },

])

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App