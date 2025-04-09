import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

// Mock responses for the chatbot
const RESPONSES = {
  default: "I'm not sure how to respond to that. Try asking about my background, projects, or interests!",
  greeting: "Hello! I'm happy to tell you about my background, projects, or interests. What would you like to know?",
  background: "I'm a full-stack developer with experience in React, Node.js, and cloud technologies. I love building user-friendly applications and solving complex problems.",
  projects: "I've worked on various projects including e-commerce platforms, social media applications, and data visualization tools. Check out the Projects page for more details!",
  interests: "I love hiking, photography, and learning new technologies. In my free time, I enjoy contributing to open-source projects.",
  hobbies: "I enjoy practicing traditional Japanese calligraphy, hiking in nature, and experimenting with new programming languages. Want to see something cool? 🌸",
};

// Function to get response based on input
const getResponse = (input) => {
  const lowercaseInput = input.toLowerCase();
  if (lowercaseInput.includes('hi') || lowercaseInput.includes('hello')) {
    return RESPONSES.greeting;
  } else if (lowercaseInput.includes('background') || lowercaseInput.includes('experience')) {
    return RESPONSES.background;
  } else if (lowercaseInput.includes('project')) {
    return RESPONSES.projects;
  } else if (lowercaseInput.includes('interest')) {
    return RESPONSES.interests;
  } else if (lowercaseInput.includes('hobbies') || lowercaseInput.includes('hobby')) {
    return RESPONSES.hobbies;
  }
  return RESPONSES.default;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your AI assistant. Ask me anything about the portfolio owner!", type: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [showSakura, setShowSakura] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, type: 'user' };
    const botResponse = { text: getResponse(input), type: 'bot' };
    
    setMessages([...messages, userMessage, botResponse]);
    setInput('');

    // Check if the message triggers the sakura animation
    if (input.toLowerCase().includes('hobbies') || input.toLowerCase().includes('hobby')) {
      setShowSakura(true);
      setTimeout(() => setShowSakura(false), 10000); // Remove sakura after 10 seconds
    }
  };

  return (
    <>
      {/* Sakura Animation */}
      {showSakura && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-sakura"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 5}s`,
              }}
            >
              🌸
            </div>
          ))}
        </div>
      )}

      {/* Chatbot UI */}
      <div className="fixed bottom-4 right-4 z-50">
        {isOpen ? (
          <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
              <h3 className="font-semibold">Chat Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="p-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <MessageCircle size={24} />
          </button>
        )}
      </div>
    </>
  );
}