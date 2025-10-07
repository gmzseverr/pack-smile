"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="w-full fixed z-50"
      style={{
        background: "linear-gradient(to bottom, #FCEFDD, #FFFDFB)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 sm:py-4 gap-2">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img src="/logo.png" alt="Logo" className="h-6 sm:h-8" />
          </div>
        </Link>

        {/* Yazı */}
        <p className="text-[#1D1D1B] text-xs sm:text-sm lg:text-lg text-center sm:text-left">
          Harika fikirler için, harika paketler
        </p>
      </div>
    </header>
  );
}
