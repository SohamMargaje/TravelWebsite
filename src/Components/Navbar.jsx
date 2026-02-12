import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: "Experience", path: "/" }, // will scroll to testimonials
    { name: "About", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("Home");

  const clerk = useClerk();
  const { user, isLoaded } = useUser();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleExperienceClick = () => {
    if (location.pathname !== "/") {
      // Navigate to home and pass state
      navigate("/", { state: { scrollToTestimonials: true } });
    } else {
      // already on home: scroll manually
      const el = document.getElementById("testimonials-section");
      el?.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink("Experience");
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 shadow-md backdrop-blur-lg py-2"
          : "bg-black/30 py-2"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img
          src={logo}
          alt="Logo"
          className={`h-12 w-auto transition-transform duration-300 scale-125 md:scale-150 ${
            isScrolled ? "scale-110" : ""
          }`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link, i) =>
          link.name === "Experience" ? (
            <button
              key={i}
              onClick={handleExperienceClick}
              className={`px-4 py-1.5 rounded-full font-medium transition-all duration-300 ${
                activeLink === link.name
                  ? "bg-white text-indigo-500 shadow-md"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {link.name}
            </button>
          ) : (
            <Link
              key={i}
              to={link.path}
              className={`px-4 py-1.5 rounded-full font-medium transition-all duration-300 ${
                activeLink === link.name
                  ? "bg-white text-indigo-500 shadow-md"
                  : "text-white hover:bg-white/20"
              }`}
              onClick={() => setActiveLink(link.name)}
            >
              {link.name}
            </Link>
          )
        )}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        {isLoaded &&
          (user ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <button
              onClick={() => clerk.openSignIn()}
              className="px-6 py-2 rounded-full bg-white text-indigo-500 font-medium transition-all"
            >
              Login
            </button>
          ))}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-indigo-500 text-white flex flex-col md:hidden items-center justify-center gap-6 text-lg font-medium transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>

        {navLinks.map((link, i) =>
          link.name === "Experience" ? (
            <button
              key={i}
              onClick={handleExperienceClick}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeLink === link.name
                  ? "bg-white text-indigo-500"
                  : "hover:bg-white/20"
              }`}
            >
              {link.name}
            </button>
          ) : (
            <Link
              key={i}
              to={link.path}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeLink === link.name
                  ? "bg-white text-indigo-500"
                  : "hover:bg-white/20"
              }`}
              onClick={() => {
                setActiveLink(link.name);
                setIsMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          )
        )}

        {isLoaded &&
          (user ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <button
              onClick={() => clerk.openSignIn()}
              className="px-6 py-2 rounded-full bg-white text-indigo-500 font-medium transition-all"
            >
              Login
            </button>
          ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="flex items-center gap-3 md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
