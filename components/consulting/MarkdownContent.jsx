"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownContent({ content }) {
  return (
    <div className="text-sm leading-7 text-gray-300">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-4 mt-2 text-2xl font-bold text-white">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mb-3 mt-6 border-b border-white/10 pb-2 text-xl font-bold text-white">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mb-2 mt-5 text-lg font-semibold text-blue-300">
              {children}
            </h3>
          ),

          h4: ({ children }) => (
            <h4 className="mb-2 mt-4 text-base font-semibold text-white">
              {children}
            </h4>
          ),

          p: ({ children }) => (
            <p className="mb-4 leading-7 text-gray-300">
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-300">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="mb-4 ml-6 list-decimal space-y-2 text-gray-300">
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li className="pl-1 leading-7">
              {children}
            </li>
          ),

          strong: ({ children }) => (
            <strong className="font-semibold text-white">
              {children}
            </strong>
          ),

          em: ({ children }) => (
            <em className="text-gray-200">
              {children}
            </em>
          ),

          code: ({ className, children, ...props }) => {
            const isInline =
              !className ||
              !className.includes("language-");

            if (isInline) {
              return (
                <code
                  className="rounded-md bg-blue-500/10 px-1.5 py-0.5 text-xs text-blue-300"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            return (
              <code
                className="block overflow-x-auto rounded-xl bg-black/50 p-4 text-xs leading-6 text-blue-200"
                {...props}
              >
                {children}
              </code>
            );
          },

          pre: ({ children }) => (
            <pre className="mb-4 overflow-x-auto rounded-xl border border-white/10 bg-black/40">
              {children}
            </pre>
          ),

          blockquote: ({ children }) => (
            <blockquote className="mb-4 border-l-2 border-blue-500 bg-blue-500/5 py-2 pl-4 text-gray-400">
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

          hr: () => (
            <hr className="my-6 border-white/10" />
          ),

          table: ({ children }) => (
            <div className="mb-5 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-sm">
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
            <tbody>
              {children}
            </tbody>
          ),

          tr: ({ children }) => (
            <tr className="border-b border-white/5 last:border-0">
              {children}
            </tr>
          ),

          th: ({ children }) => (
            <th className="border-b border-white/10 px-4 py-3 font-semibold text-white">
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="px-4 py-3 text-gray-300">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}