import React from "react";
import FormHeader from "./FormHeader";

type Props = {};

const SRMForm = ({ goBack }: any) => {
  return (
    <div className="formContainer">
      {/* header  */}
      <FormHeader goBack={goBack} title="SRM" />
      {/* Form with text and input in rows */}
      <form className="mainForm">
        <div className="formRow mt-3">
          <label className="label">Count of users in treatment</label>
          <input
            type="text"
            className="w-175 h-49 border p-3 rounded-lg"
            placeholder="2"
          />
        </div>
        <div className="border" />
        <div className="formRow mt-3">
          <label className="label">Count of users in Control</label>
          <input
            type="text"
            className="w-175 h-49 border p-3 rounded-lg"
            placeholder="2"
          />
        </div>
        <div className="border" />
        <div className="formRow mt-3">
          <label className="label">Chi-squared test p-value</label>
          <input
            type="text"
            className="w-175 h-49 border p-3 rounded-lg"
            placeholder="2"
          />
        </div>
        <div className="border" />
        <div className="textContainer">
          <p className="formText">{`Result:`} </p>{" "}
          <p className="formTextRed"> SRM detected</p>{" "}
        </div>
      </form>
    </div>
  );
};

export default SRMForm;
