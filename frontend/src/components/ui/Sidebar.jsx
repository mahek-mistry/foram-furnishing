import { LayoutDashboard, Package, PackagePlus, PackageSearch, Users ,Form } from 'lucide-react'
import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='hidden fixed md:block border-r bg-blue-50 border-blue-200 x-10 w-[300px] p-10 space-y-2 h-screen'>
        <div className='text-center pt-10 px-3 space-y-2'>
            <NavLink 
                to='/dashboard/sales' 
                className={({isActive}) => `text-xl ${isActive ? "bg-blue-600 text-gray-200" : "bg-transparent"} flex items-center gap-2 font-semi-bold cursor-pointer p-2 rounded-2xl w-full`}>
                <LayoutDashboard /><span>Dashboard</span>
            </NavLink>
            <NavLink 
                to='/dashboard/add-product' 
                className={({isActive}) => `text-xl ${isActive ? "bg-blue-600 text-gray-200" : "bg-transparent"} flex items-center gap-2 font-semi-bold cursor-pointer p-2 rounded-2xl w-full`}>
                <PackagePlus /><span>Add product</span>
            </NavLink>
            <NavLink 
                to='/dashboard/products' 
                className={({isActive}) => `text-xl ${isActive ? "bg-blue-600 text-gray-200" : "bg-transparent"} flex items-center gap-2 font-semi-bold cursor-pointer p-2 rounded-2xl w-full`}>
                <PackageSearch /><span>Products</span>
            </NavLink>
            <NavLink 
                to='/dashboard/users' 
                className={({isActive}) => `text-xl ${isActive ? "bg-blue-600 text-gray-200" : "bg-transparent"} flex items-center gap-2 font-semi-bold cursor-pointer p-2 rounded-2xl w-full`}>
                <Users /><span>Users</span>
            </NavLink>
            <NavLink 
                to='/dashboard/orders' 
                className={({isActive}) => `text-xl ${isActive ? "bg-blue-600 text-gray-200" : "bg-transparent"} flex items-center gap-2 font-semi-bold cursor-pointer p-2 rounded-2xl w-full`}>
                <FaRegEdit /><span>Orders</span>
            </NavLink>
            <NavLink 
                to='/dashboard/contact' 
                className={({isActive}) => `text-xl ${isActive ? "bg-blue-600 text-gray-200" : "bg-transparent"} flex items-center gap-2 font-semi-bold cursor-pointer p-2 rounded-2xl w-full`}>
                <Form />    <span>Enquiry details</span>
            </NavLink>
             <NavLink 
                to='/dashboard/adminconsultation' 
                className={({isActive}) => `text-xl ${isActive ? "bg-blue-600 text-gray-200" : "bg-transparent"} flex items-center gap-2 font-semi-bold cursor-pointer p-2 rounded-2xl w-full`}>
                <Form />    <span>Consultation</span>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
