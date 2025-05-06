
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    // In a real application, you would send the form data to a backend service
    // Reset form fields after submission
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="bg-portfolio-lightgray">
      <div className="container">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-portfolio-gray mb-6">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hello, I'll do my best to get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-heading font-bold text-portfolio-darkblue mb-1">Email</h3>
                <p className="text-portfolio-gray">sayeed.shafayet@example.com</p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-portfolio-darkblue mb-1">Location</h3>
                <p className="text-portfolio-gray">United States</p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-portfolio-darkblue mb-1">Connect</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="https://www.linkedin.com/in/sayeed-shafayet-c-355aa7a1/" target="_blank" rel="noopener noreferrer" className="text-portfolio-gray hover:text-portfolio-blue transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="text-portfolio-gray hover:text-portfolio-blue transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-darkblue mb-1">
                  Name
                </label>
                <Input id="name" required className="w-full" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-darkblue mb-1">
                  Email
                </label>
                <Input id="email" type="email" required className="w-full" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-darkblue mb-1">
                  Subject
                </label>
                <Input id="subject" required className="w-full" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-darkblue mb-1">
                  Message
                </label>
                <Textarea id="message" required className="w-full min-h-[120px]" />
              </div>
              
              <Button type="submit" className="w-full bg-portfolio-blue hover:bg-portfolio-darkblue">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
