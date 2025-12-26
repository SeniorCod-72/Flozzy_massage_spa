import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Menu, X, Leaf, Sun, Moon, Instagram, Facebook, Phone } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Switch } from "@/components/ui/switch";

// Minimal useToast hook to prevent ReferenceError
const useToast = () => {
  const toast = ({ title, description }) => {
    alert(`${title}\n${description}`);
  };
  return { toast };
};

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  const navLinks = [
    { to: "/", label: "Homepage" },
    { to: "/services", label: "Services" },
    { to: "/appointment", label: "Appointment" },
    { to: "/contact", label: "Contact" }
  ];

  const socialLinks = [
    // Uncomment and add your icons if available
    // { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    // { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    // { icon: Phone, href: "tel:+1234567890", label: "Call Us" }
  ];

  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDarkMode(isDark);
    if (isDark) document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Example toast usage
    toast({
      title: `${newMode ? "Dark" : "Light"} mode activated`,
      description: `Switched to ${newMode ? "evening" : "daytime"} ambiance.`
    });
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary">
                {/* <Leaf className="h-6 w-6 text-primary-foreground" /> */}
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold tracking-wide">
                  Flozzy
                </span>
                <span className="text-xs uppercase tracking-[0.2em] -mt-1">
                  Massage & Spa
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-medium text-sm uppercase tracking-wider hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Menu & Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? "🌙" : "☀️"}
            </button>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-1 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block px-4 py-3 rounded-lg font-medium text-sm uppercase"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
