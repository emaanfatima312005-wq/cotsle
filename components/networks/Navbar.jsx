"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Solutions",
      href: "/networks/solutions",
    },
    {
      name: "Services",
      href: "/networks/services",
    },
    {
      name: "Trainings",
      href: "/networks/trainings",
    },
    {
      name: "MSSP",
      href: "/networks/mssp",
    },
    {
      name: "Insights",
      href: "/networks/insights",
    },
    {
      name: "About",
      href: "/networks/about",
    },
    {
      name: "Careers",
      href: "/networks/careers",
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <Image
            src="/images/logo2.png"
            alt="Cotsle Logo"
            width={150}
            height={110}
            className={`transition-all duration-300 ${
              scrolled
                ? "w-[120px]"
                : "w-[150px]"
            }`}
          />

          <h1 className="text-3xl font-bold text-gray-900 group-hover:text-[#0D6EFD] transition">
            COTSLE
          </h1>
        </Link>

        {/* Desktop */}

        <div className="hidden lg:flex items-center gap-10">

          <ul className="flex items-center gap-8">

            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <li key={link.name} className="relative">

                  <Link
                    href={link.href}
                    className={`font-medium transition duration-300 ${
                      active
                        ? "text-[#0D6EFD]"
                        : "text-gray-700 hover:text-[#0D6EFD]"
                    }`}
                  >
                    {link.name}
                  </Link>

                  {active && (
                    <span className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-[#0D6EFD]" />
                  )}

                </li>
              );
            })}

          </ul>

          <Link
            href="/networks/contact"
            className="bg-[#0D6EFD] hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Contact Us
          </Link>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-4xl text-gray-800"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200">

          <ul className="flex flex-col py-4">

            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-6 py-4 transition ${
                      active
                        ? "text-[#0D6EFD] bg-blue-50"
                        : "text-gray-700 hover:bg-blue-50 hover:text-[#0D6EFD]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            <li className="px-6 pt-4 pb-6">

              <Link
                href="/networks/contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-[#0D6EFD] hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition"
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