import React from "react";
import NavBar from "../Component/NavBar";
import Hero from "../Component/HeroSection";
import Footer from "../Component/Footer";
import ServiceSection from "../Component/ServiceSection";
import ProjectSection from "../Component/ProjectSection";
import WorkSection from "../Component/WorkSection";
import ScrollToTop from "../Component/ScrollToTop";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ServiceSection />
      <ProjectSection />
     <WorkSection />
      <Footer />
      <ScrollToTop />

      {/* <FooterMenu /> */}
    </>
  );
}

export default Home;
