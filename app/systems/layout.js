import AnimationProvider from "../../components/AnimationProvider";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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