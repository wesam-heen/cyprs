import React from 'react'
import './menu.css'
import {Link} from "react-router-dom";
const Menu = () => {
  return (
    <>
    <div className='menu'>
    <div className='row'>
    <div className='col-1'></div>
    <div className='part1 col-5'>
    <div className='main-heading'>
    Citizenship by Investment
    </div>
    <p>Commonwealth of Dominica</p>
    <p>Saint Christopher and Nevis </p>
    <p>Antigua and Barbuda</p>
    <p>Saint Lucia</p>
    <p>Grenada</p>
    <p>Vanuatu</p>
    </div>
    <div className='part2 col-5'>
    <div className='main-heading'>
    Citizenship by Investment
    </div>
    <p>Portugal</p>
    <p><Link to='/programs/cyprs'>Cyprus</Link></p>
    </div>
    <div className='col-1'></div>
    </div>
    </div> 
    </>
  )
}
export default Menu