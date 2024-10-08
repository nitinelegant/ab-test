import React from "react";
import FormHeader from "./FormHeader";

type Props = {};

const Calculation = ({ goBack }: any) => {
  return (
    <div className="formContainer">
      {/* header  */}
      <FormHeader goBack={goBack} title="Popular Calculations" />

      {/* Form with text and input in rows */}
      <form className="mainForm">
        {/* Row 1: Text and Input */}
        <div className="formRow">
          <label className="label">Baseline Conversion Rate</label>
          <input type="text" className="formInput" placeholder="2" />
        </div>
        <div className="border" />
        {/* Row 2: Text and Input */}
        <div className="formRow mt-3">
          <label className="label">
            Number of treatments
            <br />
            <p className="undertext">including control</p>
          </label>
          <input type="text" className="formInput" placeholder="2" />
        </div>
        <div className="border" />
        <div className="formRow mt-3">
          <label className="label">Significance Level (⍺)</label>
          <input type="password" className="formInput" placeholder="0.05" />
        </div>
        <div className="border" />
        <div className="formRow mt-3">
          <label className="label">Statistical Power (β)</label>
          <input type="password" className="formInput" placeholder="80" />
        </div>
        <div className="border" />
        <div className="formRow mt-3">
          <label className="label">
            Required Sample size
            <br />
            <p className="undertext">in each treatment and control</p>
          </label>
          <input type="password" className="formInput" placeholder="8000" />
        </div>
      </form>
    </div>
  );
};

export default Calculation;
