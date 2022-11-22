import React from "react";
import Frame from '../../../components/frame/Frame'
import Paragraph from '../../../components/Paragraph/Paragraph'
const AboutPrograms = (props) => {
  return( 
  <>
  {props.country&&<Frame text={`\xa0 \xa0 \xa0 \xa0 About ${props.country}`}/>}
  <Paragraph text={props.text}/>
  </>
  )
};

export default AboutPrograms;
