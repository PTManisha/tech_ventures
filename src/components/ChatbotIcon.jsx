import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
//import "./ChatbotIcon.css";

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.chatbotContainer}>
      {isOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.chatHeader}>
            <span>Chatbot</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div style={styles.chatBody}>Chatbot content goes here...</div>
        </div>
      )}
      <button style={styles.chatbotIcon} onClick={() => setIsOpen(!isOpen)}>
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

const styles = {
  chatbotContainer: {
    position: "fixed",
    bottom: "20px", // Distance from the bottom
    right: "20px", // Distance from the right
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    zIndex: 1000, // Ensure it stays on top of other elements
  },
  chatbotIcon: {
    backgroundColor: "#578FCA",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background 0.3s ease-in-out",
  },
  chatbotIconHover: {
    backgroundColor: "#0056b3",
  },
  chatWindow: {
    background: "white",
    width: "300px",
    height: "400px",
    position: "absolute",
    bottom: "60px", // Position it above the icon when open
    right: "0",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  chatHeader: {
    background: "#578FCA",
    color: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatBody: {
    flex: "1",
    padding: "10px",
    overflowY: "auto",
  },
};

export default ChatbotIcon;
