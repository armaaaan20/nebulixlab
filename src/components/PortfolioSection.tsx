
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
}

const ProjectCard = ({ title, category, imageUrl }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-nebula-500/20">
      {/* Image */}
      <div className="h-64 w-full bg-slate-800 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
        <p className="text-nebula-400 text-sm font-medium">{category}</p>
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const projects = [
    {
      title: "Mountain Retreat Resort",
      category: "Web Development",
      imageUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    },
    {
      title: "Urban Cafe Branding",
      category: "Digital Marketing",
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    },
    {
      title: "Tech Solutions Portal",
      category: "Web Application",
      imageUrl:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    },
    {
      title: "Fashion E-Commerce",
      category: "E-Commerce",
      imageUrl:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    },
    {
      title: "Health & Wellness App",
      category: "Mobile App",
      imageUrl:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    },
    {
      title: "Financial Services",
      category: "Corporate Website",
      imageUrl:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Portfolio</h2>
          <p className="text-lg text-slate-300">
            Check out some of our recent projects and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
