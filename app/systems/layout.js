import AnimationProvider from "../../components/AnimationProvider";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/systems/Navbar";
import Footer from "../../components/systems/Footer";

export default function SystemsLayout({ children }) {
  return (
    <AnimationProvider>
      <TopBar />
      <Navbar />

      {children}

      <Footer />
    </AnimationProvider>
  );
}