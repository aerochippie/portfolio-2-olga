import React from 'react'
import './footer.css'
import { HiHeart } from 'react-icons/hi';
import { FaGithubAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className='footer'>
      <p> This webpage was made with  <HiHeart/>  by  <Link to='/home'>  <FaGithubAlt/>github/aerochippe </Link></p>
       </div>
  )
}
