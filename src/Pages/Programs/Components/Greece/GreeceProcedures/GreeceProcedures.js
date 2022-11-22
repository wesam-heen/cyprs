import Frame from "../../../../../components/frame/Frame";
import InvestmentComponent from "../../../InvestmentComponent/InvestmentComponent";
const texts = [
    "Initial Consultancy ",
    "Signing the Contract & Payment of Fees",
    "Obtaining Permit ",
    "Issuance of Initial Residence",
    "Waiting for Approval",
    "Getting Approval and Permanent residence "
  ];
const GreeceProcedures = () => {
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

export default GreeceProcedures