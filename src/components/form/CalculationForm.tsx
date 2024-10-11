import React, { useState, useEffect } from "react";
import FormHeader from "./FormHeader";
import CustomSlider from "../slider/CustomSlider";
import Info from "../../public/images/Info.svg";
import Image from "next/image";

type Props = {
  goBack: () => void;
};

const Calculation = ({ goBack }: Props) => {
  const [baselineRate, setBaselineRate] = useState(20);
  const [minDetectableEffect, setMinDetectableEffect] = useState(5);
  const [effectType, setEffectType] = useState("Absolute");
  const [statisticalPower, setStatisticalPower] = useState(80);
  const [significanceLevel, setSignificanceLevel] = useState(5);
  const [sampleSize, setSampleSize] = useState(0);

  // Function to calculate z-score
  const getZScore = (p: number) => {
    if (p === 0.5) return 0;
    if (p === 1) return Infinity;
    if (p === 0) return -Infinity;

    const t = Math.sqrt(-2 * Math.log(p));
    const c = 2.515517 + 0.802853 * t + 0.010328 * t * t;
    const d = 1 + 1.432788 * t + 0.189269 * t * t + 0.001308 * t * t * t;

    return t - c / d;
  };

  // Calculate sample size
  useEffect(() => {
    const calculateSampleSize = () => {
      const p1 = baselineRate / 100;
      let p2;

      if (effectType === "Absolute") {
        p2 = (baselineRate + minDetectableEffect) / 100;
      } else {
        // relative
        p2 = (baselineRate * (1 + minDetectableEffect / 100)) / 100;
      }

      const alpha = significanceLevel / 100;
      const beta = (100 - statisticalPower) / 100;

      const z_alpha = getZScore(alpha / 2);
      const z_beta = getZScore(beta);

      const sd1 = Math.sqrt(2 * p1 * (1 - p1));
      const sd2 = Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2));

      const n = Math.pow((z_alpha * sd1 + z_beta * sd2) / (p2 - p1), 2);

      return Math.ceil(n);
    };

    const size = calculateSampleSize();
    setSampleSize(isNaN(size) || !isFinite(size) ? 0 : size);
  }, [
    baselineRate,
    minDetectableEffect,
    effectType,
    statisticalPower,
    significanceLevel,
  ]);

  const handleSliderChange = (newValue: number) => {
    setMinDetectableEffect(newValue);
    // You can perform additional actions here when the value changes
    console.log("Slider value changed:", newValue);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEffectType(event.target.value);
  };
  return (
    <div className="formContainer">
      {/* header  */}
      <FormHeader goBack={goBack} title="Popular Calculations" />

      {/* Form with text and input in rows */}

      <form className="mainForm">
        <div className="border mt-5" />
        <div className="formRow">
          <label className="calculationFormLabel flex gap-2">
            Baseline Conversion Rate
            <Image src={Info} alt="info" width={24} height={24} />
          </label>
          <div className="flex gap-1 items-center">
            <input
              value={baselineRate}
              type="number"
              className="calculationFormInput text-black"
              placeholder="2"
              onChange={(e) => {
                const value = e.target.value;
                if (
                  value === "" ||
                  /^(?:0{1,2}|100|[1-9][0-9]{0,1})$/.test(value)
                ) {
                  setBaselineRate(parseFloat(value));
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
              value={minDetectableEffect}
              onChange={handleSliderChange}
            />
          </div>
        </div>
        {/* absolute or relative  */}
        <div className="border" />
        <div className="flex justify-between items-center mt-3 mb-3 pt-3 pb-3 radioButtonContainer">
          <div className="flex gap-20">
            <div className="flex gap-2 items-center ">
              <input
                type="radio"
                name="options"
                value="Absolute"
                checked={effectType === "Absolute"}
                onChange={handleChange}
                className="radioButton"
              />
              <p className="calculationFormLabel">Absolute</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="options"
                value="Relative"
                checked={effectType === "Relative"}
                onChange={handleChange}
                className="radioButton"
              />
              <p className="calculationFormLabel">Relative</p>
            </div>
          </div>

          <div className=" w-[125px] effectContainer">
            <p className="calculationFormLabel font-bold">{effectType}</p>
          </div>
        </div>

        {/* custom slider  */}
        {/* <div className="border" />
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
        </div> */}
        <div className="border" />
        <div className="formRow mt-3">
          <label className="calculationFormLabel flex gap-2">
            Significance Level (⍺)
            <Image src={Info} alt="info" width={24} height={24} />
          </label>
          <div className="flex gap-1 items-center">
            <input
              value={significanceLevel}
              type="number"
              className="calculationFormInput text-black"
              placeholder="0.05"
              onChange={(e) => setSignificanceLevel(parseFloat(e.target.value))}
            />
            <p className="percentageText">%</p>
          </div>
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
              value={statisticalPower}
              onChange={(e) => setStatisticalPower(parseFloat(e.target.value))}
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
