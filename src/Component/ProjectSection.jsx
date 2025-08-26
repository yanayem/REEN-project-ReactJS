import React, { useState, useEffect } from "react";
import img_1 from "../assets/slide1.png";
import img_2 from "../assets/slide2.png";
import img_3 from "../assets/slide3.png";
import img_4 from "../assets/slide4.png";
import img_5 from "../assets/slide5.png";
import img_6 from "../assets/slide6.png";
import img_7 from "../assets/slide7.png";
import img_8 from "../assets/slide8.png";

const ProjectSection = () => {
  const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];

  const [slidesPerView, setSlidesPerView] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive slidesPerView
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesPerView(2);
      else if (window.innerWidth < 1024) setSlidesPerView(4);
      else setSlidesPerView(5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get visible images
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < slidesPerView; i++) {
      visible.push(images[(currentIndex + i) % images.length]);
    }
    return visible;
  };

  const visibleImages = getVisibleImages();

  // Dummy first two projects (replace with real data)
  const firstTwoProjects = [
    { img: img_1, title: "Project One" },
    { img: img_2, title: "Project Two" },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Check out our latest works
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            Magnis modipsae que voloratati andigen daepeditem quiate re porem
            aut labor.
          </p>
        </div>

        {/* First Two Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {firstTwoProjects.map((project, idx) => (
            <div key={idx} className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 text-center">
                <h5 className="text-xl font-semibold mb-1">
                  {project.title}
                </h5>
                <p className="text-gray-500">Identity</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="flex transition-transform duration-500 gap-x-5">
            {visibleImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Project ${idx}`}
                className={`h-auto rounded-lg shadow-lg gap-5 ${
                  slidesPerView === 2
                    ? "w-1/2"
                    : slidesPerView === 4
                    ? "w-1/4"
                    : "w-1/5"
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + images.length) % images.length
              )
            }
            className="absolute top-1/2 left-2 transform -translate-y-1/2 btn-primary text-white p-2 rounded-full hover:text-gray-200"
          >
            &#10094;
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % images.length)
            }
            className="absolute top-1/2 right-2 transform -translate-y-1/2 btn-primary text-white p-2 rounded-full hover:text-gray-200"
          >
            &#10095;
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: images.length }).map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "btn-primary" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(idx)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
