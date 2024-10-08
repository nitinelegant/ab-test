"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import "./Header.css";

const Header: React.FC = () => {
  const [activePath, setActivePath] = useState("/");

  const isActive = (path: string) => {
    return activePath === path ? "font-bold" : "";
  };

  const handleClick = (path: string) => {
    setActivePath(path);
    // In a real application, you would handle navigation here
  };

  return (
    <header className="header">
      <div className="logo">
        <Image src={Logo} alt="Logo" width={250} height={90} />
      </div>
      <nav className="space-x-4">
        <button
          onClick={() => handleClick("/")}
          className={`${isActive("/")} text-black `}
        >
          Home
        </button>
        <button
          onClick={() => handleClick("/about")}
          className={`${isActive("/about")} text-black `}
        >
          About
        </button>
      </nav>
    </header>
  );
};

export default Header;
