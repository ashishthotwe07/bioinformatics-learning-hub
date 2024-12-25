import React, { useState } from "react";

const CoreConcepts = () => {
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "Basics of Bioinformatics",
      description: "Foundational concepts in bioinformatics.",
      topics: [
        { id: 1, title: "Introduction to Bioinformatics", completed: false },
        { id: 2, title: "Applications of Bioinformatics", completed: false },
        { id: 3, title: "Key Tools & Technologies", completed: false },
      ],
    },
    {
      id: 2,
      title: "Advanced Topics in Bioinformatics",
      description: "Explore advanced algorithms and applications.",
      topics: [
        { id: 1, title: "Sequence Alignment", completed: false },
        { id: 2, title: "Genome Assembly", completed: false },
        { id: 3, title: "Protein Structure Analysis", completed: false },
      ],
    },
  ]);

  const toggleTopicCompletion = (moduleId, topicId) => {
    setModules((prev) =>
      prev.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              topics: module.topics.map((topic) =>
                topic.id === topicId
                  ? { ...topic, completed: !topic.completed }
                  : topic
              ),
            }
          : module
      )
    );
  };

  const markModuleComplete = (moduleId) => {
    setModules((prev) =>
      prev.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              topics: module.topics.map((topic) => ({
                ...topic,
                completed: true,
              })),
            }
          : module
      )
    );
  };

  return (
    <section className="py-16 px-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-indigo-700">
          Core Concepts
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Master bioinformatics through structured modules and topics.
        </p>
      </header>

      {/* Module Cards */}
      <div className="space-y-6">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            toggleTopicCompletion={toggleTopicCompletion}
            markModuleComplete={markModuleComplete}
          />
        ))}
      </div>
    </section>
  );
};

const ModuleCard = ({ module, toggleTopicCompletion, markModuleComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const completedTopics = module.topics.filter((t) => t.completed).length;
  const totalTopics = module.topics.length;
  const progress = Math.round((completedTopics / totalTopics) * 100);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Module Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <h2 className="text-2xl font-bold text-indigo-600">{module.title}</h2>
          <p className="text-gray-500">{module.description}</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600 text-sm">
            {completedTopics}/{totalTopics} Topics
          </span>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              completedTopics === totalTopics
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              markModuleComplete(module.id);
            }}
          >
            {completedTopics === totalTopics ? "Completed" : "Mark All"}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
        <div
          className="h-2 bg-indigo-500 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Topics List */}
      {isExpanded && (
        <div className="mt-6 space-y-4">
          {module.topics.map((topic) => (
            <div
              key={topic.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <span
                className={`text-lg ${
                  topic.completed ? "text-gray-400 line-through" : "text-gray-800"
                }`}
              >
                {topic.title}
              </span>
              <button
                onClick={() => toggleTopicCompletion(module.id, topic.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-transform ${
                  topic.completed
                    ? "bg-gray-300 text-gray-600 hover:scale-105"
                    : "bg-indigo-500 text-white hover:scale-105"
                }`}
              >
                {topic.completed ? "Undo" : "Complete"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoreConcepts;
