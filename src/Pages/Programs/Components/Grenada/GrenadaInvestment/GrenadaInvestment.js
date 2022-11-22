import Frame from "../../../../../components/frame/Frame";
import InvestmentComponent from "../../../InvestmentComponent/InvestmentComponent";
const texts = [
  "The applicant must purchase a pre-approved real estate project from the government and keep it under his name for 3 years after that he/she can sell it. ",'','',
  "Contribution to the National Transformation Fund The applicant shall contribute a non-refundable amount to the National Transformation Fund.",
];
const GrenadaInvestment = () => {
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

export default GrenadaInvestment