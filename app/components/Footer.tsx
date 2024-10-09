import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  // Array of regular links
  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/disclaimer", label: "Disclaimer" },
  ];

  // Array of social media links
  const socialLinks = [
    {
      href: "https://facebook.com/swapkam",
      icon: (
        <FaFacebook className="text-gray-700 hover:text-blue-500 text-3xl" />
      ),
    },
    {
      href: "https://youtube.com/@SwapKam",
      icon: (
        <FaYoutube className="text-gray-700 hover:text-blue-500 text-3xl" />
      ),
    },
    {
      href: "https://instagram.com/swapkams",
      icon: (
        <FaInstagram className="text-gray-700 hover:text-blue-500 text-3xl" />
      ),
    },
    {
      href: "https://twitter.com/swapkams",
      icon: (
        <FaTwitter className="text-gray-700 hover:text-blue-500 text-3xl" />
      ),
    },
  ];

  return (
    <footer className="bottom-0 z-10 px-4 py-10 items-center">
      <div className="container mx-auto text-center">
        {/* Map through navLinks to generate navigation links */}
        <ul className="list-none pl-0 sm:flex justify-center space-x-4 whitespace-nowrap">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-blue-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Map through socialLinks to generate social media icons */}
        <div className="flex justify-center space-x-4 mt-4">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </Link>
          ))}
        </div>

        <p className="mt-4">
          © {new Date().getFullYear()},{` `}
          <a href="https://swapkam.com" className="hover:text-blue-300">
            SwapKam
          </a>
          , All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
