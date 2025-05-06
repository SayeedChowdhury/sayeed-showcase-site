
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 pt-16">
      <div className="container">
        <div className="max-w-3xl animate-fade-in">
          <h2 className="text-lg md:text-xl font-medium text-portfolio-blue mb-3">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-portfolio-darkblue mb-4">
            Sayeed Shafayet
          </h1>
          <p className="text-2xl md:text-3xl text-portfolio-gray font-light mb-6">
            Software Developer & Data Engineering Specialist
          </p>
          <p className="text-lg text-portfolio-gray mb-8 max-w-2xl">
            I build innovative solutions and help organizations leverage data-driven insights
            to solve complex business problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-portfolio-blue hover:bg-portfolio-darkblue"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
