"use client";
import React, { useState } from "react";
import "./SignUp.css";

const SignUp: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Input Submitted: ${inputValue}`);
    setInputValue(""); // Reset input field
  };

  return (
    <div className="signUpcontainer">
      <h2 className="title">Sign up for a free A/B testing resources</h2>
      <form onSubmit={handleSubmit} className="SignUpform">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="signUpInput placeholder-black"
          placeholder="you@example.com"
        />
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
