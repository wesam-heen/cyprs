import './NevisInvestment.css'
import Frame from "../../../../../components/frame/Frame";
import InvestmentComponent from "../../../InvestmentComponent/InvestmentComponent";
const texts = [
  "Applicants can qualify for citizenship by investing in a pre-approved real estate project, which may include shares in the property (hotels, villas, residential units)",'','',
  "Donation to the Sustainable Development Fund (SGF) The applicant donates a non-refundable amount to the Economic Development Fund.",
];
const NevisInvestment = () => {
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

export default NevisInvestment