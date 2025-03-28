"use client";
import { useState, useRef, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import Navbarchat from "@/components/Navbarchat";
import { useSearchParams } from "next/navigation";

// กำหนด Type สำหรับ props ของ SearchInput component
type SearchInputProps = {
  input: string;
  setInput: (input: string) => void;
  handleSearch: () => void;
  loading: boolean;
};

// SearchInput Component (ใน file เดียวกัน)
function SearchInput({
  input,
  setInput,
  handleSearch,
  loading,
}: SearchInputProps) {
  return (
    <div className="bg-[#29292f] rounded-xl p-4 flex items-center gap-3">
      <input
        type="text"
        className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
        placeholder="Ask anything"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        autoFocus
      />
      <button
        className="text-gray-400 hover:text-white"
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? (
          <Loader2 className="animate-spin" size={20} />
        ) : (
          <Search size={20} />
        )}
      </button>
    </div>
  );
}

// กำหนด Type สำหรับ message
interface Message {
  user: string;
  bot: string;
}

export default function ChatPage() {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const searchParams = useSearchParams();

  // คำนวณความสูงของ input bar สำหรับการเพิ่ม padding
  const inputBarHeight: number = 72; // ประมาณความสูงของ input bar (รวม padding)

  // Scroll to bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check for message parameter in URL when component mounts
  useEffect(() => {
    const messageParam = searchParams.get("message");
    if (messageParam) {
      setInput(messageParam);
      // Set timeout to allow the input to be set before triggering search
      setTimeout(() => {
        handleSearch(messageParam);
      }, 100);
    }
  }, [searchParams]); // Only run when searchParams changes

  const handleSearch = async (customInput?: string): Promise<void> => {
    const textToProcess = customInput || input;
    if (!textToProcess.trim()) return;

    // Set hasInteracted to true on first interaction
    if (!hasInteracted) {
      setHasInteracted(true);
    }

    // Add user message to messages
    const newMessages: Message[] = [
      ...messages,
      { user: textToProcess, bot: "" },
    ];
    setMessages(newMessages);

    // Reset input and set loading
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: textToProcess }),
      });
      const data: { reply: string } = await res.json();

      // Update messages with bot response
      const updatedMessages: Message[] = newMessages.map((msg, index) =>
        index === newMessages.length - 1 ? { ...msg, bot: data.reply } : msg
      );

      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error fetching response:", error);
      // Update messages with error
      const updatedMessages: Message[] = newMessages.map((msg, index) =>
        index === newMessages.length - 1
          ? { ...msg, bot: "Sorry, an error occurred." }
          : msg
      );
      setMessages(updatedMessages);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1b1b20]">
      <div
        className={`fixed top-0 left-0 right-0 z-20 ${
          isScrolled ? "border-b-2 border-white" : ""
        }`}
      >
        <Navbarchat />
      </div>

      {/* Main container */}
      <div className="flex flex-col flex-1 relative pt-20">
        {/* Content area */}
        <div className="flex-1 flex flex-col">
          {/* Show welcome header centered vertically and horizontally if no interaction yet */}
          {!hasInteracted ? (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
              <div className="px-6 w-full max-w-xl">
                <h1 className="text-white text-4xl font-semibold mb-8 text-center">
                  What can I help with?
                </h1>
                {/* Search Input at center before first interaction */}
                <div className="mb-2">
                  <SearchInput
                    input={input}
                    setInput={setInput}
                    handleSearch={() => handleSearch()}
                    loading={loading}
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Scrollable Messages Container (only shown after first interaction) */
            <div className="flex-1 overflow-hidden relative">
              <div
                className="absolute inset-0 overflow-y-auto scrollbar-thin"
                style={{
                  bottom: `${inputBarHeight}px`, // สำคัญ: ตั้งค่า bottom เพื่อให้ scrollbar ไม่ทับ input
                }}
              >
                <div
                  className="space-y-4 max-w-xl mx-auto p-4"
                  style={{ paddingBottom: "1rem" }} // ลด padding ด้านล่างลง เนื่องจากเรามี bottom margin แล้ว
                >
                  {messages.map((msg, index) => (
                    <div key={index} className="space-y-2">
                      {msg.user && (
                        <div className="text-right">
                          <div className="inline-block bg-[#3a3a42] p-2 rounded-lg max-w-[80%] text-white">
                            {msg.user}
                          </div>
                        </div>
                      )}
                      {(msg.bot ||
                        (loading && index === messages.length - 1)) && (
                        <div className="text-left">
                          <div className="inline-block bg-[#40404a] p-2 rounded-lg max-w-[80%] text-gray-200">
                            {msg.bot || (
                              <div className="flex items-center">
                                <Loader2
                                  className="animate-spin mr-2"
                                  size={16}
                                />
                                Answering...
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fixed input at bottom after first interaction */}
      {hasInteracted && (
        <div className="fixed bottom-0 left-0 right-0 p-2 bg-[#1b1b20] border-t border-gray-800 shadow-lg z-10">
          <div className="max-w-xl mx-auto">
            <SearchInput
              input={input}
              setInput={setInput}
              handleSearch={() => handleSearch()}
              loading={loading}
            />
          </div>
        </div>
      )}
    </div>
  );
}
