
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative">
              <div className="h-80 md:h-96 w-full rounded-2xl overflow-hidden animate-float">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-48 w-48 bg-nebula-600 rounded-full opacity-20 blur-2xl" />
              <div className="absolute -top-6 -left-6 h-32 w-32 bg-nebula-800 rounded-full opacity-20 blur-2xl" />
            </div>
          </div>

          <div className="flex-1 space-y-6 order-1 lg:order-2 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About NebulixLabs</h2>
            <p className="text-lg text-slate-300">
              We're a team of passionate digital experts committed to helping small and medium businesses thrive online through affordable, high-quality web development and digital marketing solutions.
            </p>
            <p className="text-lg text-slate-300">
              Our mission is to level the playing field by providing enterprise-level digital solutions at prices accessible to growing businesses.
            </p>
            
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <h3 className="font-bold text-nebula-400 text-lg">Our Mission</h3>
                <p className="text-slate-300">Empower businesses with accessible digital solutions</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <h3 className="font-bold text-nebula-400 text-lg">Our Vision</h3>
                <p className="text-slate-300">A digital landscape where businesses of all sizes can thrive</p>
              </div>
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-nebula-600 hover:bg-nebula-700 text-white"
            >
              Work With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
