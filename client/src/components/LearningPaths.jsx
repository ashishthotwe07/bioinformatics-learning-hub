import React from "react";
import { FaMicroscope, FaCode, FaProjectDiagram } from "react-icons/fa";

const LearningJourney = () => {
  return (
    <section id="learningJourney" className="py-16 px-8 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center text-indigo-800 mb-8">
        Structured Learning Journey
      </h2>
      <p className="text-lg text-center text-gray-600 mb-12">
        From foundational knowledge to advanced tools, embark on a guided journey in bioinformatics.
      </p>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row justify-center gap-12">

        {/* Step 1: Core Concepts */}
        <div className="text-center">
          <div className="flex justify-center items-center w-20 h-20 mx-auto bg-indigo-500 text-white rounded-full">
            <FaMicroscope size={36} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mt-6">Core Concepts</h3>
          <p className="text-gray-600 mt-2">
            Grasp the fundamentals of bioinformatics with top tools and concepts.
          </p>
          <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg transition-transform transform hover:scale-105">
            Explore
          </button>
        </div>

        {/* Step 2: Programming */}
        <div className="text-center">
          <div className="flex justify-center items-center w-20 h-20 mx-auto bg-indigo-500 text-white rounded-full">
            <FaCode size={36} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mt-6">Programming</h3>
          <p className="text-gray-600 mt-2">
            Learn Python, R, and other languages used in bioinformatics.
          </p>
          <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg transition-transform transform hover:scale-105">
            Start Coding
          </button>
        </div>

        {/* Step 3: Guided Projects */}
        <div className="text-center">
          <div className="flex justify-center items-center w-20 h-20 mx-auto bg-indigo-500 text-white rounded-full">
            <FaProjectDiagram size={36} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mt-6">Guided Projects</h3>
          <p className="text-gray-600 mt-2">
            Apply your knowledge to real-world scenarios with expert guidance.
          </p>
          <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg transition-transform transform hover:scale-105">
            Build Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default LearningJourney;
