"use client";

import { useState } from "react";
import { FaVideo, FaYoutube } from "react-icons/fa";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
    } else {
      const errorMessage = await res.json();
      setError(errorMessage.error || "Failed to subscribe. Please try again.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="flex">
        <div className="flex mx-auto max-w-screen-xl gap-12 px-4 pt-28 text-slate-400 md:px-8">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <h1 className="text-sm font-medium text-blue-500">
              Under construction!
            </h1>

            <h2 className="mx-auto text-4xl font-extrabold text-blue-600 md:text-5xl">
              <span className="bg-gradient-to-r from-[#E114E5] to-blue-500 bg-clip-text text-transparent">
                Premium Paid Courses Now 100% Free,{" "}
              </span>
              You May Watch My{" "}
              <span className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
                YouTube Videos
              </span>
            </h2>
            <div className="m-auto h-16 bg-gradient-to-tr from-[#E114E5] via-yellow-500 to-[#C084FC] blur-[118px]" />
            <p className="mx-auto max-w-2xl font-bold">Quality Video Weekly!</p>
            <div className="items-center justify-center gap-x-3 text-sm flex">
              <a
                href="https://www.youtube.com/@SwapKam?sub_confirmation=1"
                target="_blank"
                className="flex items-center gap-2 rounded-lg border bg-red-600 px-4 py-2 font-medium text-white shadow-lg hover:bg-red-500 hover:shadow-none active:bg-blue-700 overflow-hidden hover:scale-105 transition-transform duration-200"
              >
                <FaYoutube />
                <span>Subscribe</span>
              </a>

              <a
                href="https://www.youtube.com/@SwapKam?sub_confirmation=1"
                target="_blank"
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200"
              >
                <FaVideo />
                <span>Watch Videos</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Cards */}
      <section className="w-full max-w-screen-2xl mx-auto pt-40 grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* First Card */}
        <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5">
          <div className="p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Daily Insights
            </h2>
            <ul>
              <li className="bg-gradient-to-r from-yellow-600 to-[#E114E5] bg-clip-text text-transparent text-xl">
                <b>“Today’s Best Market Moves”</b>
              </li>
              <li className="text-gray-700 text-xl">
                📈 Discover the hottest stocks for
                <span className="bg-gradient-to-r from-yellow-600 to-[#E114E5] bg-clip-text text-transparent">
                  <b> today&apos;s </b>
                </span>
                market!
              </li>
              <li className="text-gray-700 text-xl">
                Get fresh stock updates, expert analysis, and actionable
                insights on the 🕒
                <span className="bg-gradient-to-r from-yellow-600 to-[#E114E5] bg-clip-text text-transparent">
                  <b> best trading opportunities</b>
                </span>
                —every single day!
              </li>

              <li className="text-gray-700 text-xl">
                ✅
                <span className="bg-gradient-to-r from-yellow-600 to-[#E114E5] bg-clip-text text-transparent">
                  <b> Don’t miss out—trade with confidence today!</b>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Second */}
        <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5">
          <div className="p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Weekly Strategy 📊
            </h2>
            <ul>
              <li className="text-gray-700 text-xl">
                <span className="bg-gradient-to-r from-yellow-600 to-[#E114E5] bg-clip-text text-transparent">
                  <b>“Winning Stocks for the Week Ahead”</b>
                </span>
              </li>
              <li className="text-gray-700 text-xl">
                🗓️ Prepare to
                <span className="bg-gradient-to-r from-yellow-600 to-[#E114E5] bg-clip-text text-transparent">
                  <b> outsmart the market </b>
                </span>
                with a full week’s worth of expert stock recommendations and
                analysis!
              </li>

              <li className="text-gray-700 text-xl">
                Plan your trades, identify upcoming trends, and stay ahead of
                the game with this week’s
                <span className="bg-gradient-to-r from-yellow-600 to-[#E114E5] bg-clip-text text-transparent">
                  <b> winning stock picks</b>!
                </span>
              </li>

              <li className="text-gray-700 text-xl">
                <span className="bg-gradient-to-r from-yellow-600 to-[#E114E5] bg-clip-text text-transparent">
                  <b>Make this week your best trading week yet!</b>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Third */}
        <div className="bg-gradient-to-b from-purple-100 rounded-lg bg-pink-100 shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5">
          <div className="p-4">
            <h2 className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
              Monthly Market Overview
            </h2>
            <ul>
              <li className="text-gray-700 text-xl">
                <span className="bg-gradient-to-r from-yellow-600 to-[#E114E5] bg-clip-text text-transparent">
                  <b>“The Big Picture: Market Outlook & Trends”</b>
                </span>
              </li>
              <li className="text-gray-700 text-xl">
                Unlock
                <span className="bg-gradient-to-r from-yellow-600 to-[#E114E5] bg-clip-text text-transparent">
                  <b> exclusive monthly analysis </b>
                </span>
                and discover key market shifts, long-term opportunities, and
                trends to watch.
              </li>
              <li className="text-gray-700 text-xl">
                🔍 Stay updated on emerging trends and make
                <span className="bg-gradient-to-r from-yellow-600 to-[#E114E5] bg-clip-text text-transparent">
                  <b> smarter investment decisions </b>
                </span>
                with our monthly roundup!
              </li>
              <li className="text-gray-700 text-xl">
                <span className="bg-gradient-to-r from-yellow-600 to-[#E114E5] bg-clip-text text-transparent">
                  <b>Maximize your gains for the month ahead!</b>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="mt-52 flex items-center justify-center text-center p-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">Master the Stock Market</h1>
          <p className="text-lg mb-8">
            Join our community of savvy traders and get real-time insights on
            stock trends, tips, and strategies.
          </p>

          {submitted ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Thank you for subscribing!
              </h2>
              <p className="text-lg">
                You&apos;ll start receiving updates soon.
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-row justify-center items-center"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 rounded-l-md text-white bg-gray-900"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className={`p-3 rounded-r-md font-bold text-gray-900 ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-yellow-500 hover:bg-yellow-400"
                  } transition duration-200`}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Get Started"}
                </button>
              </form>
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </>
          )}
        </div>
      </section>
    </>
  );
}
