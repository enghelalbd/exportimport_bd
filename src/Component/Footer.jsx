import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About / Brand */}
        <div>
          <h2 className="text-xl font-bold mb-3">Halal FoodBD</h2>
          <p className="text-gray-400">
            We provide fresh food exports and imports service with trusted
            quality and global connections.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact</h2>
          <p className="text-gray-400">Email: helalfoodbd@gmail.com</p>
          <p className="text-gray-400">Phone: +880 1924885560</p>
          <p className="text-gray-400">Location: Khulna, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400">
              Facebook
            </a>
            <a href="#" className="hover:text-pink-400">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-300">
              LinkedIn
            </a>
            <a href="#" className="hover:text-red-400">
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Halal FoodBD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
