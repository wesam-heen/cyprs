import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (

    <div class="thank-you">
        <h2>Thank you</h2>
        <p>Your message was sent successfully</p>
        <p>We will get in touch with you shortly</p>
        <Link to="/">Homepage</Link>
    </div>
  )
}

export default ThankYou