import React, { useState, useEffect } from "react";
import FormHeader from "./FormHeader";
import CustomSlider from "../slider/CustomSlider";
import Info from "../../public/images/Info.svg";
import Image from "next/image";

type Props = {
  goBack: () => void;
};

const Calculation = ({ goBack }: Props) => {
  // State variables to store the form inputs
  const [baselineConversionRate, setBaselineConversionRate] = useState(2); // Initial value set to 2%
  const [minimumDetectableEffect, setMinimumDetectableEffect] = useState(5); // Initial value set to 5%
  const [numberOfTreatments, setNumberOfTreatments] = useState(2); // Default value 2
  const [significanceLevel, setSignificanceLevel] = useState(0.05); // Default 0.05 (95% confidence interval)
  const [powerLevel, setPowerLevel] = useState(80); // Default 0.80 (80% power)
  const [sampleSize, setSampleSize] = useState<number>(0); // State to store the calculated sample size

  useEffect(() => {
    calculateSampleSize();
  }, [
    baselineConversionRate,
    minimumDetectableEffect,
    numberOfTreatments,
    significanceLevel,
    powerLevel,
  ]);

  const calculateSampleSize = () => {
    try {
      if (!baselineConversionRate || !minimumDetectableEffect) {
        return;
      }
      // Convert percentages to decimals
      const p1 = baselineConversionRate / 100;
      const minimumEffect = minimumDetectableEffect / 100;
      console.log("minimumEffect", minimumEffect, p1);

      // Fixed z-values for significance level and power
      const zAlpha = 1.96; // For a 95% confidence interval
      const zBeta = 0.84; // For 80% power

      // Calculate p2 using the formula: p2 = p1 * (1 + minimumEffect)
      const p2 = p1 * (1 + minimumEffect);

      // Calculate numerator and denominator for the formula
      const numerator =
        Math.pow(zAlpha + zBeta, 2) * (p1 * (1 - p1) + p2 * (1 - p2));
      const denominator = Math.pow(p1 - p2, 2);

      // Calculate the sample size per group
      const n = numerator / denominator;
      console.log("n", n);
      // Set the calculated sample size in the state
      setSampleSize(Math.ceil(n));
    } catch (error) {
      console.log(`error in calculating sample size: ${error}`);
    }
  };

  const handleSliderChange = (newValue: number) => {
    setMinimumDetectableEffect(newValue);
    // You can perform additional actions here when the value changes
    console.log("Slider value changed:", newValue);
  };
  return (
    <div className="formContainer">
      {/* header  */}
      <FormHeader goBack={goBack} title="Popular Calculations" />

      {/* Form with text and input in rows */}

      <form className="mainForm" onSubmit={calculateSampleSize}>
        <div className="border mt-5" />
        <div className="formRow">
          <label className="calculationFormLabel flex gap-2">
            Baseline Conversion Rate
            <Image src={Info} alt="info" width={24} height={24} />
          </label>
          <div className="flex gap-1 items-center">
            <input
              value={baselineConversionRate}
              type="number"
              className="calculationFormInput text-black"
              placeholder="2"
              onChange={(e) => {
                const value = e.target.value;
                if (
                  value === "" ||
                  /^(?:0{1,2}|100|[1-9][0-9]{0,1})$/.test(value)
                ) {
                  setBaselineConversionRate(parseFloat(value));
                }
              }}
            />
            <p className="percentageText">%</p>
          </div>
        </div>

        {/* custom slider  */}

        <div className="border" />
        <div className=" mt-3 mb-3">
          <label className="calculationFormLabel flex gap-2">
            Minimum Detectable Effect
            <Image src={Info} alt="info" width={24} height={24} />
          </label>
          <div className="pt-5 pb-5 mt-5 mb-5 flex justify-center items-center">
            <CustomSlider
              value={minimumDetectableEffect}
              onChange={handleSliderChange}
            />
          </div>
        </div>
        {/* custom slider  */}
        <div className="border" />
        <div className="formRow mt-3">
          <label className="calculationFormLabel">
            <div className="flex gap-2">
              Number of treatments
              <Image src={Info} alt="info" width={24} height={24} />
            </div>
            <p className="undertext">including control</p>
          </label>

          <input
            value={numberOfTreatments}
            type="number"
            className="calculationFormInput mr-6  text-black"
            placeholder="2"
            onChange={(e) => {
              const value = e.target.value;
              if (
                value === "" ||
                /^(?:0{1,2}|100|[1-9][0-9]{0,1})$/.test(value)
              ) {
                setNumberOfTreatments(parseFloat(value));
              }
            }}
          />
        </div>
        <div className="border" />
        <div className="formRow mt-3">
          <label className="calculationFormLabel flex gap-2">
            Significance Level (⍺)
            <Image src={Info} alt="info" width={24} height={24} />
          </label>
          <input
            value={significanceLevel}
            type="number"
            className="calculationFormInput mr-6  text-black"
            placeholder="0.05"
            onChange={(e) => setSignificanceLevel(parseFloat(e.target.value))}
            readOnly
          />
        </div>
        <div className="border" />
        <div className="formRow mt-3">
          <label className="calculationFormLabel flex gap-2">
            Statistical Power (β)
            <Image src={Info} alt="info" width={24} height={24} />
          </label>
          <div className="flex gap-1 items-center">
            <input
              type="number"
              className="calculationFormInput  text-black"
              placeholder="2"
              value={powerLevel}
              onChange={(e) => setPowerLevel(parseFloat(e.target.value))}
              readOnly
            />
            <p className="percentageText">%</p>
          </div>
        </div>
        <div className="border" />
        <div className="formRow mt-3">
          <label className="calculationFormLabel">
            <div className="flex gap-2">
              Required Sample size
              <Image src={Info} alt="info" width={24} height={24} />
            </div>
            <p className="undertext">in each treatment and control</p>
          </label>
          <input
            type="number"
            className="calculationFormInput bg-[#F5E6FF] custom-input text-black"
            placeholder="8000"
            value={sampleSize}
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default Calculation;
