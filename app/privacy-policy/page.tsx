import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Privacy Policy - SwapKam",
  description:
    "Learn about SwapKam's privacy practices, including how we collect, use, and protect your personal information.",
};

const PrivacyPolicy = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto pt-20 px-4 lg:px-0">
      <h1>Privacy Policy</h1>
      <p>
        At <strong>SwapKam</strong>, your privacy is of utmost importance to us.
        This Privacy Policy outlines the types of personal information we
        collect, how we use it, and how we protect it. By using our website (
        <strong>swapkam.com</strong>), you consent to the practices described in
        this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect personal information from you in various ways, including
        when you visit our site, fill out a form, subscribe to our newsletter,
        or interact with us. The types of personal information we may collect
        include:
      </p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Any other information you voluntarily provide</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        The information we collect from you may be used in the following ways:
      </p>
      <ul>
        <li>To personalize your experience on our website.</li>
        <li>To improve our website and services.</li>
        <li>
          To send periodic emails regarding updates or other products and
          services.
        </li>
        <li>To respond to inquiries, and/or other requests or questions.</li>
      </ul>

      <h2>3. How We Protect Your Information</h2>
      <p>
        We implement a variety of security measures to maintain the safety of
        your personal information. Your personal information is stored in secure
        networks and is only accessible by a limited number of persons who have
        special access rights to such systems. These individuals are required to
        keep the information confidential.
      </p>

      <h2>4. Sharing Your Information</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personally
        identifiable information to outside parties without your consent, except
        to provide products or services you have requested, or as required by
        law.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        We may use third-party service providers to assist us in operating our
        website or servicing you. These third parties are not allowed to use
        your personal information for any purpose other than to provide these
        services.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Our website may use &quot;cookies&quot; to enhance the user experience.
        You can choose to have your computer warn you each time a cookie is
        being sent or to turn off all cookies. If you turn off cookies, some
        features of the site may not function properly.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal
        information. If you would like to exercise these rights, please contact
        us at <a href="mailto:mail@swapkam.com">info@swapkam.com</a>.
      </p>

      <h2>8. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        about significant changes in the way we treat personal information by
        sending a notice to the primary email address specified in your account
        or by placing a prominent notice on our site.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, the practices of
        this site, or your dealings with this site, please contact us at{" "}
        <a href="mailto:mail@swapkam.com">info@swapkam.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
