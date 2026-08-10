"use client";

import { useState } from "react";
import { postData } from "@/services/api";

const SERVICES = {
  software: {
    title: "Software Advisor",
    description:
      "Tell us about your business and we'll recommend a suitable software solution.",
    endpoint: "/networks/ai/software-advisor",
    responseKey: "recommendation",
  },

  estimator: {
    title: "Project Estimator",
    description:
      "Describe your project requirements and get an estimated scope, complexity, and timeline.",
    endpoint: "/networks/ai/project-estimator",
    responseKey: "estimate",
  },

  techstack: {
    title: "Tech Stack Advisor",
    description:
      "Describe your project and get a professionally recommended technology stack.",
    endpoint: "/networks/ai/tech-stack-advisor",
    responseKey: "technology_stack",
  },
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

  const [techStackPrompt, setTechStackPrompt] = useState("");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const openService = (service) => {
    setSelectedService(service);
    setResult("");
    setError("");
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

        setResult(response?.recommendation || "");
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

        setResult(response?.estimate || "");
      }

      if (selectedService === "techstack") {
        if (!techStackPrompt.trim()) {
          setError("Please describe your project first.");
          setLoading(false);
          return;
        }

        response = await postData(
          SERVICES.techstack.endpoint,
          {
            prompt: techStackPrompt,
          }
        );

        setResult(response?.technology_stack || "");
      }

      if (!response) {
        setError("No response was received from the AI service.");
      }
    } catch (err) {
      console.error("Networks AI Error:", err);

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
          className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 rounded-full border border-blue-400/30 bg-black px-5 py-3 text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(37,99,235,0.55)]"
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
        <div className="fixed inset-0 z-[9998] flex items-end justify-end bg-black/50 p-4 backdrop-blur-sm sm:p-6">
          <div className="relative max-h-[90vh] w-full max-w-xl overflow-hidden rounded-3xl border border-blue-500/20 bg-[#05070d] text-white shadow-[0_0_80px_rgba(37,99,235,0.25)]">

            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 text-lg text-blue-400">
                  ✦
                </span>

                <div>
                  <h2 className="text-lg font-bold">
                    COTSLE Networks AI
                  </h2>

                  <p className="text-xs text-gray-400">
                    Intelligent solutions for your business
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeAssistant}
                className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="max-h-[calc(90vh-80px)] overflow-y-auto p-5 sm:p-6">

              {!selectedService ? (
                <>
                  <div className="mb-6">
                    <h3 className="mb-2 text-2xl font-bold">
                      How can we help?
                    </h3>

                    <p className="text-sm leading-6 text-gray-400">
                      Choose an AI service and tell us what you need.
                      Our AI will help you find the right direction.
                    </p>
                  </div>

                  <div className="grid gap-4">

                    <button
                      type="button"
                      onClick={() => openService("software")}
                      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/[0.07]"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15 text-xl text-blue-400">
                          ◈
                        </div>

                        <span className="text-gray-600 transition group-hover:text-blue-400">
                          →
                        </span>
                      </div>

                      <h4 className="mb-2 text-lg font-semibold">
                        Software Advisor
                      </h4>

                      <p className="text-sm leading-6 text-gray-400">
                        Have a business problem? Get a suitable software
                        solution recommendation.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => openService("estimator")}
                      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/[0.07]"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15 text-xl text-blue-400">
                          ◷
                        </div>

                        <span className="text-gray-600 transition group-hover:text-blue-400">
                          →
                        </span>
                      </div>

                      <h4 className="mb-2 text-lg font-semibold">
                        Project Estimator
                      </h4>

                      <p className="text-sm leading-6 text-gray-400">
                        Have a project idea? Get an estimated project scope
                        and timeline.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => openService("techstack")}
                      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/[0.07]"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15 text-xl text-blue-400">
                          ⚙
                        </div>

                        <span className="text-gray-600 transition group-hover:text-blue-400">
                          →
                        </span>
                      </div>

                      <h4 className="mb-2 text-lg font-semibold">
                        Tech Stack Advisor
                      </h4>

                      <p className="text-sm leading-6 text-gray-400">
                        Describe your project and discover an appropriate
                        technology stack.
                      </p>
                    </button>

                  </div>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={goBack}
                    className="mb-5 text-sm text-gray-400 transition hover:text-blue-400"
                  >
                    ← Back to AI Services
                  </button>

                  <div className="mb-6">
                    <h3 className="mb-2 text-2xl font-bold">
                      {SERVICES[selectedService].title}
                    </h3>

                    <p className="text-sm leading-6 text-gray-400">
                      {SERVICES[selectedService].description}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>

                    {selectedService === "software" && (
                      <div className="space-y-4">

                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-300">
                            Industry
                          </label>

                          <input
                            type="text"
                            name="industry"
                            value={softwareForm.industry}
                            onChange={handleSoftwareChange}
                            placeholder="e.g. Healthcare, Education, Retail"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500/60"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-300">
                            Company Size
                          </label>

                          <select
                            name="company_size"
                            value={softwareForm.company_size}
                            onChange={handleSoftwareChange}
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
                            value={softwareForm.business_problem}
                            onChange={handleSoftwareChange}
                            rows={5}
                            placeholder="Describe the business problem you want software to solve..."
                            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
                          />
                        </div>

                      </div>
                    )}

                    {selectedService === "estimator" && (
                      <div className="space-y-4">

                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-300">
                            Project Type
                          </label>

                          <input
                            type="text"
                            name="project_type"
                            value={estimatorForm.project_type}
                            onChange={handleEstimatorChange}
                            placeholder="e.g. E-commerce website, Mobile app, ERP"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-300">
                            Features
                          </label>

                          <textarea
                            name="features"
                            value={estimatorForm.features}
                            onChange={handleEstimatorChange}
                            rows={5}
                            placeholder="List the main features you need..."
                            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-300">
                            Expected Users
                          </label>

                          <input
                            type="text"
                            name="expected_users"
                            value={estimatorForm.expected_users}
                            onChange={handleEstimatorChange}
                            placeholder="e.g. 500 users, 10,000 users"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-300">
                            Preferred Timeline
                          </label>

                          <input
                            type="text"
                            name="timeline"
                            value={estimatorForm.timeline}
                            onChange={handleEstimatorChange}
                            placeholder="e.g. 2 months, 6 months, Flexible"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
                          />
                        </div>

                      </div>
                    )}

                    {selectedService === "techstack" && (
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-300">
                          Project Description
                        </label>

                        <textarea
                          value={techStackPrompt}
                          onChange={(e) => {
                            setTechStackPrompt(e.target.value);
                            setError("");
                          }}
                          rows={9}
                          placeholder="Describe your project, its users, major features, platforms, integrations, expected scale, and any special requirements..."
                          className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
                        />
                      </div>
                    )}

                    {error && (
                      <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          AI is analyzing...
                        </>
                      ) : (
                        "Get AI Recommendation"
                      )}
                    </button>
                  </form>

                  {result && (
                    <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-5">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="text-blue-400">
                          ✦
                        </span>

                        <h4 className="font-semibold">
                          AI Recommendation
                        </h4>
                      </div>

                      <div className="whitespace-pre-wrap text-sm leading-7 text-gray-300">
                        {result}
                      </div>
                    </div>
                  )}

                </>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}