import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "KYP (Know Your Policy)",
      description: "AI tool leveraging LLM for document analysis and risk assessment in insurance domain",
      technologies: ["LLM", "Document Analysis", "Risk Assessment", "NLP"],
      category: "Generative AI"
    },
    {
      title: "Inquiry Assistant",
      description: "Generative AI solution for enhanced policy query interpretation and automated responses",
      technologies: ["Generative AI", "Query Processing", "NLP", "Automation"],
      category: "AI Assistant"
    },
    {
      title: "Analytical Board for Insurance Insight",
      description: "AI-powered dashboard providing actionable insights for insurance domain decision-making",
      technologies: ["Data Analytics", "Machine Learning", "Dashboard", "Business Intelligence"],
      category: "Analytics"
    },
    {
      title: "DocEye Multilingual OCR/ICR",
      description: "FinTech solution using OCR, OMR, and AI technologies for accurate data extraction",
      technologies: ["OCR", "OMR", "Computer Vision", "AI", "FinTech"],
      category: "Computer Vision"
    },
    {
      title: "Translation & Transliteration Hub",
      description: "Transformer-based NLP application for seamless Hindi-English translations",
      technologies: ["Transformers", "NLP", "Translation", "Multilingual AI"],
      category: "NLP"
    },
    {
      title: "KYC Data Extraction-NLP",
      description: "Object detection and NLP pipeline to extract and validate data with high accuracy",
      technologies: ["Object Detection", "NLP", "Data Validation", "KYC"],
      category: "ML/AI"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative AI solutions that drive business transformation and solve real-world challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isKYP = project.title === "KYP (Know Your Policy)";
            const isDocEye = project.title === "DocEye Multilingual OCR/ICR";

            const link = isKYP
              ? "https://www.insurancesamadhan.com/know-your-policy"
              : isDocEye
              ? "https://eigenlytics.com/doceye?trk=products_details_guest_secondary_call_to_action"
              : null;

            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition"
                    >
                      Visit Here ↗
                    </a>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
