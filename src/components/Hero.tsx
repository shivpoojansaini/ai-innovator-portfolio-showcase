import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="text-white/90 text-lg mb-2 block">Hey, I'm Shivpoojan 👋</span>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                <span className="text-purple-200">AI & Generative AI</span>
                <br />
                <span className="text-white">Specialist</span>
              </h1>
            </div>

            <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
              I'm a Senior Research Engineer specializing in AI, Generative AI, NLP, and Computer Vision. 
              I help build innovative AI solutions that transform businesses.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-3"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Experience
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image in Circle */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center overflow-hidden">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                  <img
                    src="https://i.postimg.cc/sXSnSQ19/shivpoojan-saini.jpg"
                    alt="Shivpoojan Saini"
                    className="w-48 h-48 rounded-full object-cover shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
