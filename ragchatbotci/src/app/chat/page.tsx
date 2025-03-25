"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSearch = async () => {
    if (!input.trim()) return;
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1b1b20]">
      <Navbar />
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-xl">
          <h1 className="text-white text-2xl font-semibold mb-6 text-center">
            What can I help with?
          </h1>
          <div className="bg-[#29292f] rounded-xl p-4 flex items-center gap-3 mb-4">
            <input
              type="text"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
              placeholder="Ask anything"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="text-gray-400 hover:text-white"
              onClick={handleSearch}
            >
              <Search size={20} />
            </button>
          </div>
          {response && (
            <div className="p-4 bg-[#29292f] rounded-xl text-white">
              {response}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
