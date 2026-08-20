import Hero from "../../components/systems/Hero";
import About from "../../components/systems/About";
import WhyChoose from "../../components/systems/WhyChoose";
import Testimonials from "../../components/systems/Testimonials";

export default function Home() {
  return (
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Testimonials />
      </main>
  );
}