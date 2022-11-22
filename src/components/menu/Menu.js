import React from 'react'
import './menu.css'
import {Link} from "react-router-dom";
import Dominica from '../../assests/images/Dominica.jpg'
import Nevis from '../../assests/images/Nevis.png'
import Antigua from '../../assests/images/Antigua.png'
import Saint from '../../assests/images/SaintLucia.png'
import Grenada from '../../assests/images/Grenada.png'
import Vanuatu from '../../assests/images/Vanuatu.png'
import Greece from '../../assests/images/Greece.jpg'
import Cyprus from '../../assests/images/Cyprus.png'

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
    <p><Link to='/programs/Dominica/about'><img src={Dominica} alt='Dominica' className='flag-image'/>Commonwealth of Dominica</Link></p>
    <p><Link to='/programs/Nevis/about'><img src={Nevis} alt='Dominica' className='flag-image'/>Saint Christopher and Nevis</Link></p>
    <p><Link to='/programs/Antigua/about'><img src={Antigua} alt='Dominica' className='flag-image'/>Antigua and Barbuda</Link></p>
    <p><Link to='/programs/Saint/about'><img src={Saint} alt='Dominica' className='flag-image'/>Saint Lucia</Link></p>
    <p><Link to='/programs/Grenada/about'><img src={Grenada} alt='Dominica' className='flag-image'/>Grenada</Link></p>
    <p><Link to='/programs/Vanuatu/about'><img src={Vanuatu} alt='Dominica' className='flag-image'/>Vanuatu</Link></p>
    </div>
    <div className='part2 col-5'>
    <div className='main-heading'>
    Residency by Investment
    </div>
    <p><Link to='/programs/Greece/about'><img src={Greece} alt='Dominica' className='flag-image'/>Greece</Link></p>
    <p><Link to='/programs/cyprs/about'><img src={Cyprus} alt='Dominica' className='flag-image'/>Cyprus</Link></p>
    </div>
    <div className='col-1'></div>
    </div>
    </div> 
    </>
  )
}
export default Menu