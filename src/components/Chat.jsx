import { useState, useEffect } from "react";
import io from "socket.io-client";
import "./Chat.css";  // Ensure this is correctly linked
import React from 'react';

const socket = io("http://10.21.10.199:5000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("");  // Add a state to store the user's name

  useEffect(() => {
    // Generate a unique user ID for each user
    const newUserId = Math.random().toString(36).substring(2, 10);
    setUserId(newUserId);

    // Set a name for the user (this could be from user input)
    setUserName("User" + newUserId);

    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (messageInput.trim() !== "") {
      const message = {
        text: messageInput,
        timestamp: new Date(),
        senderId: userId,
        senderName: userName,  // Add the sender's name to the message
      };
      socket.emit("message", message);
      setMessageInput("");
    }
  };

  return (
    <div className="container">
      <div className="chat-box">
        
        {/* Header: User Name */}
        <div className="chat-header">
          Chat with {userName}
        </div>
        
        {/* Messages Display */}
        <div className="messages-display">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-container ${msg.senderId === userId ? "sent" : "received"}`}
            >
              {/* Message Box */}
              <div className={`message-box ${msg.senderId === userId ? "sent" : "received"}`}>
                {msg.text}
                <div className="timestamp">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="input-box">
          <div className="input-container" style={{width:"3000px", marginLeft:"130px"}}>
            <input
              type="text"
              className="input-field"
              placeholder="Type your message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <button
              className="send-button"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Chat;
