import React from "react";
import ThemeToggle from "../Component/ThemeToggle";
import NavBar from "../Component/NavBar";
import StarBackground from "../Component/StarBackground";
import HeroSection from "../Component/HeroSection"; 
import AboutMe from "../Component/AboutMe";
import SkillSection from "../Component/SkillSection";
import ProjectSection from "../Component/ProjectSection";
import ServiceSection from "../Component/ServiceSection";
import ContactSection from "../Component/ContactSection";
import Footer from "../Component/Footer";
import ScrollToTop from "../Component/ScrollToTop";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navigation Bar */}
      <NavBar />

      {/* Main Sections */}
      <HeroSection />
      <AboutMe />
      <SkillSection />
      <ProjectSection />
      <ServiceSection />
      <ContactSection />
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
