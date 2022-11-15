import React from 'react'
import './frame.css'
const Frame = (props) => {
  return (
    <div className='frame'>
    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="500" height="100" viewBox="0 0 679.391 100.847">
    <defs>
      <filter id="Path_237" x="0" y="0" width="679.391" height="100.847" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feFlood floodOpacity="0.161"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="Path_236" x="24.09" y="12" width="630.59" height="76.789" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-2"/>
        <feFlood floodOpacity="0.161"/>
        <feComposite operator="in" in2="blur-2"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Group_72" data-name="Group 72" transform="translate(-620.41 -669)">
      <g transform="matrix(1, 0, 0, 1, 620.41, 669)" filter="url(#Path_237)">
        <path id="Path_237-2" data-name="Path 237" d="M4910.669,773.517l-62.879-79.846H5503l-62.879,79.846Z" transform="translate(-4835.7 -686.17)" fill="none" stroke="#c6a270" strokeWidth="3"/>
      </g>
      <g id="Group_71" data-name="Group 71" transform="translate(-1 -5)">
        <g transform="matrix(1, 0, 0, 1, 621.41, 674)" filter="url(#Path_236)">
          <path id="Path_236-2" data-name="Path 236" d="M4906.579,752.46l-58.789-58.789h612.59L5401.59,752.46Z" transform="translate(-4814.7 -675.67)" fill="#c6a270"/>
        </g>
        <text id="Your_Vision_Our_Method" data-name="Your Vision, Our Method" transform="translate(960.5 729)" fill="#fff" fontSize="30" fontFamily="Sitka Heading" fontWeight="600" letterSpacing="0.1em"><tspan x="-193.247" y="0">{props.text}</tspan></text>
      </g>
    </g>
  </svg>
  

    </div>
  )
}

export default Frame