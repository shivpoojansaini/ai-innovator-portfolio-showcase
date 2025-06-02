
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Information Science",
      specialization: "Machine Learning Specialization",
      institution: "The University of Arizona",
      period: "2024 - 2026",
      status: "Current",
      description: "Advanced coursework in machine learning algorithms, AI systems, and data science methodologies."
    },
    {
      degree: "Bachelor of Technology in Electronics & Communication Engineering",
      institution: "Indian Institute of Information Technology, Surat",
      period: "2017 - 2021",
      status: "Completed",
      description: "Comprehensive education in electronics, communication systems, and signal processing with focus on emerging technologies."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation in engineering and advanced AI research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 leading-tight">
                        {edu.degree}
                      </CardTitle>
                      {edu.specialization && (
                        <CardDescription className="text-purple-600 font-medium mt-1">
                          {edu.specialization}
                        </CardDescription>
                      )}
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    edu.status === 'Current' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {edu.status}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <span className="font-semibold">{edu.institution}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
