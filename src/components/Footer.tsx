
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-darkblue text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-heading font-bold text-xl">Sayeed Shafayet</p>
            <p className="text-sm text-gray-300">Software Developer & Data Engineering Specialist</p>
          </div>
          
          <div>
            <nav className="flex gap-6">
              {["About", "Experience", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Sayeed Shafayet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
