"use client";
import React, { useState } from "react";
import "./Footer.css";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";

const Footer: React.FC = () => {
  const [activePath, setActivePath] = useState("/");

  const isActive = (path: string) => {
    return activePath === path ? "font-[700] " : "";
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
          <RiTwitterXLine
            size={24}
            color="#000"
            style={{ cursor: "pointer" }}
          />
          <FaLinkedin size={24} color="#000" style={{ cursor: "pointer" }} />
          <FaMedium size={24} color="#000" style={{ cursor: "pointer" }} />
        </div>

        {/* Right Section - Links */}
        <div className="footerLinks">
          <button
            onClick={() => handleClick("/Resources")}
            className={`${isActive("/Resources")} footer-links `}
          >
            Resources
          </button>
          <button
            onClick={() => handleClick("/Blog")}
            className={`${isActive("/Blog")} footer-links `}
          >
            Blog
          </button>
          <button
            onClick={() => handleClick("/Contact Us")}
            className={`${isActive("/Contact Us")} footer-links `}
          >
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
