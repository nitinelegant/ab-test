import React from "react";
import FormHeader from "./FormHeader";
import CustomSlider from "../slider/CustomSlider";
import Info from "../../public/images/Info.svg";
import Image from "next/image";

type Props = {
  goBack: () => void;
};

const Calculation = ({ goBack }: Props) => {
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
              type="text"
              className="calculationFormInput placeholder-black"
              placeholder="2"
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
            <CustomSlider />
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
            type="text"
            className="calculationFormInput mr-6 placeholder-black"
            placeholder="2"
          />
        </div>
        <div className="border" />
        <div className="formRow mt-3">
          <label className="calculationFormLabel flex gap-2">
            Significance Level (⍺)
            <Image src={Info} alt="info" width={24} height={24} />
          </label>
          <input
            type="password"
            className="calculationFormInput mr-6 placeholder-black"
            placeholder="0.05"
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
              type="text"
              className="calculationFormInput placeholder-black"
              placeholder="2"
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
            type="text"
            className="calculationFormInput bg-[#F5E6FF] custom-input placeholder-black"
            placeholder="8000"
          />
        </div>
      </form>
    </div>
  );
};

export default Calculation;
