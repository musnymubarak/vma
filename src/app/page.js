import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar.jsx";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* Hero section full width, no wrapper padding */}
      <HeroSection />

      <section
        id="about"
        className="scroll-mt-[120px] bg-white rounded-md py-12 px-8 lg:py-16 lg:px-12 w-full"
      >
        <AboutMe />
      </section>

      <section
        id="team"
        className="scroll-mt-[120px] bg-[#263039] rounded-none py-12 px-8 lg:py-16 lg:px-12 w-full"
      >
        <Team />
      </section>

      <section
        id="services"
        className="scroll-mt-[120px] bg-white rounded-md py-12 px-8 lg:py-16 lg:px-12 w-full"
      >
        <Services />
      </section>

      <section
        id="projects"
        className="scroll-mt-[120px] bg-[#263039] rounded-none py-12 px-8 lg:py-16 lg:px-12 w-full"
      >
        <Projects />
      </section>

      <section
        id="contact"
        className="scroll-mt-[120px] bg-white rounded-md py-12 px-8 lg:py-16 lg:px-12 w-full"
      >
        <EmailSection />
      </section>

      <Footer />
    </main>
  );
}
