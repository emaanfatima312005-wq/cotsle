"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] =useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Services", href: "/services" }, // ✅ Added
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "AI Advisor", href: "/AI Advisor" },
    { name: "Schedules", href: "/schedules" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 text-white transition-all duration-300 ${
        scrolled
          ? "bg-black shadow-xl py-2"
          : "bg-black py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

        {/* Left Side */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/logo.png"
            alt="Cotsle Logo"
            width={150}
            height={110}
            className={`transition-all duration-300 ${
              scrolled
                ? "w-[120px]"
                : "w-[150px]"
            }`}
          />

          <h1 className="text-3xl font-bold">
            Cotsle
          </h1>

        </Link>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex items-center gap-10">

          <ul className="flex items-center gap-9 font-medium">

            {navLinks.map((link) => (

              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#0D6EFD] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>

            ))}

          </ul>

          <Link
            href="/contact"
            className="bg-[#0D6EFD] hover:bg-blue-700 transition-all duration-300 px-6 py-3 rounded-md font-semibold"
          >
            Contact Us
          </Link>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-4xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-black border-t border-gray-800">

          <ul className="flex flex-col py-4">

            {navLinks.map((link) => (

              <li key={link.name}>

                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 hover:bg-[#0D6EFD] transition"
                >
                  {link.name}
                </Link>

              </li>

            ))}

            <li className="px-6 pt-4 pb-6">

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-[#0D6EFD] hover:bg-blue-700 py-3 rounded-md font-semibold transition"
              >
                Contact Us
              </Link>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}