"use client";

import Image from "next/image";
import {
  LayoutDashboard,
  Package,
} from "lucide-react";

export default function AdminSidebar() {
  return (
    <aside className="flex h-screen w-[260px] flex-col justify-between border-r border-white/[0.06] bg-[#0b0b0b]/80 px-5 py-6 backdrop-blur-2xl">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="mb-14 flex flex-col items-center">

          <Image
            src="/images/logo.png"
            alt="AUROX"
            width={80}
            height={80}
            className="mb-5 object-contain"
          />

          <h1 className="text-[28px] font-light tracking-[0.45em]">
            AUROX
          </h1>

          <p className="mt-2 text-xs tracking-[0.35em] text-gray-500">
            ADMIN PANEL
          </p>

        </div>

        {/* MENU */}
        <div className="space-y-3">

          {/* ACTIVE */}
          <button className="flex w-full items-center gap-4 rounded-2xl border border-[#D4A64F]/20 bg-[#D4A64F]/10 px-5 py-4 text-left shadow-[0_0_30px_rgba(212,166,79,0.08)] transition-all duration-300">

            <LayoutDashboard
              size={20}
              className="text-[#D4A64F]"
            />

            <span className="text-[15px] font-medium text-white">
              Dashboard
            </span>

          </button>

          {/* PRODUCTS */}
          <button className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300 hover:bg-white/[0.03]">

            <Package
              size={20}
              className="text-gray-400"
            />

            <span className="text-[15px] text-gray-300">
              Products
            </span>

          </button>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="space-y-4">

        {/* USER */}
        <div className="flex items-center gap-4 rounded-2xl border border-white/[0.05] bg-white/[0.03] p-4 backdrop-blur-xl">

          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-700 to-black" />

          <div>

            <h3 className="text-sm font-medium">
              Aril
            </h3>

            <p className="text-xs text-gray-500">
              Super Admin
            </p>

          </div>

        </div>

        {/* STATUS */}
        <div className="rounded-2xl border border-white/[0.05] bg-white/[0.03] p-4">

          <div className="mb-2 flex items-center gap-2">

            <div className="h-2 w-2 rounded-full bg-green-400" />

            <p className="text-sm text-white">
              System Status
            </p>

          </div>

          <p className="text-xs text-gray-500">
            All systems operational
          </p>

        </div>

      </div>

    </aside>
  );
}