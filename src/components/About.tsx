
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="text-lg text-portfolio-gray mb-6">
              I am a dedicated Software Developer with a strong focus on Data Engineering. With several years of experience
              in the tech industry, I've developed expertise in building robust data pipelines, creating efficient
              ETL processes, and implementing machine learning solutions.
            </p>
            
            <p className="text-lg text-portfolio-gray mb-6">
              I earned my Master's degree in Computer Science and have applied my knowledge to solve complex
              problems across various domains including healthcare, finance, and e-commerce.
            </p>
            
            <p className="text-lg text-portfolio-gray">
              My passion lies in transforming raw data into actionable insights and building scalable systems that
              make a real impact on business outcomes. I continuously strive to improve my technical skills and stay
              updated with the latest industry trends and technologies.
            </p>
          </div>
          
          <div className="bg-portfolio-lightgray rounded-lg p-6">
            <h3 className="font-heading font-bold text-xl mb-4 text-portfolio-darkblue">
              Quick Facts
            </h3>
            <ul className="space-y-3 text-portfolio-gray">
              <li className="flex items-start">
                <span className="text-portfolio-blue mr-2">▹</span>
                <span>Master's degree in Computer Science</span>
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-blue mr-2">▹</span>
                <span>Specialized in Data Engineering & Analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-blue mr-2">▹</span>
                <span>Several years of industry experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-blue mr-2">▹</span>
                <span>Passionate about solving complex problems</span>
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-blue mr-2">▹</span>
                <span>Committed to continuous learning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
