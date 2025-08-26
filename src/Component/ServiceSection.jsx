import React from "react";
import { Heart, Lightbulb, Star } from "lucide-react";

const ServiceSection = () => {
  return (
    <section id="service" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Beautiful. Clean. Responsive.
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            REEN is a high-quality solution for those who want a beautiful
            website in no time. It's fully responsive and will adapt itself to
            any mobile device. iPad, iPhone, Android, it doesn't matter. Your
            content will always look its absolute best.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Passion */}
          <div className="text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4 text-primary">
              <Heart size={40} strokeWidth={2} />
            </div>
            <h2 className="text-3xl font-semibold mb-2">Passion</h2>
            <p className="text-gray-600 text-sm md:text-base">
              Magnis modipsae que lib voloratati andigen daepeditem quiate re
              porem aut labor. Laceaque quiae sitiorem rest non restibusaes maio
              es dem tumquam core posae volor remped modis volor.
            </p>
          </div>

          {/* Creativity */}
          <div className="text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4 text-primary">
              <Lightbulb size={40} strokeWidth={2} />
            </div>
            <h2 className="text-3xl font-semibold mb-2">Creativity</h2>
            <p className="text-gray-600 text-sm md:text-base">
              Magnis modipsae que lib voloratati andigen daepeditem quiate re
              porem aut labor. Laceaque quiae sitiorem rest non restibusaes maio
              es dem tumquam core posae volor remped modis volor.
            </p>
          </div>

          {/* Quality */}
          <div className="text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4 text-primary">
              <Star size={40} strokeWidth={2} />
            </div>
            <h2 className="text-3xl font-semibold mb-2">Quality</h2>
            <p className="text-gray-600 text-sm md:text-base">
              Magnis modipsae que lib voloratati andigen daepeditem quiate re
              porem aut labor. Laceaque quiae sitiorem rest non restibusaes maio
              es dem tumquam core posae volor remped modis volor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
