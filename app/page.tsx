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
      <section className="min-h-screen flex items-center justify-center text-center p-10">
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
