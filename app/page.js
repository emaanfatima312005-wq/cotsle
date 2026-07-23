import AnimationProvider from "../components/AnimationProvider";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Inquiry from "../components/Inquiry";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <AnimationProvider>
      <main>
        <TopBar />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Inquiry />
        <Footer />
      </main>
    </AnimationProvider>
  );
}