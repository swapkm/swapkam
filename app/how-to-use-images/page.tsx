import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "How To Use Images - SwapKam",
  description:
    "Learn how to use images on SwapKam, including best practices for uploading, resizing, and optimizing images for the web.",
};

const HowToUseImages = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto pt-20 px-4 lg:px-0">
      <h1>How to Use Images</h1>
      <p>
        All images on SwapKam.com are licensed under the Creative Commons
        Attribution 4.0 International License (CC BY 4.0).
      </p>
      <h2>You are free to:</h2>
      <ul>
        <li>
          Share: Copy and redistribute the images in any medium or format.
        </li>
        <li>
          Adapt: Remix, transform, and build upon the images for any purpose,
          even commercially.
        </li>
      </ul>
      <h2>Under the following terms:</h2>
      <ul>
        <li>
          Attribution: You must give appropriate credit, provide a link to the
          license, and indicate if changes were made. You may do so in any
          reasonable manner, but not in any way that suggests the licensor
          endorses you or your use.
        </li>
        <li>
          No additional restrictions: You may not apply legal terms or
          technological measures that legally restrict others from doing
          anything the license permits.
        </li>
      </ul>
      <h2>Notices:</h2>
      <ul>
        <li>
          You do not have to comply with the license for elements of the
          material in the public domain or where your use is permitted by an
          applicable exception or limitation.
        </li>
        <li>
          No warranties are given. The license may not give you all of the
          permissions necessary for your intended use. For example, other rights
          such as publicity, privacy, or moral rights may limit how you use the
          images.
        </li>
      </ul>
      <p>
        Please note that this license applies to the images used on SwapKam.com.
        It does not grant you rights to any third-party content or images used
        by other authors on this website.
      </p>
    </div>
  );
};

export default HowToUseImages;
