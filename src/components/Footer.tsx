"use client";

import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate text-sm mb-4 md:mb-0">
            Designed & Built by Vivek G Sindagi &copy;{" "}
            {new Date().getFullYear()}
          </p>

          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-navy flex items-center justify-center border border-teal/30 text-teal hover:bg-teal/10 transition-colors"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
