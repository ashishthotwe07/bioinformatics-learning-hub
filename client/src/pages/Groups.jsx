import React, { useState } from 'react';

const Groups = () => {
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);

  // Toggle modal functions
  const openCreateGroupModal = () => setShowCreateGroupModal(true);
  const closeCreateGroupModal = () => setShowCreateGroupModal(false);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Page Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Groups</h1>
        <button
          onClick={openCreateGroupModal}
          className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          + Create Group
        </button>
      </header>

      {/* Groups Section */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Group Cards */}
        <GroupCard groupName="UI/UX Designers" members="34" />
        <GroupCard groupName="Web Developers" members="78" />
        <GroupCard groupName="AI Enthusiasts" members="45" />
        <GroupCard groupName="Fitness Freaks" members="20" />
        <GroupCard groupName="Chess Masters" members="12" />
      </main>

      {/* Create Group Modal */}
      {showCreateGroupModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-lg relative">
            <button
              onClick={closeCreateGroupModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6">Create a New Group</h2>
            <form className="space-y-6">
              {/* Group Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Group Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter group name"
                />
              </div>
              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter group description"
                ></textarea>
              </div>
              {/* Privacy */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Privacy</label>
                <select
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
              {/* Actions */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeCreateGroupModal}
                  className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Create Group
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Group Card Component
const GroupCard = ({ groupName, members }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{groupName}</h3>
    <p className="text-gray-600 mb-4">{members} members</p>
    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
      View Group
    </button>
  </div>
);

export default Groups;
