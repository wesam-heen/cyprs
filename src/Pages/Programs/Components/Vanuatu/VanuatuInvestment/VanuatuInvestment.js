import React from 'react'
import Frame from "../../../../../components/frame/Frame";
import InvestmentComponent from "../../../InvestmentComponent/InvestmentComponent";
const texts = [
  "DONATIONS TO THE DEVELOPMENT SUPPORT PROGRAM (DSP)",'','',
  "The applicant contributes a non-refundable cash amount to the Government of Vanuatu. ",
];
const VanuatuInvestment = () => {
  return (
    <>
    <Frame text="&emsp; &emsp;Investment Plan" />
    <InvestmentComponent
      title="Real Estate Investment"
      array={texts}
    />
    </>
  )
}

export default VanuatuInvestment