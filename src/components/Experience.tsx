
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = [
  {
    id: "meta",
    company: "Meta",
    title: "Research Scientist, Machine Learning",
    period: "Sept 2024 - Apr 2025",
    responsibilities: [
      "Implemented novel foundation models to enhance the ranking performance of ads models by 0.4%",
      "Improved the performance of line cook Ads models by scaling up to 5-10X, resulting in ~1% accuracy enhancement",
      "Worked on large-scale machine learning systems for advertising optimization"
    ]
  },
  {
    id: "purdue",
    company: "Purdue University",
    title: "Graduate Research Assistant",
    period: "Aug 2019 - Sept 2024",
    responsibilities: [
      "Proposed an optimal transport formulation for unsupervised learning from videos, resulting in 22% accuracy enhancement",
      "Developed an algorithm for temporal localization of key steps in surgical videos, with 10% accuracy improvement",
      "Designed a segmented T5 transformer-based LLM combining segmented attention with recurrent attention, achieving 22% higher ROUGE1 scores",
      "Implemented a novel temporal pruning method for SNNs, achieving 5X lower latency and up to 100X higher energy-efficiency",
      "Implemented LoRA-based finetuning for FLAN T5 LLM to reduce trainable parameters by 98% while maintaining performance",
      "Finetuned FLAN T5 LLM using RLHF with PPO to increase reward model scores by 25%",
      "Proposed novel algorithms for ECG classification and heart rate estimation from PPG with high accuracy",
      "Studied visual syntax with Vision Transformers and Vision Language Models, proposing masked auto-encoder based training"
    ]
  },
  {
    id: "adi",
    company: "Analog Devices Inc.",
    title: "Advanced ML Algorithm Intern, AI Solutions Team",
    period: "Sept 2023 - Dec 2023",
    responsibilities: [
      "Developed a GAN-based generative AI algorithm for speech enhancement using bone conduction microphone data",
      "Proposed a multimodal AI approach fusing air conduction and BCM signals, with 20 dB enhancement over state-of-the-art",
      "Contributed to audio processing algorithms using deep learning techniques"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-portfolio-lightgray">
      <div className="container">
        <h2 className="section-heading">Work Experience</h2>
        
        <Tabs defaultValue="meta" className="w-full">
          <TabsList className="flex flex-wrap mb-8 bg-transparent space-x-2">
            {experiences.map((exp) => (
              <TabsTrigger
                key={exp.id}
                value={exp.id}
                className="data-[state=active]:bg-portfolio-blue data-[state=active]:text-white px-4 py-2 rounded"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {experiences.map((exp) => (
            <TabsContent key={exp.id} value={exp.id} className="animate-fade-in">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  <h3 className="text-xl font-heading font-bold text-portfolio-darkblue">
                    {exp.title}
                  </h3>
                  <p className="text-portfolio-gray">{exp.company} | {exp.period}</p>
                </div>
                
                <ul className="space-y-3 text-portfolio-gray">
                  {exp.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-portfolio-blue mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
