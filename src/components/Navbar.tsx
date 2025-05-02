
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "glass-nav shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <div className="flex items-center">
          <a 
            href="#" 
            className="text-white text-xl md:text-2xl font-bold flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            <span className="inline-block w-3 h-3 rounded-full bg-nebula-500"></span>
            NebulixLabs
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10" 
            onClick={() => scrollToSection("hero")}
          >
            Home
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10" 
            onClick={() => scrollToSection("services")}
          >
            Services
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10" 
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10" 
            onClick={() => scrollToSection("about")}
          >
            About Us
          </Button>
          <Button
            variant="default"
            className="bg-nebula-600 hover:bg-nebula-700 text-white"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 p-2" 
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-64 bg-slate-900 shadow-xl transition-transform duration-300 ease-in-out transform md:hidden border-l border-slate-800",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 p-1"
              onClick={toggleMobileMenu}
            >
              X
            </Button>
          </div>
          <nav className="flex flex-col space-y-4">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 justify-start"
              onClick={() => scrollToSection("hero")}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 justify-start"
              onClick={() => scrollToSection("services")}
            >
              Services
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 justify-start"
              onClick={() => scrollToSection("portfolio")}
            >
              Portfolio
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 justify-start"
              onClick={() => scrollToSection("about")}
            >
              About Us
            </Button>
            <Button
              variant="default"
              className="bg-nebula-600 hover:bg-nebula-700 text-white w-full mt-4"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
