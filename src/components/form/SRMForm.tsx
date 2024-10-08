import React from "react";
import FormHeader from "./FormHeader";
import Info from "../../public/images/Info.svg";
import Image from "next/image";

type Props = {};

const SRMForm = ({ goBack }: any) => {
  return (
    <div className="formContainer">
      {/* header  */}
      <FormHeader goBack={goBack} title="SRM" />
      {/* Form with text and input in rows */}
      <form className="mainForm">
        <div className="border mt-5" />
        <div className="flex justify-between items-center mt-5 mb-5">
          <label className="srmLabel flex gap-2">
            Count of users in treatment
            <Image src={Info} alt="info" width={24} height={24} />
          </label>

          <input
            type="text"
            className="w-175 h-49 border p-3 rounded-lg"
            placeholder="2"
          />
        </div>
        <div className="border" />
        <div className="flex justify-between items-center mt-5 mb-5">
          <label className="srmLabel flex gap-2">
            Count of users in Control
            <Image src={Info} alt="info" width={24} height={24} />
          </label>

          <input
            type="text"
            className="w-175 h-49 border p-3 rounded-lg"
            placeholder="2"
          />
        </div>
        <div className="border" />
        <div className="flex justify-between items-center mt-5 mb-5">
          <label className="srmLabel flex gap-2">
            Chi-squared test p-value
            <Image src={Info} alt="info" width={24} height={24} />
          </label>
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
