import Nav from "./components/Nav";
import Hero from "./components/Hero";
import {
  Trust,
  Services,
  ConcreteFeature,
  StuccoFeature,
  Why,
  ResiComm,
  Projects,
  CTA,
} from "./components/Sections";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Services />
        <ConcreteFeature />
        <StuccoFeature />
        <Why />
        <ResiComm />
        <Projects />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
