import React from "react";
import FormHeader from "./FormHeader";
import CustomSlider from "../slider/CustomSlider";
import Info from "../../public/images/Info.svg";
import Image from "next/image";
//@typescript-eslint/no-explicit-any
const Calculation = ({ goBack }: any) => {
  return (
    <div className="formContainer">
      {/* header  */}
      <FormHeader goBack={goBack} title="Popular Calculations" />

      {/* Form with text and input in rows */}

      <form className="mainForm">
        <div className="border mt-5" />
        <div className="formRow">
          <label className="label flex gap-2">
            Baseline Conversion Rate
            <Image src={Info} alt="info" width={24} height={24} />
          </label>
          <div className="flex gap-1 items-center">
            <input type="text" className="formInput" placeholder="2" />
            <p className="text-xl">%</p>
          </div>
        </div>

        {/* custom slider  */}

        <div className="border" />
        <div className=" mt-3 mb-3">
          <label className="label flex gap-2">
            Minimum Detectable Effect
            <Image src={Info} alt="info" width={24} height={24} />
          </label>
          <div className="mt-4">
            <CustomSlider />
          </div>
        </div>
        {/* custom slider  */}
        <div className="border" />
        <div className="formRow mt-3">
          <label className="label">
            <div className="flex gap-2">
              Number of treatments
              <Image src={Info} alt="info" width={24} height={24} />
            </div>
            <p className="undertext">including control</p>
          </label>

          <input type="text" className="formInput mr-6" placeholder="2" />
        </div>
        <div className="border" />
        <div className="formRow mt-3">
          <label className="label flex gap-2">
            Significance Level (⍺)
            <Image src={Info} alt="info" width={24} height={24} />
          </label>
          <input
            type="password"
            className="formInput mr-6"
            placeholder="0.05"
          />
        </div>
        <div className="border" />
        <div className="formRow mt-3">
          <label className="label flex gap-2">
            Statistical Power (β)
            <Image src={Info} alt="info" width={24} height={24} />
          </label>
          <div className="flex gap-1 items-center">
            <input type="text" className="formInput" placeholder="2" />
            <p className="text-xl">%</p>
          </div>
        </div>
        <div className="border" />
        <div className="formRow mt-3">
          <label className="label">
            <div className="flex gap-2">
              Required Sample size
              <Image src={Info} alt="info" width={24} height={24} />
            </div>
            <p className="undertext">in each treatment and control</p>
          </label>
          <input
            type="text"
            className="formInput bg-[#F5E6FF] custom-input"
            placeholder="8000"
          />
        </div>
      </form>
    </div>
  );
};

export default Calculation;
