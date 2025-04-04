import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <Layout>
      <PageHeader 
        title="Contact Me" 
        subtitle="Let's discuss how I can help you achieve your academic goals" 
      />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form - Now on the left */}
            <div>
              <p className="text-lg text-tutor-gray mb-6">
                Please reach out with any questions or to schedule a free 30-minute consultation.
              </p>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-tutor-navy mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-tutor-navy mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-tutor-navy mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-tutor-navy mb-2">
                      Phone (optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-tutor-navy mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-tutor-navy mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-tutor-teal hover:bg-tutor-navy text-white" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Get in Touch - Now on the right */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-tutor-navy mb-6">Get in Touch</h2>
              <p className="text-tutor-gray mb-8">
                I'm here to answer any questions you may have about my tutoring or editing services. 
                Fill out the form, and I'll respond as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-tutor-teal bg-opacity-20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-tutor-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-tutor-navy">Email</h3>
                    <a href="mailto:jane.zafran@gmail.com" className="text-tutor-gray hover:text-tutor-teal">
                      jane.zafran@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-tutor-teal bg-opacity-20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-tutor-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-tutor-navy">Phone</h3>
                    <a href="tel:+16507735654" className="text-tutor-gray hover:text-tutor-teal">
                      (650) 773-5654
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-tutor-teal bg-opacity-20 p-3 rounded-full mr-4">
                    <Linkedin className="h-6 w-6 text-tutor-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-tutor-navy">LinkedIn</h3>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-tutor-gray hover:text-tutor-teal">
                      Jane Zafran
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
