import React from "react";
import FormHeader from "./FormHeader";

type Props = {};

const MetricsFrom = ({ goBack }: any) => {
  return (
    <div className="formContainer">
      {/* header  */}
      <FormHeader goBack={goBack} title="Metrics" />
      <div className="metricsContainer">
        <p className="metricsText">
          Here are the metrics you should consider for experiments:
        </p>
        <p className="metricsTitle">Guardrail metrics:</p>
        <p className="metricsText">
          These metrics serve as guardrails for the product and may include
          metrics regarding usage, performance, crashes and other critical areas
          of the product.
        </p>
        <p className="metricsTitle">Feature metrics:</p>
        <p className="metricsText">
          These metrics are related to the feature that is being tested and can
          be related to specific components of the feature such as CTR,
          engagement with feature, impressions, etc.
        </p>
      </div>
    </div>
  );
};

export default MetricsFrom;
