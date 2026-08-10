import Navbar from "@/components/networks/Navbar";
import Footer from "@/components/networks/Footer";
import NetworkAIAssistant from "@/components/networks/NetworkAIAssistant";

export default function NetworksLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <NetworkAIAssistant />
      <Footer />
    </>
  );
}