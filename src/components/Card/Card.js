import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'
const Card = (props) => {
  return (
    <div className="card">
    <div className="card-icon">{props.icon}</div>
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    {props.show===true && <Link to='/ourservices' className="btn btn-card" onClick={props.function}>See More</Link>}
     
    </div>
  )
}

export default Card