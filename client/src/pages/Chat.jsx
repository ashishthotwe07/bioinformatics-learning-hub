import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaSmile, FaCamera } from "react-icons/fa"; // Icons for sending and emoji

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, user: "John", message: "Hey, how are you?", avatar: "https://i.pravatar.cc/150?img=1" },
        { id: 2, user: "Alice", message: "I'm good, how about you?", avatar: "https://i.pravatar.cc/150?img=2" },
        { id: 3, user: "John", message: "Doing great, thanks!", avatar: "https://i.pravatar.cc/150?img=1" },
    ]);

    const [newMessage, setNewMessage] = useState("");
    const [activeChat, setActiveChat] = useState(1);
    const [isTyping, setIsTyping] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    // Handle sending a message
    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([
                ...messages,
                { id: messages.length + 1, user: "You", message: newMessage, avatar: "https://i.pravatar.cc/150?img=3" },
            ]);
            setNewMessage("");
        }
    };

    // Simulate typing status for the other user
    useEffect(() => {
        if (newMessage) {
            setIsTyping(true);
        } else {
            setIsTyping(false);
        }
    }, [newMessage]);

    // Toggle emoji picker
    const toggleEmojiPicker = () => setShowEmojiPicker(!showEmojiPicker);

    // Add emoji to the message input field
    const addEmoji = (emoji) => {
        setNewMessage(newMessage + emoji);
        setShowEmojiPicker(false);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex">
            {/* Left Sidebar */}
            <div className="w-1/4 bg-teal-600 text-white p-4">
                <h1 className="text-2xl font-bold mb-6">Messages</h1>
                <div className="space-y-4">
                    {/* Chat List (Active chats) */}
                    <div
                        className={`cursor-pointer p-3 rounded-lg hover:bg-teal-700 ${activeChat === 1 ? "bg-teal-700" : ""}`}
                        onClick={() => setActiveChat(1)}
                    >
                        <p className="font-semibold">John</p>
                        <p className="text-sm text-gray-200">Hey, how are you?</p>
                    </div>
                    <div
                        className={`cursor-pointer p-3 rounded-lg hover:bg-teal-700 ${activeChat === 2 ? "bg-teal-700" : ""}`}
                        onClick={() => setActiveChat(2)}
                    >
                        <p className="font-semibold">Alice</p>
                        <p className="text-sm text-gray-200">I'm good, how about you?</p>
                    </div>
                </div>
            </div>

            {/* Right Content Area (Active Chat) */}
            <div className="flex-1 p-6">
                {/* Header */}
                <header className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-teal-600">Chat</h1>
                    <button
                        className="bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700"
                        onClick={() => setActiveChat(null)}
                    >
                        Back to Chats
                    </button>
                </header>

                {/* Chat Window */}
                <section className="mt-6 bg-white p-6 rounded-lg shadow-md space-y-4">
                    {activeChat ? (
                        <div className="space-y-2">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.user === "You" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-xs p-3 rounded-lg ${msg.user === "You" ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-800"}`}>
                                        <div className="flex items-center space-x-2">
                                            <img src={msg.avatar} alt={msg.user} className="w-8 h-8 rounded-full" />
                                            <p className="font-semibold">{msg.user}</p>
                                        </div>
                                        <p>{msg.message}</p>
                                        {/* Status indicator */}
                                        {msg.user !== "You" && <p className="text-xs text-gray-400">{isTyping ? "Typing..." : "Delivered"}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-400">Select a chat to start messaging</div>
                    )}
                </section>

                {/* Message Input */}
                {activeChat && (
                    <div className="mt-4 flex items-center bg-white p-4 rounded-lg shadow-md">
                        <input
                            type="text"
                            className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                            placeholder="Type your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                        {/* Emoji Button */}
                        <button onClick={toggleEmojiPicker} className="ml-3 text-teal-600">
                            <FaSmile size={24} />
                        </button>
                        {/* Send Button */}
                        <button
                            onClick={handleSendMessage}
                            className="ml-3 bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700"
                        >
                            <FaPaperPlane size={20} />
                        </button>
                    </div>
                )}

                {/* Emoji Picker */}
                {showEmojiPicker && (
                    <div className="absolute bottom-20 left-4 z-10 bg-white p-2 rounded-lg shadow-md">
                        <span
                            role="img"
                            aria-label="emoji"
                            onClick={() => addEmoji("😊")}
                            className="cursor-pointer text-xl"
                        >
                            😊
                        </span>
                        <span
                            role="img"
                            aria-label="emoji"
                            onClick={() => addEmoji("😂")}
                            className="cursor-pointer text-xl"
                        >
                            😂
                        </span>
                        <span
                            role="img"
                            aria-label="emoji"
                            onClick={() => addEmoji("❤️")}
                            className="cursor-pointer text-xl"
                        >
                            ❤️
                        </span>
                        {/* Add more emojis as needed */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chat;
