"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { postData } from "@/services/api";

export default function ReadinessAI() {
  const [form, setForm] = useState({
    company: "",
    industry: "",
    data: "",
    technology: "",
    employees: "",
    experience: "",
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
      !form.data.trim() ||
      !form.technology.trim() ||
      !form.employees.trim() ||
      !form.experience.trim()
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

Available Data:
${form.data}

Current Technology Infrastructure:
${form.technology}

Number of Employees:
${form.employees}

Previous AI / Automation Experience:
${form.experience}
`;

      const response = await postData(
        "/consulting/ai/readiness",
        { prompt }
      );

      setResult(response?.readiness || "");
    } catch (err) {
      console.error("Readiness AI Error:", err);

      setError(
        err?.response?.data?.detail ||
          err?.message ||
          "Unable to assess AI readiness."
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
            Industry
          </label>

          <input
            name="industry"
            value={form.industry}
            onChange={handleChange}
            placeholder="e.g. Banking, Education, Healthcare"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Available Data
          </label>

          <textarea
            name="data"
            value={form.data}
            onChange={handleChange}
            rows={4}
            placeholder="What kind of business data does your organization have?"
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Technology Infrastructure
          </label>

          <textarea
            name="technology"
            value={form.technology}
            onChange={handleChange}
            rows={4}
            placeholder="Describe your existing systems and technology."
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Number of Employees
          </label>

          <input
            name="employees"
            value={form.employees}
            onChange={handleChange}
            placeholder="e.g. 50, 500, 5000"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-blue-500/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            AI / Automation Experience
          </label>

          <textarea
            name="experience"
            value={form.experience}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about any existing AI or automation projects."
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
            ? "AI is assessing..."
            : "Assess AI Readiness"}
        </button>
      </form>

      {result && (
        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-5">
          <h4 className="mb-4 font-semibold text-blue-400">
            AI Readiness Report
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