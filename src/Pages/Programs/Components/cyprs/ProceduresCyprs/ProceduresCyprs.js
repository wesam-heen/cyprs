import React from 'react'
import './ProceduresCyprs.css'
import Frame from "../../../../../components/frame/Frame";
import InvestmentComponent from "../../../InvestmentComponent/InvestmentComponent";

const texts = [
    "Initial consultation",
    "Choose a property and pay the fees",
    "Complete the procedures and submit the application",
    "Getting the approval",
    "Follow up on requests for dependents",
  ];
const ProceduresCyprs = () => {
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

export default ProceduresCyprs