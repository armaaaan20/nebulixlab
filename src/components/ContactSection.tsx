
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
            <p className="text-lg text-slate-300">
              Have a project in mind or want to learn more about our services? Reach out to us today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-6 rounded-2xl animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white h-32"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-nebula-600 hover:bg-nebula-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 lg:pl-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <p className="text-slate-300 mb-8">
                  Our team is ready to help you transform your digital presence.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-nebula-900/50 flex items-center justify-center text-nebula-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-white">hello@nebulixlabs.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-nebula-900/50 flex items-center justify-center text-nebula-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="text-white">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-nebula-900/50 flex items-center justify-center text-nebula-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="text-white">123 Digital Avenue, Tech City</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Office Hours</h4>
                <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                  <p className="text-slate-300">Monday - Friday</p>
                  <p className="text-white">9:00 AM - 6:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-slate-300">Saturday - Sunday</p>
                  <p className="text-white">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
