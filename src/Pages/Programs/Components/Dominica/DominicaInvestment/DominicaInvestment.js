import React from 'react'
import Frame from "../../../../../components/frame/Frame";
import InvestmentComponent from "../../../InvestmentComponent/InvestmentComponent";
const texts = [
  "The applicant must invest in licensed real estate with a minimum value of $200,000 and keep the property under his name for 5 years",'','',
  "	Contribution to the Dominica Government FundThe applicant makes a one-time minimum $100,000 donation to the Dominica Government Fund.",
];
const DominicaInvestment = () => {
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

export default DominicaInvestment