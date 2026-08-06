"use client";

import { useState } from "react";
import { postData } from "@/services/api";

export default function ChatbotPage() {

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);


  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!question.trim()) return;


    const userQuestion = question;

    setQuestion("");
    setLoading(true);


    try {

      const data = await postData(
        "/systems/ai/chat",
        {
          question: userQuestion
        }
      );


      setMessages((prev) => [
        ...prev,
        {
          user: userQuestion,
          ai: data.response
        }
      ]);


    } catch (error) {

      console.error(error);


      setMessages((prev) => [
        ...prev,
        {
          user: userQuestion,
          ai: "Something went wrong. Please try again."
        }
      ]);

    }


    setLoading(false);

  };



  const handleKeyDown = (e) => {

    if (e.key === "Enter" && !e.shiftKey) {

      e.preventDefault();
      handleSubmit(e);

    }

  };



  return (

    <section className="bg-gray-50 min-h-screen py-20">


      <div className="max-w-5xl mx-auto px-6 lg:px-10">


        {/* Heading */}

        <div className="text-center mb-12">

          <p className="text-[#0D6EFD] font-semibold uppercase tracking-widest mb-3">
            AI Powered Support
          </p>


          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            COTSLE
            <span className="text-[#0D6EFD]">
              {" "}AI Assistant
            </span>
          </h1>


          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-8">
            Ask questions about COTSLE courses, training programs,
            technologies, and career guidance.
          </p>

        </div>





        {/* Chat Messages */}

        {messages.length > 0 && (

          <div className="space-y-8 mb-10">


            {messages.map((message,index)=>(

              <div key={index} className="space-y-4">


                {/* User Message */}

                <div className="
                  ml-auto
                  max-w-xl
                  bg-[#0D6EFD]
                  text-white
                  p-5
                  rounded-2xl
                  rounded-br-none
                ">

                  <p className="font-semibold mb-2">
                    You
                  </p>

                  <p>
                    {message.user}
                  </p>

                </div>




                {/* AI Response */}

                <div className="
                  max-w-3xl
                  bg-white
                  border
                  shadow-md
                  p-6
                  rounded-2xl
                  rounded-bl-none
                ">

                  <p className="
                    font-bold
                    text-[#0D6EFD]
                    mb-3
                  ">
                    COTSLE AI
                  </p>


                  <p className="
                    text-gray-700
                    leading-8
                    whitespace-pre-wrap
                  ">
                    {message.ai}
                  </p>


                </div>


              </div>

            ))}


          </div>

        )}






        {/* Chat Input - Always Visible */}

        <div className="
          bg-white
          rounded-3xl
          shadow-xl
          border
          border-gray-200
          p-6
          md:p-8
        ">


          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >


            <label className="
              block
              text-gray-800
              font-semibold
              text-lg
            ">
              Ask COTSLE AI
            </label>



            <textarea

              onKeyDown={handleKeyDown}

              className="
                w-full
                min-h-[120px]
                rounded-2xl
                border
                border-gray-300
                bg-gray-50
                p-5
                text-gray-900
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-[#0D6EFD]
                resize-none
              "

              placeholder="Ask COTSLE AI anything..."

              value={question}

              onChange={(e)=>setQuestion(e.target.value)}

            />



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
                disabled:opacity-50
              "

            >

              {loading ? "Thinking..." : "Ask AI"}

            </button>


          </form>


        </div>



      </div>


    </section>

  );

}