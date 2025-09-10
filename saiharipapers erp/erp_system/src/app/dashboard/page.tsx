import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users2, Wallet, CalendarDays, Package, HandCoins, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { differenceInDays } from "date-fns";

export default function DashboardPage() {
  const insuranceDueDate = new Date("2025-10-06");
  const today = new Date();
  const daysUntilInsuranceDue = differenceInDays(insuranceDueDate, today);

  return (
    <div className="mx-auto max-w-[1400px] p-6 min-h-screen bg-white">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">Quick Actions</h1>
        <p className="text-slate-600">Access key features of your ERP system</p>
      </div>

      {/* Tabs section */}
      <div className="mt-8">
        <Tabs defaultValue="insurance-due">
          <TabsList>
            <TabsTrigger value="attendance">Attendance Percentage</TabsTrigger>
            <TabsTrigger value="low-stock">Low Stock Alert</TabsTrigger>
            <TabsTrigger value="insurance-due">Insurance Due</TabsTrigger>
          </TabsList>
          <TabsContent value="attendance">
            <Card className="mt-4 p-4">
              <CardTitle>Attendance Percentage</CardTitle>
              <CardDescription className="mt-2">Overall attendance for all employees: 92.5%</CardDescription>
            </Card>
          </TabsContent>
          <TabsContent value="low-stock">
            <Card className="mt-4 p-4">
              <CardTitle>Low Stock Alert</CardTitle>
              <CardDescription className="mt-2">Paper Bundle: Only 10 units remaining. Please reorder soon!</CardDescription>
            </Card>
          </TabsContent>
          <TabsContent value="insurance-due">
            <Card className="mt-4 p-4">
              <CardTitle>Insurance Due</CardTitle>
              <CardDescription className="mt-2">
                LIC Insurance PLTD: ₹5,000 due on 25th October 2024
                {daysUntilInsuranceDue > 0 && (
                  <span className="ml-2 text-orange-500">({daysUntilInsuranceDue} days remaining)</span>
                )}
                {daysUntilInsuranceDue <= 0 && (
                  <span className="ml-2 text-red-500">(Due today or overdue)</span>
                )}
              </CardDescription>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Quick Actions modules */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/attendance">
          <Card className="rounded-xl shadow-md border border-purple-300 bg-purple-50 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <CardHeader className="pb-2">
              <CalendarDays className="h-8 w-8 text-purple-600" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-purple-800">Attendance & Leave</CardTitle>
              <CardDescription className="text-slate-700">Track employee attendance and manage leaves</CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/employee-details">
          <Card className="rounded-xl shadow-md border border-blue-300 bg-blue-50 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <CardHeader className="pb-2">
              <Users2 className="h-8 w-8 text-blue-600" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-blue-800">Employee Management</CardTitle>
              <CardDescription className="text-slate-700">Manage 40 employee profiles and details</CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Card className="rounded-xl shadow-md border border-green-300 bg-green-50 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardHeader className="pb-2">
            <Wallet className="h-8 w-8 text-green-600" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-green-800">Payroll Processing</CardTitle>
            <CardDescription className="text-slate-700">Process monthly payroll</CardDescription>
          </CardContent>
        </Card>

        <Link href="/inventory">
          <Card className="rounded-xl shadow-md border border-yellow-300 bg-yellow-50 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <CardHeader className="pb-2">
              <Package className="h-8 w-8 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-yellow-800">Inventory Management</CardTitle>
              <CardDescription className="text-slate-700">Oversee 500+ product SKUs</CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Card className="rounded-xl shadow-md border border-red-300 bg-red-50 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardHeader className="pb-2">
            <HandCoins className="h-8 w-8 text-red-600" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-red-800">Financial Accounting</CardTitle>
            <CardDescription className="text-slate-700">Manage invoices, expenses, and ledgers</CardDescription>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-md border border-indigo-300 bg-indigo-50 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
          <CardHeader className="pb-2">
            <BarChart3 className="h-8 w-8 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-indigo-800">Reports & Analytics</CardTitle>
            <CardDescription className="text-slate-700">Generate detailed business reports</CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

            <div className="flex space-x-4 mb-6">
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg shadow hover:bg-emerald-700">Attendance Percentage</button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900">Low Stock Alert</button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900">Insurance Due</button>
            </div>

            {/* Insurance Due Card */}