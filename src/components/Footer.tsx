
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-3 h-3 rounded-full bg-nebula-500"></span>
              <span className="text-xl font-bold text-white">NebulixLabs</span>
            </div>
            <p className="text-slate-400">
              Affordable website development and digital marketing solutions for businesses of all sizes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Button 
                  variant="link" 
                  className="text-slate-400 hover:text-nebula-400 p-0 h-auto"
                  onClick={() => scrollToSection("hero")}
                >
                  Home
                </Button>
              </li>
              <li>
                <Button 
                  variant="link" 
                  className="text-slate-400 hover:text-nebula-400 p-0 h-auto"
                  onClick={() => scrollToSection("services")}
                >
                  Services
                </Button>
              </li>
              <li>
                <Button 
                  variant="link" 
                  className="text-slate-400 hover:text-nebula-400 p-0 h-auto"
                  onClick={() => scrollToSection("portfolio")}
                >
                  Portfolio
                </Button>
              </li>
              <li>
                <Button 
                  variant="link" 
                  className="text-slate-400 hover:text-nebula-400 p-0 h-auto"
                  onClick={() => scrollToSection("about")}
                >
                  About Us
                </Button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="text-slate-400 hover:text-nebula-400 p-0 h-auto">
                  Website Development
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-slate-400 hover:text-nebula-400 p-0 h-auto">
                  SEO Optimization
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-slate-400 hover:text-nebula-400 p-0 h-auto">
                  Social Media Marketing
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-slate-400 hover:text-nebula-400 p-0 h-auto">
                  Ad Campaign Management
                </Button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="text-slate-400">
              123 Digital Avenue <br />
              Tech City, TC 12345
            </p>
            <p className="text-slate-400">hello@nebuladigital.com</p>
            <p className="text-slate-400">(555) 123-4567</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 py-8">
          {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-slate-400 hover:text-nebula-400 transition-colors duration-300"
              aria-label={`${social} link`}
            >
              <div className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-nebula-500 transition-colors duration-300">
                <span className="sr-only">{social}</span>
                {/* Placeholder for social icons */}
                <div className="h-5 w-5 flex items-center justify-center">{social[0].toUpperCase()}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} NebulixLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
