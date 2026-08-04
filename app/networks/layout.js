import Navbar from "@/components/networks/Navbar";
import Footer from "@/components/networks/Footer";

export default function NetworksLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}