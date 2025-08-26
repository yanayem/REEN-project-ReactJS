import React from "react";

const WorkSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Want to work with us?
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Magnis modipsae que voloratati andigen daepeditem quiate re porem aut
          labor. Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam.
        </p>

        {/* Button */}
        <a
          href="#"
          className="inline-block px-8 py-3 btn-primary text-white rounded-lg font-semibold shadow hover:text-gray-200 transition"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default WorkSection;
