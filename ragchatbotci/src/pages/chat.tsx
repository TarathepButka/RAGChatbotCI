"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  // const handleChat = async () => {
  //   if (!userInput) return;
  //   const res = await axios.get(`http://127.0.0.1:8000/chat/${userInput}`);
  //   setResponse(res.data.response);
  // };

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-2xl font-bold mb-4">RAG KKU Chat Bot</h1>
      <input
        type="text"
        placeholder="Say something..."
        className="border p-2 mb-2"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2">Send</button>
      <p className="mt-4">{response}</p>
    </div>
  );
}
