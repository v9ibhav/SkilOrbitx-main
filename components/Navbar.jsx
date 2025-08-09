"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const navmenu = ["About", "Program", "Testimonials", "Impact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center bg-white rounded-b-xl shadow-md border border-b-white/20 transition-all duration-300">
       <Link href="#hero" scroll={true}>
      <div className="flex items-center gap-x-3 cursor-pointer">
       {/* Rocket Icon */}
      <Image
      src="/images/img.png"
      alt="Rocket Icon"
      width={40}
      height={40}
      className="object-contain" />

       {/* SkillOrbitX Text */}
      <Image
      src="/images/logo.png"
      alt="SkillOrbitX Text Logo"
      width={140}
      height={40}
      className="object-contain hidden sm:block"
    />
  </div>
  </Link>
     {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-x-6 text-gray-900 font-medium">
          {navmenu.map((item) => (
         <Link key={item} href={`#${item.toLowerCase()}`} scroll={true} style={{textDecoration: "none"}} className="relative cursor-pointer group text-black no-underline hover:text-orange-400 transition duration-200"> {item}
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
        </Link> ))}

        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <div className="grid grid-cols-3 gap-0.5 w-6 h-6">
              {Array(9)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 bg-black rounded-full"></span>
                ))}
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute right-4 mt-2 bg-white shadow-lg rounded-md py-4 px-6 space-y-4 text-black font-semibold">
          {navmenu.map((item) => (
        <Link key={item}  href={`#${item.toLowerCase()}`}  scroll={true}  className="block text-black no-underline hover:text-orange-400"  style={{textDecoration: "none"}}  onClick={() => setIsOpen(false)}>{item}</Link>))}
        </div>
      )}
    </nav>
  );
}
