
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-animation bg-300% animate-gradient-animation"
    >
      {/* Starry background effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-10 text-center lg:text-left">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight md:leading-tight">
              Stunning Websites <br />
              <span className="text-gradient">Without the Premium Price</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
              Professional web development and digital marketing solutions
              tailored for businesses of all sizes. Stand out online without breaking the bank.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-nebula-600 hover:bg-nebula-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                variant="outline"
                className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-lg rounded-xl"
              >
                View Portfolio
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full rounded-xl overflow-hidden shadow-2xl shadow-nebula-900/30 animate-float">
            <iframe
              src="https://www.example.com"
              title="Website Preview"
              className="w-full h-[350px] sm:h-[400px] border-0 rounded-xl glass-card"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
