import React from "react";
import "./Form.css";
import CalculationForm from "./CalculationForm";
import SRMForm from "./SRMForm";
import MetricsFrom from "./MetricsFrom";

type Props = {
  selectedCard: string;
  goBack: () => void;
};

const Form = ({ selectedCard, goBack }: Props) => {
  if (selectedCard === "CALCULATIONS") {
    return <CalculationForm goBack={goBack} />;
  }
  if (selectedCard === "SRM") {
    return <SRMForm goBack={goBack} />;
  }
  if (selectedCard === "METRICS") {
    return <MetricsFrom goBack={goBack} />;
  }
};

export default Form;
