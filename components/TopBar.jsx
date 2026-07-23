import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-3">

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">

          {/* Timing */}

          <p className="text-sm md:text-base font-semibold text-gray-700 text-center md:text-left">
            Cotsle Solutions • Timings: 9 AM – 9 PM
          </p>

          {/* Social Icons */}

          <div className="flex items-center gap-3">

            <Link
              href="#"
              className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#0D6EFD] hover:text-white hover:border-[#0D6EFD] transition-all duration-300"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="#"
              className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#0D6EFD] hover:text-white hover:border-[#0D6EFD] transition-all duration-300"
            >
              <FaInstagram />
            </Link>

            <Link
              href="#"
              className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#0D6EFD] hover:text-white hover:border-[#0D6EFD] transition-all duration-300"
            >
              <FaYoutube />
            </Link>

            <Link
              href="#"
              className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#0D6EFD] hover:text-white hover:border-[#0D6EFD] transition-all duration-300"
            >
              <FaWhatsapp />
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}