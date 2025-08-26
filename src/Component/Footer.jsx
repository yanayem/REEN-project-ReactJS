import React from "react";
import logo from "../assets/logo2.png";
import img_7 from "../assets/slide7.png";
import img_8 from "../assets/slide8.png";
import img_9 from "../assets/slide9.png";
import img_10 from "../assets/slide10.png";

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <section className="bg-fourth py-12 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Who we are */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Who we are</h5>
            <div className="mb-4">
              <img src={logo} alt="Company Logo" className="h-10" />
            </div>
            <p className="text-sm leading-relaxed mb-3">
              Magnis modipsae voloratati andigen daepeditem quiate 
              re porem que aut labor. Laceaque eictemperum quiae
              sitiorem rest non restibusaes maio es dem tumquam.
            </p>
            <a href="#" className="text-eighth hover:underline text-sm">
              More about us
            </a>
          </div>

          {/* Latest Works */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Latest works</h5>
            <div className="grid grid-cols-2 gap-2">
              {[img_7, img_8, img_9, img_10].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Work ${idx + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Get in touch</h5>
            <p className="text-sm leading-relaxed mb-3">
              Doloreiur quia commolu ptatemp dolupta oreprerum 
              tibusam eumenis et consent accullignis dentibea autem 
              inisita.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                84 Street, City, State 24813
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-mobile-screen-button" aria-hidden="true"></i>
                +00 (123) 456 78 90
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-regular fa-envelope" aria-hidden="true"></i>
                info@reen.com
              </li>
            </ul>
          </div>

          {/* Free Updates */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Free updates</h5>
            <p className="text-sm leading-relaxed mb-4">
              Conecus iure posae volor remped modis aut lor volor accabora incim resto explabo.
            </p>
            <form className="flex items-center border rounded overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full text-sm outline-none text-white"
              />
              <button
                type="submit"
                className="btn-primary text-white px-4 py-2 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2014 REEN. All rights reserved.</p>
          <ul className="flex gap-4 mt-2 md:mt-0 text-sm">
            <li><a href="#" className="text-white hover:text-eighth">Home</a></li>
            <li><a href="#" className="text-white hover:text-eighth">Portfolio</a></li>
            <li><a href="#" className="text-white hover:text-eighth">Blog</a></li>
            <li><a href="#" className="text-white hover:text-eighth">About</a></li>
            <li><a href="#" className="text-white hover:text-eighth">Service</a></li>
            <li><a href="#" className="text-white hover:text-eighth">Contact</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
