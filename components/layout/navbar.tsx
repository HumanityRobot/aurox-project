"use client";

import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [desktopParfumOpen, setDesktopParfumOpen] =
    useState(false);

  return (
    <>

      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">

          {/* LOGO */}
          <div className="flex items-center">

            <Image
              src="/images/logo.png"
              alt="AUROX Logo"
              width={80}
              height={80}
              priority
              className="object-contain opacity-90 transition duration-300 hover:opacity-100"
            />

          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-12 md:flex">

            {/* HOME */}
            <a
              href="#"
              className="text-[13px] tracking-[0.35em] text-gray-300 transition hover:text-white"
            >
              HOME
            </a>

            {/* PARFUM DROPDOWN */}
            <div className="relative">

              <button
                onClick={() =>
                  setDesktopParfumOpen(
                    !desktopParfumOpen
                  )
                }
                className="
                  flex items-center gap-2
                  text-[13px]
                  tracking-[0.35em]
                  text-gray-300
                  transition hover:text-white
                "
              >

                PARFUM

                <ChevronDown
                  size={14}
                  className={`transition duration-300 ${
                    desktopParfumOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {/* DROPDOWN */}
              {desktopParfumOpen && (
                <div
                  className="
                    absolute left-0 top-10 z-50
                    flex w-[220px] flex-col gap-2
                    rounded-2xl
                    border border-white/10
                    bg-[#111111]
                    p-3
                    shadow-[0_20px_40px_rgba(0,0,0,0.45)]
                  "
                >

                  <a
                    href="#"
                    className="
                      rounded-xl px-4 py-3
                      text-sm tracking-[0.2em]
                      text-gray-300
                      transition hover:bg-white/5 hover:text-white
                    "
                  >
                    ASCENT
                  </a>

                  <a
                    href="#"
                    className="
                      rounded-xl px-4 py-3
                      text-sm tracking-[0.2em]
                      text-gray-300
                      transition hover:bg-white/5 hover:text-white
                    "
                  >
                    EMBER
                  </a>

                  <a
                    href="#"
                    className="
                      rounded-xl px-4 py-3
                      text-sm tracking-[0.2em]
                      text-gray-300
                      transition hover:bg-white/5 hover:text-white
                    "
                  >
                    NOIR
                  </a>

                </div>
              )}

            </div>

            {/* ABOUT */}
            <a
              href="#"
              className="text-[13px] tracking-[0.35em] text-gray-300 transition hover:text-white"
            >
              ABOUT
            </a>

          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

            {/* ACTIONS */}
            <div className="flex items-center gap-6">

              <Search
                size={18}
                className="cursor-pointer text-gray-300 transition hover:text-white"
              />

              <User
                size={18}
                className="cursor-pointer text-gray-300 transition hover:text-white"
              />

              <ShoppingBag
                size={18}
                className="cursor-pointer text-gray-300 transition hover:text-white"
              />

            </div>

          </div>

        </div>

      </header>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed top-20 z-40 w-full border-b border-white/10 bg-black/95 backdrop-blur-xl md:hidden">

          <div className="flex flex-col gap-6 px-8 py-8">

            <a
              href="#"
              className="text-sm tracking-[0.3em] text-gray-300"
            >
              HOME
            </a>

            <div className="space-y-4">

              <p className="text-sm tracking-[0.3em] text-gray-300">
                PARFUM
              </p>

              <div className="ml-4 flex flex-col gap-4">

                <a
                  href="/product/ascent"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  ASCENT
                </a>

                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  EMBER
                </a>

                <a
                  href="#"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  NOIR
                </a>

              </div>

            </div>

            <a
              href="#"
              className="text-sm tracking-[0.3em] text-gray-300"
            >
              ABOUT
            </a>

          </div>

        </div>
      )}

    </>
  );
}