import React from 'react'
import './card.css'
const Card = (props) => {
  return (
    <div className="card">
    <div className="card-icon">{props.icon}</div>
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    {props.show===true && <a href='/#' className="btn btn-card">See More</a>}
     
    </div>
  )
}

export default Card