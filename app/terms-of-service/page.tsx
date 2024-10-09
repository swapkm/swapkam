import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms of Service - SwapKam",
  description:
    "Review the terms of service for using SwapKam. Understand your rights and responsibilities when accessing our website and services.",
};

const TermsOfService = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto pt-20 px-4 lg:px-0">
      <h1>Terms of Service</h1>
      <p>
        These Terms of Service govern your use of the website located at{" "}
        <strong>swapkam.com</strong> (the &quot;Site&quot;). By accessing or
        using our Site, you agree to be bound by these Terms. If you do not
        agree with any part of these Terms, you must not use our Site.
      </p>

      <h2>1. Use of the Site</h2>
      <p>
        You agree to use the Site in compliance with all applicable laws and
        regulations. You must not use the Site for any unlawful purpose or in a
        way that could damage, disable, overburden, or impair the Site or
        interfere with any other party&apos;s use of the Site.
      </p>

      <h2>2. User Accounts</h2>
      <p>
        If you create an account on our Site, you are responsible for
        maintaining the confidentiality of your account information and for all
        activities that occur under your account. You agree to notify us
        immediately of any unauthorized use of your account.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All content on the Site, including text, graphics, logos, and images, is
        the property of SwapKam or our licensors and is protected by copyright,
        trademark, and other intellectual property laws. You may not reproduce,
        distribute, or create derivative works from any content without our
        express written permission.
      </p>

      <h2>4. Disclaimers</h2>
      <p>
        The information provided on the Site is for general informational
        purposes only and is not intended as financial advice. We make no
        representations or warranties of any kind regarding the accuracy,
        reliability, or completeness of any information on the Site.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, in no event shall SwapKam or its
        affiliates be liable for any direct, indirect, incidental, special,
        consequential, or punitive damages arising out of or related to your use
        of the Site or any content therein.
      </p>

      <h2>6. Links to Third-Party Websites</h2>
      <p>
        Our Site may contain links to third-party websites that are not owned or
        controlled by SwapKam. We have no control over, and assume no
        responsibility for, the content, privacy policies, or practices of any
        third-party websites. You acknowledge and agree that SwapKam shall not
        be responsible or liable, directly or indirectly, for any damage or loss
        caused by or in connection with the use of any such content, goods, or
        services available on or through any such websites.
      </p>

      <h2>7. Changes to These Terms</h2>
      <p>
        We reserve the right to modify these Terms of Service at any time. We
        will notify you of any changes by posting the new Terms on this page.
        You are advised to review these Terms periodically for any changes. Your
        continued use of the Site after the posting of changes constitutes your
        acceptance of such changes.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of [Your Country/State], without regard to its conflict of law
        principles. Any legal action arising out of or relating to these Terms
        shall be brought exclusively in the courts located in [Your City/State].
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions about these Terms of Service, please contact
        us at <a href="mailto:mail@swapkam.com">info@swapkam.com</a>.
      </p>
    </div>
  );
};

export default TermsOfService;
