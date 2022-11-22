import "./Search.css";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import {useEffect, useState } from "react";
const Country = [
  ["Commonwealth of Dominica", "/programs/Dominica/about"],
  ["Saint Christopher and Nevis", "/programs/Nevis/about"],
  ["Antigua and Barbuda", "/programs/Antigua/about"],
  ["SaintLucia", "/programs/Saint/about"],
  ["Grenada", "/programs/Grenada/about"],
  ["Vanuatu", "/programs/Vanuatu/about"],
  ["Greece", "/programs/Greece/about"],
  ["Cyprus", "/programs/cyprs/about"],
  ['Services','/ourservices'],
  ['Passport','/ourservices'],
  ['Citizenship','/ourservices'],
  ['Residency','/ourservices']
];


const SearchInput = (props) => {

  const [filterdCountry,setFilterdCountry]=useState([]);
  const [finalSearch,SetFinalSearch]=useState([])
  const SearchFunction=(e)=>{
    const viewProgram=document.querySelector('.view-programs-when-search');
    viewProgram.style.display='block';
    setFilterdCountry([])
    SetFinalSearch([])
    SetFinalSearch([...new Set(filterdCountry)])
  Country.forEach(country=>{
    e.target.value.length>0&&country[0].toLowerCase().includes(e.target.value.toLowerCase())&&setFilterdCountry([...filterdCountry,country]);
    e.target.value!=null?viewProgram.style.display='block':viewProgram.style.display='none'
  })
  const links=document.querySelectorAll('.nav-link');
  links.forEach(link=>link.classList.remove('active-class'))
  }


   return (
    <div className={props.className}>
      <input type="text" placeholder="search..." className="search-input" onKeyDown={SearchFunction} />
      <BsSearch className="search-btn text-white" />
      <div className="view-programs-when-search">
        <ul>
        {
          finalSearch.map(country=>{
            return(
              <li key={country[0]}><Link to={country[1]}>{country[0]}</Link></li>
            )
          })
        }
        </ul>
      </div>
    </div>
  );
};

export default SearchInput;
