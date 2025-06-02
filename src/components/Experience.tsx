
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Research Engineer",
      company: "Insurance Samadhan",
      period: "Jan 2024 - Present",
      description: "Leading AI research initiatives, developing generative AI solutions for insurance domain, and architecting cloud-native AI systems.",
      achievements: [
        "Spearheaded development of LLM-based document analysis systems",
        "Implemented generative AI solutions for policy query interpretation",
        "Led cross-functional teams in AI product development"
      ]
    },
    {
      title: "Research Engineer",
      company: "Insurance Samadhan",
      period: "Jan 2023 - Dec 2023",
      description: "Developed AI-powered analytics and insights platforms for insurance domain decision-making.",
      achievements: [
        "Built analytical dashboard for insurance insights",
        "Developed NLP models for document processing",
        "Improved data extraction accuracy by 25%"
      ]
    },
    {
      title: "Research Engineer & Associate Data Scientist",
      company: "Eigenlytics Data Solutions",
      period: "2021 - 2022",
      description: "Worked on computer vision and NLP projects, focusing on OCR/ICR solutions and multilingual AI systems.",
      achievements: [
        "Developed DocEye multilingual OCR/ICR system",
        "Created translation and transliteration hub",
        "Implemented KYC data extraction pipelines"
      ]
    },
    {
      title: "Data Science Intern & Computer Vision Intern",
      company: "Eigenlytics Data Solutions",
      period: "2020 - 2021",
      description: "Gained hands-on experience in machine learning and computer vision applications.",
      achievements: [
        "Built object detection models",
        "Developed data validation systems",
        "Contributed to ML model optimization"
      ]
    },
    {
      title: "Embedded System Intern",
      company: "Energy Cloud Technology",
      period: "June 2019",
      description: "Worked on embedded systems and IoT solutions for energy management.",
      achievements: [
        "Developed IoT-based monitoring systems",
        "Implemented embedded software solutions",
        "Gained experience in hardware-software integration"
      ]
    },
    {
      title: "Marketing Intern",
      company: "Haier Appliances India",
      period: "Dec 2018",
      description: "Assisted in marketing strategies and customer engagement initiatives.",
      achievements: [
        "Supported digital marketing campaigns",
        "Analyzed customer behavior patterns",
        "Contributed to brand promotion activities"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through innovative AI research and development across various domains
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-purple-600">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
