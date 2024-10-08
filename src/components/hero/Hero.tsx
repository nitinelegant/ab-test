"use client"; // Add this to declare it as a Client Component
import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="heroContainer">
      <h1 className="heroTitle">Hello Product Managers!</h1>
      <p className="heroSubtitle">
        Welcome to a platform that uniquely <br /> understands your
        experimentation needs
      </p>
    </div>
  );
};

export default Hero;
