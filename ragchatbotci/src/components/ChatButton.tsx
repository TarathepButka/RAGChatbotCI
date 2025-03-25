import { useState } from "react";
import { MessageCircle } from "lucide-react";

const ChatButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-red-800 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-red-900 transition cursor-pointer"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-[#29292f] shadow-xl rounded-lg p-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-semibold text-gray-100">Live Chat</h3>
            <button onClick={() => setOpen(false)} className="text-gray-200">
              ✖
            </button>
          </div>
          <div className="p-3 text-sm text-gray-200">
            Welcome to RAG! How can we help?
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full border rounded-md p-2 mt-2 text-gray-300"
          />
        </div>
      )}
    </>
  );
};

export default ChatButton;
