"use client";

import { useState } from "react";

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
      <section className="w-full max-w-screen-2xl mx-auto pt-40 grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* First Card */}
        <div className="bg-gradient-to-r from-yellow-300/60 to-yellow-500/60 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5">
          <div className="p-4">
            <h2 className="text-gray-900">Daily Insights</h2>
            <ul>
              <li className="text-gray-700 text-xl">
                <b>“Today’s Best Market Moves”</b>
              </li>
              <li className="text-gray-700 text-xl">
                📈 Discover the hottest stocks for <b>today&apos;s</b> market!
              </li>
              <li className="text-gray-700 text-xl">
                Get fresh stock updates, expert analysis, and actionable
                insights on the
              </li>
              <li className="text-gray-700 text-xl">
                🕒 <b>best trading opportunities</b>—every single day!
              </li>
              <li className="text-gray-700 text-xl">
                ✅ <b>Don’t miss out—trade with confidence today!</b>
              </li>
            </ul>
          </div>
        </div>
        {/* Second */}
        <div className="bg-gradient-to-r from-yellow-300/60 to-yellow-500/60 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5">
          <div className="p-4">
            <h2 className="text-gray-900">Weekly Strategy 📊</h2>
            <ul>
              <li className="text-gray-700 text-xl">
                <b>“Winning Stocks for the Week Ahead”</b>
              </li>
              <li className="text-gray-700 text-xl">
                Prepare to <b>outsmart the market</b> with a full week’s worth
                of expert stock
              </li>
              <li className="text-gray-700 text-xl">
                🗓️ recommendations and analysis!
              </li>
              <li className="text-gray-700 text-xl">
                Plan your trades, identify upcoming trends, and stay ahead of
                the game
              </li>
              <li className="text-gray-700 text-xl">
                with this week’s <b>winning stock picks</b>!
              </li>
              <li className="text-gray-700 text-xl">
                <b>Make this week your best trading week yet!</b>
              </li>
            </ul>
          </div>
        </div>
        {/* Third */}
        <div className="bg-gradient-to-r from-yellow-300/60 to-yellow-500/60 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-200 mx-4 my-5">
          <div className="p-4">
            <h2 className="text-gray-900">Monthly Market Overview</h2>
            <ul>
              <li className="text-gray-700 text-xl">
                <b>“The Big Picture: Market Outlook & Trends”</b>
              </li>
              <li className="text-gray-700 text-xl">
                Unlock <b>exclusive monthly analysis</b> and discover key market
                shifts, long-term opportunities, and trends to watch.
              </li>
              <li className="text-gray-700 text-xl">
                🔍 Stay updated on emerging trends and make{" "}
                <b>smarter investment decisions</b> with our monthly roundup!
              </li>
              <li className="text-gray-700 text-xl">
                <b>Maximize your gains for the month ahead!</b>
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
