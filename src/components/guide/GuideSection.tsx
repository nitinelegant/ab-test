"use client";
import React, { useState } from "react";
import "./GuideSection.css";
import Card from "../card/Card";
import Form from "../form/Form";
import "./GuideSection.css";

const formValues = {
  calculations: "CALCULATIONS",
  srm: "SRM",
  metrics: "METRICS",
};

const GuideSection = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null); // Track which card is selected
  const [isFlipping, setIsFlipping] = useState(false);

  return (
    <div className="guidecontainer">
      <div className="leftColumn">
        <div
          className={`
          relative w-full min-h-[500px] 
          ${
            isFlipping
              ? "animate-flip-out"
              : selectedCard
              ? "animate-flip-in"
              : ""
          }
        `}
        >
          {selectedCard === null ? (
            <div style={{ paddingLeft: "9%" }}>
              <h1 className="cardMainTitle mt-3">Your Guided Calculator</h1>
              <Card
                gradientColors="to right, #4FA1E8B2, #5041DEB2"
                title="Sample Size Calculator"
                subtitle="Calculate the required sample size for your A/B"
                onClick={() => setSelectedCard(formValues.calculations)}
              />
              <Card
                gradientColors="to left, #60DE5DB2, #288810B2"
                title="SRM Check"
                subtitle="Check if your A/B test had Sample Ratio Mismatch (SRM)"
                onClick={() => setSelectedCard(formValues.srm)}
              />
              <Card
                gradientColors="to right, #F678B4B2, #C72C2CB2"
                title="A/B test metrics"
                subtitle="Check if your A/B test had Sample Ratio Mismatch (SRM)"
                onClick={() => setSelectedCard(formValues.metrics)}
              />
            </div>
          ) : (
            <Form
              selectedCard={selectedCard}
              // goBack={() => setSelectedCard(null)}
              goBack={() => {
                setIsFlipping(true);
                setTimeout(() => {
                  setSelectedCard(null);
                  setIsFlipping(false);
                }, 300);
              }}
            />
          )}
        </div>
      </div>
      <div className="rightColumn">
        <iframe
          src="https://www.example.com" // Replace with your iframe source
          title="Example Iframe"
          className="iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default GuideSection;
