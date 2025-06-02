
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'Generative AI', level: 95 },
    { name: 'NLP', level: 92 },
    { name: 'Computer Vision', level: 88 },
    { name: 'Machine Learning', level: 90 },
    { name: 'Cloud-native AI', level: 85 },
    { name: 'Deep Learning', level: 87 }
  ];

  const interests = [
    '🔬 Tech Enthusiast',
    '🏔️ Trekking',
    '🏄‍♂️ Adventure Sports',
    '📸 Photography',
    '🎭 Cultural Activities'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate AI researcher and engineer with expertise in cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Journey</h3>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                Currently serving as a Senior Research Engineer at Insurance Samadhan, I specialize in 
                developing innovative AI solutions that transform the insurance industry. My expertise 
                spans across Generative AI, Natural Language Processing, and Computer Vision.
              </p>
              <p className="mb-4">
                I'm pursuing my MS in Information Science with ML specialization at The University of Arizona 
                (2024-2026), building upon my strong foundation from my B.Tech in Electronics & Communication 
                Engineering from IIIT Surat.
              </p>
              <p>
                My passion lies in creating AI systems that solve real-world problems and drive meaningful 
                business outcomes. I believe in the power of technology to transform industries and improve lives.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Personal Interests</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-purple-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
