import Sidebar from "@/components/Sidebar";
import React from "react";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-900 flex">
      <Sidebar />
      <section className="flex-1 overflow-auto">{children}</section>
    </main>
  );
}
