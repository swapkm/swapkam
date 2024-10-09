import { Metadata } from "next";
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact - SwapKam",
  description:
    "Contact SwapKam for stock market insights, buy/sell signals, and financial guidance. We're here to help you achieve trading success.",
};

const Contact = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 pt-20 lg:px-0">
      <h1>Contact US</h1>

      {/* Contact Us Page */}
      <div className="container mx-auto py-10">
        <p className="text-lg mb-8">
          If you have any questions or inquiries, feel free to reach out to us.
          We’re here to help you on your journey to financial freedom.
        </p>

        <div className="flex flex-col space-y-6">
          {/* Email */}
          <div className="flex items-center">
            <FaEnvelope className="text-2xl mr-4 text-blue-500" />
            <a
              href="mailto:mail@swapkam.com"
              className="text-lg font-medium text-blue-600 hover:underline"
            >
              mail@swapkam.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center">
            <FaPhone className="text-2xl mr-4 text-green-500" />
            <a
              href="tel:+917262022182"
              className="text-lg font-medium text-green-600 hover:underline"
            >
              +91 726 202 2182
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-2xl mr-4 text-red-500" />
            <span className="text-lg font-medium">
              123 SwapKam Street, Stock City, Financial Freedom 101
            </span>
          </div>
        </div>

        {/* Optional Contact Form */}
        {/* <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={5}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
