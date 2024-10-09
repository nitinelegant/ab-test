"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import "./Header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "font-bold" : "";
  };

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={250} height={90} />
        </Link>
      </div>
      <nav className="space-x-4">
        <Link href="/" className={`${isActive("/")} text-black`}>
          Home
        </Link>
        <Link href="/about" className={`${isActive("/about")} text-black`}>
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
