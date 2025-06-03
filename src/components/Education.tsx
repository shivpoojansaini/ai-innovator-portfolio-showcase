import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
        <p className="text-xl text-gray-600 mb-16">
          Academic foundation in engineering and advanced AI research
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {/* MS Degree */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-purple-500 w-full max-w-xl">
            <div className="flex items-center mb-4">
              <img
                src="https://i.postimg.cc/P5TP05vF/download.png"
                alt="University of Arizona"
                className="w-12 h-12 object-contain mr-4"
              />
              <div className="text-left">
                <h3 className="text-xl font-semibold">Master of Science in Information Science</h3>
                <p className="text-purple-600 text-sm">Machine Learning Specialization</p>
              </div>
              <span className="ml-auto bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">Current</span>
            </div>
            <p className="text-gray-700 text-sm mb-1 font-medium">The University of Arizona</p>
            <p className="text-gray-500 text-sm mb-3">📅 2024 – 2026</p>
            <p className="text-gray-600 text-sm">
              Advanced coursework in machine learning algorithms, AI systems, and data science methodologies.
            </p>
          </div>

          {/* BTech Degree */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-purple-500 w-full max-w-xl">
            <div className="flex items-center mb-4">
              <img
                src="https://i.postimg.cc/ZKk9Fcbm/IIIT-Surat-logo.jpg"
                alt="IIIT Surat"
                className="w-12 h-12 object-contain mr-4"
              />
              <div className="text-left">
                <h3 className="text-xl font-semibold">Bachelor of Technology in Electronics & Communication Engineering</h3>
              </div>
              <span className="ml-auto bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">Completed</span>
            </div>
            <p className="text-gray-700 text-sm mb-1 font-medium">Indian Institute of Information Technology, Surat</p>
            <p className="text-gray-500 text-sm mb-3">📅 2017 – 2021</p>
            <p className="text-gray-600 text-sm">
              Comprehensive education in electronics, communication systems, and signal processing with focus on emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
