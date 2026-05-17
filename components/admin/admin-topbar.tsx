"use client";

import {
  Bell,
  ChevronDown,
  Search,
} from "lucide-react";

export default function AdminTopbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.04] bg-[#050505]/80 backdrop-blur-2xl">

      <div className="flex items-center justify-between px-8 py-5">

        {/* LEFT */}
        <div>

          <h1 className="text-[42px] font-semibold tracking-tight leading-none">
            Welcome back, Aril 👋
          </h1>

          <p className="mt-2 text-[15px] text-gray-500">
            Here's what's happening with your store today.
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <div className="flex h-[62px] w-[360px] items-center justify-between rounded-2xl border border-white/[0.06] bg-[#0b0b0b] px-5">

            <div className="flex items-center gap-3">

              <Search
                size={18}
                className="text-gray-500"
              />

              <input
                type="text"
                placeholder="Search anything..."
                className="w-full bg-transparent text-sm text-white placeholder:text-gray-500 outline-none"
              />

            </div>

            {/* shortcut */}
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2 py-1 text-xs text-gray-400">
              ⌘ K
            </div>

          </div>

          {/* NOTIFICATION */}
          <button className="relative flex h-[62px] w-[62px] items-center justify-center rounded-2xl border border-white/[0.06] bg-[#0b0b0b] transition hover:border-white/10">

            <Bell
              size={20}
              className="text-gray-300"
            />

            <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-semibold text-black">
              3
            </div>

          </button>

          {/* PROFILE */}
          <button className="flex h-[62px] items-center gap-4 rounded-2xl border border-white/[0.06] bg-[#0b0b0b] px-4 transition hover:border-white/10">

            {/* avatar */}
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-gray-700 to-black" />

            {/* info */}
            <div className="text-left">

              <h3 className="text-sm font-medium">
                Aril
              </h3>

              <p className="text-xs text-gray-500">
                Super Admin
              </p>

            </div>

            <ChevronDown
              size={16}
              className="text-gray-500"
            />

          </button>

        </div>

      </div>

    </header>
  );
}