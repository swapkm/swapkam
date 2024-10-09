import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About - SwapKam",
  description:
    "Learn how SwapKam empowers traders with expert stock market insights, daily buy/sell signals, and a comprehensive Price Action course. Achieve financial freedom with us.",
};

const About = () => {
  return (
    <div className="w-full max-w-screen-lg pt-20 mx-auto px-4 lg:px-0">
      <h1>About SwapKam</h1>
      <p>
        Welcome to SwapKam, your trusted partner in mastering the stock market
        and achieving financial freedom.
      </p>
      <p>
        At SwapKam, we provide actionable insights and strategies to help both
        beginners and experienced traders navigate the complexities of the stock
        market. With a focus on <b>Price Action Trading</b>, we aim to simplify
        the process of buying and selling stocks, offering you clear and
        reliable updates on market movements.
      </p>
      <p>
        Our mission is to empower individuals to take control of their financial
        future through education, smart trading, and informed decision-making.
        We offer a range of services, including:
      </p>
      <ul>
        <li>
          <b>Daily Stock Market Updates</b>: Get timely buy and sell signals to
          stay ahead in the market.
        </li>
        <li>
          <b>Price Action Course</b>: Learn the art of trading with our in-depth
          course designed for traders of all levels.
        </li>
        <li>
          <b>Comprehensive Digital Resources</b>: Access our blogs, videos, and
          tips to deepen your understanding of the market.
        </li>
      </ul>
      <p>
        Founded by Swap Kam, a expert in intraday trading,
        <strong>SwapKam</strong> is built on a foundation of real-world
        experience, proven strategies, and a passion for financial independence.
      </p>
      <p>
        We’re here to help you succeed. Together, we can unlock the path to your
        financial freedom.
      </p>
    </div>
  );
};

export default About;
