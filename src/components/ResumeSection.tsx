// src/components/ResumeSection.tsx
import React from 'react';
import { Download } from 'lucide-react';

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-br from-gray-100 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            My Resume
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Preview the key highlights or download the full PDF.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10">
          {/* PDF Preview */}
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg pb-[141%]">
            <iframe
              // hide toolbar; start at page 1; fit width
              src="/resume/Shivpoojan_Saini_Resume.pdf#page=1&view=FitH&toolbar=0"
              title="Resume Preview"
              className="absolute top-0 left-0 w-full h-full border-none"
            />
          </div>

          {/* Highlights & Download */}
          <div className="flex flex-col justify-between">
            <ul className="space-y-4 text-gray-700 mb-8">
              <li>
                <span className="font-semibold">Senior Research Engineer</span>
                <span className="text-gray-500">
                  {' '}
                  @ Insurance Samadhan (2024–Present)
                </span>
              </li>
              <li>
                <span className="font-semibold">Research Engineer</span>
                <span className="text-gray-500">
                  {' '}
                  @ Insurance Samadhan (2023–24)
                </span>
              </li>
              <li>
                <span className="font-semibold">Research Engineer</span>
                <span className="text-gray-500">
                  {' '}
                  @ Eigenlytics Data Solutions (2022–22)
                </span>
              </li>
              <li className="italic text-gray-500">
                …plus AI/ML projects across NLP, CV & Generative AI
              </li>
            </ul>

            <a
              href="/resume/Shivpoojan_Saini_Resume.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium rounded-lg shadow transition self-start"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
