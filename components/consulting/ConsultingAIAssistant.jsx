"use client";

import { useState } from "react";

const SERVICES = {
  strategy: {
    title: "AI Strategy Consultant",
    description:
      "Develop a practical AI strategy based on your company's goals, challenges, and current technology.",
    type: "form",
  },

  readiness: {
    title: "AI Readiness Assessment",
    description:
      "Assess your organization's readiness to adopt Artificial Intelligence.",
    type: "form",
  },

  usecases: {
    title: "AI Use Case Generator",
    description:
      "Have a conversation with our AI consultant to discover practical AI use cases for your business.",
    type: "chat",
  },

  roadmap: {
    title: "Transformation Roadmap",
    description:
      "Create a structured digital transformation roadmap for your organization.",
    type: "form",
  },
};

export default function ConsultingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openAssistant = () => {
    setIsOpen(true);
  };

  const closeAssistant = () => {
    setIsOpen(false);
    setSelectedService(null);
  };

  const openService = (service) => {
    setSelectedService(service);
  };

  const goBack = () => {
    setSelectedService(null);
  };

  return (
    <>
      {/* =====================================================
          FLOATING CONSULTING AI BUTTON
      ====================================================== */}

      {!isOpen && (
        <button
          type="button"
          onClick={openAssistant}
          aria-label="Open Consulting AI Assistant"
          className="
            fixed bottom-6 right-6 z-[9999]
            flex items-center gap-3
            rounded-full
            border border-blue-400/30
            bg-black
            px-5 py-3
            text-white
            shadow-[0_0_30px_rgba(37,99,235,0.35)]
            transition-all duration-300
            hover:scale-105
            hover:border-blue-400
            hover:shadow-[0_0_45px_rgba(37,99,235,0.55)]
          "
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-lg">
            ✦
          </span>

          <span className="hidden font-semibold sm:block">
            Consulting AI
          </span>
        </button>
      )}

      {/* =====================================================
          FULL SCREEN AI PANEL
      ====================================================== */}

      <div
        className={`
          fixed inset-0 z-[10000]
          bg-[#05070d]
          text-white
          transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full pointer-events-none"
          }
        `}
      >
        <div className="flex h-full w-full flex-col">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4 sm:px-8">

            <div className="flex items-center gap-3">

              {/* AI ICON */}

              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-blue-600/15 text-xl text-blue-400">
                ✦

                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#05070d] bg-green-500" />
              </div>

              {/* TITLE */}

              <div>
                <h2 className="font-bold">
                  COTSLE Consulting AI
                </h2>

                <p className="text-xs text-gray-500">
                  {selectedService
                    ? SERVICES[selectedService].title
                    : "AI-powered business consulting"}
                </p>
              </div>

            </div>

            {/* CLOSE */}

            <button
              type="button"
              onClick={closeAssistant}
              aria-label="Close Consulting AI"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                text-2xl
                text-gray-400
                transition
                hover:bg-white/10
                hover:text-white
              "
            >
              ×
            </button>

          </div>

          {/* =================================================
              SERVICE SELECTION
          ================================================== */}

          {!selectedService && (
            <div className="flex-1 overflow-y-auto">

              <div className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8 lg:px-10">

                {/* INTRO */}

                <div className="mb-8 max-w-2xl">

                  <p className="mb-2 text-sm font-medium tracking-wide text-blue-400">
                    AI-POWERED CONSULTATION
                  </p>

                  <h3 className="mb-3 text-3xl font-bold sm:text-4xl">
                    How can we help?
                  </h3>

                  <p className="text-sm leading-7 text-gray-400 sm:text-base">
                    Choose a consulting service and let our AI help you
                    understand, plan, and implement AI solutions for your
                    organization.
                  </p>

                </div>

                {/* SERVICES */}

                <div className="grid gap-5 md:grid-cols-2">

                  {/* =================================================
                      STRATEGY
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() => openService("strategy")}
                    className="
                      group
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      p-6
                      text-left
                      transition-all duration-300
                      hover:border-blue-500/50
                      hover:bg-blue-500/[0.07]
                      hover:shadow-[0_0_35px_rgba(37,99,235,0.10)]
                    "
                  >

                    <div className="mb-5 flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-xl text-blue-400">
                        ✦
                      </div>

                      <span className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-blue-400">
                        →
                      </span>

                    </div>

                    <h4 className="mb-2 text-lg font-semibold">
                      AI Strategy Consultant
                    </h4>

                    <p className="text-sm leading-6 text-gray-400">
                      Build a practical AI strategy tailored to your business
                      goals and challenges.
                    </p>

                    <span className="mt-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                      Guided Form
                    </span>

                  </button>

                  {/* =================================================
                      READINESS
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() => openService("readiness")}
                    className="
                      group
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      p-6
                      text-left
                      transition-all duration-300
                      hover:border-blue-500/50
                      hover:bg-blue-500/[0.07]
                      hover:shadow-[0_0_35px_rgba(37,99,235,0.10)]
                    "
                  >

                    <div className="mb-5 flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-xl text-blue-400">
                        ◉
                      </div>

                      <span className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-blue-400">
                        →
                      </span>

                    </div>

                    <h4 className="mb-2 text-lg font-semibold">
                      AI Readiness Assessment
                    </h4>

                    <p className="text-sm leading-6 text-gray-400">
                      Discover how prepared your organization is for AI
                      adoption.
                    </p>

                    <span className="mt-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                      Guided Form
                    </span>

                  </button>

                  {/* =================================================
                      USE CASES
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() => openService("usecases")}
                    className="
                      group
                      rounded-2xl
                      border border-blue-500/20
                      bg-blue-500/[0.04]
                      p-6
                      text-left
                      transition-all duration-300
                      hover:border-blue-500/50
                      hover:bg-blue-500/[0.08]
                      hover:shadow-[0_0_35px_rgba(37,99,235,0.12)]
                    "
                  >

                    <div className="mb-5 flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-xl text-blue-400">
                        💬
                      </div>

                      <span className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-blue-400">
                        →
                      </span>

                    </div>

                    <h4 className="mb-2 text-lg font-semibold">
                      AI Use Case Generator
                    </h4>

                    <p className="text-sm leading-6 text-gray-400">
                      Have a conversation with our AI consultant about
                      practical AI opportunities for your business.
                    </p>

                    <span className="mt-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                      Interactive AI
                    </span>

                  </button>

                  {/* =================================================
                      ROADMAP
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() => openService("roadmap")}
                    className="
                      group
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      p-6
                      text-left
                      transition-all duration-300
                      hover:border-blue-500/50
                      hover:bg-blue-500/[0.07]
                      hover:shadow-[0_0_35px_rgba(37,99,235,0.10)]
                    "
                  >

                    <div className="mb-5 flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-xl text-blue-400">
                        ⚙
                      </div>

                      <span className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-blue-400">
                        →
                      </span>

                    </div>

                    <h4 className="mb-2 text-lg font-semibold">
                      Transformation Roadmap
                    </h4>

                    <p className="text-sm leading-6 text-gray-400">
                      Create a structured roadmap for your organization's
                      digital and AI transformation.
                    </p>

                    <span className="mt-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                      Guided Form
                    </span>

                  </button>

                </div>

              </div>

            </div>
          )}

          {/* =================================================
              SELECTED SERVICE
          ================================================== */}

          {selectedService && (
            <div className="flex min-h-0 flex-1 flex-col">

              {/* SERVICE NAVIGATION */}

              <div className="shrink-0 border-b border-white/5 px-5 py-3 sm:px-8">

                <button
                  type="button"
                  onClick={goBack}
                  className="
                    text-sm
                    text-gray-400
                    transition
                    hover:text-blue-400
                  "
                >
                  ← Back to AI Services
                </button>

              </div>

              {/* SERVICE CONTENT */}

              <div className="flex-1 overflow-y-auto">

                <div className="mx-auto w-full max-w-4xl px-5 py-8 sm:px-8">

                  <div className="mb-7">

                    <h3 className="mb-3 text-2xl font-bold sm:text-3xl">
                      {SERVICES[selectedService].title}
                    </h3>

                    <p className="max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                      {SERVICES[selectedService].description}
                    </p>

                  </div>

                  {/* =================================================
                      TEMPORARY CONTENT
                      We'll replace this with the actual forms/chat.
                  ================================================== */}

                  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-6">

                    {SERVICES[selectedService].type === "chat" ? (
                      <div>

                        <div className="mb-5 flex items-center gap-3">

                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/15 text-blue-400">
                            ✦
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-white">
                              AI Use Case Generator
                            </p>

                            <p className="text-xs text-gray-500">
                              Interactive consultation
                            </p>
                          </div>

                        </div>

                        <p className="text-sm leading-6 text-gray-400">
                          The conversational AI interface will be added here.
                        </p>

                      </div>
                    ) : (
                      <div>

                        <div className="mb-5 flex items-center gap-3">

                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/15 text-blue-400">
                            ✦
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-white">
                              {SERVICES[selectedService].title}
                            </p>

                            <p className="text-xs text-gray-500">
                              Guided consultation
                            </p>
                          </div>

                        </div>

                        <p className="text-sm leading-6 text-gray-400">
                          The guided form for this consulting service will be
                          added here.
                        </p>

                      </div>
                    )}

                  </div>

                </div>

              </div>

            </div>
          )}

        </div>
      </div>
    </>
  );
}