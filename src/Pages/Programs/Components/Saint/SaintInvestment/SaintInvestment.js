import Frame from "../../../../../components/frame/Frame";
import InvestmentComponent from "../../../InvestmentComponent/InvestmentComponent";
const texts = [
  "The applicant must purchase an approved property for an amount not less than 300,000 USD and maintain it for five years.",'','',
  "Contribution to National Economic Fund A financial contribution of USD 100,000 to the Saint Lucia National Economy Fund (non-refundable)",
];
const SaintInvestment = () => {
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

export default SaintInvestment