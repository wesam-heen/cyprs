import React from 'react'
import Frame from "../../../../../components/frame/Frame";
import InvestmentComponent from "../../../InvestmentComponent/InvestmentComponent";
const texts = [
  "Individual Investment (One Family) in government-approved projects and maintain property ownership for five years. ",'','',
  "Joint Investment (Two Families) in government projects and maintain property ownership for five years.",
];
const AntiguaInvestment = () => {
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

export default AntiguaInvestment