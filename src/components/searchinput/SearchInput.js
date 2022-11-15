import React from 'react'
import './Search.css'
import { BsSearch } from "react-icons/bs";
const SearchInput = () => {
  return (
    <div className="search">
    <input type="text" placeholder="search..." />
    <BsSearch className="search-btn text-white" />
  </div>
  )
}

export default SearchInput