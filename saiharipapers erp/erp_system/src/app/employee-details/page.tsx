'use client';

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { DataTable } from "@/components/ui/data-table"; // optional stub if you have one
import { Download, CalendarDays, Wallet, Users2, FileText, Wallet2, HandCoins, Landmark, Package, Scissors, FoldHorizontal } from "lucide-react";
import { Select } from "@/components/ui/select";

/**
 * EMPLOYEE PROFILE – FULL SUITE
 * Desktop-first, light theme; modern glassy surfaces.
 *
 * Drop into /app/employees/[id]/page.tsx OR /overview/page.tsx and keep other tabs routed as needed.
 * Uses shadcn/ui primitives. Replace DataTable with your table component if absent.
 */

const EMPLOYEES = [
  {
    id: "EMP-1042",
    name: "Roger Curtis",
    type: "Permanent",
    dept: "Operations",
    role: "Senior Technician",
    avatar: "/avatars/roger.jpg",
    leaveBalance: "15 days",
    onTimePercentage: "95%",
    perHour: 250,
    totalWorkingHours: 176,
    amount: 44000,
    grossSalary: 44000,
    tds: 440,
    canteen: 300,
    fine: 0,
    esiBank: 20000,
    esiCash: 24000,
    advance: 2000,
    emi: 1000,
    netSalary: 40260,
  },
  {
    id: "EMP-1001",
    name: "Bala",
    type: "Permanent",
    dept: "Sales",
    role: "Sales Executive",
    avatar: "/avatars/bala.jpg",
    leaveBalance: "10 days",
    onTimePercentage: "88%",
    perHour: 220,
    totalWorkingHours: 180,
    amount: 39600,
    grossSalary: 39600,
    tds: 396,
    canteen: 250,
    fine: 50,
    esiBank: 18000,
    esiCash: 21000,
    advance: 1500,
    emi: 800,
    netSalary: 36604,
  },
  {
    id: "EMP-1002",
    name: "Raj",
    type: "Contract",
    dept: "Marketing",
    role: "Marketing Specialist",
    avatar: "/avatars/raj.jpg",
    leaveBalance: "20 days",
    onTimePercentage: "92%",
    perHour: 280,
    totalWorkingHours: 170,
    amount: 47600,
    grossSalary: 47600,
    tds: 476,
    canteen: 350,
    fine: 0,
    esiBank: 22000,
    esiCash: 26000,
    advance: 2500,
    emi: 1200,
    netSalary: 43074,
  },
  {
    id: "EMP-1003",
    name: "Kamal",
    type: "Permanent",
    dept: "HR",
    role: "HR Manager",
    avatar: "/avatars/kamal.jpg",
    leaveBalance: "5 days",
    onTimePercentage: "75%",
    perHour: 300,
    totalWorkingHours: 160,
    amount: 48000,
    grossSalary: 48000,
    tds: 480,
    canteen: 400,
    fine: 100,
    esiBank: 23000,
    esiCash: 27000,
    advance: 3000,
    emi: 1500,
    netSalary: 43520,
  },
  {
    id: "EMP-1004",
    name: "Arun",
    type: "Permanent",
    dept: "IT",
    role: "Software Engineer",
    avatar: "/avatars/arun.jpg",
    leaveBalance: "25 days",
    onTimePercentage: "98%",
    perHour: 350,
    totalWorkingHours: 185,
    amount: 64750,
    grossSalary: 64750,
    tds: 647,
    canteen: 300,
    fine: 0,
    esiBank: 30000,
    esiCash: 34000,
    advance: 2000,
    emi: 1000,
    netSalary: 60803,
  },
  {
    id: "EMP-1005",
    name: "Akash",
    type: "Contract",
    dept: "Finance",
    role: "Accountant",
    avatar: "/avatars/akash.jpg",
    leaveBalance: "12 days",
    onTimePercentage: "85%",
    perHour: 260,
    totalWorkingHours: 172,
    amount: 44720,
    grossSalary: 44720,
    tds: 447,
    canteen: 280,
    fine: 20,
    esiBank: 21000,
    esiCash: 25000,
    advance: 1800,
    emi: 900,
    netSalary: 41273,
  },
  {
    id: "EMP-1006",
    name: "Vimala",
    type: "Permanent",
    dept: "Operations",
    role: "Operations Manager",
    avatar: "/avatars/vimala.jpg",
    leaveBalance: "8 days",
    onTimePercentage: "90%",
    perHour: 320,
    totalWorkingHours: 178,
    amount: 56960,
    grossSalary: 56960,
    tds: 569,
    canteen: 320,
    fine: 0,
    esiBank: 27000,
    esiCash: 31000,
    advance: 2200,
    emi: 1100,
    netSalary: 53071,
  },
  {
    id: "EMP-1007",
    name: "Swetha",
    type: "Permanent",
    dept: "Sales",
    role: "Sales Manager",
    avatar: "/avatars/swetha.jpg",
    leaveBalance: "18 days",
    onTimePercentage: "93%",
    perHour: 310,
    totalWorkingHours: 175,
    amount: 54250,
    grossSalary: 54250,
    tds: 542,
    canteen: 290,
    fine: 0,
    esiBank: 26000,
    esiCash: 30000,
    advance: 2100,
    emi: 1050,
    netSalary: 50268,
  },
  {
    id: "EMP-1008",
    name: "Priya",
    type: "Contract",
    dept: "Marketing",
    role: "Marketing Assistant",
    avatar: "/avatars/priya.jpg",
    leaveBalance: "7 days",
    onTimePercentage: "80%",
    perHour: 200,
    totalWorkingHours: 165,
    amount: 33000,
    grossSalary: 33000,
    tds: 330,
    canteen: 200,
    fine: 80,
    esiBank: 15000,
    esiCash: 18000,
    advance: 1200,
    emi: 600,
    netSalary: 30590,
  },
  {
    id: "EMP-1009",
    name: "Preethi",
    type: "Permanent",
    dept: "HR",
    role: "HR Assistant",
    avatar: "/avatars/preethi.jpg",
    leaveBalance: "22 days",
    onTimePercentage: "96%",
    perHour: 290,
    totalWorkingHours: 170,
    amount: 49300,
    grossSalary: 49300,
    tds: 493,
    canteen: 310,
    fine: 0,
    esiBank: 24000,
    esiCash: 28000,
    advance: 1900,
    emi: 950,
    netSalary: 45647,
  },
  {
    id: "EMP-1010",
    name: "Hari",
    type: "Permanent",
    dept: "IT",
    role: "DevOps Engineer",
    avatar: "/avatars/hari.jpg",
    leaveBalance: "3 days",
    onTimePercentage: "70%",
    perHour: 330,
    totalWorkingHours: 168,
    amount: 55440,
    grossSalary: 55440,
    tds: 554,
    canteen: 380,
    fine: 120,
    esiBank: 25000,
    esiCash: 29000,
    advance: 2300,
    emi: 1150,
    netSalary: 51086,
  },
];

