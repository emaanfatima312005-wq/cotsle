"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { postData } from "@/services/api";

const SERVICES = {
  software: {
    title: "Software Advisor",
    description:
      "Tell us about your business and we'll recommend a suitable software solution.",
    endpoint: "/networks/ai/software-advisor",
  },

  estimator: {
    title: "Project Estimator",
    description:
      "Describe your project requirements and get an estimated scope, complexity, and timeline.",
    endpoint: "/networks/ai/project-estimator",
  },

  techstack: {
    title: "Tech Stack Advisor",
    description:
      "Have a conversation with our AI consultant about the right technology stack for your project.",
    endpoint: "/networks/ai/tech-stack-advisor",
  },
};

const MarkdownContent = ({ content }) => {
  return (
    <div className="text-sm leading-6 text-gray-300">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-3 mt-2 text-xl font-bold text-white">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mb-3 mt-4 text-lg font-bold text-white">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mb-2 mt-4 text-base font-semibold text-blue-300">
              {children}
            </h3>
          ),

          h4: ({ children }) => (
            <h4 className="mb-2 mt-3 text-sm font-semibold text-white">
              {children}
            </h4>
          ),

          p: ({ children }) => (
            <p className="mb-3 last:mb-0">{children}</p>
          ),

          ul: ({ children }) => (
            <ul className="mb-3 ml-5 list-disc space-y-1">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="mb-3 ml-5 list-decimal space-y-1">
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li className="pl-1">{children}</li>
          ),

          strong: ({ children }) => (
            <strong className="font-semibold text-white">
              {children}
            </strong>
          ),

          em: ({ children }) => (
            <em className="text-gray-200">{children}</em>
          ),

          code: ({ className, children, ...props }) => {
            const isInline =
              !className || !className.includes("language-");

            if (isInline) {
              return (
                <code
                  className="rounded-md bg-white/10 px-1.5 py-0.5 text-xs text-blue-300"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            return (
              <code
                className="block overflow-x-auto rounded-xl bg-black/40 p-4 text-xs leading-5 text-blue-200"
                {...props}
              >
                {children}
              </code>
            );
          },

          pre: ({ children }) => (
            <pre className="mb-3 overflow-x-auto rounded-xl bg-black/40">
              {children}
            </pre>
          ),

          blockquote: ({ children }) => (
            <blockquote className="mb-3 border-l-2 border-blue-500 pl-4 text-gray-400">
              {children}
            </blockquote>
          ),

          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline underline-offset-2 transition hover:text-blue-300"
            >
              {children}
            </a>
          ),

          table: ({ children }) => (
            <div className="mb-3 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs">
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead className="bg-white/5">
              {children}
            </thead>
          ),

          tbody: ({ children }) => (
            <tbody>{children}</tbody>
          ),

          tr: ({ children }) => (
            <tr className="border-b border-white/5">
              {children}
            </tr>
          ),

          th: ({ children }) => (
            <th className="border-b border-white/10 bg-white/5 px-3 py-2 font-semibold text-white">
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="border-b border-white/5 px-3 py-2 text-gray-300">
              {children}
            </td>
          ),

          hr: () => (
            <hr className="my-4 border-white/10" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default function NetworkAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const [softwareForm, setSoftwareForm] = useState({
    industry: "",
    company_size: "",
    business_problem: "",
  });

  const [estimatorForm, setEstimatorForm] = useState({
    project_type: "",
    features: "",
    expected_users: "",
    timeline: "",
  });

  const [techStackInput, setTechStackInput] = useState("");

  const [techStackMessages, setTechStackMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm the COTSLE Networks Tech Stack Advisor. Tell me about your project and I'll help you choose the right technologies. You can start with your project idea, and I'll ask questions as we go.",
    },
  ]);

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (selectedService === "techstack") {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [techStackMessages, loading]);

  const openService = (service) => {
    setSelectedService(service);
    setResult("");
    setError("");

    if (service === "techstack") {
      setTechStackInput("");

      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }
  };

  const closeAssistant = () => {
    setIsOpen(false);
    setSelectedService(null);
    setResult("");
    setError("");
  };

  const goBack = () => {
    setSelectedService(null);
    setResult("");
    setError("");
  };

  const handleSoftwareChange = (e) => {
    setSoftwareForm({
      ...softwareForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleEstimatorChange = (e) => {
    setEstimatorForm({
      ...estimatorForm,
      [e.target.name]: e.target.value,
    });
  };

  const clearTechStackChat = () => {
    setTechStackMessages([
      {
        role: "assistant",
        content:
          "Hi! I'm the COTSLE Networks Tech Stack Advisor. Tell me about your project and I'll help you choose the right technologies.",
      },
    ]);

    setTechStackInput("");
    setError("");

    setTimeout(() => {
      textareaRef.current?.focus();
    }, 100);
  };

  const buildConversationPrompt = (messages) => {
    return messages
      .map((message) => {
        const role =
          message.role === "user"
            ? "USER"
            : "AI ASSISTANT";

        return `${role}:\n${message.content}`;
      })
      .join("\n\n");
  };

  const sendTechStackMessage = async () => {
    const message = techStackInput.trim();

    if (!message || loading) {
      return;
    }

    setError("");

    const userMessage = {
      role: "user",
      content: message,
    };

    const updatedMessages = [
      ...techStackMessages,
      userMessage,
    ];

    setTechStackMessages(updatedMessages);
    setTechStackInput("");
    setLoading(true);

    try {
      const conversation =
        buildConversationPrompt(updatedMessages);

      const response = await postData(
        SERVICES.techstack.endpoint,
        {
          prompt: conversation,
        }
      );

      const aiResponse =
        response?.technology_stack ||
        response?.response ||
        response?.message;

      if (!aiResponse) {
        throw new Error(
          "No response was received from the AI."
        );
      }

      setTechStackMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: aiResponse,
        },
      ]);
    } catch (err) {
      console.error(
        "Tech Stack Advisor Error:",
        err
      );

      setError(
        err?.response?.data?.detail ||
          err?.message ||
          "Unable to connect to the AI advisor. Please try again."
      );
    } finally {
      setLoading(false);

      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }
  };

  const handleTechStackKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendTechStackMessage();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setResult("");

    try {
      let response;

      if (selectedService === "software") {
        if (
          !softwareForm.industry.trim() ||
          !softwareForm.company_size.trim() ||
          !softwareForm.business_problem.trim()
        ) {
          setError("Please complete all fields.");
          setLoading(false);
          return;
        }

        response = await postData(
          SERVICES.software.endpoint,
          softwareForm
        );

        const recommendation =
          response?.recommendation ||
          response?.response ||
          response?.message;

        if (!recommendation) {
          throw new Error(
            "No recommendation was received from the AI."
          );
        }

        setResult(recommendation);
      }

      if (selectedService === "estimator") {
        if (
          !estimatorForm.project_type.trim() ||
          !estimatorForm.features.trim() ||
          !estimatorForm.expected_users.trim() ||
          !estimatorForm.timeline.trim()
        ) {
          setError("Please complete all fields.");
          setLoading(false);
          return;
        }

        response = await postData(
          SERVICES.estimator.endpoint,
          estimatorForm
        );

        const estimate =
          response?.estimate ||
          response?.response ||
          response?.message;

        if (!estimate) {
          throw new Error(
            "No estimate was received from the AI."
          );
        }

        setResult(estimate);
      }

      if (!response) {
        setError(
          "No response was received from the AI service."
        );
      }
    } catch (err) {
      console.error(
        "Networks AI Error:",
        err
      );

      setError(
        err?.response?.data?.detail ||
          err?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Networks AI Assistant"
          className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 rounded-full border border-blue-400/30 bg-black px-5 py-3 text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_45px_rgba(37,99,235,0.55)]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-lg">
            ✦
          </span>

          <span className="hidden font-semibold sm:block">
            Networks AI
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[9998] flex items-end justify-end bg-black/60 p-3 backdrop-blur-sm sm:p-6">
          <div className="flex h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-3xl border border-blue-500/20 bg-[#05070d] text-white shadow-[0_0_80px_rgba(37,99,235,0.25)]">

            {/* HEADER */}
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">

                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-blue-600/15 text-xl text-blue-400">
                  ✦

                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#05070d] bg-green-500" />
                </div>

                <div>
                  <h2 className="font-bold">
                    COTSLE Networks AI
                  </h2>

                  <p className="text-xs text-gray-400">
                    {selectedService === "techstack"
                      ? "Tech Stack Advisor"
                      : "Intelligent technology solutions"}
                  </p>
                </div>

              </div>

              <button
                type="button"
                onClick={closeAssistant}
                aria-label="Close Networks AI Assistant"
                className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                ×
              </button>
            </div>

            {/* SERVICE SELECTION */}
            {!selectedService && (
              <div className="flex-1 overflow-y-auto p-5 sm:p-6">

                <div className="mb-7">
                  <p className="mb-2 text-sm font-medium text-blue-400">
                    AI-POWERED CONSULTATION
                  </p>

                  <h3 className="mb-2 text-2xl font-bold text-white">
                    How can we help?
                  </h3>

                  <p className="text-sm leading-6 text-gray-400">
                    Choose a service and let our AI help you find the right
                    technology solution.
                  </p>
                </div>

                <div className="grid gap-4">

                  {/* SOFTWARE ADVISOR */}
                  <button
                    type="button"
                    onClick={() =>
                      openService("software")
                    }
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/[0.07]"
                  >
                    <div className="mb-4 flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15 text-xl text-blue-400">
                        ◈
                      </div>

                      <span className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-blue-400">
                        →
                      </span>

                    </div>

                    <h4 className="mb-2 text-lg font-semibold text-white">
                      Software Advisor
                    </h4>

                    <p className="text-sm leading-6 text-gray-400">
                      Have a business problem? Get a suitable software
                      solution recommendation.
                    </p>
                  </button>

                  {/* PROJECT ESTIMATOR */}
                  <button
                    type="button"
                    onClick={() =>
                      openService("estimator")
                    }
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/[0.07]"
                  >
                    <div className="mb-4 flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15 text-xl text-blue-400">
                        ◷
                      </div>

                      <span className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-blue-400">
                        →
                      </span>

                    </div>

                    <h4 className="mb-2 text-lg font-semibold text-white">
                      Project Estimator
                    </h4>

                    <p className="text-sm leading-6 text-gray-400">
                      Have a project idea? Get an estimated scope, complexity,
                      and timeline.
                    </p>
                  </button>

                  {/* TECH STACK */}
                  <button
                    type="button"
                    onClick={() =>
                      openService("techstack")
                    }
                    className="group rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-5 text-left transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/[0.08]"
                  >
                    <div className="mb-4 flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15 text-xl text-blue-400">
                        ⚙
                      </div>

                      <span className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-blue-400">
                        →
                      </span>

                    </div>

                    <h4 className="mb-2 text-lg font-semibold text-white">
                      Tech Stack Advisor
                    </h4>

                    <p className="text-sm leading-6 text-gray-400">
                      Have a conversation with our AI about the best
                      technologies for your project.
                    </p>

                    <div className="mt-3 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                      Interactive AI
                    </div>
                  </button>

                </div>
              </div>
            )}

            {/* TECH STACK CHAT */}
            {selectedService === "techstack" && (
              <div className="flex min-h-0 flex-1 flex-col">

                {/* CHAT TOP BAR */}
                <div className="flex shrink-0 items-center justify-between border-b border-white/5 px-4 py-3">

                  <button
                    type="button"
                    onClick={goBack}
                    className="text-sm text-gray-400 transition hover:text-blue-400"
                  >
                    ← Services
                  </button>

                  <button
                    type="button"
                    onClick={clearTechStackChat}
                    className="text-xs text-gray-400 transition hover:text-blue-400"
                  >
                    New conversation
                  </button>

                </div>

                {/* MESSAGES */}
                <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-4 py-5 sm:px-5">

                  <div className="mx-auto mb-5 max-w-xs text-center text-[11px] text-gray-500">
                    AI-generated technology consultation
                  </div>

                  {techStackMessages.map(
                    (message, index) => (
                      <div
                        key={`${message.role}-${index}`}
                        className={`flex ${
                          message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >

                        <div
                          className={`flex max-w-[88%] items-end gap-2 ${
                            message.role === "user"
                              ? "flex-row-reverse"
                              : "flex-row"
                          }`}
                        >

                          {/* AVATAR */}
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs ${
                              message.role === "user"
                                ? "bg-blue-600 text-white"
                                : "border border-blue-500/20 bg-blue-500/10 text-blue-400"
                            }`}
                          >
                            {message.role === "user"
                              ? "You"
                              : "✦"}
                          </div>

                          {/* MESSAGE BUBBLE */}
                          <div
                            className={`rounded-2xl px-4 py-3 ${
                              message.role === "user"
                                ? "rounded-br-md bg-blue-600 text-white"
                                : "rounded-bl-md border border-white/10 bg-white/[0.05]"
                            }`}
                          >

                            {message.role ===
                            "assistant" ? (
                              <MarkdownContent
                                content={
                                  message.content
                                }
                              />
                            ) : (
                              <div className="whitespace-pre-wrap text-sm leading-6 text-white">
                                {message.content}
                              </div>
                            )}

                          </div>
                        </div>
                      </div>
                    )
                  )}

                  {/* TYPING INDICATOR */}
                  {loading && (
                    <div className="flex justify-start">

                      <div className="flex items-end gap-2">

                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-xs text-blue-400">
                          ✦
                        </div>

                        <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.05] px-4 py-3">

                          <div className="flex items-center gap-1.5">

                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400" />

                            <span
                              className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400"
                              style={{
                                animationDelay:
                                  "150ms",
                              }}
                            />

                            <span
                              className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400"
                              style={{
                                animationDelay:
                                  "300ms",
                              }}
                            />

                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {error}
                    </div>
                  )}

                  <div ref={messagesEndRef} />

                </div>

                {/* CHAT INPUT */}
                <div className="shrink-0 border-t border-white/10 bg-[#05070d] p-3 sm:p-4">

                  <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 transition focus-within:border-blue-500/50">

                    <textarea
                      ref={textareaRef}
                      value={techStackInput}
                      onChange={(e) => {
                        setTechStackInput(
                          e.target.value
                        );
                        setError("");
                      }}
                      onKeyDown={
                        handleTechStackKeyDown
                      }
                      placeholder="Message Tech Stack Advisor..."
                      rows={1}
                      disabled={loading}
                      className="max-h-32 min-h-[42px] flex-1 resize-none bg-transparent px-3 py-2.5 text-sm leading-5 text-white outline-none placeholder:text-gray-500 disabled:opacity-50"
                    />

                    <button
                      type="button"
                      onClick={
                        sendTechStackMessage
                      }
                      disabled={
                        !techStackInput.trim() ||
                        loading
                      }
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-gray-600"
                      aria-label="Send message"
                    >
                      ↑
                    </button>

                  </div>

                  <p className="mt-2 text-center text-[10px] text-gray-500">
                    Enter to send · Shift + Enter for a new line
                  </p>

                </div>
              </div>
            )}

            {/* SOFTWARE + ESTIMATOR */}
            {selectedService &&
              selectedService !== "techstack" && (
                <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">

                  <button
                    type="button"
                    onClick={goBack}
                    className="mb-5 text-sm text-gray-400 transition hover:text-blue-400"
                  >
                    ← Back to AI Services
                  </button>

                  <div className="mb-6">

                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {SERVICES[selectedService].title}
                    </h3>

                    <p className="text-sm leading-6 text-gray-400">
                      {SERVICES[selectedService].description}
                    </p>

                  </div>

                  <form onSubmit={handleSubmit}>

                    {/* SOFTWARE ADVISOR */}
                    {selectedService ===
                      "software" && (
                      <div className="space-y-4">

                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-300">
                            Industry
                          </label>

                          <input
                            type="text"
                            name="industry"
                            value={
                              softwareForm.industry
                            }
                            onChange={
                              handleSoftwareChange
                            }
                            placeholder="e.g. Healthcare, Education, Retail"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500/60"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-300">
                            Company Size
                          </label>

                          <select
                            name="company_size"
                            value={
                              softwareForm.company_size
                            }
                            onChange={
                              handleSoftwareChange
                            }
                            className="w-full rounded-xl border border-white/10 bg-[#080b12] px-4 py-3 text-sm text-white outline-none focus:border-blue-500/60"
                          >
                            <option value="">
                              Select company size
                            </option>

                            <option value="Startup">
                              Startup
                            </option>

                            <option value="Small">
                              Small
                            </option>

                            <option value="Medium">
                              Medium
                            </option>

                            <option value="Large">
                              Large
                            </option>

                            <option value="Enterprise">
                              Enterprise
                            </option>
                          </select>
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-300">
                            Business Problem
                          </label>

                          <textarea
                            name="business_problem"
                            value={
                              softwareForm.business_problem
                            }
                            onChange={
                              handleSoftwareChange
                            }
                            rows={5}
                            placeholder="Describe the business problem you want software to solve..."
                            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-gray-500 focus:border-blue-500/60"
                          />
                        </div>

                      </div>
                    )}

                    {/* PROJECT ESTIMATOR */}
                    {selectedService ===
                      "estimator" && (
                      <div className="space-y-4">

                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-300">
                            Project Type
                          </label>

                          <input
                            type="text"
                            name="project_type"
                            value={
                              estimatorForm.project_type
                            }
                            onChange={
                              handleEstimatorChange
                            }
                            placeholder="e.g. E-commerce website, Mobile app, ERP"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500/60"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-300">
                            Features
                          </label>

                          <textarea
                            name="features"
                            value={
                              estimatorForm.features
                            }
                            onChange={
                              handleEstimatorChange
                            }
                            rows={5}
                            placeholder="List the main features you need..."
                            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-gray-500 focus:border-blue-500/60"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-300">
                            Expected Users
                          </label>

                          <input
                            type="text"
                            name="expected_users"
                            value={
                              estimatorForm.expected_users
                            }
                            onChange={
                              handleEstimatorChange
                            }
                            placeholder="e.g. 500 users, 10,000 users"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500/60"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-300">
                            Preferred Timeline
                          </label>

                          <input
                            type="text"
                            name="timeline"
                            value={
                              estimatorForm.timeline
                            }
                            onChange={
                              handleEstimatorChange
                            }
                            placeholder="e.g. 2 months, 6 months, Flexible"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500/60"
                          />
                        </div>

                      </div>
                    )}

                    {error && (
                      <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading
                        ? "AI is analyzing..."
                        : "Get AI Recommendation"}
                    </button>

                  </form>

                  {/* MARKDOWN RESULT */}
                  {result && (
                    <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-5">

                      <div className="mb-4 flex items-center gap-2">

                        <span className="text-blue-400">
                          ✦
                        </span>

                        <h4 className="font-semibold text-white">
                          AI Recommendation
                        </h4>

                      </div>

                      <MarkdownContent
                        content={result}
                      />

                    </div>
                  )}

                </div>
              )}

          </div>
        </div>
      )}
    </>
  );
}