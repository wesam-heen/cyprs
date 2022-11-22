import Frame from "../../../../../components/frame/Frame";
import InvestmentComponent from "../../../InvestmentComponent/InvestmentComponent";
const texts = [
  "The applicant makes a real estate investment in one of the properties approved by the government, through the purchase of a property for an amount not less than 250,000 euros in addition to the application fees." 
  
];
const GreeceInvestment = () => {
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

export default GreeceInvestment