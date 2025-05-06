
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = [
  {
    id: "airgap",
    company: "Airgap",
    title: "Data Engineer",
    period: "May 2023 - Present",
    responsibilities: [
      "Develop and maintain ETL pipelines for various enterprise-level applications",
      "Design and implement data warehouse solutions",
      "Optimize database queries and data processing workflows",
      "Work with cross-functional teams to identify and address data-related challenges",
      "Create and maintain documentation for data processing workflows"
    ]
  },
  {
    id: "ibm",
    company: "IBM",
    title: "Backend Data Developer",
    period: "Feb 2021 - May 2023",
    responsibilities: [
      "Built and maintained RESTful APIs for data access and manipulation",
      "Implemented machine learning models for predictive analytics",
      "Collaborated with data scientists to deploy models into production",
      "Optimized backend systems for improved performance",
      "Participated in code reviews and quality assurance processes"
    ]
  },
  {
    id: "lowercase",
    company: "Lowercase",
    title: "Software Developer",
    period: "Jan 2020 - Jan 2021",
    responsibilities: [
      "Developed features for web applications using modern JavaScript frameworks",
      "Implemented database schemas and query optimization",
      "Collaborated with UX/UI designers to create intuitive user interfaces",
      "Participated in agile development processes",
      "Performed code reviews and maintained code quality standards"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-portfolio-lightgray">
      <div className="container">
        <h2 className="section-heading">Work Experience</h2>
        
        <Tabs defaultValue="airgap" className="w-full">
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
