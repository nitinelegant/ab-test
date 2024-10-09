import React from "react";
import "./page.css";
import WithLayout from "@/components/WithLayout";

const page = () => {
  return (
    <>
      <div className="aboutContainer">
        <h1 className="aboutTitle">About</h1>
        <div className="aboutDivider" />
        <p className="paragrapgh">
          Hi, I am Prerit and I am a Senior Data Scientist at Microsoft. Having
          helped feature teams run over 500 experiments over the last 3 years, I
          decided to democratize the knowledge of running experiments and making
          shipping easier for all. MyABtest.ai started with the intention of
          democratizing experimentation for all, especially startups, and
          helping teams ship their features faster.
        </p>
        <div className="paragrapghDivider" />
        <p className="paragrapgh">
          This tool helps product managers find answers to their questions about
          experimentation quickly using LLMs trained on best available resources
          and my personal experiences.
        </p>
        <div className="paragrapghDivider" />
        <p className="paragrapgh">
          My website:{" "}
          <a
            href="https://www.preritsaxena.com"
            target="_blank"
            className="text-black-500"
          >
            www.preritsaxena.com
          </a>{" "}
        </p>
      </div>
    </>
  );
};

export default WithLayout(page);
