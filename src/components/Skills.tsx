
import React from "react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "Java", "C++", "R"]
  },
  {
    name: "Data Engineering",
    skills: ["Apache Spark", "Airflow", "Kafka", "Hadoop", "ETL", "Data Pipelines", "Data Modeling"]
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redshift", "Snowflake", "DynamoDB", "Cassandra"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform", "Git"]
  },
  {
    name: "Tools & Frameworks",
    skills: ["React", "Node.js", "Django", "Flask", "Pandas", "NumPy", "Scikit-Learn"]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white">
      <div className="container">
        <h2 className="section-heading">Skills & Technologies</h2>
        
        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-fade-in">
              <h3 className="text-xl font-heading font-bold text-portfolio-darkblue mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className="bg-portfolio-lightgray hover:bg-portfolio-blue text-portfolio-gray hover:text-white px-3 py-1 text-sm rounded-md transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
