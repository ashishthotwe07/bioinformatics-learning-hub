import React from "react";
import Hero from "../components/Hero";
import LearningSections from "../components/LearningPaths";
import EmpoweredLearning from "../components/EmpoweredLearning";
import Footer from "../components/Footer";
import CoreConcepts from "../components/CoreConcepts";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}

      <Hero />

      <LearningSections />

      <EmpoweredLearning />


      <Footer />


    </div>
  );
};

export default Home;
