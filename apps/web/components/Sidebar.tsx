"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Classes", href: "/classes" },
  { label: "Assignments", href: "/assignments" },
  { label: "Calendar", href: "/calendar" },
  { label: "Notes", href: "/notes" },
  { label: "AI Assistant", href: "/assistant" },
  { label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    // Handle root dashboard
    if (href === "/dashboard" && pathname === "/") return true;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <aside className="w-72 border-r border-white/30 bg-white/60 backdrop-blur-xl flex flex-col sticky top-0 h-screen">
      {/* Header */}
      <div className="p-8 border-b border-white/20">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          CampusOS
        </h1>
        <p className="text-sm text-slate-500 mt-1">Student Operating System</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block w-full rounded-2xl px-4 py-3 text-left font-medium transition-all duration-200 ${
                active
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "text-slate-700 hover:bg-white/70"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/20 bg-white/30">
        <p className="text-xs text-slate-500 text-center">CampusOS v1.0</p>
      </div>
    </aside>
  );
}
