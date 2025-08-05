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

      <section className="bg-white rounded-md py-12 px-8 lg:py-16 lg:px-12 w-full">
        <AboutMe />
      </section>

      <section className="bg-[#484c54] rounded-none py-12 px-8 lg:py-16 lg:px-12 w-full">
        <Team />
      </section>

      <section className="bg-white rounded-md py-12 px-8 lg:py-16 lg:px-12 w-full">
        <Services />
      </section>

      <section className="bg-[#484c54] rounded-none py-12 px-8 lg:py-16 lg:px-12 w-full">
        <Projects />
      </section>

      <section className="bg-white rounded-md py-12 px-8 lg:py-16 lg:px-12 w-full">
        <EmailSection />
      </section>

      <Footer />
    </main>
  );
}
