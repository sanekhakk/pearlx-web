
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import PaymentSection from "./components/PaymentSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <PaymentSection />
        <ServicesSection />
        <StorySection />
        {/* <ProcessSection /> */}
        
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
