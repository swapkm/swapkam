"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleScroll = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const links = [
    { href: "/blog", label: "Blog" },
    { href: "/tag", label: "Tags" },
    { href: "/finance", label: "Finance" },
    { href: "/price-action", label: "Price Action" },
  ];

  return (
    <header className="top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 filter drop-shadow-none py-4 h-20 items-center sm:sticky">
      <nav>
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <div className="flex items-center justify-between h-16">
            <Link href="/" title="SwapKam">
              <text className="text-2xl md:text-4xl font-bold">SWAPKAM</text>
            </Link>

            <ul className="hidden list-none pl-0 md:flex space-x-4 items-center">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-black">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="hover:text-yellow-500 focus:outline-none text-2xl"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu with Backdrop Blur */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out backdrop-blur-lg bg-white bg-opacity-90 ${
            isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          <ul className="list-none pl-0">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-black px-4 py-2"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
