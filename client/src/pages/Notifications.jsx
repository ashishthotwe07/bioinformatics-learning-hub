import React, { useState, useEffect } from "react";
import { FaEnvelope, FaUserPlus, FaBellSlash } from "react-icons/fa"; // Icons for notifications

const Notifications = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: "message",
            content: "You have a new message from John",
            time: "2024-12-01T14:00:00Z",
            read: false,
        },
        {
            id: 2,
            type: "invite",
            content: "Alice invited you to join the group 'Bioinformatics Study'",
            time: "2024-12-01T13:30:00Z",
            read: false,
        },
        {
            id: 3,
            type: "update",
            content: "New feature added to the app: Group Discussions",
            time: "2024-12-01T12:00:00Z",
            read: true,
        },
    ]);

    const [filteredNotifications, setFilteredNotifications] = useState(notifications);

    // Function to mark a notification as read
    const markAsRead = (id) => {
        setNotifications(
            notifications.map((notification) =>
                notification.id === id ? { ...notification, read: true } : notification
            )
        );
    };

    const formatTimeAgo = (time) => {
        const now = new Date();
        const then = new Date(time);
        const diffInSeconds = Math.floor((now - then) / 1000); // Difference in seconds

        if (diffInSeconds < 60) return `${diffInSeconds} second${diffInSeconds === 1 ? "" : "s"} ago`;

        const diffInMinutes = Math.floor(diffInSeconds / 60); // Difference in minutes
        if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;

        const diffInHours = Math.floor(diffInMinutes / 60); // Difference in hours
        if (diffInHours < 24) return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;

        const diffInDays = Math.floor(diffInHours / 24); // Difference in days
        if (diffInDays < 30) return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;

        const diffInMonths = Math.floor(diffInDays / 30); // Difference in months
        if (diffInMonths < 12) return `${diffInMonths} month${diffInMonths === 1 ? "" : "s"} ago`;

        const diffInYears = Math.floor(diffInMonths / 12); // Difference in years
        return `${diffInYears} year${diffInYears === 1 ? "" : "s"} ago`;
    };

    // Function to clear all notifications
    const clearAllNotifications = () => {
        setNotifications([]);
    };

    // Filtering notifications based on their read status
    useEffect(() => {
        setFilteredNotifications(
            notifications.filter((notification) => !notification.read)
        );
    }, [notifications]);

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-teal-600">Notifications</h1>
                <button
                    onClick={clearAllNotifications}
                    className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
                >
                    <FaBellSlash size={20} />
                </button>
            </div>

            {/* Notification List */}
            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                {filteredNotifications.length > 0 ? (
                    filteredNotifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`flex items-center p-4 rounded-lg ${notification.read ? "bg-gray-200" : "bg-teal-100"
                                }`}
                        >
                            <div className="mr-4">
                                {notification.type === "message" && (
                                    <FaEnvelope size={24} className="text-teal-600" />
                                )}
                                {notification.type === "invite" && (
                                    <FaUserPlus size={24} className="text-teal-600" />
                                )}
                                {notification.type === "update" && (
                                    <FaBellSlash size={24} className="text-teal-600" />
                                )}
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold">{notification.content}</p>
                                <p className="text-sm text-gray-500">{formatTimeAgo(notification.time)}</p>
                            </div>
                            {!notification.read && (
                                <button
                                    onClick={() => markAsRead(notification.id)}
                                    className="text-teal-600 text-sm ml-4"
                                >
                                    Mark as Read
                                </button>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-400">No new notifications</div>
                )}
            </div>
        </div>
    );
};

export default Notifications;
