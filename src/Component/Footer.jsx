import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className=" text-white py-6 px-6"
      style={{ background: "#006A67" }}
    >
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Copyright */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} YANB. All rights reserved.
        </p>

        {/* Right side - Developer Name */}
        <p className="text-sm text-center md:text-right">
          Developed by{" "}
          <span className="font-semibold">Yeasin Arafat Nayem Bhuiyan</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
