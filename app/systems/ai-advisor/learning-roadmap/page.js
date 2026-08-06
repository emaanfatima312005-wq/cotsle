"use client";

import { useState } from "react";
import { postData } from "@/services/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function LearningRoadmapPage() {
  const [careerGoal, setCareerGoal] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");
  const [duration, setDuration] = useState("");

  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const data = await postData(
        "/systems/ai/learning-roadmap",
        {
          career_goal: careerGoal,
          current_level: currentLevel,
          duration: duration,
        }
      );

      setRoadmap(data.roadmap);
    } catch (error) {
      console.error(error);
      setRoadmap("Something went wrong.");
    }

    setLoading(false);
  };

  return (
  <section className="bg-gray-50 min-h-screen py-20">

    <div className="max-w-5xl mx-auto px-6 lg:px-10">


      {/* Heading */}

      <div className="text-center mb-12">

        <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
          AI Powered Learning
        </p>


        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">

          AI Learning
          <span className="text-[#0D6EFD]">
            {" "}Roadmap
          </span>

        </h1>


        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-8">

          Generate a personalized learning path based on your career goals,
          current skills, and available learning time.

        </p>


      </div>





      {/* Form Card */}

      <div className="
        bg-white
        rounded-3xl
        shadow-xl
        border
        border-gray-200
        p-8
        md:p-10
      ">


        <form 
          onSubmit={handleSubmit}
          className="space-y-6"
        >


          <div>

            <label className="
              block
              text-gray-800
              font-semibold
              mb-2
            ">
              Career Goal
            </label>


            <input

              className="
                w-full
                rounded-xl
                border
                border-gray-300
                bg-gray-50
                p-4
                text-gray-900
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-[#0D6EFD]
              "

              placeholder="Example: AI Engineer"

              value={careerGoal}

              onChange={(e)=>setCareerGoal(e.target.value)}

              required

            />

          </div>





          <div>

            <label className="
              block
              text-gray-800
              font-semibold
              mb-2
            ">
              Current Skill Level
            </label>


            <select

              className="
                w-full
                rounded-xl
                border
                border-gray-300
                bg-gray-50
                p-4
                text-gray-900
                focus:outline-none
                focus:ring-2
                focus:ring-[#0D6EFD]
              "

              value={currentLevel}

              onChange={(e)=>setCurrentLevel(e.target.value)}

              required

            >

              <option value="">
                Select Current Level
              </option>

              <option value="Beginner">
                Beginner
              </option>

              <option value="Intermediate">
                Intermediate
              </option>

              <option value="Advanced">
                Advanced
              </option>

            </select>


          </div>






          <div>


            <label className="
              block
              text-gray-800
              font-semibold
              mb-2
            ">
              Learning Duration
            </label>


            <input

              className="
                w-full
                rounded-xl
                border
                border-gray-300
                bg-gray-50
                p-4
                text-gray-900
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-[#0D6EFD]
              "

              placeholder="Example: 6 Months"

              value={duration}

              onChange={(e)=>setDuration(e.target.value)}

              required

            />


          </div>






          <button

            type="submit"

            disabled={loading}

            className="
              bg-[#0D6EFD]
              hover:bg-blue-700
              text-white
              font-semibold
              px-10
              py-4
              rounded-xl
              transition-all
              duration-300
              hover:scale-105
              disabled:opacity-50
            "

          >

            {loading ? "Generating..." : "Generate Roadmap"}

          </button>



        </form>


      </div>







      {/* Roadmap Result */}


      {roadmap && (

        <div className="
          mt-10
          bg-white
          rounded-3xl
          border
          border-gray-200
          shadow-xl
          p-8
          md:p-10
        ">


          <div className="
            flex
            items-center
            gap-3
            mb-6
          ">


            <div className="
              w-10
              h-10
              rounded-full
              bg-[#0D6EFD]
              flex
              items-center
              justify-center
              text-white
              font-bold
            ">
              AI
            </div>


            <h2 className="
              text-2xl
              font-bold
              text-gray-900
            ">
              Your Learning Roadmap
            </h2>


          </div>
          <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={{
    h2: ({node, ...props}) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">
        {props.children}
      </h2>
    ),

    h3: ({node, ...props}) => (
      <h3 className="text-2xl font-semibold text-[#0D6EFD] mt-8 mb-4">
        {props.children}
      </h3>
    ),

    strong: ({node, ...props}) => (
      <strong className="font-bold text-gray-900">
        {props.children}
      </strong>
    ),

    p: ({node, ...props}) => (
      <p className="text-gray-700 leading-8 mb-4">
        {props.children}
      </p>
    ),

    li: ({node, ...props}) => (
      <li className="text-gray-700 ml-6 list-disc mb-2">
        {props.children}
      </li>
    )
  }}
>
  {roadmap}
</ReactMarkdown>


        </div>

      )}



    </div>

  </section>
);
}