import React, { useState, useEffect } from 'react';
import './chatbot.css';
import ReactMarkdown from 'react-markdown';
import Fuse from 'fuse.js';
import { GoogleGenerativeAI } from '@google/generative-ai';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Predefined responses object
  const predefinedResponses = [
    { question: "Has the return request been authorized?", response: "Yes, your return request has been authorized. You can proceed with the pickup." },
    { question: "When is my pickup scheduled?", response: "Your return pickup is scheduled for tomorrow between 9:00 AM and 12:00 PM." },
    { question: "What is the status of my return pickup?", response: "The pickup is confirmed and will be done on the scheduled date. The driver will contact you shortly." },
    { question: "How do I prepare my return item for pickup?", response: "Please ensure the item is securely packaged with the return label visible on the box. The driver will collect the item from your doorstep." },
    { question: "Can I reschedule my return pickup?", response: "Yes, you can reschedule your return pickup. Please provide a new date and time that works for you." },
    { question: "How many items have been returned this week?", response: "This week, a total of 250 items have been returned." },
    { question: "What is the total value of returned items for this month?", response: "The total value of returned items for this month is $5,120." },
    { question: "What are the top 5 most frequently returned items?", response: "The top 5 most frequently returned items are: \n 1. Bluetooth Headphones \n 2. Smart Watches \n 3. Wireless Keyboards \n 4. LED TV \n 5. Mobile Phone Accessories." },
    { question: "What is the current status of all return requests?", response: "Currently, 80% of the return requests have been processed, and 20% are still pending pickup." },
    { question: "What is the average cost per return?", response: "The average cost per return is approximately $15, including shipping and processing fees." },
    { question: "What is the current load in the warehouse?", response: "The warehouse is currently handling 1,200 returned items, which is 60% of its current capacity." },
    { question: "Is there enough space in the warehouse for incoming returns?", response: "Yes, there is enough space available. The warehouse can accommodate up to 2,000 additional returned items." },
    { question: "How much capacity is available for new returns?", response: "There is currently 40% of the warehouse capacity available for new returns." },
    { question: "How many returns were processed in the last 24 hours?", response: "In the last 24 hours, 500 returns have been processed." },
    { question: "Can you give me an update on the current inventory of returned items?", response: "The current inventory of returned items is 1,200 units, with the highest number in mobile accessories and electronics." }
  ];

  // Set up fuzzy search options
  const fuse = new Fuse(predefinedResponses, {
    keys: ['question'],
    threshold: 0.3, // Adjust this to be more or less strict
  });

  useEffect(() => {
    // Initial setup
  }, []);

  const handleMessageSend = async () => {
    if (input.trim() !== '') {
      const newMessage = { text: input, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInput('');

      // Search for the best match
      const result = fuse.search(input);
      if (result.length > 0) {
        const response = result[0].item.response;
        const botMessage = { text: response, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } else {
        // If no predefined response matches, fallback to AI
        const generationConfig = {
          stopSequences: ["red"],
          maxOutputTokens: 200,
          temperature: 0.9,
          topP: 0.1,
          topK: 16,
        };

        // Send user's message to the bot and get response
        try {
          const genAI = new GoogleGenerativeAI("AIzaSyD56wQdgqYAK3cVjNDiiOaPBJn-YFIXJbA");
          const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig });
          const chat = model.startChat();
          const result = await chat.sendMessage(input);
          const response = await result.response;
          const text = response.text();
          const botMessage = { text: text, sender: 'bot' };
          setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (error) {
          console.error("Error sending message to bot:", error);
        }
      }
    }
  };

  return (
    <div className="chat-container"  style={{height:"600px", width:"1000px"}}>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.sender === 'bot' ? (
              <ReactMarkdown>{message.text}</ReactMarkdown>
            ) : (
              message.text
            )}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleMessageSend();
            }
          }}
        />
        <button onClick={handleMessageSend} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
