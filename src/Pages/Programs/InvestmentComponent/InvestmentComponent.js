import React from 'react'
import { Container } from "react-bootstrap";
import './InvestmentComponent.css'
const InvestmentComponent = (props) => {
  return (
      <Container className='mb-5'>
    <div className='InvestmentComponent'>
    <h2>{props.title}</h2>
    <span>{props.text}</span>
    <div className='row'>
    <div className='col-md-6 left-section'>
    {props.array[0] &&<p>{props.array[0]}</p>}
    {props.array[1] &&<p>{props.array[1]}</p>}
    {props.array[2] &&<p>{props.array[2]}</p>}
    </div>
    <div className='col-md-6 right-section'>
    {props.array[3] &&<p>{props.array[3]}</p>}
    {props.array[4] &&<p>{props.array[4]}</p>}
    {props.array[5]&&<p>{props.array[5]}</p>}
    </div>
    </div>
    </div>
    </Container>
  )
}

export default InvestmentComponent