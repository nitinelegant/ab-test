"use client";
import React, { useState } from "react";
import "./Footer.css";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";

const Footer: React.FC = () => {
  const [activePath, setActivePath] = useState("/");

  const isActive = (path: string) => {
    return activePath === path ? "font-bold" : "";
  };

  const handleClick = (path: string) => {
    setActivePath(path);
    // In a real application, you would handle navigation here
  };
  return (
    <footer className="footer">
      <div className="footerContent">
        {/* Left Section - Icons */}
        <div className="footerIcons">
          <RiTwitterXLine size={24} color="#000" />
          <FaLinkedin size={24} color="#000" />
          <FaMedium size={24} color="#000" />
        </div>

        {/* Right Section - Links */}
        <div className="footerLinks">
          <button
            onClick={() => handleClick("/Resources")}
            className={`${isActive("/Resources")} text-black `}
          >
            Resources
          </button>
          <button
            onClick={() => handleClick("/Blog")}
            className={`${isActive("/Blog")} text-black `}
          >
            Blog
          </button>
          <button
            onClick={() => handleClick("/Contact Us")}
            className={`${isActive("/Contact Us")} text-black `}
          >
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
