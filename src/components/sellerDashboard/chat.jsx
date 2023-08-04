import React, { useState } from "react";

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: "seller" },
    ]);

    // Simulating a reply from the customer after a delay
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `Thank you for your message!`, sender: "customer" },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full md:h-[90vh] text-[#1f1e1f] bg-gray-200">
      <div className="flex-1 flex flex-col md:flex-row-reverse md:overflow-hidden">
        <div className="w-full md:w-1/4 md:max-h-full bg-white border-b md:border-b-0 md:border-r border-gray-300 md:overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Customers</h2>
            <ul className="flex flex-row md:flex-col">
              <li
                className={`cursor-pointer p-2 border-t md:border-t-0 md:border-l-4 ${
                  selectedCustomer === "customer1"
                    ? "border-slate-400 bg-bule-50"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedCustomer("customer2")}
              >
                Customer 1
              </li>
              <li
                className={`cursor-pointer p-2 border-t md:border-t-0 md:border-l-4 ${
                  selectedCustomer === "customer1"
                    ? "border-slate-400 bg-bule-50"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedCustomer("customer1")}
              >
                Customer 1
              </li>
              <li
                className={`cursor-pointer p-2 border-t md:border-t-0 md:border-l-4 ${
                  selectedCustomer === "customer1"
                    ? "border-slate-400 bg-bule-50"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedCustomer("customer1")}
              >
                Customer 1
              </li>
              <li
                className={`cursor-pointer p-2 border-t md:border-t-0 md:border-l-4 ${
                  selectedCustomer === "customer1"
                    ? "border-slate-400 bg-bule-50"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedCustomer("customer1")}
              >
                Customer 1
              </li>
              {/* Add more customers here */}
            </ul>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-4">
          <div className="flex-1 p-4 bg-white rounded border border-gray-300 overflow-y-auto">
            {/* Chat messages */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded ${
                  msg.sender === "seller"
                    ? "bg-slate-400 text-white self-end"
                    : "bg-gray-300 self-start"
                }`}
              >
                {msg.sender === "seller" && (
                  <div className="flex items-center mb-2">
                    <img
                      src="/seller-icon.png" // Replace with seller icon image URL
                      alt="Seller Icon"
                      className="w-6 h-6 mr-2"
                    />
                    <span>Seller</span>
                  </div>
                )}
                {msg.text}
                {msg.sender === "customer" && (
                  <div className="text-sm text-right mt-1">Customer</div>
                )}
              </div>
            ))}
          </div>
          <div className="flex mt-4">
            <input
              type="text"
              className="flex-1 p-2 rounded-l border border-gray-300 focus:outline-none focus:border-slate-400"
              placeholder="Type your message..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <button
              className="bg-slate-400 text-white p-2 rounded-r"
              onClick={() => {
                const messageInput =
                  document.querySelector('input[type="text"]');
                if (messageInput) {
                  handleSendMessage(messageInput.value);
                  messageInput.value = "";
                }
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
