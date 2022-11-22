import Frame from "../../../../../components/frame/Frame";
import InvestmentComponent from "../../../InvestmentComponent/InvestmentComponent";
const texts = [
    "Initial Consultancy ",
    "Signing the Contract & Payment of Fees",
    "Documents Collection and File Submission",
    "Property Selection (Real Estate Contribution Option)",
    "Waiting for Approval and Getting Approval",
    "Obtaining the Passport"
  ];
const SaintProcedures = () => {
  return (
    <>
    <Frame text="&emsp;Procedures And Time" />
    <InvestmentComponent
    text="All times are estimated and actual time depends on the status of each file"
    array={texts}
  />
    </>
  )
}

export default SaintProcedures