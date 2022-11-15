import React from 'react'
import './Paragraph.css'
const Paragraph = (props) => {
  return (
    <div className='Paragraph'>
    {props.text}
    </div>
  )
}

export default Paragraph