// import type { Metadata } from "next";
// import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
// import React from "react";
// import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
// import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
// import StatisticsChart from "@/components/ecommerce/StatisticsChart";
// import RecentOrders from "@/components/ecommerce/RecentOrders";
// import DemographicCard from "@/components/ecommerce/DemographicCard";

import MessageActivity from "./components/MessageActivity";
import MetricsCards from "./components/MetricsCards";
import Notifications from "./components/Notifications";
import QuickActions from "./components/QuickActions";
import UserManagement from "./components/UserManagement";

// export const metadata: Metadata = {
//   title:
//     "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Home for TailAdmin Dashboard Template",
// };

// export default function Ecommerce() {
//   return (
//     <div className="grid grid-cols-12 gap-4 md:gap-6">
//       <div className="col-span-12 space-y-6 xl:col-span-7">
//         <EcommerceMetrics />

//         <MonthlySalesChart />
//       </div>

//       <div className="col-span-12 xl:col-span-5">
//         <MonthlyTarget />
//       </div>

//       <div className="col-span-12">
//         <StatisticsChart />
//       </div>

//       <div className="col-span-12 xl:col-span-5">
//         <DemographicCard />
//       </div>

//       <div className="col-span-12 xl:col-span-7">
//         <RecentOrders />
//       </div>
//     </div>
//   );
// }

// import MetricsCards from '@/components/MetricsCards';
// import MessageActivity from '@/components/MessageActivity';
// import Notifications from '@/components/Notifications';
// import QuickActions from '@/components/QuickActions';
// import UserManagement from '@/components/UserManagement';

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-6">Monitor your chat application metrics and user activity</p>

      {/* Metrics Cards */}
      <MetricsCards />

      {/* Message Activity and Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <MessageActivity />
        <Notifications />
      </div>

      {/* Quick Actions and User Management */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <QuickActions />
        <UserManagement />
      </div>
    </div>
  );
}