function Field({ id, label, placeholder = "", type = "text" as React.HTMLInputTypeAttribute, className = "" }) {
  return (
    <div className={"space-y-1 " + className}>
      <Label htmlFor={id} className="text-slate-900">{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} className="bg-white text-slate-900" />
    </div>
  );
}

function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-slate-900">{title}</CardTitle>
        {desc && <CardDescription className="text-slate-900">{desc}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function DetailsForm({ employee }: { employee: any }) {
  return (
    <Section title="Employee Details" desc="Comprehensive form (photo + 40+ fields)">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <div className="flex flex-col items-center gap-3 rounded-2xl border bg-slate-50 p-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={employee.avatar} />
              <AvatarFallback>{employee.name.split(" ").map((n: string)=>n[0]).join("")}</AvatarFallback>
            </Avatar>
            <Button variant="outline">Upload Photo</Button>
          </div>
        </div>
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field id="name" label="Name" placeholder="Full name" />
            <Field id="dob" label="Date of Birth" type="date" />
            <Field id="age" label="Age" type="number" />
            <Field id="sex" label="Sex" placeholder="Male/Female/Other" />
            <Field id="phone" label="Phone Number" placeholder="+91…" />
            <Field id="address" label="Address" placeholder="Address" />
            <Field id="aadhaar" label="Aadhaar Number" />
            <Field id="pan" label="PAN Number" />
            <Field id="bankName" label="Bank Name" />
            <Field id="acct" label="Account Number" />
            <Field id="ifsc" label="IFSC Code" />
            <Field id="doj" label="Date of Joining" type="date" />
            <Field id="startSal" label="Starting Salary" />
            <Field id="inc1" label="Increment – Year 1" />
            <Field id="inc2" label="Increment – Year 2" />
            <Field id="daysWorked" label="No. of Days Worked in SHP" type="number" />
            <Field id="wageHour" label="Wages / hour" />
            <Field id="remarks" label="Remarks" />
          </div>
        </div>
      </div>
      <CardFooter className="justify-end pt-4">
        <Button variant="outline">Cancel</Button>
        <Button className="ml-2 bg-emerald-600 text-white hover:bg-emerald-700">Save Details</Button>
      </CardFooter>
    </Section>
  );
}

function AttendanceSheet() {
  return (
    <Section title="Attendance Sheet" desc="Monthly employee/contract tracking (1–30/31)">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Input type="month" defaultValue="2025-09" className="w-48" />
        <div className="flex items-center gap-2 text-sm text-slate-900">
          <Badge variant="secondary">Employee</Badge>
          <Badge variant="outline">Contract</Badge>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="outline"><Download className="mr-2 h-4 w-4"/>Export CSV</Button>
          <Button className="bg-emerald-600 text-white hover:bg-emerald-700">Download Sheet</Button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-2xl border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-900">
            <tr>
              <th className="px-3 py-2 text-left">Date</th>
              {Array.from({ length: 31 }).map((_, i) => (
                <th key={i} className="px-2 py-2 text-center">{i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2 font-medium text-slate-900">Employee</td>
              {Array.from({ length: 31 }).map((_, i) => (
                <td key={i} className="px-2 py-2 text-center text-slate-900">P</td>
              ))}
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium text-slate-900">Contract</td>
              {Array.from({ length: 31 }).map((_, i) => (
                <td key={i} className="px-2 py-2 text-center text-slate-900">—</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function SalarySheet({ employee }: { employee: any }) {
  const rows = [
    { label: "Per hour", value: `₹${employee.perHour}` },
    { label: "Total working hours (month)", value: `${employee.totalWorkingHours}` },
    { label: "Amount (type-based)", value: `₹${employee.amount.toLocaleString()}` },
    { label: "Gross Salary", value: `₹${employee.grossSalary.toLocaleString()}` },
    { label: "TDS (1%)", value: `-₹${employee.tds}` },
    { label: "Canteen", value: `-₹${employee.canteen}` },
    { label: "Fine", value: `-₹${employee.fine}` },
    { label: "ESI (bank/cash split)", value: `₹${employee.esiBank.toLocaleString()} bank / ₹${employee.esiCash.toLocaleString()} cash` },
    { label: "Advance", value: `-₹${employee.advance.toLocaleString()}` },
    { label: "EMI", value: `-₹${employee.emi.toLocaleString()}` },
    { label: "Net Salary", value: `₹${employee.netSalary.toLocaleString()}` },
  ];
  return (
    <Section title="Salary Sheet" desc="Auto-calculated from attendance & rules">
      <div className="overflow-hidden rounded-2xl border">
        <table className="w-full text-sm">
          <tbody>
             {rows.map((r) => (
               <tr key={r.label} className="border-b last:border-b-0">
                 <td className="w-1/2 bg-slate-50 px-4 py-2 font-medium text-slate-900">{r.label}</td>
                 <td className="px-4 py-2 text-slate-900">{r.value}</td>
               </tr>
             ))}
          </tbody>
        </table>
      </div>
      <CardFooter className="justify-end pt-4">
        <Button variant="outline"><Download className="mr-2 h-4 w-4" />Download</Button>
        <Button className="ml-2 bg-emerald-600 text-white hover:bg-emerald-700">Generate Slip</Button>
      </CardFooter>
    </Section>
  );
}

function AdvanceCopy({ employee }: { employee: any }) {
  return (
    <Section title="Advance Copy" desc="For employee advances & EMI">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field id="adv_emp" label="Employee Name" placeholder={employee.name} />
        <Field id="adv_acct" label="Account Number" />
        <Field id="adv_ifsc" label="IFSC Code" />
        <Field id="adv_amt" label="Advance Amount" />
        <Field id="adv_emi" label="EMI" />
        <Field id="adv_net" label="Net Salary" />
      </div>
      <CardFooter className="justify-end pt-4">
        <Button variant="outline">Preview</Button>
        <Button className="ml-2 bg-emerald-600 text-white hover:bg-emerald-700">Save Advance</Button>
      </CardFooter>
    </Section>
  );
}

function BankCopy({ employee }: { employee: any }) {
  return (
    <Section title="Bank Copy" desc="Printable bank statement for salary disbursal">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field id="bank_company" label="Name (Company)" placeholder="Sai Hari Papers" />
        <Field id="bank_emp" label="Employee Name" placeholder={employee.name} />
        <Field id="bank_ifsc" label="IFSC Code" />
        <Field id="bank_net" label="Net Salary (after deductions)" />
      </div>
      <CardFooter className="justify-end pt-4">
        <Button variant="outline"><Download className="mr-2 h-4 w-4"/>Download PDF</Button>
        <Button className="ml-2 bg-emerald-600 text-white hover:bg-emerald-700">Save Bank Copy</Button>
      </CardFooter>
    </Section>
  );
}

function ContractWork() {
  return (
    <Section title="Contract Work" desc="Packet/Bundle • Reem Cutting • Folding">
      <Tabs defaultValue="packet" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="packet" className="gap-2"><Package className="h-4 w-4"/>Packet / Bundle</TabsTrigger>
          <TabsTrigger value="reem" className="gap-2"><Scissors className="h-4 w-4"/>Reem Cutting</TabsTrigger>
          <TabsTrigger value="fold" className="gap-2"><FoldHorizontal className="h-4 w-4"/>Folding</TabsTrigger>
        </TabsList>
        <TabsContent value="packet" className="mt-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Field id="regular_packet" label="Regular Packet (₹)" placeholder="0.80" />
            <Field id="deluxe_packet" label="Deluxe Packet (₹)" placeholder="1.00" />
            <Field id="bundle_stitch" label="Bundle Stitching (₹)" placeholder="6.00" />
          </div>
          <div className="mt-3 rounded-2xl border p-3 text-sm text-slate-900">Add rows per day/quantity in implementation.</div>
        </TabsContent>
        <TabsContent value="reem" className="mt-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Field id="rc_person" label="Person Name" />
            <Field id="rc_date" label="Date" type="date" />
            <Field id="rc_product" label="Product Name" />
            <Field id="rc_reem_weight" label="Reem weight" />
            <Field id="rc_reem" label="Reem" />
            <Field id="rc_kg" label="KG" />
            <Field id="rc_ton" label="TON" />
            <Field id="rc_rate_ton" label="Rate / TON" />
          </div>
        </TabsContent>
        <TabsContent value="fold" className="mt-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Field id="fd_name" label="Name" />
            <Field id="fd_date" label="Date" type="date" />
            <Field id="fd_price" label="Price" />
            <Field id="fd_maths_80c" label="Maths 80C" />
            <Field id="fd_maths_80g" label="Maths 80G" />
            <Field id="fd_drawing_c" label="Drawing C" />
            <Field id="fd_drawing_g" label="Drawing G" />
            <Field id="fd_graph_c" label="Graph C" />
            <Field id="fd_graph_g" label="Graph G" />
            <Field id="fd_geometry_c" label="Geometry C" />
            <Field id="fd_geometry_g" label="Geometry G" />
            <Field id="fd_fold1" label="Folding 1 off" />
            <Field id="fd_fold2" label="Folding 2 off" />
            <Field id="fd_fold3" label="Folding 3 off" />
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  );
}

export default function EmployeeFullSuitePage() {
  const [selectedEmployee, setSelectedEmployee] = useState(EMPLOYEES[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const employeeId = event.target.value;
    const foundEmployee = EMPLOYEES.find(
      (emp) => emp.id === employeeId
    );
    if (foundEmployee) {
      setSelectedEmployee(foundEmployee);
    }
  };

  return (
    <div className="mx-auto max-w-[1400px] p-6 min-h-screen bg-slate-50">
      <div className="sticky top-0 z-10 -mx-6 mb-6 border-b bg-white/80 supports-[backdrop-filter]:bg-white/60 px-6 py-4 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-900">Employees / {selectedEmployee.name}</div>
            <h1 className="text-2xl font-semibold text-slate-900">Profile & Operations</h1>
          </div>
          <div className="flex items-center gap-2">
            <Select
              value={selectedEmployee.id}
              onChange={handleSearch}
              className="w-64 bg-white text-slate-900"
            >
              {EMPLOYEES.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.name} ({emp.id})
                </option>
              ))}
            </Select>
            <Button variant="outline">Preview</Button>
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700">Save</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Section title="Snapshot" desc="Quick info">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={selectedEmployee.avatar} />
                <AvatarFallback>{selectedEmployee.name.split(" ").map(n=>n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-lg font-semibold text-slate-900">{selectedEmployee.name}</div>
                <div className="text-sm text-slate-900">{selectedEmployee.role} • {selectedEmployee.dept} • {selectedEmployee.type}</div>
                <div className="text-xs text-slate-900">{selectedEmployee.id}</div>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="rounded-xl bg-white p-3 shadow-sm"><span className="text-black">Leave Balance</span><br/><span className="text-lg font-semibold text-black">{selectedEmployee.leaveBalance}</span></div>
              <div className="rounded-xl bg-white p-3 shadow-sm"><span className="text-black">On-Time %</span><br/><span className="text-lg font-semibold text-black">{selectedEmployee.onTimePercentage}</span></div>
            </div>
          </Section>
        </div>
        <div className="lg:col-span-8">
          <DetailsForm employee={selectedEmployee} />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <AttendanceSheet />
        </div>
        <div className="lg:col-span-4 space-y-5">
          <AdvanceCopy employee={selectedEmployee} />
          <BankCopy employee={selectedEmployee} />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SalarySheet employee={selectedEmployee} />
        </div>
        <div className="lg:col-span-6">
          <ContractWork />
        </div>
      </div>
    </div>
  );
}