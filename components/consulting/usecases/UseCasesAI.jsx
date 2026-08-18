"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { postData } from "@/services/api";

export default function UseCasesAI() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm the COTSLE AI Use Case Consultant. Tell me about your business, problem, or process, and I'll help you discover practical AI opportunities.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const buildConversation = (messagesList) => {
    return messagesList
      .map((message) => {
        const role =
          message.role === "user"
            ? "USER"
            : "AI ASSISTANT";

        return `${role}:\n${message.content}`;
      })
      .join("\n\n");
  };

  const sendMessage = async () => {
    const message = input.trim();

    if (!message || loading) {
      return;
    }

    setError("");

    const userMessage = {
      role: "user",
      content: message,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const prompt = buildConversation(updatedMessages);

      const response = await postData(
        "/consulting/ai/use-cases",
        {
          prompt,
        }
      );

      const answer =
        response?.use_cases ||
        response?.response ||
        response?.message;

      if (!answer) {
        throw new Error(
          "No response was received from the AI."
        );
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: answer,
        },
      ]);
    } catch (err) {
      console.error("Use Case AI Error:", err);

      setError(
        err?.response?.data?.detail ||
          err?.message ||
          "Unable to connect to the AI consultant."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hi! I'm the COTSLE AI Use Case Consultant. Tell me about your business, problem, or process, and I'll help you discover practical AI opportunities.",
      },
    ]);

    setInput("");
    setError("");
  };

  return (
    <div className="flex min-h-[500px] flex-1 flex-col">

      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] text-gray-600">
          AI business consultation
        </span>

        <button
          type="button"
          onClick={clearChat}
          className="text-xs text-gray-500 transition hover:text-blue-400"
        >
          New conversation
        </button>
      </div>

      <div className="min-h-0 flex-1 space-y-5 overflow-y-auto pr-1">

        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`flex ${
              message.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[88%] rounded-2xl px-4 py-3 ${
                message.role === "user"
                  ? "rounded-br-md bg-blue-600 text-white"
                  : "rounded-bl-md border border-white/10 bg-white/[0.05]"
              }`}
            >
              {message.role === "assistant" ? (
                <div className="text-sm leading-6 text-gray-300">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {message.content}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="whitespace-pre-wrap text-sm leading-6 text-white">
                  {message.content}
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.05] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400" />
                <span
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4 shrink-0">
        <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 focus-within:border-blue-500/50">

          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
            onKeyDown={handleKeyDown}
            disabled={loading}
            rows={1}
            placeholder="Describe your business problem..."
            className="max-h-32 min-h-[42px] flex-1 resize-none bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-gray-600"
          />

          <button
            type="button"
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-500 disabled:bg-white/10 disabled:text-gray-600"
          >
            ↑
          </button>
        </div>

        <p className="mt-2 text-center text-[10px] text-gray-600">
          Enter to send · Shift + Enter for a new line
        </p>
      </div>

    </div>
  );
}