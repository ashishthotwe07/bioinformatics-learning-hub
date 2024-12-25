const EmpoweredLearning = () => {
    return (
        <section id="empoweredLearning" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6 lg:mb-8">
                    Empowering Your Learning Journey
                </h2>
                <p className="text-base lg:text-lg text-center text-gray-600 mb-8 lg:mb-12">
                    Discover a transformative way to learn bioinformatics and programming
                    with hands-on tools, guided tutorials, quizzes, and measurable progress.
                </p>

                {/* Stats and Experience Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Beautiful Learning Experience */}
                    <div className="mb-8 lg:mb-0">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-blue-900 mb-6">
                            Beautiful Learning, Step by Step
                        </h3>

                        <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm lg:text-base">
                            <li>Interactive learning paths for all levels</li>
                            <li>Real-world tools and datasets</li>
                            <li>Self-paced tutorials with milestones</li>
                            <li>Engaging quizzes and assessments to test your progress</li>
                        </ul>
                    </div>

                    {/* Statistics and Experience */}
                    <div className="flex flex-wrap justify-between gap-6 sm:gap-8 lg:gap-12">
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex-1 w-24 md:min-w-[200px]">
                            <h3 className="text-3xl lg:text-4xl font-bold text-blue-900">12,000+</h3>
                            <p className="text-gray-600">Active Learners</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex-1 w-24 md:min-w-[200px]">
                            <h3 className="text-3xl lg:text-4xl font-bold text-blue-900">8,000+</h3>
                            <p className="text-gray-600">Projects Completed</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex-1 w-24 md:min-w-[200px]">
                            <h3 className="text-3xl lg:text-4xl font-bold text-blue-900">5,000+</h3>
                            <p className="text-gray-600">Successful Outcomes</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex-1 w-24 md:min-w-[200px]">
                            <h3 className="text-3xl lg:text-4xl font-bold text-blue-900">50+</h3>
                            <p className="text-gray-600">Expert Tutorials</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmpoweredLearning;
