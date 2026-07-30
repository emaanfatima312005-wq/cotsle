import Hero from "../../components/systems/Hero";
import About from "../../components/systems/About";
import Services from "../../components/systems/Services";
import WhyChoose from "../../components/systems/WhyChoose";
import Inquiry from "../../components/systems/Inquiry";

export default function Home() {
  return (
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Inquiry />
      </main>
  );
}