import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#081423] text-white">

      {/* Top Accent */}
      <div className="h-1 bg-[#0D6EFD]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3 mb-6 -ml-8">

              <Image
                src="/images/logo.png"
                alt="COTSLE"
                width={80}
                height={80}
              />

              <div>

                <h2 className="text-3xl font-black">
                  COTSLE
                </h2>

                <p className="uppercase tracking-[3px] text-[#0D6EFD] text-sm">
                  Services
                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-7 mb-8">
              Delivering enterprise networking, cybersecurity,
              cloud infrastructure and managed IT services for
              modern businesses.
            </p>

            <div className="flex gap-4">

              {[
                FaFacebookF,
                FaLinkedinIn,
                FaInstagram,
                FaYoutube,
              ].map((Icon, index) => (

                <Link
                  key={index}
                  href="#"
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#0D6EFD] hover:border-[#0D6EFD] transition-all duration-300"
                >
                  <Icon />
                </Link>

              ))}

            </div>

          </div>

          {/* Solutions */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Solutions
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><Link href="/networks/solutions" className="hover:text-[#0D6EFD] transition">Enterprise Networking</Link></li>

              <li><Link href="/networks/solutions" className="hover:text-[#0D6EFD] transition">Cloud Infrastructure</Link></li>

              <li><Link href="/networks/solutions" className="hover:text-[#0D6EFD] transition">Cyber Security</Link></li>

              <li><Link href="/networks/solutions" className="hover:text-[#0D6EFD] transition">Managed IT</Link></li>

              <li><Link href="/networks/mssp" className="hover:text-[#0D6EFD] transition">MSSP</Link></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><Link href="/networks/services" className="hover:text-[#0D6EFD] transition">Consulting</Link></li>

              <li><Link href="/networks/services" className="hover:text-[#0D6EFD] transition">Infrastructure</Link></li>

              <li><Link href="/networks/services" className="hover:text-[#0D6EFD] transition">Cloud Migration</Link></li>

              <li><Link href="/networks/services" className="hover:text-[#0D6EFD] transition">Network Security</Link></li>

              <li><Link href="/networks/services" className="hover:text-[#0D6EFD] transition">Technical Support</Link></li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><Link href="/networks/about" className="hover:text-[#0D6EFD] transition">About Us</Link></li>

              <li><Link href="/networks/trainings" className="hover:text-[#0D6EFD] transition">Trainings</Link></li>

              <li><Link href="/networks/insights" className="hover:text-[#0D6EFD] transition">Insights</Link></li>

              <li><Link href="/networks/careers" className="hover:text-[#0D6EFD] transition">Careers</Link></li>

              <li><Link href="/networks/contact" className="hover:text-[#0D6EFD] transition">Contact</Link></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="text-[#0D6EFD] mt-1" />

                <span className="text-gray-400">
                  Lahore, Pakistan
                </span>

              </div>

              <div className="flex items-start gap-3">

                <FaPhoneAlt className="text-[#0D6EFD] mt-1" />

                <span className="text-gray-400">
                  +92 300 1234567
                </span>

              </div>

              <div className="flex items-start gap-3">

                <FaEnvelope className="text-[#0D6EFD] mt-1" />

                <span className="text-gray-400">
                  info@cotsle.com
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500">
            © 2026 COTSLE Networks. All Rights Reserved.
          </p>

          <div className="flex gap-8">

            <Link
              href="/networks/privacy-policy"
              className="text-gray-500 hover:text-[#0D6EFD] transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/networks/terms"
              className="text-gray-500 hover:text-[#0D6EFD] transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}