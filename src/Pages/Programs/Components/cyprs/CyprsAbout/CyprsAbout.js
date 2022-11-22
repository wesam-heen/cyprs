import React from 'react'
import AboutPrograms from '../../../AboutPrograms/AboutPrograms'
import Table from '../../../Table/Table'
const table=['Nicosia','Greek','9251 Square Km','Constitutional Republic','1.18 Million','Euro']
const CyprsAbout = (props) => {
  return (
    <>
    <AboutPrograms country='Cyprus' text='Cyprus is ideally located in the Eastern Mediterranean and is renowned for its rich 
    heritage and vibrant culture. Many leading companies operate in its attractive
     and fast-growing capital, Nicosia, and gives Cyprus the option to obtain 
    permanent residency quickly within a period of two months.' />
    <Table table={table}/>
    </>
  )
}

export default CyprsAbout