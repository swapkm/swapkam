import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Image License - SwapKam",
  description:
    "Understand the image usage rights and licenses for all images on SwapKam. Learn about copyright, attribution, and fair use policies.",
};
const ImagesLicense = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto pt-20 px-4 lg:px-0">
      <h1>License for Images on SwapKam</h1>
      <p>
        At <strong>SwapKam</strong>, we are committed to respecting the
        intellectual property rights of others. This page outlines the licensing
        terms and usage rights for the images displayed on this website. By
        using the images from our site, you agree to the terms below.
      </p>

      <h2>1. Copyright and Ownership</h2>
      <p>
        All images used on <strong>swapkam.com</strong> are either the property
        of SwapKam, licensed for use, or used under the principles of fair use.
        You may not download, modify, or use any images without prior
        permission, unless otherwise stated.
      </p>

      <h2>2. Third-Party Images</h2>
      <p>
        Some images displayed on <strong>SwapKam</strong> may be sourced from
        third-party platforms such as stock photo sites or contributors who have
        licensed their work to us. For these images, you must follow the terms
        of the license as outlined by the original source.
      </p>

      <h2>3. Attribution Requirements</h2>
      <p>
        For images that require attribution, proper credit must be given. You
        should include a visible and clear acknowledgment, such as:
      </p>
      <pre>
        <code>{`Image by [Author Name] via [Source Name]`}</code>
      </pre>
      <p>
        If attribution is required, it will be indicated alongside the image.
        Please ensure that attribution is included if you choose to share or use
        the image according to the terms of the license.
      </p>

      <h2>4. Fair Use Policy</h2>
      <p>
        We may use certain images under the principle of fair use, especially
        for commentary, educational purposes, or reporting. These images are
        used in a transformative manner, and their use does not harm the rights
        holder’s ability to profit from the original work.
      </p>

      <h2>5. Prohibited Uses</h2>
      <p>
        The following uses of images on <strong>SwapKam</strong> are strictly
        prohibited:
      </p>
      <ul>
        <li>Using images for commercial purposes without permission.</li>
        <li>
          Modifying or manipulating images in a way that misrepresents the
          original work.
        </li>
        <li>
          Redistributing or reselling images without proper licensing or
          attribution.
        </li>
      </ul>

      <h2>6. Requesting Permission</h2>
      <p>
        If you wish to use any image from our website for commercial purposes or
        in a manner that is not covered by the licenses mentioned, please
        contact us at <a href="mailto:mail@swapkam.com">info@swapkam.com</a> to
        request permission.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions regarding image licenses or need clarification
        on usage rights, feel free to reach out to us at{" "}
        <a href="mailto:mail@swapkam.com">info@swapkam.com</a>.
      </p>
    </div>
  );
};

export default ImagesLicense;
