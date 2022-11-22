import Frame from "../../../../../components/frame/Frame";
import InvestmentComponent from "../../../InvestmentComponent/InvestmentComponent";
const texts = [
  "in one of the properties approved by the government,through the purchase of a property for an amount not less than 250,000 euros.",
];
const GreeceInvestment = () => {
  return (
    <>
      <Frame text="&emsp; &emsp;Investment Plan" />
      <InvestmentComponent title="Real Estate Investment" array={texts} />
    </>
  );
};

export default GreeceInvestment;
