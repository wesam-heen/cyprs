import React from "react";
import "./CyprsInvestment.css";
import Frame from "../../../../../components/frame/Frame";
import InvestmentComponent from "../../../InvestmentComponent/InvestmentComponent";
const texts = [
  "The applicant purchases a property worth three hundred thousand euros",
  "One hundred and twenty euros, passport issuance fee for each individual",
  "Seventy euros fee for the issuance of an identity card for each individual",
  "Two thousand euros application fee for obtaining citizenship for each person over the age of eighteen years",
  "Eighty euros to apply for citizenship for an individual under eighteen years old",
  "Five hundred euros to apply for citizenship",
];
const CyprsInvestment = () => {
  return (
    <>
      <Frame text="&emsp; &emsp;Investment Plan" />
      <InvestmentComponent
        title="Real Estate Investment"
        text="The applicant must fulfill the following conditions"
        array={texts}
      />
    </>
  );
};

export default CyprsInvestment;
