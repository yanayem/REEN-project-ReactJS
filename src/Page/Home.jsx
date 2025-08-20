import React from "react";;
import ThemeToggle from "../component/ThemeToggle"; 
import Navbar from "../component//NavBar";
import StarBackground from "../component/StarBackground"; 
import HeroSection from "../component/HeroSection"; 
import AboutMe from "../component/AboutMe";
import SkillSection from "../component/SkillSection";
import ProjectSection from "../component/ProjectSection";
import ContactSection from "../component/ContactSection";
import Footer from "../component/Footer";
import ScrollToTop from "../component/ScrollToTop";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
    
    {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navigation Bar */}
      <Navbar />

        {/* Main Sections */}
      <HeroSection />
        <AboutMe />
         <SkillSection />
         <ProjectSection />
      <ContactSection />
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />

    </div>
  );
};

export default Home;
