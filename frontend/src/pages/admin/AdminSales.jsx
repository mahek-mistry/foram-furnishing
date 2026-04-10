import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const AdminSales = () => {

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalSales: 0,
    sales: []
  });

  const fetchStats = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const res = await axios.get(
        `${import.meta.env.VITE_URL}/api/v1/orders/sales`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        setStats(res.data);
      }
    } catch (error) {
      console.error("Error fetching admin stats:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="pl-[350px] bg-gray-100 py-20 pr-20 mx-auto px-4">
      <div className="p-6 grid gap-6 lg:grid-cols-4">

        <Card className="bg-blue-500 text-white shadow">
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {stats.totalUsers}
          </CardContent>
        </Card>

        <Card className="bg-blue-500 text-white shadow">
          <CardHeader>
            <CardTitle>Total Products</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {stats.totalProducts}
          </CardContent>
        </Card>

        <Card className="bg-blue-500 text-white shadow">
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {stats.totalOrders}
          </CardContent>
        </Card>

        <Card className="bg-blue-500 text-white shadow">
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            ₹{stats.totalSales}
          </CardContent>
        </Card>

        {/* Sales Chart */}

        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Sales (Last 30 Days)</CardTitle>
          </CardHeader>

          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stats.sales}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#88c2ef"
                  fill="#5b6483"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card> 

      </div>
    </div>
  );
};

export default AdminSales;