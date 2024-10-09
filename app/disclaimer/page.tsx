import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Disclaimer - SwapKam",
  description:
    "Read the disclaimer for SwapKam to understand the limitations and liability of the information provided on this site.",
};

const Disclaimer = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto pt-20 px-4 lg:px-0">
      <h1>Disclaimer</h1>
      <p>
        The information provided by <strong>SwapKam</strong> (“we,” “us,” or
        “our”) on this website (<strong>swapkam.com</strong>) is for general
        informational purposes only. While we strive to provide accurate and
        up-to-date information, we make no representation or warranty, express
        or implied, regarding the accuracy, adequacy, validity, reliability,
        availability, or completeness of any information on the site.
      </p>

      <p>
        Under no circumstance shall we have any liability to you for any loss or
        damage of any kind incurred as a result of the use of the site or
        reliance on any information provided on the site. Your use of the site
        and your reliance on any information is solely at your own risk.
      </p>

      <h2>Not Financial Advice</h2>
      <p>
        The content provided on <strong>SwapKam</strong> is not intended to be a
        substitute for professional financial advice, and you should always seek
        the advice of a licensed financial advisor before making any investment
        decisions. We are not financial advisors, and the information on this
        website is not personalized for any individual.
      </p>

      <h2>Affiliate Disclaimer</h2>
      <p>
        Some of the links on <strong>SwapKam</strong> may be affiliate links,
        meaning that we may earn a commission if you click on the link or make a
        purchase using the link. This comes at no additional cost to you. We
        only recommend products or services that we believe will add value to
        our audience.
      </p>

      <h2>No Guarantees</h2>
      <p>
        We make no guarantees regarding the performance or results of any
        investments or trades discussed on the site. Stock market investing and
        trading are inherently risky, and individuals must make their own
        informed decisions.
      </p>

      <p>
        By using this site, you agree to the terms of this disclaimer. If you do
        not agree with these terms, please refrain from using the site.
      </p>
    </div>
  );
};

export default Disclaimer;
