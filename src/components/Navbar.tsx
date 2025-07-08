"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "/project" },
    { name: "Experience", href: "#experience" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/90 backdrop-blur-sm shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-xl font-space font-bold text-white">
          <span className="text-teal">V</span>ivek{" "}
          <span className="text-teal">S</span>indagi
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link group text-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-teal mr-1">0{index + 1}.</span> {link.name}
            </a>
          ))}
          <a
            href="https://firebasestorage.googleapis.com/v0/b/itsviv0.appspot.com/o/vivek_g_sindagi.pdf?alt=media&token=0023178d-b4b5-408e-96da-af7fda397838"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal text-teal px-4 py-2 rounded hover:bg-teal/10 transition-all duration-300 text-sm"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Navigation */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-teal"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-navy-dark bg-opacity-95 z-40 flex-col items-center justify-center pt-16 transition-all duration-300 overflow-auto ${
          isMenuOpen ? "flex md:hidden" : "hidden"
        }`}
        style={{ top: "0", height: "100vh" }}
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-space text-white hover:text-teal transition-colors"
              onClick={toggleMenu}
            >
              <span className="text-teal">0{index + 1}.</span> {link.name}
            </a>
          ))}
          <a
            href="https://firebasestorage.googleapis.com/v0/b/itsviv0.appspot.com/o/vivek_g_sindagi.pdf?alt=media&token=0023178d-b4b5-408e-96da-af7fda397838"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 border border-teal text-teal px-6 py-3 rounded hover:bg-teal/10 transition-all duration-300"
            onClick={toggleMenu}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
