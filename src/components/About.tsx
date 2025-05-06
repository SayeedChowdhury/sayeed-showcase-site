
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="text-lg text-portfolio-gray mb-6">
              I am a Research Associate at Purdue University. Previously, I worked as a Machine Learning Research Scientist at Meta with a Ph.D. in Electrical and Computer Engineering from Purdue University. 
              My expertise lies in developing efficient machine learning algorithms, computer vision systems, and large 
              language models.
            </p>
            
            <p className="text-lg text-portfolio-gray mb-6">
              Throughout my academic and professional journey, I've focused on pushing the boundaries of AI technologies,
              specifically in areas such as scene understanding from videos, transformer-based architectures, 
              spiking neural networks, and generative models.
            </p>
            
            <p className="text-lg text-portfolio-gray">
              My research has led to significant improvements in model efficiency, accuracy, and interpretability,
              with applications in healthcare, signal processing, computer vision, and natural language processing.
              I'm passionate about developing AI solutions that are both powerful and resource-efficient.
            </p>
          </div>
          
          <div className="bg-portfolio-lightgray rounded-lg p-6">
            <h3 className="font-heading font-bold text-xl mb-4 text-portfolio-darkblue">
              Education
            </h3>
            <div className="space-y-4 text-portfolio-gray">
              <div>
                <h4 className="font-bold">Purdue University</h4>
                <p>Ph.D. in Electrical and Computer Engineering</p>
                <p>2019 - 2024</p>
                <p>CGPA: 4.00/4.00</p>
                <p className="italic">Research: Efficient Machine Learning and Computer Vision</p>
              </div>
            </div>
            
            <h3 className="font-heading font-bold text-xl mt-6 mb-4 text-portfolio-darkblue">
              Awards
            </h3>
            <ul className="space-y-3 text-portfolio-gray">
              <li className="flex items-start">
                <span className="text-portfolio-blue mr-2">▹</span>
                <span>TRACER Research Grant (2024)</span>
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-blue mr-2">▹</span>
                <span>Travel Grant, META (2022)</span>
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-blue mr-2">▹</span>
                <span>IEEE Signal Processing Cup 1st prize (2016)</span>
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-blue mr-2">▹</span>
                <span>IEEE Signal Processing Cup 2nd prize (2015)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
