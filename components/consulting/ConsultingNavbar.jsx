"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ConsultingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/consulting" },
    { name: "About", href: "/consulting/about" },
    { name: "Services", href: "/consulting/services" },
    { name: "Trainings", href: "/consulting/trainings" },
    { name: "Insights", href: "/consulting/insights" },
    { name: "Careers", href: "/consulting/careers" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-black"
      }`}
    >

      <div
        className={`max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-20" : "h-24"
        }`}
      >
{/* Logo + COTSLE Name */}

<Link
  href="/"
  className="flex items-center gap-3 flex-shrink-0 group"
>

  <Image
    src="/images/logo.png"
    alt="COTSLE"
    width={150}
    height={110}
    className="object-contain"
    priority
  />

<h1 className="text-3xl font-bold text-[#0D6EFD] transition-colors duration-300 group-hover:text-[#0D6EFD]">
  COTSLE 
</h1>

</Link>


        {/* Desktop Navigation */}

        <div className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-white font-medium text-[15px] hover:text-[#0D6EFD] transition-colors duration-300 group"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#0D6EFD] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {/* Contact Button */}

          <Link
            href="/consulting/contact"
            className="ml-2 bg-[#0D6EFD] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Us
          </Link>

        </div>


        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </div>


      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="bg-black/95 backdrop-blur-md px-6 pb-6 pt-2 space-y-2">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white py-3 px-4 rounded-lg hover:bg-[#0D6EFD] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/consulting/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-[#0D6EFD] text-white py-3 px-4 rounded-lg font-semibold mt-3"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </nav>
  );
}