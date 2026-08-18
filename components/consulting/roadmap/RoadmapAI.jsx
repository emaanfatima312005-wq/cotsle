"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { postData } from "@/services/api";

export default function RoadmapAI() {
  const [form, setForm] = useState({
    company: "",
    currentState: "",
    goals: "",
    priorities: "",
    challenges: "",
    timeline: "",
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setResult("");

    if (
      !form.company.trim() ||
      !form.currentState.trim() ||
      !form.goals.trim() ||
      !form.priorities.trim() ||
      !form.challenges.trim() ||
      !form.timeline.trim()
    ) {
      setError("Please complete all fields.");
      return;
    }

    setLoading(true);

    try {
      const prompt = `
Company Name:
${form.company}

Current Business / Technology State:
${form.currentState}

Transformation Goals:
${form.goals}

Business Priorities:
${form.priorities}

Current Challenges:
${form.challenges}

Expected Timeline:
${form.timeline}
`;

      const response = await postData(
        "/consulting/ai/transformation-roadmap",
        {
          prompt,
        }
      );

      setResult(response?.roadmap || "");
    } catch (err) {
      console.error("Roadmap AI Error:", err);

      setError(
        err?.response?.data?.detail ||
          err?.message ||
          "Unable to generate the transformation roadmap."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Company Name
          </label>

          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Current State
          </label>

          <textarea
            name="currentState"
            value={form.currentState}
            onChange={handleChange}
            rows={4}
            placeholder="Describe your current business and technology situation..."
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Transformation Goals
          </label>

          <textarea
            name="goals"
            value={form.goals}
            onChange={handleChange}
            rows={4}
            placeholder="What do you want to achieve?"
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Business Priorities
          </label>

          <textarea
            name="priorities"
            value={form.priorities}
            onChange={handleChange}
            rows={4}
            placeholder="What areas are most important to your organization?"
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Current Challenges
          </label>

          <textarea
            name="challenges"
            value={form.challenges}
            onChange={handleChange}
            rows={4}
            placeholder="What obstacles could affect transformation?"
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Expected Timeline
          </label>

          <input
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            placeholder="e.g. 6 months, 1 year, Flexible"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
          />
        </div>

        {error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
        >
          {loading
            ? "AI is creating roadmap..."
            : "Generate Transformation Roadmap"}
        </button>
      </form>

      {result && (
        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-5">
          <h4 className="mb-4 font-semibold text-blue-400">
            Transformation Roadmap
          </h4>

          <div className="prose prose-invert max-w-none text-sm leading-6">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {result}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}