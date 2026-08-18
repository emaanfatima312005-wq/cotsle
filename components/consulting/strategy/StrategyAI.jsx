"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { postData } from "@/services/api";
import MarkdownContent from "@/components/consulting/MarkdownContent";

export default function StrategyAI() {
  const [form, setForm] = useState({
    company: "",
    industry: "",
    goals: "",
    challenges: "",
    technology: "",
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
      !form.industry.trim() ||
      !form.goals.trim() ||
      !form.challenges.trim() ||
      !form.technology.trim()
    ) {
      setError("Please complete all fields.");
      return;
    }

    setLoading(true);

    try {
      const prompt = `
Company Name:
${form.company}

Industry:
${form.industry}

Business Goals:
${form.goals}

Current Business Challenges:
${form.challenges}

Current Technology / Systems:
${form.technology}
`;

      const response = await postData("/consulting/ai/strategy", {
        prompt,
      });

      setResult(response?.strategy || "");
    } catch (err) {
      console.error("Strategy AI Error:", err);

      setError(
        err?.response?.data?.detail ||
          err?.message ||
          "Unable to generate the AI strategy."
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
            placeholder="e.g. ABC Technologies"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Industry
          </label>

          <input
            name="industry"
            value={form.industry}
            onChange={handleChange}
            placeholder="e.g. Education, Healthcare, Retail"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Business Goals
          </label>

          <textarea
            name="goals"
            value={form.goals}
            onChange={handleChange}
            rows={4}
            placeholder="What does your company want to achieve?"
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Business Challenges
          </label>

          <textarea
            name="challenges"
            value={form.challenges}
            onChange={handleChange}
            rows={4}
            placeholder="Describe the main problems your business faces..."
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Current Technology / Systems
          </label>

          <textarea
            name="technology"
            value={form.technology}
            onChange={handleChange}
            rows={4}
            placeholder="Describe your current software, systems, databases, etc."
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
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
            ? "AI is analyzing..."
            : "Generate AI Strategy"}
        </button>
      </form>

      {result && (
        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-5">
          <h4 className="mb-4 font-semibold text-blue-400">
            AI Strategy Report
          </h4>

          <div className="prose prose-invert max-w-none text-sm leading-6">
            <MarkdownContent content={result} />
          </div>
        </div>
      )}
    </div>
  );
}