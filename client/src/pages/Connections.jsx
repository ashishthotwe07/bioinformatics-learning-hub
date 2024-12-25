import React from "react";

const Connections = () => {
    const connections = [
        {
            id: 1,
            name: "John Doe",
            avatar: "https://via.placeholder.com/50",
            mutualConnections: 5,
        },
        {
            id: 2,
            name: "Jane Smith",
            avatar: "https://via.placeholder.com/50",
            mutualConnections: 3,
        },
        {
            id: 3,
            name: "Rahul Verma",
            avatar: "https://via.placeholder.com/50",
            mutualConnections: 8,
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            {/* Page Header */}
            <header className="bg-teal-600 text-white p-4 rounded-lg">
                <h1 className="text-2xl font-bold">Your Connections</h1>
                <p className="text-sm text-gray-200 mt-2">Build your network and collaborate!</p>
            </header>

            {/* Connections List */}
            <section className="mt-6 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">People You’re Connected With:</h2>
                <div className="space-y-4">
                    {connections.map((connection) => (
                        <div
                            key={connection.id}
                            className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
                        >
                            <img
                                src={connection.avatar}
                                alt={connection.name}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-800">{connection.name}</h3>
                                <p className="text-sm text-gray-600">
                                    {connection.mutualConnections} mutual connections
                                </p>
                            </div>
                            <button className="text-teal-600 font-semibold hover:underline">
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Connections;
