"use client";
import { useState, useRef, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import Navbarchat from "@/components/Navbarchat";
import { useSearchParams } from "next/navigation";

type SearchInputProps = {
  input: string;
  setInput: (input: string) => void;
  handleSearch: () => void;
  loading: boolean;
  inputRef: React.RefObject<HTMLDivElement | null>;
};

// SearchInput Component
function SearchInput({
  input,
  setInput,
  handleSearch,
  loading,
  inputRef,
}: SearchInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  return (
    <div
      ref={inputRef}
      className="bg-[#29292f] rounded-xl p-4 flex items-center gap-3"
    >
      <textarea
        ref={textareaRef}
        className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 resize-none overflow-hidden 
                   min-h-[40px] max-h-[200px] leading-6"
        placeholder="Ask anything"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSearch();
          }
        }}
        autoFocus
        rows={1}
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

interface Message {
  user: string;
  bot: string;
}

export default function ChatPage() {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      user: "",
      bot: "👋 สวัสดีครับ! ผมเป็นแชทบอท 🤖 ตอบคำถามเกี่ยวกับ ⚙️ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น 🏫 ไม่ทราบว่ามีข้อสงสัยอะไรมั้ยครับ ❓ ให้ผมช่วยตอบได้นะครับ 😊",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const [inputHeight, setInputHeight] = useState<number>(72);
  const searchParams = useSearchParams();
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  useEffect(() => {
    if (inputRef.current) {
      setInputHeight(inputRef.current.clientHeight); // อัปเดตความสูงเมื่อ input เปลี่ยน
    }
  }, [input]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const messageParam = searchParams.get("message");
    if (messageParam) {
      setInput(messageParam);
      setTimeout(() => {
        handleSearch(messageParam);
      }, 100);
    }
  }, [searchParams]);

  // Function to format text with proper line breaks
  const formatMessageText = (text: string) => {
    return text.trim().replace(/\n/g, "<br />");
  };

  const handleSearch = async (customInput?: string): Promise<void> => {
    const textToProcess = customInput || input;
    if (!textToProcess.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { user: textToProcess, bot: "" },
    ];
    setMessages(newMessages);

    setInput("");
    setLoading(true);
    setHasInteracted(true);

    try {
      const res = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: textToProcess }),
      });
      const data: { reply: string } = await res.json();

      const updatedMessages = newMessages.map((msg, index) =>
        index === newMessages.length - 1 ? { ...msg, bot: data.reply } : msg
      );

      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages(
        newMessages.map((msg, index) =>
          index === newMessages.length - 1
            ? { ...msg, bot: "Sorry, an error occurred." }
            : msg
        )
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1b1b20]">
      <div className="fixed top-0 left-0 right-0 z-20">
        <Navbarchat />
      </div>

      {/* Main container */}
      <div className="flex flex-col flex-1 relative pt-20">
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-hidden relative">
            <div
              className="absolute inset-0 overflow-y-auto scrollbar-thin"
              style={{ bottom: `${inputHeight}px` }} // Fixed the backticks
            >
              <div className="space-y-4 max-w-xl mx-auto p-4">
                {messages.map((msg, index) => (
                  <div key={index} className="space-y-2">
                    {msg.user && (
                      <div className="text-right">
                        <div className="inline-block bg-[#3a3a42] p-2 rounded-lg max-w-[80%] text-white whitespace-pre-wrap break-words">
                          {msg.user}
                        </div>
                      </div>
                    )}
                    {(msg.bot ||
                      (loading && index === messages.length - 1)) && (
                      <div className="text-left">
                        <div className="inline-block bg-[#40404a] p-2 rounded-lg max-w-[80%] text-gray-200 whitespace-pre-wrap break-words">
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
        </div>
      </div>

      {/* Fixed input at bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-2 bg-[#1b1b20] border-t border-gray-800 shadow-lg z-10">
        <div className="max-w-xl mx-auto">
          <SearchInput
            input={input}
            setInput={setInput}
            handleSearch={() => handleSearch()}
            loading={loading}
            inputRef={inputRef}
          />
        </div>
      </div>
    </div>
  );
}
