
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  return (
    <Card className="glass-card hover:shadow-xl hover:shadow-nebula-900/20 transition-all duration-500 border-nebula-800/50 overflow-hidden group h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-nebula-900/0 to-nebula-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardHeader>
        <div className="text-3xl mb-4">{icon}</div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-slate-300">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Website Development",
      description:
        "Custom, responsive websites built to convert visitors into customers. Modern designs that work across all devices.",
      icon: "🌐",
      delay: 0,
    },
    {
      title: "Search Engine Optimization",
      description:
        "Climb up the search rankings and get discovered by customers actively looking for your products and services.",
      icon: "📊",
      delay: 100,
    },
    {
      title: "Social Media Marketing",
      description:
        "Strategic social media campaigns that build brand awareness and engage with your target audience effectively.",
      icon: "📱",
      delay: 200,
    },
    {
      title: "Ad Campaigns",
      description:
        "Targeted digital advertising that delivers your message to the right audience and generates measurable ROI.",
      icon: "📣",
      delay: 300,
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Services</h2>
          <p className="text-lg text-slate-300">
            Comprehensive digital solutions to help your business thrive online
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in-up h-full"
              style={{ animationDelay: `${service.delay}ms` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={service.delay}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
