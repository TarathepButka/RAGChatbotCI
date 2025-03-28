import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { useRouter } from "next/navigation";
const ChatButton = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  // ฟังก์ชันส่งข้อความ
  const handleSubmit = () => {
    if (message.trim() !== "") {
      router.push(`/chat?message=${encodeURIComponent(message)}`);
      setMessage("");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition cursor-pointer"
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

          <div className="flex items-center border rounded-md p-2 mt-2 bg-gray-600">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="w-full text-white placeholder:text-gray-200 outline-none bg-transparent"
            />
            <button
              onClick={handleSubmit}
              className="ml-2 text-blue-400 hover:text-blue-500"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatButton;
