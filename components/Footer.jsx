import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="h-1 bg-[#0D6EFD]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <Image
                src="/images/logo.png"
                alt="Cotsle"
                width={70}
                height={70}
              />

              <div>

                <h2 className="text-3xl font-bold">
                  Cotsle
                </h2>

                <p className="text-gray-400 text-sm">
                  SOLUTIONS
                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-7 mb-8">
              Empowering businesses with innovative software,
              AI, cloud computing, cybersecurity and professional
              IT training.
            </p>

            <div className="flex gap-4">

              {[FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#0D6EFD] flex items-center justify-center transition-all duration-300"
                  >
                    <Icon />
                  </Link>
                )
              )}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              {[
                "Home",
                "Courses",
                "About",
                "Blog",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-[#0D6EFD] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Web Development</li>
              <li>Artificial Intelligence</li>
              <li>Cloud Computing</li>
              <li>Cyber Security</li>
              <li>IT Training</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#0D6EFD] mt-1" />
                <span>Lahore, Pakistan</span>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-[#0D6EFD] mt-1" />
                <span>+92 300 1234567</span>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="text-[#0D6EFD] mt-1" />
                <span>info@cotsle.com</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-3">

          <p>© 2026 Cotsle. All Rights Reserved.</p>

          <div className="flex gap-6">

            <Link href="#">Privacy Policy</Link>

            <Link href="#">Terms & Conditions</Link>

          </div>

        </div>

      </div>

    </footer>
  );
}